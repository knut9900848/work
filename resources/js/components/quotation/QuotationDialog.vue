<template>
  <div class="wrap-dialog">
    <v-card>
      <v-toolbar flat dark color="blue-grey darken-1">
        <v-btn icon dark @click="close()">
          <v-icon>mdi-close</v-icon>
        </v-btn>
        <v-toolbar-title>QUOTATION</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-dialog v-model="optionDialog" max-width="500px">
          <template v-slot:activator="{ on }">
            <v-btn
              color="indigo"
              class="mr-3"
              small
              depressed
              fab
              dark
              v-on="on"
              :disabled="isEditButtonDisabled"
            >
              <v-icon>mdi-cog</v-icon>
            </v-btn>
          </template>
          <QuotationOption @signal-closeOptionDialog="closeOptionDialog"></QuotationOption>
        </v-dialog>
      </v-toolbar>
      <v-card-text>
        <v-container fluid>
          <v-row>
            <v-col cols="12" md="7">
              <v-card class="mb-3" outlined>
                <v-card-title>
                  <h4>QUOTATION</h4>
                  <v-spacer></v-spacer>
                  <v-btn
                    color="primary"
                    @click="saveQuotation()"
                    v-if="quotationMode === 'create'"
                  >Save</v-btn>
                  <v-btn
                    color="primary"
                    @click="editQuotation()"
                    v-if="quotationMode === 'view'"
                    :disabled="isEditButtonDisabled"
                  >Edit</v-btn>
                  <v-btn
                    color="pink"
                    dark
                    @click="updateQuotation()"
                    class="mr-2"
                    v-if="quotationMode ==='edit'"
                    :disabled="isEditButtonDisabled"
                  >Update</v-btn>
                  <v-btn
                    color="primary"
                    @click="cancelQuotation()"
                    v-if="quotationMode ==='edit'"
                    :disabled="isEditButtonDisabled"
                  >Cancel</v-btn>
                </v-card-title>
                <v-divider></v-divider>
                <v-card-text>
                  <v-container>
                    <v-row>
                      <!-- Number -->
                      <v-col cols="12" md="6">
                        <v-text-field
                          label="Quotation Number"
                          v-model="quotation.number"
                          filled
                          rounded
                          prepend-inner-icon="mdi-format-list-numbered-rtl"
                          :error-messages="errors.number"
                          :disabled="isFieldDisabled"
                        ></v-text-field>
                      </v-col>

                      <!-- SR Number -->
                      <v-col cols="12" md="6">
                        <v-text-field
                          label="SR Number"
                          v-model="quotation.sr_number"
                          filled
                          rounded
                          prepend-inner-icon="mdi-check"
                          :disabled="isFieldDisabled"
                        ></v-text-field>
                      </v-col>

                      <!-- Company -->
                      <v-col cols="12" md="6">
                        <v-select
                          v-model="quotation.company_id"
                          item-text="name"
                          item-value="id"
                          :items="companies"
                          label="Client"
                          filled
                          rounded
                          prepend-inner-icon="mdi-account-tie"
                          :error-messages="errors.company_id"
                          :disabled="isFieldDisabled"
                          @change="getReceivers('Company', quotation.company_id)"
                        ></v-select>
                      </v-col>

                      <!-- Receiver -->
                      <v-col class="d-flex" cols="12" md="6">
                        <v-select
                          v-model="quotation.receiver_id"
                          item-text="name"
                          item-value="id"
                          :items="receivers"
                          label="Receiver"
                          filled
                          rounded
                          prepend-inner-icon="mdi-account-star"
                          :disabled="isFieldDisabled"
                          :error-messages="errors.receiver_id"
                        >
                          <template
                            slot="selection"
                            slot-scope="receivers"
                          >{{ receivers.item.name }} - {{ receivers.item.email }}</template>
                          <template
                            slot="item"
                            slot-scope="receivers"
                          >{{ receivers.item.name }} - {{ receivers.item.email }}</template>
                        </v-select>
                      </v-col>

                      <!-- Project -->
                      <v-col cols="12" md="6">
                        <v-select
                          v-model="quotation.project_id"
                          item-text="name"
                          item-value="id"
                          :items="projects"
                          label="Project"
                          filled
                          rounded
                          prepend-inner-icon="mdi-ferry"
                          :error-messages="errors.project_id"
                          :disabled="isFieldDisabled"
                          @change="selectProject(quotation.project_id)"
                        ></v-select>
                      </v-col>

                      <!-- Sub Project -->
                      <v-col cols="12" md="6">
                        <v-select
                          v-model="quotation.sub_project_id"
                          item-text="name"
                          item-value="id"
                          :items="subProjects"
                          label="Sub Project"
                          filled
                          rounded
                          prepend-inner-icon="mdi-sail-boat"
                          :error-messages="errors.project_id"
                          :disabled="isFieldDisabled"
                        ></v-select>
                      </v-col>

                      <!-- Category -->
                      <v-col cols="12" md="6">
                        <v-select
                          v-model="quotation.category_id"
                          item-text="name"
                          item-value="id"
                          :items="categories"
                          label="Cagegory"
                          filled
                          rounded
                          prepend-inner-icon="mdi-database"
                          :error-messages="errors.category_id"
                          :disabled="isFieldDisabled"
                        ></v-select>
                      </v-col>

                      <!-- Originator -->
                      <v-col cols="12" md="6">
                        <v-select
                          v-model="quotation.originator_id"
                          item-text="name"
                          item-value="id"
                          :items="users"
                          label="Originator"
                          filled
                          rounded
                          prepend-inner-icon="mdi-account-plus"
                          :error-messages="errors.originator_id"
                          :disabled="isFieldDisabled"
                        ></v-select>
                      </v-col>

                      <!-- Issued date -->
                      <v-col cols="12" md="6">
                        <v-menu
                          v-model="menuCalendar"
                          :close-on-content-click="false"
                          :nudge-right="40"
                          transition="scale-transition"
                          offset-y
                          min-width="290px"
                        >
                          <template v-slot:activator="{ on }">
                            <v-text-field
                              v-model="quotation.issued_date"
                              label="Issued Date"
                              readonly
                              v-on="on"
                              filled
                              rounded
                              prepend-inner-icon="mdi-calendar-check"
                              :error-messages="errors.issued_date"
                              :disabled="isFieldDisabled"
                            ></v-text-field>
                          </template>
                          <v-date-picker
                            v-model="quotation.issued_date"
                            @input="menuCalendar = false"
                          ></v-date-picker>
                        </v-menu>
                      </v-col>

                      <!-- valid terms -->
                      <v-col cols="12" md="6">
                        <v-text-field
                          label="Valid Terms"
                          v-model="quotation.valid_terms"
                          filled
                          rounded
                          prepend-inner-icon="mdi-timer-sand"
                          :error-messages="errors.valid_terms"
                          :disabled="isFieldDisabled"
                          type="number"
                        ></v-text-field>
                      </v-col>

                      <!-- expired date -->
                      <v-col cols="12" md="6">
                        <v-text-field
                          label="Expired Date"
                          v-model="expired_date"
                          filled
                          rounded
                          prepend-inner-icon="mdi-timer-off-outline"
                          :disabled="isFieldDisabled"
                          readonly
                        ></v-text-field>
                      </v-col>

                      <!-- Currency -->
                      <v-col cols="12" md="6">
                        <v-select
                          v-model="quotation.currency_id"
                          item-text="name"
                          item-value="id"
                          :items="currencies"
                          label="Currency"
                          filled
                          rounded
                          prepend-inner-icon="mdi-currency-usd"
                          :error-messages="errors.currency_id"
                          :disabled="isFieldDisabled"
                        >
                          <template slot="selection" slot-scope="currecies">
                            <v-chip small color="primary">{{ currecies.item.name }}</v-chip>
                            <v-chip small>{{ currecies.item.symbol }}</v-chip>
                          </template>
                          <template slot="item" slot-scope="currecies">
                            <v-chip small color="primary">{{ currecies.item.name }}</v-chip>
                            <v-chip small>{{ currecies.item.symbol }}</v-chip>
                          </template>
                        </v-select>
                      </v-col>

                      <v-col cols="12" md="6" v-show="quotationOption.is_use_shipping_fee">
                        <v-currency-field
                          v-model="quotation.shipping_fee"
                          label="Shipping Fee"
                          rounded
                          filled
                        ></v-currency-field>
                      </v-col>

                      <v-col cols="12">
                        <v-checkbox
                          v-model="quotation.is_emergency"
                          label="Emergency"
                          :disabled="isEditButtonDisabled"
                        ></v-checkbox>
                      </v-col>

                      <v-col cols="12">
                        <v-textarea
                          v-model="quotation.summary"
                          label="Quotation Summary"
                          filled
                          :disabled="isFieldDisabled"
                        ></v-textarea>
                      </v-col>
                      <v-col cols="12">
                        <vue-editor
                          v-model="quotation.remarks"
                          label="Remarks"
                          :disabled="isFieldDisabled"
                        ></vue-editor>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-card-text>
              </v-card>

              <QuotationLine
                :units="units"
                :currentStatus="quotationStatus"
                :currentMode="quotationMode"
                :permissions="permissions"
                editPermission="edit-quotation"
                approvePermission="approve-quotation"
                :shipping_fee="quotation.shipping_fee"
                ref="quotationLineComponent"
              ></QuotationLine>

              <Attachment
                ref="attachmentComponent"
                model="Quotation"
                :model_id="quotationId"
                storage="quotation_attachments"
                :currentStatus="quotationStatus"
                :currentMode="quotationMode"
                :permissions="permissions"
                :editPermission="editPermission"
                :approvePermission="approvePermission"
                title="Files to be merged with the quote"
              ></Attachment>

              <v-lazy
                v-model="lazyField"
                :options="{ threshold: .5 }"
                min-height="200"
                transition="fade-transition"
              >
                <Field
                  ref="fieldComponent"
                  :currentStatus="quotationStatus"
                  :currentMode="quotationMode"
                  :permissions="permissions"
                  :editPermission="editPermission"
                  :approvePermission="approvePermission"
                ></Field>
              </v-lazy>
            </v-col>
            <v-col md="5">
              <v-card class="mb-3" outlined>
                <v-card-title>
                  <h4>STATUS</h4>
                  <v-spacer></v-spacer>
                  <v-dialog v-model="quotationDescriptionDialog" width="1024">
                    <template v-slot:activator="{ on }">
                      <v-btn depressed outlined color="primary" v-on="on">Status Description</v-btn>
                    </template>
                    <QuotationStatusDescription></QuotationStatusDescription>
                  </v-dialog>
                </v-card-title>
                <v-divider></v-divider>
                <v-card-text>
                  <v-chip>{{quotationStatus}}</v-chip>
                </v-card-text>
              </v-card>

              <QuotationPdfDocument
                ref="pdfDocumentsComponent"
                :permissions="permissions"
                :editPermission="editPermission"
                :approvePermission="approvePermission"
                :currentStatus="quotationStatus"
                :currentMode="quotationMode"
                :exchangeRate="exchangeRate"
                :emergency="quotation.is_emergency"
                :totalPrice="quotation.total_price"
                @signal-changeQuotationStatusToList="changeQuotationStatusToList"
              ></QuotationPdfDocument>

              <File
                ref="filesComponent"
                :model_id="quotationId"
                model="Quotation"
                storage="quotation_files"
                title="FILE UPLOAD"
                :currentStatus="quotationStatus"
                :currentMode="quotationMode"
                :permissions="permissions"
                :editPermission="editPermission"
                :approvePermission="approvePermission"
              ></File>

              <v-lazy
                v-model="lazyComment"
                :options="{ threshold: .5 }"
                min-height="200"
                transition="fade-transition"
              >
                <Comment ref="commentsComponent" model="Quotation" :model_id="quotationId"></Comment>
              </v-lazy>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import { getPeople } from "../../mixins/getPeople";
