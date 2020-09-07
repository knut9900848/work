<template>
  <div class="wrap-invoice">
    <v-container fluid>
      <v-row>
        <v-col cols="12" md="7">
          <v-card class="mb-3" outlined>
            <v-card-title>
              <h4>INFORMATION</h4>
              <v-spacer></v-spacer>
              <v-btn
                color="primary"
                @click="saveInvoice()"
                v-if="invoiceMode === 'create'"
                :disabled="isEditButtonDisabled"
              >Save</v-btn>
              <v-btn
                color="primary"
                @click="editInvoice()"
                v-if="invoiceMode === 'view'"
                :disabled="isEditButtonDisabled"
              >Edit</v-btn>
              <v-btn
                color="pink"
                dark
                @click="updateInvoice()"
                class="mr-2"
                v-if="invoiceMode ==='edit'"
                :disabled="isEditButtonDisabled"
              >Update</v-btn>
              <v-btn
                color="primary"
                @click="cancelInvoice()"
                v-if="invoiceMode ==='edit'"
                :disabled="isEditButtonDisabled"
              >Cancel</v-btn>
            </v-card-title>
            <v-divider></v-divider>
            <v-card-text>
              <v-container fluid>
                <v-row>
                  <!-- Invoice Number -->
                  <v-col cols="12" md="6">
                    <v-text-field
                      v-model="invoice.number"
                      label="Number"
                      filled
                      rounded
                      prepend-inner-icon="mdi-format-list-numbered"
                      :disabled="isFieldDisabled"
                      :error-messages="errors['invoice.number']"
                    ></v-text-field>
                  </v-col>

                  <!-- PO Received On -->
                  <v-col cols="12" md="6">
                    <v-menu
                      v-model="dateCalendar"
                      :close-on-content-click="false"
                      :nudge-right="40"
                      transition="scale-transition"
                      offset-y
                      min-width="290px"
                    >
                      <template v-slot:activator="{ on }">
                        <v-text-field
                          v-model="invoice.date"
                          label="Invoiced Date"
                          readonly
                          v-on="on"
                          filled
                          rounded
                          prepend-inner-icon="mdi-calendar-check"
                          :error-messages="errors['invoice.date']"
                          :disabled="isFieldDisabled"
                        ></v-text-field>
                      </template>
                      <v-date-picker v-model="invoice.date" @input="dateCalendar = false"></v-date-picker>
                    </v-menu>
                  </v-col>

                  <!-- Requestor -->
                  <v-col class="d-flex" cols="12" md="6">
                    <v-select
                      v-model="invoice.requestor_id"
                      item-text="name"
                      item-value="id"
                      :items="requestors"
                      label="Requestor"
                      filled
                      rounded
                      prepend-inner-icon="mdi-account-star"
                      :disabled="isFieldDisabled"
                      :error-messages="errors['invoice.requestor_id']"
                      clearable
                    >
                      <template
                        slot="selection"
                        slot-scope="requestor"
                      >{{ requestor.item.name }} - {{ requestor.item.email }}</template>
                      <template
                        slot="item"
                        slot-scope="requestor"
                      >{{ requestor.item.name }} - {{ requestor.item.email }}</template>
                    </v-select>
                  </v-col>

                  <!-- Originator -->
                  <v-col class="d-flex" cols="12" md="6">
                    <v-select
                      v-model="invoice.originator_id"
                      item-text="name"
                      item-value="id"
                      :items="users"
                      label="Originator"
                      filled
                      rounded
                      prepend-inner-icon="mdi-account-edit"
                      :disabled="isFieldDisabled"
                      :error-messages="errors['invoice.originator_id']"
                      clearable
                    ></v-select>
                  </v-col>

                  <!-- Deliver To -->
                  <v-col cols="12" md="6">
                    <v-text-field
                      v-model="invoice.deliver_to"
                      label="Deliver To"
                      filled
                      rounded
                      prepend-inner-icon="mdi-map-marker"
                      :error-messages="errors['invoice.deliver_to']"
                      :disabled="isFieldDisabled"
                    ></v-text-field>
                  </v-col>

                  <!-- Payment Term -->
                  <v-col cols="12" md="6">
                    <v-text-field
                      v-model="invoice.payment_term"
                      label="Payment Term"
                      filled
                      rounded
                      prepend-inner-icon="mdi-timer-sand"
                      :error-messages="errors['invoice.payment_term']"
                      :disabled="isFieldDisabled"
                      type="number"
                    ></v-text-field>
                  </v-col>

                  <!-- Payment Due Date -->
                  <v-col cols="12" md="6">
                    <v-text-field
                      v-model="payment_due_date"
                      label="Payment Due Date"
                      filled
                      rounded
                      prepend-inner-icon="mdi-timer-off-outline"
                      :error-messages="errors['invoice.payment_due_date']"
                      disabled
                    ></v-text-field>
                  </v-col>

                  <!-- Bank -->
                  <v-col cols="12" md="6">
                    <v-select
                      v-model="invoice.bank_id"
                      :items="banks"
                      item-value="id"
                      item-text="name"
                      label="Bank Account"
                      filled
                      rounded
                      prepend-inner-icon="mdi-bank"
                      :error-messages="errors['invoice.bank_id']"
                      :disabled="isFieldDisabled"
                    ></v-select>
                  </v-col>

                  <!-- Managers -->
                  <v-col cols="12" md="6">
                    <v-select
                      v-model="manager"
                      item-text="name"
                      item-value="id"
                      :items="managers"
                      label="Manager"
                      filled
                      rounded
                      prepend-inner-icon="mdi-account-cowboy-hat"
                      clearable
                      :disabled="isFieldDisabled"
                      :error-messages="errors.manager"
                      return-object
                    ></v-select>
                  </v-col>

                  <!-- Project Number -->
                  <v-col cols="12" md="6">
                    <v-text-field
                      v-model="invoice.project_number"
                      label="Project Number"
                      filled
                      rounded
                      prepend-inner-icon="mdi-numeric"
                      :error-messages="errors['invoice.project_number']"
                      :disabled="isFieldDisabled"
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>
          </v-card>

          <InvoiceLine
            :units="units"
            :currentStatus="workStatus"
            :currentMode="invoiceMode"
            :permissions="permissions"
            :workId="workId"
            editPermission="edit-work"
            approvePermission="approve-work"
            :shipping_fee="invoice.shipping_fee"
            ref="invoiceLineComponent"
          ></InvoiceLine>
        </v-col>

        <v-col cols="12" md="5">
          <InvoicePdfDocument
            ref="pdfDocumentComponent"
            :permissions="permissions"
            :editPermission="editPermission"
            :approvePermission="approvePermission"
            :currentMode="invoiceMode"
            :exchangeRate="exchangeRate"
            :emergency="invoice.is_emergency"
            :totalPrice="invoice.total_price"
          ></InvoicePdfDocument>

          <InvoiceReminder
            v-show="invoiceId"
            :people="users"
            ref="invoiceIesReminderComponent"
            title="IES STAFF REMINDERS"
            initUrl="init-ies-reminder"
            updateUrl="update-ies-reminder"
            :number="invoice.number"
          ></InvoiceReminder>

          <InvoiceReminder
            v-show="invoiceId"
            :people="requestors"
            ref="invoiceClientReminderComponent"
            title="CLIENT REMINDERS"
            initUrl="init-client-reminder"
            updateUrl="update-client-reminder"
            :number="invoice.number"
          ></InvoiceReminder>

          <!-- file -->
          <keep-alive>
            <File
              v-show="invoiceId"
              ref="filesComponent"
              :model_id="invoiceId"
              model="Invoice"
              storage="invoice_files"
              title="FILE UPLOAD"
              :currentStatus="workStatus"
              :currentMode="invoiceMode"
              :permissions="permissions"
            ></File>
          </keep-alive>

          <!-- comment -->
          <keep-alive>
            <Comment
              v-show="invoiceId"
              ref="commentsComponent"
              model="Invoice"
              :model_id="invoiceId"
            ></Comment>
          </keep-alive>
        </v-col>
      </v-row>
    </v-container>

    <v-dialog v-model="optionDialog" max-width="500px">
      <InvoiceOption ref="invoiceOptionComponent" @signal-closeOptionDialog="closeOptionDialog"></InvoiceOption>
    </v-dialog>
  </div>
