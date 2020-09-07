<template>
  <v-card outlined class="mb-3">
    <v-card-title class="section-title">
      <h4>GENERATED PDF FILES</h4>
      <v-spacer></v-spacer>
      <v-btn
        @click="updatePdf()"
        depressed
        v-if="currentProcess === 'Draft'"
        color="orange"
        outlined
        dark
      >
        <v-icon left>mdi-update</v-icon>Update PDF
      </v-btn>
      <v-btn
        @click="generatePdf()"
        depressed
        v-else-if="currentProcess === 'CANCELED' || currentProcess === 'DENIED' || currentProcess === 'REJECTED' || currentProcess === null"
        color="primary"
        outlined
      >
        <v-icon left>mdi-update</v-icon>Generate PDF
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
            <tr v-if="pdfs && pdfs.length === 0">
              <td colspan="6" class="text-center">No Pdf file created</td>
            </tr>
            <tr v-for="(pdf, index) in pdfs" :key="index" v-else>
              <td class="text-center">{{ pdf.version }}</td>
              <td class="text-center">{{ $moment(pdf.created_at).format('YYYY-MM-DD hh:mm') }}</td>
              <td class="text-center">{{ pdf.creator_name }}</td>
              <td class="text-center">
                <v-btn
                  @click.prevent="downloadPdfFile(pdf.id, storage)"
                  color="red darken-1"
                  dark
                  text
                  icon
                >
                  <v-icon>mdi-printer</v-icon>
                </v-btn>
              </td>
              <td class="text-center">{{ pdf.process }}</td>
              <td class="text-center">
                <div v-if="pdf.process === 'Draft'">
                  <span class="d-block">
                    <v-btn
                      color="primary"
                      dark
                      small
                      depressed
                      @click="submitPdf(pdf)"
                      :disabled="isSubmitButtonDisabled"
                    >Submit</v-btn>
                  </span>
                </div>
                <div v-else-if="pdf.process === 'SUBMITTED'" class="d-flex justify-center">
                  <span class="d-block mr-2">
                    <v-btn
                      color="primary"
                      dark
                      small
                      depressed
                      @click="approvePdf(pdf)"
                      :disabled="isApproveButtonDisabled"
                    >Approve</v-btn>
                  </span>
                  <span class="d-block">
                    <v-btn
                      color="red"
                      dark
                      small
                      depressed
                      @click="rejectPdf(pdf)"
                      :disabled="isApproveButtonDisabled"
                    >Reject</v-btn>
                  </span>
                </div>
                <div v-else-if="pdf.process === 'APPROVED'" class="d-flex justify-center">
                  <span class="d-block mr-2">
                    <v-btn
                      color="green"
                      dark
                      small
                      depressed
                      @click="sendPdf(pdf)"
                      :disabled="isSubmitButtonDisabled"
                    >Send</v-btn>
                  </span>
                  <span class="d-block">
                    <v-btn
                      color="red"
                      dark
                      small
                      depressed
                      @click="cancelPdf(pdf)"
                      :disabled="isSubmitButtonDisabled"
                    >Cancel</v-btn>
                  </span>
                </div>
                <div v-else-if="pdf.process === 'SENT'" class="d-flex justify-center">
                  <span class="d-block mr-2">
                    <v-btn
                      color="green"
                      dark
                      small
                      depressed
                      @click="acceptedPdf(pdf)"
                      :disabled="isSubmitButtonDisabled"
                    >ACCEPTED</v-btn>
                  </span>
                  <span class="d-block mr-2">
                    <v-btn
                      color="pink"
                      dark
                      small
                      depressed
                      @click="deniedPdf(pdf)"
                      :disabled="isSubmitButtonDisabled"
                    >DENIED</v-btn>
                  </span>
                </div>
                <div v-else-if="pdf.process === 'ACCEPTED'" class="d-flex justify-center">
                  <span class="d-block mr-2">
                    <v-btn
                      color="green"
                      dark
                      small
                      depressed
                      @click="completePdf(pdf)"
                      :disabled="isSubmitButtonDisabled"
                    >COMPLETE</v-btn>
                  </span>
                  <span class="d-block mr-2">
                    <v-btn
                      color="pink"
                      dark
                      small
                      depressed
                      @click="cancelPdf(pdf)"
                      :disabled="isSubmitButtonDisabled"
                    >CANCEL</v-btn>
                  </span>
                </div>
              </td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-card-text>
  </v-card>
</template>

