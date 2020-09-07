<template>
  <div class="wrap-sale-order">
    <v-container fluid>
      <v-row>
        <v-col cols="12" md="7">
          <v-card class="mb-3" outlined>
            <v-card-title>
              <h4>INFORMATION</h4>
              <v-spacer></v-spacer>
              <v-btn
                color="primary"
                @click="saveSaleOrder()"
                v-if="saleOrderMode === 'create'"
                :disabled="isEditButtonDisabled"
              >Save</v-btn>
              <v-btn
                color="primary"
                @click="editSaleOrder()"
                v-if="saleOrderMode === 'view'"
                :disabled="isEditButtonDisabled"
              >Edit</v-btn>
              <v-btn
                color="pink"
                dark
                @click="updateSaleOrder()"
                class="mr-2"
                v-if="saleOrderMode ==='edit'"
                :disabled="isEditButtonDisabled"
              >Update</v-btn>
              <v-btn
                color="primary"
                @click="cancelSaleOrder()"
                v-if="saleOrderMode ==='edit'"
                :disabled="isEditButtonDisabled"
              >Cancel</v-btn>
            </v-card-title>
            <v-divider></v-divider>
            <v-card-text>
              <v-container fluid>
                <v-row>
                  <!-- Sale Order Number -->
                  <v-col cols="12" md="6">
                    <v-text-field
                      v-model="saleOrder.number"
                      label="Number"
                      filled
                      rounded
                      prepend-inner-icon="mdi-format-list-numbered"
                      :disabled="isFieldDisabled"
                      :error-messages="errors.number"
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
                          v-model="saleOrder.date"
                          label="PO Received On"
                          readonly
                          v-on="on"
                          filled
                          rounded
                          prepend-inner-icon="mdi-calendar-check"
                          :error-messages="errors.date"
                          :disabled="isFieldDisabled"
                        ></v-text-field>
                      </template>
                      <v-date-picker v-model="saleOrder.date" @input="dateCalendar = false"></v-date-picker>
                    </v-menu>
                  </v-col>

                  <!-- Requestor -->
                  <v-col class="d-flex" cols="12" md="6">
                    <v-select
                      v-model="saleOrder.requestor_id"
                      item-text="name"
                      item-value="id"
                      :items="requestors"
                      label="Requestor"
                      filled
                      rounded
                      prepend-inner-icon="mdi-account-star"
                      :disabled="isFieldDisabled"
                      :error-messages="errors.requestor_id"
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

                  <!-- Deliver To -->
                  <v-col cols="12" md="6">
                    <v-text-field
                      v-model="saleOrder.deliver_to"
                      label="Deliver To"
                      filled
                      rounded
                      prepend-inner-icon="mdi-map-marker"
                      :error-messages="errors.deliver_to"
                      :disabled="isFieldDisabled"
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>
          </v-card>

          <SaleOrderLine
            ref="saleOrderLineComponent"
            :units="units"
            :currentStatus="workStatus"
            :currentMode="saleOrderMode"
            :permissions="permissions"
            editPermission="edit-work"
            approvePermission="approve-work"
            :option="saleOrderOption"
          ></SaleOrderLine>

          <Attachment
            ref="attachmentComponent"
            model="SaleOrder"
            storage="sale_order_attachments"
            :model_id="saleOrderId"
            :currentStatus="workStatus"
            :currentMode="saleOrderMode"
            :permissions="permissions"
            editPermission="edit-work"
            approvePermission="approve-work"
            title="Attach PO received from client"
          ></Attachment>
        </v-col>
        <v-col cols="12" md="5">
          <!-- file -->
          <keep-alive>
            <File
              v-show="saleOrderId"
              ref="filesComponent"
              :model_id="saleOrderId"
              model="SaleOrder"
              storage="sale_order_files"
              title="FILE UPLOAD"
              :currentStatus="workStatus"
              :currentMode="saleOrderMode"
              :permissions="permissions"
            ></File>
          </keep-alive>

          <!-- comment -->
          <keep-alive>
            <Comment
              v-show="saleOrderId"
              ref="commentsComponent"
              model="SaleOrder"
              :model_id="saleOrderId"
            ></Comment>
          </keep-alive>
        </v-col>
      </v-row>
    </v-container>

    <v-dialog v-model="optionDialog" max-width="500px">
      <SaleOrderOption ref="saleOrderOptionComponent" @signal-closeOptionDialog="closeOptionDialog"></SaleOrderOption>
    </v-dialog>
  </div>
</template>

<script>
import Axios from "axios";
import { mapState, mapMutations, mapActions, mapGetters } from "vuex";

import File from "../common/File";
import Comment from "../common/Comment";
import Attachment from "../common/Attachment";
import SaleOrderOption from "../../components/work/SaleOrderOption";
import SaleOrderLine from "../../components/work/SaleOrderLine";

