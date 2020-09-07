<template>
  <v-card outlined class="mb-3">
    <v-card-title class="section-title">
      <h4>GENERATED PDF DOCUMENTS</h4>
      <v-spacer></v-spacer>
      <v-btn
        @click="updatePdfDocument()"
        depressed
        v-if="currentProcess === 'Draft'"
        color="orange"
        outlined
        dark
      >
        <v-icon left>mdi-update</v-icon>Update PDF Document
      </v-btn>
      <v-btn
        @click="generatePdfDocument()"
        depressed
        v-else-if="
          currentProcess === 'CANCELED' || 
          currentProcess === 'DENIED' || 
          currentProcess === 'REJECTED' || 
          currentProcess === null"
        color="primary"
        outlined
      >
        <v-icon left>mdi-update</v-icon>Generate PDF Document
      </v-btn>
      <v-btn depressed v-else>Disabled</v-btn>
    </v-card-title>
    <v-divider></v-divider>
    <v-card-text class="wrap-component-table">
      <v-simple-table class="qt-table">
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-center">VER.</th>
              <th class="text-center">CREATED AT</th>
              <th class="text-center">CREATED BY</th>
              <th class="text-center">DOWNLOAD</th>
              <th class="text-center">STATUS</th>
              <th class="text-center">ACTION</th>
            </tr>
          </thead>
          <tbody>
            <tr v-if="pdfDocuments && pdfDocuments.length === 0">
              <td colspan="6" class="text-center">No Pdf Document file created</td>
            </tr>
            <tr v-for="(pdfDocument, index) in pdfDocuments" :key="index" v-else>
              <td class="text-center">{{ pdfDocument.version }}</td>
              <td
                class="text-center"
              >{{ $moment(pdfDocument.created_at).format('YYYY-MM-DD hh:mm') }}</td>
              <td class="text-center">{{ pdfDocument.creator_name }}</td>
              <td class="text-center">
                <v-btn
                  @click.prevent="downloadDocumentFile(pdfDocument.id)"
                  color="red darken-1"
                  dark
                  text
                  icon
                >
                  <v-icon>mdi-printer</v-icon>
                </v-btn>
              </td>
              <td class="text-center">{{ pdfDocument.process }}</td>
              <td class="text-center">
                <div v-if="pdfDocument.process === 'Draft'">
                  <span class="d-block">
                    <v-btn
                      color="primary"
                      dark
                      small
                      depressed
                      @click="changeProcess(pdfDocument, 'submit', false, 'SUBMITTED', 'SUBMITTED')"
                      :disabled="isSubmitButtonDisabled"
                    >Submit</v-btn>
                  </span>
                </div>
                <div v-else-if="pdfDocument.process === 'SUBMITTED'" class="d-flex justify-center">
                  <span class="d-block mr-2">
                    <v-btn
                      color="primary"
                      dark
                      small
                      depressed
                      @click="changeProcess(pdfDocument, 'approve', true, 'APPROVED', 'APPROVED')"
                      :disabled="isApproveButtonDisabled"
                    >Approve</v-btn>
                  </span>
                  <span class="d-block">
                    <v-btn
                      color="red"
                      dark
                      small
                      depressed
                      @click="changeProcess(pdfDocument, 'reject', true, 'REJECTED', 'OPENED')"
                      :disabled="isApproveButtonDisabled"
                    >Reject</v-btn>
                  </span>
                </div>
                <div v-else-if="pdfDocument.process === 'APPROVED'" class="d-flex justify-center">
                  <span class="d-block mr-2">
                    <v-btn
                      color="green"
                      dark
                      small
                      depressed
                      @click="changeProcess(pdfDocument, 'send', false, 'SENT', 'SENT')"
                      :disabled="isSubmitButtonDisabled"
                    >Send</v-btn>
                  </span>
                  <span class="d-block">
                    <v-btn
                      color="red"
                      dark
                      small
                      depressed
                      @click="changeProcess(pdfDocument, 'cancel', true, 'CANCELED', 'OPENED')"
                      :disabled="isSubmitButtonDisabled"
                    >Cancel</v-btn>
                  </span>
                </div>
                <div v-else-if="pdfDocument.process === 'SENT'" class="d-flex justify-center">
                  <span class="d-block mr-2">
                    <v-btn
                      color="green"
                      dark
                      small
                      depressed
                      @click="changeProcess(pdfDocument, 'accept', false, 'ACCEPTED', 'ACCEPTED')"
                      :disabled="isSubmitButtonDisabled"
                    >ACCEPTED</v-btn>
                  </span>
                  <span class="d-block mr-2">
                    <v-btn
                      color="pink"
                      dark
                      small
                      depressed
                      @click="changeProcess(pdfDocument, 'deny', true, 'DENIED', 'OPENED')"
                      :disabled="isSubmitButtonDisabled"
                    >DENIED</v-btn>
                  </span>
                </div>
                <div v-else-if="pdfDocument.process === 'ACCEPTED'" class="d-flex justify-center">
                  <span class="d-block mr-2">
                    <v-btn
                      color="green"
                      dark
                      small
                      depressed
                      @click="changeProcess(pdfDocument, 'complete', false, 'COMPLETED', 'COMPLETED')"
                      :disabled="isSubmitButtonDisabled"
                    >COMPLETE</v-btn>
                  </span>
                  <span class="d-block mr-2">
                    <v-btn
                      color="pink"
                      dark
                      small
                      depressed
                      @click="changeProcess(pdfDocument, 'cancel', true, 'CANCELED', 'OPENED')"
                      :disabled="isSubmitButtonDisabled"
                    >CANCEL</v-btn>
                  </span>
                </div>
              </td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
      {{ exchangeRate }} {{ totalPrice }}
    </v-card-text>
  </v-card>