import { getSubProjects } from "../../mixins/subProjects";
import { mapState, mapMutations, mapActions, mapGetters } from "vuex";
import Axios from "axios";
import moment from "moment";
import { VueEditor } from "vue2-editor";
import QuotationLine from "../../components/quotation/QuotationLine";
import Field from "../common/Field";
import File from "../common/File";
import Comment from "../common/Comment";
import QuotationPdfDocument from "../../components/quotation/QuotationPdfDocument";
import Attachment from "../common/Attachment";
import QuotationOption from "../../components/quotation/QuotationOption";
import QuotationStatusDescription from "./QuotationStatusDescription";

export default {
  components: {
    VueEditor,
    QuotationLine,
    Field,
    File,
    Comment,
    QuotationPdfDocument,
    Attachment,
    QuotationOption,
    QuotationStatusDescription
  },

  props: [
    "companies",
    "projects",
    "branches",
    "categories",
    "currencies",
    "users",
    "units"
  ],

  data: () => ({
    quotationDescriptionDialog: false,
    optionDialog: false,
    errors: [],
    menuCalendar: false,
    receivers: [],
    lazyItem: false,
    lazyAttachment: false,
    lazyField: false,
    lazyComment: false,
    subProjects: [],

    editPermission: "edit-quotation",
    approvePermission: "approve-quotation",

    exchangeRate: 0,

    quotation: {
      id: null,
      number: null,
      company_id: null,
      project_id: null,
      category_id: null,
      currency_id: null,
      status: null,
      issued_date: null,
      valid_terms: null,
      expired_date: null,
      receiver_id: null,
      originator_id: null,
      sr_number: null,
      is_emergency: false,
      total_price: 0,
      tax: 0,
      discount: 0,
      shipping_fee: 0,
      grnad_total: 0,
      remarks: null
    },
    resetQuotation: {
      id: null,
      number: null,
      company_id: null,
      project_id: null,
      category_id: null,
      currency_id: null,
      status: null,
      issued_date: null,
      valid_terms: null,
      expired_date: null,
      receiver_id: null,
      originator_id: null,
      sr_number: null,
      is_emergency: false,
      total_price: 0,
      tax: 0,
      discount: 0,
      shipping_fee: 0,
      grnad_total: 0,
      remarks: null,
      summary: null
    }
  }),

  computed: {
    isFieldDisabled() {
      if (this.quotationMode === "view") {
        return true;
      } else {
        return false;
      }
    },

    isEditButtonDisabled() {
      if (
        this.quotationStatus === "OPENED" &&
        this.permissions.includes("edit-quotation")
      ) {
        return false;
      } else {
        return true;
      }
    },

    expired_date() {
      if (this.quotation.valid_terms && this.quotation.issued_date) {
        let issuedDate = moment(this.quotation.issued_date);
        let expiredDate = issuedDate
          .add(this.quotation.valid_terms, "days")
          .format("YYYY-MM-DD");
        this.quotation.expired_date = expiredDate;
        return expiredDate;
      }
    },

    ...mapState("auth", ["permissions"]),

    ...mapState("quotation", [
      "quotationId",
      "quotationMode",
      "quotationStatus",
      "quotationOption"
    ]),

    ...mapState("quotation_line", ["quotationLines"]),

    ...mapState("fields", ["fields", "field"]),

    ...mapState("attachments", ["selectedAttachments"])
  },

  methods: {
    ...mapMutations("quotation", [
      "SET_QUOTATION_MODE",
      "SET_QUOTATION_ID",
      "SET_QUOTATION_STATUS",
      "RESET_QUOTATION",
      "SET_QUOTATION_OPTION"
    ]),

    ...mapMutations("items", ["INIT_ITEM_LIST", "RESET_ITEM_LIST"]),

    ...mapMutations("quotation_line", [
      "INIT_QUOTATION_LINE_LIST",
      "RESET_QUOTATION_LINE_LIST"
    ]),

    ...mapMutations("fields", ["INIT_FIELD_LIST", "RESET_FIELD_LIST"]),

    ...mapMutations("attachments", [
      "INIT_ATTACHMENT_FILE_LIST",
      "RESET_ATTACHMENT_FILE_LIST"
    ]),

    ...mapActions("quotation", ["SAVE_QUOTATION_OPTION"]),

    ...mapActions("quotation_line", ["SAVE_QUOTATION_LINES"]),

    ...mapActions("fields", ["SAVE_FIELDS"]),

    ...mapActions("attachments", ["UPLOAD_ATTACHMENT_FILES"]),

    initQuotation() {
      Axios.get("/api/quotations/" + this.quotationId).then(response => {
        console.log(this.permissions);
        this.quotation = response.data.quotation;
        this.receivers = response.data.receivers;
        this.subProjects = response.data.subProjects;
        this.exchangeRate = response.data.exchangeRate;
        this.INIT_QUOTATION_LINE_LIST(response.data.quotationLines);
        this.INIT_FIELD_LIST(response.data.fields);
        this.INIT_ATTACHMENT_FILE_LIST(response.data.attachments);
        this.SET_QUOTATION_OPTION(response.data.option);
        this.SET_QUOTATION_MODE("view");
      });

      setTimeout(() => {
        this.$refs.filesComponent.initFile();
        this.$refs.pdfDocumentsComponent.initialize();
        this.$refs.commentsComponent.initComment();
      }, 300);
    },

    saveQuotation() {
      this.quotation.total_price = this.$refs.quotationLineComponent.quotationTotalPrice;
      this.quotation.discount = this.quotationOption.discount;
      this.quotation.shipping_fee = this.quotationOption.shipping_fee;
      this.quotation.tax = this.$refs.quotationLineComponent.quotationTax;
      this.quotation.grand_total = this.$refs.quotationLineComponent.quotationGrandTotal;

      Axios.post("/api/quotations", this.quotation)
        .then(response => {
          this.quotation = response.data.quotation;
          this.exchangeRate = response.data.exchangeRate;
          this.SET_QUOTATION_ID(response.data.quotation.id);
          this.SAVE_QUOTATION_LINES(response.data.quotation.id);
          this.SAVE_FIELDS({
            model_id: this.quotationId,
            fields: this.fields,
            model: "Quotation"
          });
          this.UPLOAD_ATTACHMENT_FILES(response.data.quotation.id);
          this.SAVE_QUOTATION_OPTION();
          this.$refs.attachmentComponent.files = [];
          this.$emit("signal-addItemToList", {
            addType: "newItem",
            item: response.data.quotationListItem
          });
          this.SET_QUOTATION_MODE("view");
          this.$store.dispatch("SHOW_GLOBAL_SNACKBAR", {
            text: response.data.message
          });
        })
        .catch(error => {
          console.log(error);
          this.errors = error.response.data.errors;
          this.$store.dispatch("SHOW_GLOBAL_SNACKBAR", {
            text: error.response.data.message,
            color: "red"
          });
        });
    },

    updateQuotation() {
      this.quotation.total_price = this.$refs.quotationLineComponent.quotationTotalPrice;
      this.quotation.discount = this.quotationOption.discount;
      this.quotation.shipping_fee = this.quotationOption.shipping_fee;
      this.quotation.tax = this.$refs.quotationLineComponent.quotationTax;
      this.quotation.grand_total = this.$refs.quotationLineComponent.quotationGrandTotal;

      Axios.put("/api/quotations/" + this.quotationId, this.quotation)
        .then(response => {
          this.quotation = response.data.quotation;
          this.exchangeRate = response.data.exchangeRate;
          this.SAVE_QUOTATION_LINES(response.data.quotation.id);
          this.SAVE_FIELDS({
            model_id: this.quotationId,
            fields: this.fields,
            model: "Quotation"
          });
          this.UPLOAD_ATTACHMENT_FILES(response.data.quotation.id);
          this.$refs.attachmentComponent.files = [];
          this.$emit("signal-addItemToList", {
            addType: "updateItem",
            item: response.data.quotationListItem
          });
          this.SET_QUOTATION_MODE("view");
          this.$store.dispatch("SHOW_GLOBAL_SNACKBAR", {
            text: response.data.message
          });
        })
        .catch(error => {
          if (error.response.status !== 403)
            this.errors = error.response.data.errors;
          this.$store.dispatch("SHOW_GLOBAL_SNACKBAR", {
            text: error.response.data.message,
            color: "red"
          });
        });
    },

    editQuotation() {
      this.SET_QUOTATION_MODE("edit");
    },

    cancelQuotation() {
      this.initQuotation();
    },

    close() {
      this.quotation = Object.assign({}, this.resetQuotation);
      this.receivers = [];
      this.errors = [];
      this.RESET_QUOTATION();
      this.RESET_QUOTATION_LINE_LIST();
      this.RESET_ATTACHMENT_FILE_LIST();
      this.RESET_FIELD_LIST();

      this.$refs.pdfDocumentsComponent.reset();
      this.$refs.filesComponent.reset();
      this.$refs.commentsComponent.reset();

      this.$emit("signal-closeQuotationDialog");
    },

    getReceivers(model, model_id) {
      this.getEmployees(model, model_id).then(e => (this.receivers = e));
    },

    selectProject(project_id) {
      this.getSubProjects(project_id).then(e => (this.subProjects = e));
    },

    changeQuotationStatusToList(status) {
      this.$emit("signal-changeQuotationStatusToList", status);
    },

    closeOptionDialog() {
      this.optionDialog = false;
    }
  },
  mixins: [getPeople, getSubProjects]
};
</script>