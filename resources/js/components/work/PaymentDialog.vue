<template>
  <div class="wrap-payment">
    <v-container fluid>
      <v-row>
        <v-col cols="12" md="7">
          <v-card class="mb-3" outlined>
            <v-card-title>
              <h4>INFORMATION</h4>
              <v-spacer></v-spacer>
              <v-btn
                color="primary"
                @click="savePayment()"
                v-if="paymentMode === 'create'"
                :disabled="isEditButtonDisabled"
              >Save</v-btn>
              <v-btn
                color="primary"
                @click="editPayment()"
                v-if="paymentMode === 'view'"
                :disabled="isEditButtonDisabled"
              >Edit</v-btn>
              <v-btn
                color="pink"
                dark
                @click="updatePayment()"
                class="mr-2"
                v-if="paymentMode ==='edit'"
                :disabled="isEditButtonDisabled"
              >Update</v-btn>
              <v-btn
                color="primary"
                @click="cancelPayment()"
                v-if="paymentMode ==='edit'"
                :disabled="isEditButtonDisabled"
              >Cancel</v-btn>
            </v-card-title>
            <v-divider></v-divider>
            <v-card-text>
              <v-container fluid>
                <v-row>
                  <!-- Payment Date -->
                  <v-col cols="12" md="6">
                    <v-menu
                      v-model="dateCalendar"
                      :close-on-content-click="false"
                      :nudge-right="40"
                      transition="scale-transition"
                      offset-y
                      min-width="290px"
                      :error-messages="errors.date"
                    >
                      <template v-slot:activator="{ on }">
                        <v-text-field
                          v-model="payment.date"
                          label="Payment Date"
                          readonly
                          v-on="on"
                          filled
                          rounded
                          prepend-inner-icon="mdi-calendar-check"
                          :error-messages="errors.date"
                          :disabled="isFieldDisabled"
                        ></v-text-field>
                      </template>
                      <v-date-picker v-model="payment.date" @input="dateCalendar = false"></v-date-picker>
                    </v-menu>
                  </v-col>

                  <!-- Payment Company -->
                  <v-col cols="12" md="6">
                    <v-select
                      v-model="payment.company_id"
                      :items="companies"
                      item-value="id"
                      item-text="name"
                      label="Payment Client"
                      filled
                      rounded
                      prepend-inner-icon="mdi-account-tie"
                      :error-messages="errors.company_id"
                      :disabled="isFieldDisabled"
                    ></v-select>
                  </v-col>

                  <!-- Payment Method -->
                  <v-col cols="12" md="6">
                    <v-select
                      v-model="payment.payment_method"
                      :items="paymentMethods"
                      item-value="name"
                      item-text="name"
                      label="Payment Method"
                      filled
                      rounded
                      prepend-inner-icon="mdi-credit-card-multiple"
                      :error-messages="errors.payment_method"
                      :disabled="isFieldDisabled"
                    ></v-select>
                  </v-col>

                  <!-- Bank -->
                  <v-col cols="12" md="6" v-if="payment.payment_method === 'Bank Transfers'">
                    <v-select
                      v-model="payment.bank"
                      :items="banks"
                      item-value="name"
                      item-text="name"
                      label="Bank"
                      filled
                      rounded
                      prepend-inner-icon="mdi-bank"
                      :error-messages="errors.bank"
                      :disabled="isFieldDisabled"
                    ></v-select>
                  </v-col>

                  <!-- Currency -->
                  <v-col cols="12" md="6">
                    <v-select
                      v-model="payment.currency_id"
                      :items="currencies"
                      item-value="id"
                      item-text="name"
                      label="Currency"
                      filled
                      rounded
                      prepend-inner-icon="mdi-currency-usd"
                      :error-messages="errors.currency_id"
                      :disabled="isFieldDisabled"
                    ></v-select>
                  </v-col>

                  <!-- Total Price -->
                  <v-col cols="12" md="6">
                    <v-currency-field
                      v-model="payment.total_price"
                      label="Total Price"
                      filled
                      rounded
                      prepend-inner-icon="mdi-equal"
                      disabled
                      type="number"
                      :error-messages="errors.total_price"
                    ></v-currency-field>
                  </v-col>

                  <!-- Total Discount -->
                  <v-col cols="12" md="6">
                    <v-currency-field
                      v-model="payment.discount"
                      label="Discount"
                      filled
                      rounded
                      prepend-inner-icon="mdi-minus"
                      disabled
                      type="number"
                      :error-messages="errors.discount"
                    ></v-currency-field>
                  </v-col>

                  <!-- Shipping Handling Fee -->
                  <v-col cols="12" md="6">
                    <v-currency-field
                      v-model="payment.shipping_fee"
                      label="Shipping Handling Fee"
                      filled
                      rounded
                      prepend-inner-icon="mdi-truck-check"
                      disabled
                      type="number"
                      :error-messages="errors.shipping_fee"
                    ></v-currency-field>
                  </v-col>

                  <!-- Total Tax -->
                  <v-col cols="12" md="6">
                    <v-currency-field
                      v-model="payment.tax"
                      label="Tax"
                      filled
                      rounded
                      prepend-inner-icon="mdi-alpha-t-circle"
                      disabled
                      type="number"
                      :error-messages="errors.tax"
                    ></v-currency-field>
                  </v-col>

                  <!-- Grand Total -->
                  <v-col cols="12" md="6">
                    <v-currency-field
                      v-model="grand_total"
                      label="Grand Total"
                      filled
                      rounded
                      prepend-inner-icon="mdi-equal"
                      type="number"
                      disabled
                      :error-messages="errors.grand_total"
                    ></v-currency-field>
                  </v-col>

                  <!-- Exchange Reate -->
                  <v-col cols="12" md="6">
                    <v-currency-field
                      v-model="payment.exchange_rate"
                      label="Exchange Rate"
                      filled
                      rounded
                      prepend-inner-icon="mdi-alpha-e-circle"
                      :disabled="isFieldDisabled"
                      type="number"
                      :error-messages="errors.exchange_rate"
                    ></v-currency-field>
                  </v-col>

                  <!-- Exchanged Total -->
                  <v-col cols="12" md="6">
                    <v-currency-field
                      v-model="exchanged_total_price"
                      label="Exchanged Total"
                      filled
                      rounded
                      prepend-inner-icon="mdi-currency-krw"
                      type="number"
                      disabled
                      :error-messages="errors.total_price"
                    ></v-currency-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>
          </v-card>
        </v-col>

        <v-col cols="12" md="5">
          <RelatedTransaction v-show="paymentId" ref="transactionComponent"></RelatedTransaction>

          <!-- file -->
          <File
            v-show="paymentId"
            ref="filesComponent"
            :model_id="paymentId"
            model="Payment"
            storage="payment_files"
            title="FILE UPLOAD"
            :currentStatus="workStatus"
            :currentMode="paymentMode"
            :permissions="permissions"
          ></File>

          <!-- comment -->
          <Comment v-show="paymentId" ref="commentsComponent" model="Payment" :model_id="paymentId"></Comment>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Axios from "axios";
