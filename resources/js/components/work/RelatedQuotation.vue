<template>
  <div class="wrap-related-quotations wrap-component-table">
    <v-card class="mb-3" outlined>
      <v-card-title>
        <h4>RELATED QUOTATION</h4>
        <v-spacer></v-spacer>
        <v-btn color="primary" small @click="openQuotationsDialog()">
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
      </v-card-title>
      <v-divider></v-divider>
      <v-card-text>
        <v-simple-table>
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left">Number</th>
                <th class="text-center">Client</th>
                <th class="text-center">Project</th>
                <th class="text-center">Sub Project</th>
                <th class="text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="quotation in relatedQuotations" :key="quotation.id">
                <td>{{ quotation.number }}</td>
                <td class="text-center">{{ quotation.company }}</td>
                <td class="text-center">{{ quotation.project }}</td>
                <td class="text-center">{{ quotation.sub_project }}</td>
                <td class="d-flex justify-center">
                  <span class="d-block mr-1">
                    <v-btn
                      small
                      fab
                      icon
                      color="blue"
                      @click="downloadPdfFile(quotation.id, quotation.pdf.id)"
                      v-if="quotation.pdf !== null"
                    >
                      <v-icon>mdi-pdf-box</v-icon>
                    </v-btn>
                    <v-btn small fab icon color="gray" v-else>
                      <v-icon>mdi-pdf-box</v-icon>
                    </v-btn>
                  </span>
                  <span class="d-block">
                    <v-btn small fab icon color="red" @click="disconnectQuotations(quotation)">
                      <v-icon>mdi-close</v-icon>
                    </v-btn>
                  </span>
                </td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-card-text>
    </v-card>

    <v-dialog v-model="quotationsDialog" max-width="1024px">
      <v-card>
        <v-card-title>
          <h4>SELECT RELATED QUOTATION</h4>
          <v-spacer></v-spacer>
          <v-btn icon fab @click="closeQuotationsDialog()">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>
        <v-divider></v-divider>
        <v-card-text>
          <v-data-table
            v-model="selected"
            :headers="headers"
            :items="quotations"
            item-key="id"
            show-select
            :disable-sort="true"
          ></v-data-table>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" @click="connectQuotations()">Connect</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import Axios from "axios";
import { mapState } from "vuex";

export default {
  props: ["company_id", "sub_project_id"],
  data() {
    return {
      quotationsDialog: false,
      relatedQuotations: [],
      quotations: [],
      selected: [],
      headers: [
        { text: "QT Number", value: "number" },
        { text: "Client", value: "company", align: "center" },
        { text: "Project", value: "project", align: "center" },
        { text: "Sub Project", value: "sub_project", align: "center" },
        { text: "Status", value: "status", align: "center" }
      ]
    };
  },

  computed: {
    ...mapState("work", ["workId"])
  },

  methods: {
    initialize() {
      Axios.get("/api/works/" + this.workId + "/related-quotations").then(
        response => {
          this.relatedQuotations = response.data.relatedQuotations;
        }
      );
    },

    openQuotationsDialog() {
      this.quotationsDialog = true;
      Axios.get(
        "/api/works/" +
          this.workId +
          "/company/" +
          this.company_id +
          "/sub-project/" +
          this.sub_project_id +
          "/search-quotations"
      ).then(response => {
        console.log(response.data);
        this.quotations = response.data.quotations;
      });
    },

    closeQuotationsDialog() {
      this.quotationsDialog = false;
      this.selected = [];
    },

    connectQuotations() {
      Axios.put(
        "/api/works/" + this.workId + "/connect-quotations",
        this.selected
      ).then(response => {
        this.selected.forEach(element => {
          this.relatedQuotations.push(element);
          this.$store.dispatch("SHOW_GLOBAL_SNACKBAR", {
            text: response.data.message
          });
          this.closeQuotationsDialog();
        });
      });
    },

    disconnectQuotations(quotation) {
      Axios.put(
        "/api/works/" + this.workId + "/disconnect-quotations",
        quotation
      ).then(response => {
        const index = this.relatedQuotations.indexOf(quotation);
        this.relatedQuotations.splice(index, 1);
        this.$store.dispatch("SHOW_GLOBAL_SNACKBAR", {
          text: response.data.message
        });
      });
    },

    forceFileDownload(response) {
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", response.headers.filename); //or any other extension
      document.body.appendChild(link);
      link.click();
    },

    downloadPdfFile(quotationId, pdfId) {
      Axios({
        method: "get",
        url: "/api/quotations/" + quotationId + "/pdfs/" + pdfId + "/download",
        responseType: "arraybuffer"
      })
        .then(response => {
          this.forceFileDownload(response);
        })
        .catch(error => {});
    },

    resetRelatedQuotation() {
      this.quotations = [];
      this.relatedQuotations = [];
    }
  }
};
</script>