export default {
  components: { File, Comment, SaleOrderOption, SaleOrderLine, Attachment },
  props: ["units"],
  data() {
    return {
      errors: [],
      dateCalendar: false,
      requestors: [],
      optionDialog: false,
      saleOrder: {
        id: null,
        work_id: null,
        number: null,
        date: null,
        requestor_id: null,
        deliver_to: null,
        total_price: 0
      },
      defaultSaleOrder: {
        id: null,
        work_id: null,
        number: null,
        date: null,
        requestor_id: null,
        deliver_to: null,
        total_price: 0
      }
    };
  },

  computed: {
    isFieldDisabled() {
      if (this.saleOrderMode === "view") return true;
      return false;
    },

    isEditButtonDisabled() {
      if (this.workStatus === "OPEN" && this.permissions.includes("edit-work"))
        return false;
      return true;
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

    ...mapState("sale_order", [
      "saleOrderId",
      "saleOrderMode",
      "saleOrderOption"
    ]),

    ...mapState("sale_order_line", ["saleOrderLines"]),

    ...mapGetters("sale_order_line", ["saleOrderTotalPrice"])
  },

  methods: {
    ...mapMutations("work", [
      "SET_WORK_ID",
      "SET_WORK_STATUS",
      "SET_WORK_INDEX",
      "SET_WORK_MODE",
      "SET_WORK_PHASE"
    ]),

    ...mapMutations("sale_order", [
      "SET_SALE_ORDER_MODE",
      "SET_SALE_ORDER_ID",
      "SET_SALE_ORDER_OPTION",
      "RESET_SALE_ORDER"
    ]),

    ...mapMutations("sale_order_line", [
      "INIT_SALE_ORDER_LINE_LIST",
      "RESET_SALE_ORDER_LINE_LIST"
    ]),

    ...mapMutations("attachments", [
      "INIT_ATTACHMENT_FILE_LIST",
      "RESET_ATTACHMENT_FILE_LIST"
    ]),

    ...mapActions("sale_order", ["SAVE_SALE_ORDER_OPTION"]),

    ...mapActions("sale_order_line", ["SAVE_SALE_ORDER_LINES"]),

    ...mapActions("attachments", ["UPLOAD_ATTACHMENT_FILES"]),

    initialize() {
      console.log(this.workCompany);
      if (this.saleOrderId) {
        this.SET_SALE_ORDER_MODE("view");
        Axios.get("/api/sale-orders/" + this.saleOrderId).then(response => {
          console.log(response.data);
          this.saleOrder = response.data.saleOrder;
          this.requestors = response.data.requestors;
          this.SET_SALE_ORDER_OPTION(response.data.option);
          this.INIT_SALE_ORDER_LINE_LIST(response.data.saleOrderLines);
          this.INIT_ATTACHMENT_FILE_LIST(response.data.attachments);
        });
        setTimeout(() => {
          this.$refs.filesComponent.initFile();
          this.$refs.commentsComponent.initComment();
        }, 300);
      } else {
        this.SET_SALE_ORDER_MODE("create");
        if (this.workId) {
          setTimeout(() => {
            this.getEmployees();
          }, 300);
        }
      }
    },

    getEmployees() {
      Axios.get("/api/employees/Company/" + this.workCompany).then(response => {
        this.requestors = response.data.employees;
      });
    },

    saveSaleOrder() {
      this.saleOrder.work_id = this.workId;
      this.saleOrder.total_price = this.$refs.saleOrderLineComponent.saleOrderTotalPrice;
      Axios.post("/api/sale-orders", this.saleOrder)
        .then(response => {
          this.saleOrder = response.data.saleOrder;
          this.SET_SALE_ORDER_ID(response.data.saleOrder.id);
          this.SET_SALE_ORDER_MODE("view");
          this.SAVE_SALE_ORDER_OPTION(response.data.saleOrder.id);
          this.SAVE_SALE_ORDER_LINES(response.data.saleOrder.id);
          this.UPLOAD_ATTACHMENT_FILES(response.data.saleOrder.id);
          this.SET_WORK_PHASE("RECPT PO");
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

    updateSaleOrder() {
      this.saleOrder.total_price = this.$refs.saleOrderLineComponent.saleOrderTotalPrice;
      Axios.put("/api/sale-orders/" + this.saleOrderId, this.saleOrder)
        .then(response => {
          this.saleOrder = response.data.saleOrder;
          this.SET_SALE_ORDER_MODE("view");
          this.SAVE_SALE_ORDER_LINES(response.data.saleOrder.id);
          this.UPLOAD_ATTACHMENT_FILES(response.data.saleOrder.id);
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

    editSaleOrder() {
      this.SET_SALE_ORDER_MODE("edit");
    },

    cancelSaleOrder() {
      this.initialize();
      this.SET_SALE_ORDER_MODE("view");
    },

    openOptionDialog() {
      this.optionDialog = true;
    },

    closeOptionDialog() {
      this.optionDialog = false;
    },

    resetSaleOrder() {
      console.log("reset");
      this.saleOrder = Object.assign({}, this.defaultSaleOrder);
      this.errors = [];
      this.requestors = [];
      this.RESET_SALE_ORDER();
      this.RESET_SALE_ORDER_LINE_LIST();
      this.RESET_ATTACHMENT_FILE_LIST();
      this.$refs.commentsComponent.resetComment();
      this.$refs.filesComponent.resetFile();
    }
  }
};
</script>