import { mapState, mapMutations, mapActions, mapGetters } from "vuex";

import File from "../common/File";
import Comment from "../common/Comment";
import Attachment from "../common/Attachment";
import RelatedTransaction from "../../components/Payment/RelatedTransaction";

export default {
  components: { File, Comment, Attachment, RelatedTransaction },
  props: ["companies", "currencies", "paymentMethods", "banks"],
  data() {
    return {
      errors: [],

      dateCalendar: false,
      optionDialog: false,

      payment: {
        id: null,
        work_id: null,
        date: null,
        company_id: null,
        payment_method: null,
        bank: null,
        currency: null,
        total_price: 0,
        discount: 0,
        shipping_fee: 0,
        tax: 0,
        grand_total: 0,
        exchange_rate: 1,
        exchanged_total_price: 0
      },
      defaultpayment: {
        id: null,
        work_id: null,
        date: null,
        company_id: null,
        payment_method: null,
        bank: null,
        currency: null,
        total_price: 0,
        discount: 0,
        shipping_fee: 0,
        tax: 0,
        grand_total: 0,
        exchange_rate: 1,
        exchanged_total_price: 0
      }
    };
  },

  computed: {
    isFieldDisabled() {
      if (this.paymentMode === "view") return true;
      return false;
    },

    isEditButtonDisabled() {
      if (this.workStatus === "OPEN" && this.permissions.includes("edit-work"))
        return false;
      return true;
    },

    grand_total: {
      get: function() {
        this.payment.grand_total =
          this.payment.total_price +
          this.payment.shipping_fee +
          this.payment.tax -
          this.payment.discount;
        return this.payment.grand_total;
      },
      set: function(value) {}
    },

    exchanged_total_price: {
      get: function() {
        this.payment.exchanged_total_price =
          this.payment.grand_total * this.payment.exchange_rate;
        return this.payment.exchanged_total_price;
      },
      set: function(value) {}
    },

    ...mapState("auth", ["permissions"]),

    ...mapState("work", [
      "workId",
      "workIndex",
      "workStatus",
      "workMode",
      "workPhase",
      "workCompany",
      "workProject",
      "workSubProject",
      "workCategory",
      "workCurrency"
    ]),

    ...mapState("invoice", ["invoiceId"]),

    ...mapState("payment", ["paymentId", "paymentMode"])
  },

  methods: {
    ...mapMutations("work", [
      "SET_WORK_ID",
      "SET_WORK_STATUS",
      "SET_WORK_INDEX",
      "SET_WORK_MODE",
      "SET_WORK_PHASE"
    ]),

    ...mapMutations("payment", [
      "SET_PAYMENT_MODE",
      "SET_PAYMENT_ID",
      "RESET_PAYMENT"
    ]),

    ...mapMutations("attachments", [
      "INIT_ATTACHMENT_FILE_LIST",
      "RESET_ATTACHMENT_FILE_LIST"
    ]),

    ...mapActions("attachments", ["UPLOAD_ATTACHMENT_FILES"]),

    initialize() {
      this.SET_PAYMENT_MODE("view");
      if (this.paymentId) {
        Axios.get("/api/payments/" + this.paymentId).then(response => {
          this.payment = response.data.payment;
        });
        setTimeout(() => {
          this.$refs.filesComponent.initFile();
          this.$refs.commentsComponent.initComment();
          this.$refs.transactionComponent.initialize();
        }, 300);
      } else {
        this.SET_PAYMENT_MODE("create");
        if (this.invoiceId) {
          Axios.get("/api/payments/work/" + this.workId).then(response => {
            this.payment = Object.assign({}, response.data.payment);
          });
        }
      }
    },

    savePayment() {
      this.payment.work_id = this.workId;
      Axios.post("/api/payments", this.payment)
        .then(response => {
          this.payment = response.data.payment;
          this.SET_PAYMENT_ID(response.data.payment.id);
          this.SET_PAYMENT_MODE("view");
          this.SET_WORK_PHASE("PAYMENT");
          this.$emit("signal-addItemToList", {
            addType: "updateItem",
            item: response.data.work
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

    updatePayment() {
      Axios.put("/api/payments/" + this.paymentId, this.payment)
        .then(response => {
          console.log(response.data);
          this.payment = response.data.payment;
          this.SET_PAYMENT_MODE("view");
          this.$emit("signal-addItemToList", {
            addType: "updateItem",
            item: response.data.work
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

    editPayment() {
      this.SET_PAYMENT_MODE("edit");
    },

    cancelPayment() {
      this.initialize();
      this.SET_PAYMENT_MODE("view");
    },

    resetPayment() {
      this.payment = Object.assign({}, this.defaultPayment);
      this.errors = [];
      this.RESET_PAYMENT();
      // this.RESET_ATTACHMENT_FILE_LIST()
      this.$refs.commentsComponent.resetComment();
      this.$refs.filesComponent.resetFile();
    }
  }
};
</script>