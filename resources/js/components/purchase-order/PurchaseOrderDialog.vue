<template>
  <div class="wrap-quotation-dialog">
    <v-card>
      <v-toolbar flat dark color="blue-grey darken-1">
        <v-btn icon dark @click="close()">
          <v-icon>mdi-close</v-icon>
        </v-btn>
        <v-toolbar-title>
          PURCHASE ORDER
          <!-- {{ purchaseOrderOption }} -->
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <!-- Option Dialog -->
        <v-dialog v-model="optionDialog" max-width="500px">
          <template v-slot:activator="{ on }">
            <v-btn color="indigo" class="mr-3" small depressed fab dark v-on="on">
              <v-icon>mdi-cog</v-icon>
            </v-btn>
          </template>
          <PurchaseOrderOption
            ref="purchaseOrderOptionComponent"
            @signal-closeOptionDialog="closeOptionDialog"
            :purchaseOrderTermsAndConditions="purchaseOrderTermsAndConditions"
          ></PurchaseOrderOption>
        </v-dialog>
      </v-toolbar>
      <v-card-text>
        <v-container fluid>
          <v-row>
            <v-col cols="12" lg="7">
              <v-card class="mb-3" outlined>
                <v-card-title>
                  <h4>PURCHASE ORDER</h4>
                  <v-spacer></v-spacer>
                  <v-btn
                    color="primary"
                    @click="savePurchaseOrder()"
                    v-if="purchaseOrderMode === 'create'"
                  >Save</v-btn>
                  <v-btn
                    color="primary"
                    @click="editPurchaseOrder()"
                    v-if="purchaseOrderMode === 'view'"
                    :disabled="isEditButtonDisabled"
                  >Edit</v-btn>
                  <v-btn
                    color="pink"
                    dark
                    @click="updatePurchaseOrder()"
                    class="mr-2"
                    v-if="purchaseOrderMode ==='edit'"
                    :disabled="isEditButtonDisabled"
                  >Update</v-btn>
                  <v-btn
                    color="primary"
                    @click="cancelPurchaseOrder()"
                    v-if="purchaseOrderMode ==='edit'"
                    :disabled="isEditButtonDisabled"
                  >Cancel</v-btn>
                </v-card-title>
                <v-divider></v-divider>
                <v-card-text>
                  <v-container fluid>
                    <v-row>
                      <!-- Number -->
                      <v-col cols="12" md="6">
                        <v-text-field
                          label="Purchase Order Number"
                          v-model="purchaseOrder.number"
                          filled
                          rounded
                          prepend-inner-icon="mdi-format-list-numbered"
                          :error-messages="errors.number"
                          :disabled="true"
                        ></v-text-field>
                      </v-col>

                      <!-- SR Number -->
                      <v-col cols="12" md="6">
                        <v-text-field
                          label="SR Number"
                          v-model="purchaseOrder.sr_number"
                          filled
                          rounded
                          prepend-inner-icon="mdi-check"
                          :disabled="isFieldDisabled"
                        ></v-text-field>
                      </v-col>

                      <!-- Company -->
                      <v-col cols="12" md="6">
                        <v-select
                          v-model="purchaseOrder.company_id"
                          item-text="name"
                          item-value="id"
                          :items="companies"
                          label="Client"
                          filled
                          rounded
                          prepend-inner-icon="mdi-account-tie"
                          :error-messages="errors.company_id"
                          :disabled="isFieldDisabled"
                        ></v-select>
                      </v-col>

                      <!-- Project -->
                      <v-col cols="12" md="6">
                        <v-select
                          v-model="purchaseOrder.project_id"
                          item-text="name"
                          item-value="id"
                          :items="projects"
                          label="Project"
                          filled
                          rounded
                          prepend-inner-icon="mdi-ferry"
                          :error-messages="errors.project_id"
                          :disabled="isFieldDisabled"
                          @change="selectProject(purchaseOrder.project_id)"
                        ></v-select>
                      </v-col>

                      <!-- Sub Project -->
                      <v-col cols="12" md="6">
                        <v-select
                          v-model="purchaseOrder.sub_project_id"
                          item-text="name"
                          item-value="id"
                          :items="subProjects"
                          label="Sub Project"
                          filled
                          rounded
                          prepend-inner-icon="mdi-sail-boat"
                          :error-messages="errors.sub_project_id"
                          :disabled="isFieldDisabled"
                        ></v-select>
                      </v-col>

                      <!-- Category -->
                      <v-col cols="12" md="6">
                        <v-select
                          v-model="purchaseOrder.category_id"
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

                      <!-- Supplier -->
                      <v-col cols="12" md="6">
                        <v-select
                          v-model="purchaseOrder.supplier_id"
                          item-text="name"
                          item-value="id"
                          :items="suppliers"
                          label="Supplier"
                          filled
                          rounded
                          prepend-inner-icon="mdi-factory"
                          :error-messages="errors.supplier_id"
                          :disabled="isFieldDisabled"
                          @change="getReceivers('Supplier', purchaseOrder.supplier_id)"
                        ></v-select>
                      </v-col>

                      <!-- Receiver -->
                      <v-col class="d-flex" cols="12" md="6">
                        <v-select
                          v-model="purchaseOrder.receiver_id"
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

                      <!-- Originator -->
                      <v-col cols="12" md="6">
                        <v-select
                          v-model="purchaseOrder.originator_id"
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
                          v-model="issuedDateCalendar"
                          :close-on-content-click="false"
                          :nudge-right="40"
                          transition="scale-transition"
                          offset-y
                          min-width="290px"
                        >
                          <template v-slot:activator="{ on }">
                            <v-text-field
                              v-model="purchaseOrder.issued_date"
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
                            v-model="purchaseOrder.issued_date"
                            @input="issuedDateCalendar = false"
                          ></v-date-picker>
                        </v-menu>
                      </v-col>

                      <!-- Currency -->
                      <v-col cols="12" md="6">
                        <v-select
                          v-model="purchaseOrder.currency_id"
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

                      <!-- Ref. Quote -->
                      <v-col cols="12" md="6">
                        <v-text-field
                          label="Supplier's Ref. Quote"
                          v-model="purchaseOrder.ref_quote"
                          filled
                          rounded
                          prepend-inner-icon="mdi-format-list-checks"
                          :disabled="isFieldDisabled"
                        ></v-text-field>
                      </v-col>

                      <!-- Delivery Address -->
                      <v-col cols="12" md="6">
                        <v-text-field
                          label="Delivery Address"
                          v-model="purchaseOrder.delivery_address"
                          filled
                          rounded
                          prepend-inner-icon="mdi-map-marker"
                          :disabled="isFieldDisabled"
                        ></v-text-field>
                      </v-col>

                      <!-- Shipping Fee -->
                      <v-col cols="12" md="6">
                        <v-currency-field
                          label="Shipping Fee"
                          v-model="purchaseOrder.shipping_fee"
                          filled
                          rounded
                          prepend-inner-icon="mdi-map-marker"
                          :disabled="isFieldDisabled"
                          type="number"
                        ></v-currency-field>
                      </v-col>

                      <!-- Deliveied Date -->
                      <v-col cols="12" md="6">
                        <v-menu
                          v-model="deliveryDateCalendar"
                          :close-on-content-click="false"
                          :nudge-right="40"
                          transition="scale-transition"
                          offset-y
                          min-width="290px"
                        >
                          <template v-slot:activator="{ on }">
                            <v-text-field
                              v-model="purchaseOrder.delivery_date"
                              label="Deliveied Date"
                              readonly
                              v-on="on"
                              filled
                              rounded
                              prepend-inner-icon="mdi-truck-check-outline"
                              :error-messages="errors.delivery_date"
                              :disabled="isFieldDisabled"
                              clearable
                            ></v-text-field>
                          </template>
                          <v-date-picker
                            v-model="purchaseOrder.delivery_date"
                            @input="deliveryDateCalendar = false"
                          ></v-date-picker>
                        </v-menu>
                      </v-col>

                      <!-- Payment Due Date -->
                      <v-col cols="12" md="6">
                        <v-menu
                          v-model="paymentDueDateCalendar"
                          :close-on-content-click="false"
                          :nudge-right="40"
                          transition="scale-transition"
                          offset-y
                          min-width="290px"
                        >
                          <template v-slot:activator="{ on }">
                            <v-text-field
                              v-model="purchaseOrder.payment_due_date"
                              label="Payment Due Date"
                              readonly
                              v-on="on"
                              filled
                              rounded
                              prepend-inner-icon="mdi-gift-outline"
                              :error-messages="errors.payment_due_date"
                              :disabled="isFieldDisabled"
                              clearable
                            ></v-text-field>
                          </template>
                          <v-date-picker
                            v-model="purchaseOrder.payment_due_date"
                            @input="paymentDueDateCalendar = false"
                          ></v-date-picker>
                        </v-menu>
                      </v-col>

                      <!-- Payment Date -->
                      <v-col cols="12" md="6">
                        <v-menu
                          v-model="paymentDateCalendar"
                          :close-on-content-click="false"
                          :nudge-right="40"
                          transition="scale-transition"
                          offset-y
                          min-width="290px"
                        >
                          <template v-slot:activator="{ on }">
                            <v-text-field
                              v-model="purchaseOrder.payment_date"
                              label="Payment Date"
                              readonly
                              v-on="on"
                              filled
                              rounded
                              prepend-inner-icon="mdi-account-cash"
                              :error-messages="errors.payment_date"
                              :disabled="isFieldDisabled"
                              clearable
                            ></v-text-field>
                          </template>
                          <v-date-picker
                            v-model="purchaseOrder.payment_date"
                            @input="paymentDateCalendar = false"
                          ></v-date-picker>
                        </v-menu>
                      </v-col>

                      <v-col cols="12">
                        <v-checkbox
                          v-model="purchaseOrder.is_emergency"
                          label="Emergency"
                          :disabled="isEditButtonDisabled"
                        ></v-checkbox>
                      </v-col>

                      <!-- Summary -->
                      <v-col cols="12">
                        <v-textarea
                          v-model="purchaseOrder.summary"
                          label="Purchase Order Summary"
                          filled
                          :disabled="isFieldDisabled"
                        ></v-textarea>
                      </v-col>

                      <!-- Remarks -->
                      <v-col cols="12">
                        <vue-editor
                          v-model="purchaseOrder.remarks"
                          label="Remarks"
                          :disabled="isFieldDisabled"
                        ></vue-editor>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-card-text>
              </v-card>

              <PurchaseOrderLine
                :units="units"
                :currentStatus="purchaseOrderStatus"
                :currentMode="purchaseOrderMode"
                :permissions="permissions"
                editPermission="edit-purchase-order"
                approvePermission="approve-purchase-order"
                :shipping_fee="purchaseOrder.shipping_fee"
                ref="purchaseOrderLineComponent"
              ></PurchaseOrderLine>

              <v-lazy
                v-model="lazyAttachment"
                :options="{ threshold: .5 }"
                min-height="200"
                transition="fade-transition"
              >
                <Attachment
                  ref="attachmentComponent"
                  model="PurchaseOrder"
                  storage="purchase_order_attachments"
                  :model_id="purchaseOrderId"
                  :currentStatus="purchaseOrderStatus"
                  :currentMode="purchaseOrderMode"
                  :permissions="permissions"
                  :editPermission="editPermission"
                  :approvePermission="approvePermission"
                  title="Files to be merged with the quote"
                ></Attachment>
              </v-lazy>

              <v-lazy
                v-model="lazyField"
                :options="{ threshold: .5 }"
                min-height="200"
                transition="fade-transition"
              >
                <Field
                  ref="fieldComponent"
                  :currentStatus="purchaseOrderStatus"
                  :currentMode="purchaseOrderMode"
                  :permissions="permissions"
                  :editPermission="editPermission"
                  :approvePermission="approvePermission"
                ></Field>
              </v-lazy>
            </v-col>
            <v-col cols="12" lg="5">
              <v-card class="mb-3" outlined>
                <v-card-title>
                  <h4>STATUS</h4>
                </v-card-title>
                <v-divider></v-divider>
                <v-card-text>
                  <v-chip>{{purchaseOrderStatus}}</v-chip>
                </v-card-text>
              </v-card>

              <PurchaseOrderPdfDocument
                v-show="purchaseOrderId"
                ref="pdfsComponent"
                :permissions="permissions"
                :editPermission="editPermission"
                :approvePermission="approvePermission"
                :currentStatus="purchaseOrderStatus"
                :currentMode="purchaseOrderMode"
                :exchangeRate="exchangeRate"
                :totalPrice="purchaseOrder.total_price"
                :emergency="purchaseOrder.is_emergency"
                @signal-changePurchaseOrderStatusToList="changePurchaseOrderStatusToList"
              ></PurchaseOrderPdfDocument>

              <File
                v-show="purchaseOrderId"
                ref="filesComponent"
                :model_id="purchaseOrderId"
                model="PurchaseOrder"
                storage="purchase_order_files"
                title="FILE UPLOAD"
                :currentStatus="purchaseOrderStatus"
                :currentMode="purchaseOrderMode"
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
                <Comment
                  v-show="purchaseOrderId"
                  ref="commentsComponent"
                  model="PurchaseOrder"
                  :model_id="purchaseOrderId"
                ></Comment>
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
import PurchaseOrderLine from "../../components/purchase-order/PurchaseOrderLine";
import Field from "../common/Field";
import File from "../common/File";
import Comment from "../common/Comment";
import PurchaseOrderPdfDocument from "../../components/purchase-order/PurchaseOrderPdfDocument";
import Attachment from "../common/Attachment";
import PurchaseOrderOption from "../../components/purchase-order/PurchaseOrderOption";