</template>

<script>
import Axios from "axios";
import { getSubProjects } from "../../mixins/subProjects";
import { getPeople } from "../../mixins/getPeople";
import { mapState, mapMutations, mapActions, mapGetters } from "vuex";
import moment from "moment";

import File from "../common/File";
import Comment from "../common/Comment";
import Attachment from "../common/Attachment";
import InvoiceOption from "../../components/work/InvoiceOption";
import InvoiceLine from "../../components/work/InvoiceLine";
import InvoiceReminder from "../../components/work/InvoiceReminder";
import InvoicePdfDocument from "../../components/work/InvoicePdfDocument";

export default {
  components: {
    File,
    Comment,
    InvoiceOption,
    InvoiceLine,
    InvoiceReminder,
    InvoicePdfDocument
  },
  props: ["companies", "currencies", "units", "banks", "users"],
  data() {
    return {
      errors: [],
      dateCalendar: false,
      requestors: [],
      optionDialog: false,
      managers: [],
      manager: null,

      editPermission: "edit-invoice",
      approvePermission: "approve-invoice",

      exchangeRate: 0,

      invoice: {
        id: null,
        number: null,
        date: null,
        payment_due_date: null,
        payment_term: null,
        deliver_to: null,
        total_price: 0,
        tax: 0,
        discount: 0,
        grand_total: 0,
        shipping_fee: 0,
        requestor_id: null,
        originator_id: null,
        work_id: null,
        bank_id: null,
        project_number: null
      },
      defaultInvoice: {
        id: null,
        number: null,
        date: null,
        payment_due_date: null,
        payment_term: null,
        deliver_to: null,
        total_price: 0,
        tax: 0,
        discount: 0,
        grand_total: 0,
        shipping_fee: 0,
        requestor_id: null,
        originator_id: null,
        work_id: null,
        bank_id: null,
        project_number: null
      }
    };
  },

  computed: {
    isFieldDisabled() {
      if (this.invoiceMode === "view") return true;
      return false;
    },

    isEditButtonDisabled() {
      if (this.workStatus === "OPEN" && this.permissions.includes("edit-work"))
        return false;
      return true;
    },

    payment_due_date() {
      if (this.invoice.payment_term && this.invoice.date) {
        let invoicedDate = moment(this.invoice.date);
        let dueDate = invoicedDate
          .add(this.invoice.payment_term, "days")
          .format("YYYY-MM-DD");
        this.invoice.payment_due_date = dueDate;
        return dueDate;
      }
    },

    ...mapState("auth", ["permissions"]),

    ...mapState("work", [
      "workId",
      "workIndex",
      "workStatus",
      "workMode",
      "workCompany"
    ]),

    ...mapState("invoice", ["invoiceId", "invoiceMode", "invoiceOption"]),

    ...mapState("invoice_line", ["invoiceLines"])
  },

  methods: {
    ...mapMutations("work", [
      "SET_WORK_ID",
      "SET_WORK_STATUS",
      "SET_WORK_INDEX",
      "SET_WORK_MODE",
      "SET_WORK_PHASE"
    ]),

    ...mapMutations("invoice", [
      "SET_INVOICE_MODE",
      "SET_INVOICE_ID",
      "SET_INVOICE_OPTION",
      "RESET_INVOICE",
      "SET_LINE_TOTAL"
    ]),

    ...mapMutations("invoice_line", [
      "INIT_INVOICE_LINE_LIST",
      "RESET_INVOICE_LINE_LIST"
    ]),

    ...mapMutations("attachments", [
      "INIT_ATTACHMENT_FILE_LIST",
      "RESET_ATTACHMENT_FILE_LIST"
    ]),

    ...mapActions("invoice", ["SAVE_INVOICE_OPTION"]),

    ...mapActions("invoice_line", ["SAVE_INVOICE_LINES"]),

    ...mapActions("attachments", ["UPLOAD_ATTACHMENT_FILES"]),

    initialize() {
      if (this.invoiceId) {
        this.SET_INVOICE_MODE("view");
        Axios.get("/api/invoices/" + this.invoiceId).then(response => {
          console.log(response.data);
          this.invoice = response.data.invoice;
          this.manager = response.data.manager;
          this.managers = response.data.managers;
          this.requestors = response.data.requestors;
          this.$refs.pdfDocumentComponent.initialize();
          this.SET_INVOICE_OPTION(response.data.option);
          this.INIT_INVOICE_LINE_LIST(response.data.invoiceLines);
        });
        setTimeout(() => {
          this.$refs.filesComponent.initFile();
          this.$refs.commentsComponent.initComment();
          this.$refs.invoiceIesReminderComponent.initInvoiceReminderList();
          this.$refs.invoiceClientReminderComponent.initInvoiceReminderList();
        }, 300);
      } else {
        this.SET_INVOICE_MODE("create");
        Axios.get("/api/invoices/company/" + this.workCompany).then(
          response => {
            console.log(response.data);
            this.requestors = response.data.requestors;
            this.managers = response.data.managers;
          }
        );
      }
    },

    saveInvoice() {
      this.invoice.work_id = this.workId;
      this.invoice.total_price = this.$refs.invoiceLineComponent.invoiceTotalPrice;
      this.invoice.discount = this.invoiceOption.discount;
      this.invoice.shipping_fee = this.invoiceOption.shipping_fee;
      this.invoice.tax = this.$refs.invoiceLineComponent.invoiceTax;
      this.invoice.grand_total = this.$refs.invoiceLineComponent.invoiceGrandTotal;

      Axios.post("/api/invoices", {
        invoice: this.invoice,
        manager: this.manager
      })
        .then(response => {
          console.log(response.data);
          this.invoice = response.data.invoice;
          this.manager = response.data.manager.id;
          this.SET_INVOICE_ID(response.data.invoice.id);
          this.SET_INVOICE_MODE("view");
          this.SAVE_INVOICE_OPTION(response.data.invoice.id);
          this.SAVE_INVOICE_LINES(response.data.invoice.id);
          this.SET_WORK_PHASE("SENT INV");
          this.$emit("signal-addItemToList", {
            addType: "updateItem",
            item: response.data.work
          });
        })
        .catch(error => {
          console.log(error);
          this.errors = error.response.data.errors;
        });
    },

    updateInvoice() {
      this.invoice.total_price = this.$refs.invoiceLineComponent.invoiceTotalPrice;
      this.invoice.discount = this.invoiceOption.discount;
      this.invoice.shipping_fee = this.invoiceOption.shipping_fee;
      this.invoice.tax = this.$refs.invoiceLineComponent.invoiceTax;
      this.invoice.grand_total = this.$refs.invoiceLineComponent.invoiceGrandTotal;
      console.log("Manager =>", this.manager);
      Axios.put("/api/invoices/" + this.invoiceId, {
        invoice: this.invoice,
        manager: this.manager
      })
        .then(response => {
          console.log(response.data);
          this.invoice = response.data.invoice;
          this.SET_INVOICE_MODE("view");
          this.SAVE_INVOICE_LINES(response.data.invoice.id);
          this.$emit("signal-addItemToList", {
            addType: "updateItem",
            item: response.data.work
          });
        })
        .catch(error => {
          console.log(error);
          this.errors = error.response.data.errors;
        });
    },

    editInvoice() {
      this.SET_INVOICE_MODE("edit");
    },

    cancelInvoice() {
      this.initialize();
      this.SET_INVOICE_MODE("view");
    },

    getReceivers(model, model_id) {
      this.getEmployees(model, model_id).then(e => (this.requestors = e));
    },

    selectProject(project_id) {
      this.getSubProjects(project_id).then(e => (this.subProjects = e));
    },

    openOptionDialog() {
      this.optionDialog = true;
    },

    closeOptionDialog() {
      this.optionDialog = false;
    },

    resetInvoice() {
      this.invoice = Object.assign({}, this.defaultInvoice);
      this.errors = [];
      this.requestors = [];
      this.RESET_INVOICE();
      this.RESET_INVOICE_LINE_LIST();
      this.RESET_ATTACHMENT_FILE_LIST();
      this.$refs.commentsComponent.resetComment();
      this.$refs.filesComponent.resetFile();
    }
  },

  mixins: [getPeople, getSubProjects]
};
</script>