<template>
  <div class="wrap-component-table">
    <v-data-table
      :headers="headers"
      :items="purchaseOrders.data"
      :search="search"
      outline
      :items-per-page="15"
    >
      <template v-slot:top>
        <v-toolbar flat height="85" color="blue" dark>
          <v-toolbar-title>
            <span class="page-title">PURCHASE ORDER LIST</span>
          </v-toolbar-title>
          <v-divider class="mx-4" inset vertical></v-divider>

          <v-tooltip bottom>
            <template v-slot:activator="{ on }">
              <v-btn
                color="primary"
                fab
                depressed
                class="mr-1"
                dark
                v-on="on"
                icon
                @click="openWorkFilterDialog()"
              >
                <v-icon color="white">mdi-filter-menu-outline</v-icon>
              </v-btn>
            </template>
            <span>Filter</span>
          </v-tooltip>

          <v-tooltip bottom>
            <template v-slot:activator="{ on }">
              <v-btn color="primary" fab depressed class="mr-1" dark v-on="on" icon>
                <v-icon color="white">mdi-microsoft-excel</v-icon>
              </v-btn>
            </template>
            <span>Convert To Excel</span>
          </v-tooltip>

          <v-tooltip bottom>
            <template v-slot:activator="{ on }">
              <v-btn
                color="primary"
                @click="openCreatePurchaseOrderDialog()"
                fab
                depressed
                dark
                v-on="on"
                icon
              >
                <v-icon color="white">mdi-plus</v-icon>
              </v-btn>
            </template>
            <span>Add Work</span>
          </v-tooltip>

          <v-spacer></v-spacer>

          <v-chip small>{{ purchaseOrders.to }} of {{ totalRecords }}</v-chip>
          <v-tooltip bottom>
            <template v-slot:activator="{ on }">
              <v-btn icon @click="prevPage()" :disabled="isPrevBtnDisabled" v-on="on">
                <v-icon>mdi-arrow-left</v-icon>
              </v-btn>
            </template>
            <span>Prev 500 Records</span>
          </v-tooltip>

          <v-btn icon @click="initialize()">
            <v-icon>mdi-square-medium</v-icon>
          </v-btn>

          <v-tooltip bottom>
            <template v-slot:activator="{ on }">
              <v-btn icon @click="nextPage()" :disabled="isNextBtnDisabled" v-on="on">
                <v-icon>mdi-arrow-right</v-icon>
              </v-btn>
            </template>
            <span>Next 500 Records</span>
          </v-tooltip>

          <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="Search"
            single-line
            hide-details
            solo-inverted
          ></v-text-field>

          <v-dialog
            v-model="dialog"
            fullscreen
            hide-overlay
            transition="dialog-bottom-transition"
            persistent
            :no-click-animation="true"
          >
            <PurchaseOrderDialog
              ref="purchaseOrderComponent"
              @signal-closePurchaseOrderDialog="closePurchaseOrderDialog"
              @signal-changeItemStatusToList="changeItemStatusToList"
              @signal-addItemToList="addItemToList"
              :companies="companies"
              :projects="projects"
              :branches="branches"
              :categories="categories"
              :currencies="currencies"
              :users="users"
              :units="units"
              :suppliers="suppliers"
              :purchaseOrderTermsAndConditions="purchaseOrderTermsAndConditions"
            ></PurchaseOrderDialog>
          </v-dialog>
        </v-toolbar>
      </template>

      <template v-slot:item.number="{ item }">
        <span class="font-weight-black" @click="oepnEditPurchaseOrderDialog(item)">{{ item.number }}</span>
      </template>

      <template v-slot:item.total_price="{ item }">
        <div class="d-flex justify-space-between">
          <span class="d-block">{{ item.currency }}</span>
          <span class="d-block">&nbsp;{{ formatPrice(item.total_price) }}</span>
        </div>
      </template>

      <template v-slot:no-data>
        <v-btn color="primary" @click="initialize">Reset</v-btn>
      </template>
    </v-data-table>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