<script>
import { mapState, mapActions, mapMutations } from "vuex";
import Axios from "axios";
export default {
  props: [
    "model",
    "lowerCaseModelName",
    "option_model",
    "model_id",
    "storage",
    "attachment_storage",
    "permissions",
    "editPermission",
    "approvePermission",
    "currentMode",
    "formType",
    "formFolder"
  ],
  data: () => ({
    dialog: false,
    errors: [],
    pdfs: [],
    pdf: {
      id: "",
      name: "",
      origin_name: "",
      version: "",
      extension: "",
      process: "",
      user_id: "",
      creator_name: "",
      pdfable_id: "",
      pdfable_type: "",
      created_at: "",
      updated_at: ""
    },
    reset_pdf: {
      id: "",
      name: "",
      origin_name: "",
      version: "",
      extension: "",
      process: "",
      user_id: "",
      creator_name: "",
      pdfable_id: "",
      pdfable_type: "",
      created_at: "",
      updated_at: ""
    }
  }),

  computed: {
    currentProcess() {
      if (typeof this.pdfs !== "undefined" && this.pdfs.length > 0) {
        return this.pdfs[this.pdfs.length - 1].process;
      } else {
        return null;
      }
    },

    isApproveButtonDisabled() {
      if (
        this.permissions.includes(this.approvePermission) &&
        this.currentMode === "view"
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
    }
  },

  methods: {
    ...mapMutations("quotation", ["SET_QUOTATION_STATUS"]),

    ...mapMutations("purchase_order", ["SET_PURCHASE_ORDER_STATUS"]),

    initPdf() {
      Axios.get(
        "/api/pdfs/model/" + this.model + "/model_id/" + this.model_id
      ).then(response => {
        this.pdfs = response.data.data;
      });
    },

    generatePdf() {
      Axios.post("/api/pdfs/generate", {
        model: this.model,
        option_model: this.option_model,
        model_id: this.model_id,
        formFolder: this.formFolder,
        formType: this.formType,
        storage: this.storage,
        attachment_storage: this.attachment_storage
      })
        .then(response => {
          this.pdfs.push(response.data.data);
        })
        .catch(error => {
          console.log(error);
        });
    },

    updatePdf(item) {
      const index = this.pdfs.indexOf(item);
      Axios.put("/api/pdfs/update", {
        model: this.model,
        model_id: this.model_id,
        option_model: this.option_model,
        formFolder: this.formFolder,
        formType: this.formType,
        storage: this.storage,
        attachment_storage: this.attachment_storage
      })
        .then(response => {
          this.$store.dispatch("SHOW_GLOBAL_SNACKBAR", {
            text: response.data.message
          });
        })
        .catch(error => {});
    },

    submitPdf(item) {
      const index = this.pdfs.indexOf(item);
      Axios.put("/api/pdfs/" + item.id + "/submit", {
        model: this.model,
        model_id: this.model_id,
        lowerCaseModelName: this.lowerCaseModelName,
        permissionType: this.permissionType,
        approvePermission: this.approvePermission
      })
        .then(response => {
          this.pdfs[index].process = response.data.process;
          this.model === "Quotation"
            ? this.SET_QUOTATION_STATUS(response.data.status)
            : this.SET_PURCHASE_ORDER_STATUS(response.data.status);
          this.$emit("signal-changeItemStatusToList", response.data.status);
          this.$store.dispatch("SHOW_GLOBAL_SNACKBAR", {
            text: response.data.message
          });
        })
        .catch(error => {});
    },

    approvePdf(item) {
      const index = this.pdfs.indexOf(item);
      Axios.put("/api/pdfs/" + item.id + "/approve", {
        pdf: item,
        model: this.model,
        model_id: this.model_id,
        option_model: this.option_model,
        formFolder: this.formFolder,
        formType: this.formType,
        storage: this.storage,
        attachment_storage: this.attachment_storage,
        lowerCaseModelName: this.lowerCaseModelName
      }).then(response => {
        this.pdfs[index].process = response.data.process;
        this.model === "Quotation"
          ? this.SET_QUOTATION_STATUS(response.data.status)
          : this.SET_PURCHASE_ORDER_STATUS(response.data.status);
        this.$emit("signal-changeItemStatusToList", response.data.status);
        this.$store.dispatch("SHOW_GLOBAL_SNACKBAR", {
          text: response.data.message
        });
      });
    },

    rejectPdf(item) {
      const index = this.pdfs.indexOf(item);
      Axios.put("/api/pdfs/" + item.id + "/reject", {
        pdf: item,
        model: this.model,
        model_id: this.model_id,
        option_model: this.option_model,
        formFolder: this.formFolder,
        formType: this.formType,
        storage: this.storage,
        attachment_storage: this.attachment_storage,
        lowerCaseModelName: this.lowerCaseModelName
      }).then(response => {
        this.pdfs[index].process = response.data.process;
        this.model === "Quotation"
          ? this.SET_QUOTATION_STATUS(response.data.status)
          : this.SET_PURCHASE_ORDER_STATUS(response.data.status);
        this.$emit("signal-changeItemStatusToList", response.data.status);
        this.$store.dispatch("SHOW_GLOBAL_SNACKBAR", {
          text: response.data.message
        });
      });
    },

    sendPdf(item) {
      const index = this.pdfs.indexOf(item);
      Axios.put("/api/pdfs/" + item.id + "/send", {
        pdf: item,
        model: this.model,
        model_id: this.model_id,
        storage: this.storage,
        attachment_storage: this.attachment_storage,
        lowerCaseModelName: this.lowerCaseModelName
      }).then(response => {
        this.pdfs[index].process = response.data.process;
        this.model === "Quotation"
          ? this.SET_QUOTATION_STATUS(response.data.status)
          : this.SET_PURCHASE_ORDER_STATUS(response.data.status);
        this.$emit("signal-changeItemStatusToList", response.data.status);
        this.$store.dispatch("SHOW_GLOBAL_SNACKBAR", {
          text: response.data.message
        });
      });
    },

    acceptedPdf(item) {
      const index = this.pdfs.indexOf(item);
      Axios.put("/api/pdfs/" + item.id + "/accepted", {
        pdf: item,
        model: this.model,
        model_id: this.model_id,
        storage: this.storage,
        attachment_storage: this.attachment_storage,
        lowerCaseModelName: this.lowerCaseModelName
      }).then(response => {
        this.pdfs[index].process = response.data.process;
        this.model === "Quotation"
          ? this.SET_QUOTATION_STATUS(response.data.status)
          : this.SET_PURCHASE_ORDER_STATUS(response.data.status);
        this.$emit("signal-changeItemStatusToList", response.data.status);
        this.$store.dispatch("SHOW_GLOBAL_SNACKBAR", {
          text: response.data.message
        });
      });
    },

    deniedPdf(item) {
      const index = this.pdfs.indexOf(item);
      Axios.put("/api/pdfs/" + item.id + "/denied", {
        pdf: item,
        model: this.model,
        option_model: this.option_model,
        model_id: this.model_id,
        formFolder: this.formFolder,
        formType: this.formType,
        storage: this.storage,
        attachment_storage: this.attachment_storage,
        lowerCaseModelName: this.lowerCaseModelName
      }).then(response => {
        this.pdfs[index].process = response.data.process;
        this.model === "Quotation"
          ? this.SET_QUOTATION_STATUS(response.data.status)
          : this.SET_PURCHASE_ORDER_STATUS(response.data.status);
        this.$emit("signal-changeItemStatusToList", response.data.status);
        this.$store.dispatch("SHOW_GLOBAL_SNACKBAR", {
          text: response.data.message
        });
      });
    },

    completePdf(item) {
      const index = this.pdfs.indexOf(item);
      Axios.put("/api/pdfs/" + item.id + "/complete", {
        pdf: item,
        model: this.model,
        model_id: this.model_id,
        storage: this.storage,
        attachment_storage: this.attachment_storage,
        lowerCaseModelName: this.lowerCaseModelName
      }).then(response => {
        this.pdfs[index].process = response.data.process;
        this.model === "Quotation"
          ? this.SET_QUOTATION_STATUS(response.data.status)
          : this.SET_PURCHASE_ORDER_STATUS(response.data.status);
        this.$emit("signal-changeItemStatusToList", response.data.status);
        this.$store.dispatch("SHOW_GLOBAL_SNACKBAR", {
          text: response.data.message
        });
      });
    },

    cancelPdf(item) {
      const index = this.pdfs.indexOf(item);
      Axios.put("/api/pdfs/" + item.id + "/cancel", {
        pdf: item,
        model: this.model,
        option_model: this.option_model,
        model_id: this.model_id,
        formFolder: this.formFolder,
        formType: this.formType,
        storage: this.storage,
        attachment_storage: this.attachment_storage,
        lowerCaseModelName: this.lowerCaseModelName
      }).then(response => {
        this.pdfs[index].process = response.data.process;
        this.model === "Quotation"
          ? this.SET_QUOTATION_STATUS(response.data.status)
          : this.SET_PURCHASE_ORDER_STATUS(response.data.status);
        this.$emit("signal-changeItemStatusToList", response.data.status);
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

    downloadPdfFile(pdfId, storage) {
      Axios({
        method: "get",
        url: "/api/pdfs/" + pdfId + "/download/storage/" + storage,
        responseType: "arraybuffer"
      })
        .then(response => {
          this.forceFileDownload(response);
        })
        .catch(error => {});
    },

    reset() {
      this.pdfs = [];
      this.errors = [];
      this.pdf = Object.assign({}, this.reset_pdf);
    },

    save() {},

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