</template>

<script>
import { mapState, mapActions, mapMutations } from "vuex";
import Axios from "axios";
export default {
  props: [
    "permissions",
    "editPermission",
    "approvePermission",
    "currentMode",
    "formType",
    "formFolder",
    "exchangeRate",
    "totalPrice"
  ],
  data: () => ({
    dialog: false,
    errors: [],
    pdfDocuments: [],

    pdfDocument: {
      id: null,
      name: null,
      origin_name: null,
      version: null,
      extension: null,
      process: null,
      user_id: null,
      creator_name: null,
      invoice_id: null,
      created_at: null,
      updated_at: null
    },
    resetPdfDocument: {
      id: null,
      name: null,
      origin_name: null,
      version: null,
      extension: null,
      process: null,
      user_id: null,
      creator_name: null,
      invoice_id: null,
      created_at: null,
      updated_at: null
    }
  }),

  computed: {
    currentProcess() {
      if (
        typeof this.pdfDocuments !== "undefined" &&
        this.pdfDocuments.length > 0
      ) {
        return this.pdfDocuments[this.pdfDocuments.length - 1].process;
      } else {
        return null;
      }
    },

    isApproveButtonDisabled() {
      if (
        (this.currentMode === "view" &&
          this.permissions.includes(this.approvePermission)) ||
        this.exchangeRate * this.totalPrice < 500000
      ) {
        return false;
      } else {
        return true;
      }
    },

    isSubmitButtonDisabled() {
      if (
        this.permissions.includes(this.editPermission) &&
        this.currentMode === "view"
      ) {
        return false;
      } else {
        return true;
      }
    },

    isEditButtonDisabled() {
      if (this.permissions.includes(this.editPermission)) {
        return false;
      } else {
        return true;
      }
    },

    ...mapState("invoice", ["invoiceId"])
  },

  methods: {
    initialize() {
      Axios.get("/api/invoices/" + this.invoiceId + "/pdf-documents").then(
        response => {
          console.log(response.data);
          this.pdfDocuments = response.data.pdfDocuments;
        }
      );
    },

    generatePdfDocument() {
      Axios.post("/api/invoices/" + this.invoiceId + "/pdf-documents")
        .then(response => {
          this.pdfDocuments.push(response.data.pdfDocument);
          this.$store.dispatch("SHOW_GLOBAL_SNACKBAR", {
            text: response.data.message
          });
          console.log("PDF Items =>", this.pdfDocuments);
        })
        .catch(error => {
          console.log(error);
        });
    },

    updatePdfDocument(item) {
      const index = this.pdfDocuments.indexOf(item);
      Axios.put("/api/invoices/" + this.invoiceId + "/pdf-documents/")
        .then(response => {
          this.$store.dispatch("SHOW_GLOBAL_SNACKBAR", {
            text: response.data.message
          });
        })
        .catch(error => {});
    },

    changeProcess(item, action, overwrite, process, status) {
      const index = this.pdfDocuments.indexOf(item);
      Axios.put(
        "/api/invoices/" +
          this.invoiceId +
          "/pdf-documents/" +
          item.id +
          "/change-status",
        {
          action: action,
          overwrite: overwrite,
          process: process,
          status: status
        }
      )
        .then(response => {
          console.log(response.data);
          this.pdfDocuments[index].process = response.data.process;
          this.$store.dispatch("SHOW_GLOBAL_SNACKBAR", {
            text: response.data.message
          });
        })
        .catch(error => {
          this.$store.dispatch("SHOW_GLOBAL_SNACKBAR", {
            text: error.response.data.message,
            color: "red"
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

    downloadDocumentFile(pdfDocumentId) {
      Axios({
        method: "get",
        url:
          "/api/invoices/" +
          this.invoiceId +
          "/pdf-documents/" +
          pdfDocumentId +
          "/download",
        responseType: "arraybuffer"
      })
        .then(response => {
          this.forceFileDownload(response);
        })
        .catch(error => {
          console.log(error);
          this.$store.dispatch("SHOW_GLOBAL_SNACKBAR", {
            text: error.response.data.message,
            color: "red"
          });
        });
    },

    reset() {
      this.pdfDocuments = [];
      this.errors = [];
      this.pdfDocument = Object.assign({}, this.resetPdfDocument);
    },

    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    }
  }
};
</script>