import PurchaseOrderDialog from "../components/purchase-order/PurchaseOrderDialog";
import Axios from "axios";
export default {
  components: { PurchaseOrderDialog },
  data: () => ({
    errors: [],
    dialog: false,
    defaultData: "",
    search: "",
    purchaseOrders: [],
    companies: [],
    projects: [],
    branches: [],
    categories: [],
    currencies: [],
    users: [],
    units: [],
    suppliers: [],
    purchaseOrderTermsAndConditions: [],
    totalRecords: "",

    headers: [
      { text: "Number", value: "number", divider: true },
      {
        text: "Issued Date",
        align: "center",
        value: "issued_date",
        divider: true
      },
      { text: "Status", value: "status", divider: true },
      { text: "Client", value: "company", divider: true },
      { text: "Project", value: "project", divider: true },
      { text: "Category", value: "category", divider: true },
      { text: "Total Price", value: "total_price", divider: true },
      { text: "SR Number", align: "center", value: "sr_number", divider: true }
    ]
  }),

  computed: {
    isPrevBtnDisabled() {
      if (this.purchaseOrders.prev_page_url === null) return true;
      return false;
    },

    isNextBtnDisabled() {
      if (this.purchaseOrders.next_page_url === null) return true;
      return false;
    },

    ...mapState("purchase_order", [
      "purchaseOrderIndex",
      "purchaseOrderMode",
      "purchaseOrderStatus",
      "purchaseOrderId"
    ]),

    ...mapState("auth", ["user", "isLogIn", "permissions"]),

    isCreateButtonDisabled() {
      // return this.permissions.includes("edit-quotation") ? false : true
    }
  },

  watch: {
    dialog(val) {
      val || this.closePurchaseOrderDialog();
    },

    dialog: function(val) {
      document.querySelector("html").style.overflow = val ? "hidden" : null;
    }
  },

  created() {
    // 외부 링크로 들어 오는 경우라면
    if (Object.keys(this.$route.params).length !== 0) {
      if (!localStorage.getItem("isLogIn")) {
        this.$router.push({ name: "login" });
      }
    }
    this.initialize();
  },

  beforeDestroy() {
    this.purchaseOrders = [];
    this.companies = [];
    this.projects = [];
    this.branches = [];
    this.categories = [];
    this.currencies = [];
    this.users = [];
    this.units = [];
  },

  methods: {
    ...mapMutations("purchase_order", [
      "SET_PURCHASE_ORDER_INDEX",
      "SET_PURCHASE_ORDER_ID",
      "SET_PURCHASE_ORDER_MODE",
      "SET_PURCHASE_ORDER_STATUS",
      "RESET_PURCHASE_ORDER"
    ]),

    ...mapMutations("items", ["RESET_ITEM_LIST"]),

    ...mapMutations("fields", ["RESET_FIELD_LIST"]),

    initialize() {
      Axios.get("/api/purchase-orders").then(response => {
        console.log(response.data);
        this.purchaseOrders = response.data.purchaseOrders;
        this.totalRecords = response.data.totalRecords;
        this.companies = Object.freeze(response.data.companies);
        this.projects = Object.freeze(response.data.projects);
        this.branches = Object.freeze(response.data.branches);
        this.categories = Object.freeze(response.data.categories);
        this.currencies = Object.freeze(response.data.currencies);
        this.users = Object.freeze(response.data.users);
        this.units = Object.freeze(response.data.units);
        this.suppliers = Object.freeze(response.data.suppliers);
        this.purchaseOrderTermsAndConditions = Object.freeze(
          response.data.purchaseOrderTermsAndConditions
        );

        // 외부 링크로 들어 오는 경우라면
        if (Object.keys(this.$route.params).length !== 0) {
          const item = this.purchaseOrders.find(
            item => item.purchase_order_id === Number(this.$route.params.id)
          );
          item
            ? this.oepnEditPurchaseOrderDialog(item)
            : alert("There is no Purchase Order what you request");
        }
      });
    },

    addItemToList(purchaseOrder) {
      if (purchaseOrder.addType === "newItem") {
        this.purchaseOrders.data.unshift(purchaseOrder.item);
      } else {
        let item = this.purchaseOrders.data.find(
          item => item.purchase_order_id === this.purchaseOrderId
        );
        Object.assign(item, purchaseOrder.item);
      }
    },

    changeItemStatusToList(status) {
      if (this.purchaseOrderIndex > -1) {
        this.purchaseOrders.data[this.purchaseOrderIndex].status = status;
      } else {
        let item = this.purchaseOrders.data.find(
          item => item.id === this.purchaseOrderId
        );
        item.status = status;
      }
    },

    nextPage() {
      Axios.get(
        this.purchaseorders.next_page_url + "&" + this.workFilterQuery
      ).then(response => {
        this.purchaseorders = response.data.purchaseorders;
      });
    },

    prevPage() {
      Axios.get(
        this.purchaseOrders.prev_page_url + "&" + this.workFilterQuery
      ).then(response => {
        this.purchaseOrders = response.data.purchaseOrders;
      });
    },

    openCreatePurchaseOrderDialog() {
      this.dialog = true;
      const index = -1;
      this.SET_PURCHASE_ORDER_INDEX(index);
      this.SET_PURCHASE_ORDER_MODE("create");
      this.SET_PURCHASE_ORDER_STATUS("OPENED");
    },

    oepnEditPurchaseOrderDialog(item) {
      const index = this.purchaseOrders.data.indexOf(item);
      this.SET_PURCHASE_ORDER_INDEX(index);
      this.SET_PURCHASE_ORDER_MODE("view");
      this.SET_PURCHASE_ORDER_ID(item.purchase_order_id);
      this.SET_PURCHASE_ORDER_STATUS(item.status);
      setTimeout(() => {
        this.$refs.purchaseOrderComponent.initPurchaseOrder(
          item.purchase_order_id
        );
      }, 500);
      this.dialog = true;
    },

    closePurchaseOrderDialog() {
      this.dialog = false;
    },

    formatPrice(value) {
      let val = (value / 1).toFixed(2).replace(",", ".");
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
  }
};
</script>