export default {
  components: {
    VueEditor,
    PurchaseOrderLine,
    Field,
    File,
    Comment,
    PurchaseOrderPdfDocument,
    Attachment,
    PurchaseOrderOption
  },
  props: [
    "companies",
    "projects",
    "branches",
    "categories",
    "currencies",
    "users",
    "units",
    "suppliers",
    "purchaseOrderTermsAndConditions"
  ],
  data: () => ({
    purchaseOrderDescriptionDialog: false,
    optionDialog: false,
    errors: [],
    issuedDateCalendar: false,
    deliveryDateCalendar: false,
    paymentDueDateCalendar: false,
    paymentDateCalendar: false,
    receivers: [],

    lazyItem: false,
    lazyAttachment: false,
    lazyField: false,
    lazyComment: false,

    subProjects: [],

    editPermission: "edit-purchase-order",
    approvePermission: "approve-purchase-order",

    exchangeRate: 0,

    purchaseOrder: {
      id: null,
      number: null,
      sr_number: null,
      company_id: null,
      project_id: null,
      sub_project_id: null,
      category_id: null,
      currency_id: null,
      supplier_id: null,
      originator_id: null,
      receiver_id: null,
      issued_date: null,
      ref_quote: null,
      delivery_address: null,
      payment_terms: null,
      delivery_terms_id: null,
      delivery_date: null,
      invoice_date: null,
      payment_due_date: null,
      payment_date: null,
      total_price: 0,
      tax: 0,
      discount: 0,
      shipping_fee: 0,
      grand_total: 0,
      is_emergency: 0,
      remarks: null,
      status: null
    },
    reset_purchaseOrder: {
      id: null,
      number: null,
      sr_number: null,
      company_id: null,
      project_id: null,
      category_id: null,
      currency_id: null,
      supplier_id: null,
      originator_id: null,
      receiver_id: null,
      issued_date: null,
      ref_quote: null,
      delivery_address: null,
      payment_terms: null,
      delivery_terms_id: null,
      delivery_date: null,
      invoice_date: null,
      payment_due_date: null,
      payment_date: null,
      total_price: 0,
      tax: 0,
      discount: 0,
      shipping_fee: 0,
      grand_total: 0,
      is_emergency: false,
      remarks: null,
      status: null
    }
  }),

  computed: {
    isFieldDisabled() {
      if (this.purchaseOrderMode === "view") {
        return true;
      } else {
        return false;
      }
    },

    isEditButtonDisabled() {
      if (
        this.purchaseOrderStatus === "OPENED" &&
        this.permissions.includes("edit-purchase-order")
      ) {
        return false;
      } else {
        return true;
      }
    },

    payment_due_date() {
      if (
        this.purchaseOrder.payment_terms &&
        this.purchaseOrder.delivery_date
      ) {
        let invoicedDate = moment(this.purchaseOrder.delivery_date);
        let dueDate = invoicedDate
          .add(this.purchaseOrder.payment_terms.terms, "days")
          .format("YYYY-MM-DD");
        this.purchaseOrder.payment_due_date = dueDate;
        return dueDate;
      }
    },

    ...mapState("auth", ["permissions"]),

    ...mapState("purchase_order", [
      "purchaseOrderId",
      "purchaseOrderMode",
      "purchaseOrderStatus",
      "purchaseOrderIndex",
      "purchaseOrderOption"
    ]),

    ...mapState("purchase_order_line", ["purchaseOrders"]),

    ...mapState("fields", ["fields", "field"]),

    ...mapState("attachments", ["selectedAttachments"])
  },

  methods: {
    ...mapMutations("purchase_order", [
      "SET_PURCHASE_ORDER_ID",
      "SET_PURCHASE_ORDER_MODE",
      "SET_PURCHASE_ORDER_STATUS",
      "SET_PURCHASE_ORDER_OPTION",
      "RESET_PURCHASE_ORDER"
    ]),

    ...mapMutations("purchase_order_line", [
      "INIT_PURCHASE_ORDER_LINE_LIST",
      "RESET_PURCHASE_ORDER_LINE_LIST"
    ]),

    ...mapMutations("fields", ["INIT_FIELD_LIST", "RESET_FIELD_LIST"]),

    ...mapMutations("attachments", [
      "INIT_ATTACHMENT_FILE_LIST",
      "RESET_ATTACHMENT_FILE_LIST"
    ]),

    ...mapActions("purchase_order", ["SAVE_PURCHASE_ORDER_OPTION"]),

    ...mapActions("purchase_order_line", ["SAVE_PURCHASE_ORDER_LINES"]),

    ...mapActions("fields", ["SAVE_FIELDS"]),

    ...mapActions("attachments", ["UPLOAD_ATTACHMENT_FILES"]),

    initPurchaseOrder() {
      Axios.get("/api/purchase-orders/" + this.purchaseOrderId).then(
        response => {
          console.log(response.data);
          this.purchaseOrder = response.data.purchaseOrder;
          this.receivers = response.data.receivers;
          this.subProjects = response.data.subProjects;
          this.exchangeRate = response.data.exchangeRate;
          this.INIT_PURCHASE_ORDER_LINE_LIST(response.data.purchaseOrderLines);
          this.INIT_FIELD_LIST(response.data.fields);
          this.INIT_ATTACHMENT_FILE_LIST(response.data.attachments);
          this.SET_PURCHASE_ORDER_OPTION(response.data.option);
          this.SET_PURCHASE_ORDER_MODE("view");
        }
      );

      setTimeout(() => {
        this.$refs.filesComponent.initFile();
        this.$refs.pdfsComponent.initialize();
        this.$refs.commentsComponent.initComment();
      }, 300);
    },

    savePurchaseOrder() {
      this.purchaseOrder.total_price = this.$refs.purchaseOrderLineComponent.purchaseOrderTotalPrice;
      this.purchaseOrder.discount = this.purchaseOrderOption.discount;
      this.purchaseOrder.shipping_fee = this.purchaseOrderOption.shipping_fee;
      this.purchaseOrder.tax = this.$refs.purchaseOrderLineComponent.purchaseOrderTax;
      this.purchaseOrder.grand_total = this.$refs.purchaseOrderLineComponent.purchaseOrderGrandTotal;

      Axios.post("/api/purchase-orders", this.purchaseOrder)
        .then(response => {
          console.log(response.data);
          this.purchaseOrder = response.data.purchaseOrder;
          this.exchangeRate = response.data.exchangeRate;
          this.SET_PURCHASE_ORDER_ID(response.data.purchaseOrder.id);
          this.SAVE_PURCHASE_ORDER_LINES(response.data.purchaseOrder.id);
          this.SAVE_FIELDS({
            model: "PurchaseOrder",
            model_id: this.purchaseOrderId,
            fields: this.fields
          });
          this.UPLOAD_ATTACHMENT_FILES(response.data.purchaseOrder.id);
          this.SAVE_PURCHASE_ORDER_OPTION(this.purchaseOrderOption);
          this.$refs.commentsComponent.initComment();
          // this.$refs.attachmentComponent.files = []
          this.$emit("signal-addItemToList", {
            addType: "newItem",
            item: response.data.purchaseOrderListItem
          });
          this.SET_PURCHASE_ORDER_MODE("view");
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

    updatePurchaseOrder() {
      this.purchaseOrder.total_price = this.$refs.purchaseOrderLineComponent.purchaseOrderTotalPrice;
      this.purchaseOrder.discount = this.purchaseOrderOption.discount;
      this.purchaseOrder.shipping_fee = this.purchaseOrderOption.shipping_fee;
      this.purchaseOrder.tax = this.$refs.purchaseOrderLineComponent.purchaseOrderTax;
      this.purchaseOrder.grand_total = this.$refs.purchaseOrderLineComponent.purchaseOrderGrandTotal;
      console.log(this.purchaseOrder);
      Axios.put(
        "/api/purchase-orders/" + this.purchaseOrderId,
        this.purchaseOrder
      )
        .then(response => {
          console.log(response.data);
          this.purchaseOrder = response.data.purchaseOrder;
          this.exchangeRate = response.data.exchangeRate;
          this.SAVE_PURCHASE_ORDER_LINES(response.data.purchaseOrder.id);
          this.SAVE_FIELDS({
            model: "PurchaseOrder",
            model_id: this.purchaseOrderId,
            fields: this.fields
          });
          this.UPLOAD_ATTACHMENT_FILES(response.data.purchaseOrder.id);
          // this.$refs.attachmentComponent.files = []
          this.$emit("signal-addItemToList", {
            addType: "updateItem",
            item: response.data.purchaseOrderListItem
          });
          this.SET_PURCHASE_ORDER_MODE("view");
          this.$store.dispatch("SHOW_GLOBAL_SNACKBAR", {
            text: response.data.message
          });
        })
        .catch(error => {
          this.errors = error.response.data.errors;
          this.$store.dispatch("SHOW_GLOBAL_SNACKBAR", {
            text: error.response.data.message,
            color: "red"
          });
        });
    },

    editPurchaseOrder() {
      this.SET_PURCHASE_ORDER_MODE("edit");
    },

    cancelPurchaseOrder() {
      this.initPurchaseOrder();
    },

    close() {
      this.purchaseOrder = Object.assign({}, this.reset_purchaseOrder);
      this.receivers = [];
      this.errors = [];
      this.RESET_PURCHASE_ORDER();
      this.RESET_FIELD_LIST();
      this.RESET_ATTACHMENT_FILE_LIST();
      this.RESET_PURCHASE_ORDER_LINE_LIST();

      this.$refs.pdfsComponent.reset();
      this.$refs.filesComponent.reset();
      this.$refs.commentsComponent.reset();

      this.$emit("signal-closePurchaseOrderDialog");
    },

    getReceivers(model, model_id) {
      this.getEmployees(model, model_id).then(e => (this.receivers = e));
    },

    selectProject(project_id) {
      this.getSubProjects(project_id).then(e => (this.subProjects = e));
    },

    changePurchaseOrderStatusToList(status) {
      this.$emit("signal-changeItemStatusToList", status);
    },

    closeOptionDialog() {
      this.optionDialog = false;
    }
  },
  mixins: [getPeople, getSubProjects]
};
</script>