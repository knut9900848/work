
<template>
  <div class="wrap-component-table work-table">
    {{ workFilterQuery }}
    <v-data-table
      :headers="headers"
      :items="works.data"
      sort-by="calories"
      :search="search"
      outline
      :items-per-page="15"
    >
      <template v-slot:top>
        <v-toolbar flat height="85" color="blue" dark>
          <v-toolbar-title class="font-weight-black">WORK LIST</v-toolbar-title>
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
              <v-btn
                color="primary"
                fab
                depressed
                class="mr-1"
                dark
                v-on="on"
                icon
                @click="convertExcel()"
              >
                <v-icon color="white">mdi-microsoft-excel</v-icon>
              </v-btn>
            </template>
            <span>Convert To Excel</span>
          </v-tooltip>

          <v-tooltip bottom>
            <template v-slot:activator="{ on }">
              <v-btn
                color="primary"
                @click="openCreateWorkDialog()"
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

          <v-tooltip bottom>
            <template v-slot:activator="{ on }">
              <v-btn
                color="primary"
                @click="generateDailyReport()"
                fab
                depressed
                dark
                v-on="on"
                icon
              >
                <v-icon color="white">mdi-plus</v-icon>
              </v-btn>
            </template>
            <span>Daily Report</span>
          </v-tooltip>

          <v-tooltip bottom>
            <template v-slot:activator="{ on }">
              <v-btn
                color="primary"
                @click="generateWeeklyReport()"
                fab
                depressed
                dark
                v-on="on"
                icon
              >
                <v-icon color="white">mdi-plus</v-icon>
              </v-btn>
            </template>
            <span>Weekly Report</span>
          </v-tooltip>

          <v-spacer></v-spacer>

          <v-chip small>{{ works.to }} of {{ totalRecords }}</v-chip>
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
            v-model="workDialog"
            fullscreen
            hide-overlay
            transition="dialog-bottom-transition"
            persistent
            :no-click-animation="true"
          >
            <v-card class="wrap-work-content">
              <v-toolbar dark color="blue-grey darken-1" flat>
                <v-btn icon dark @click="closeWorkDialog()">
                  <v-icon>mdi-close</v-icon>
                </v-btn>
                <v-toolbar-title>
                  work id:[{{ workId}}] /
                  work index:[{{ workIndex}}] /
                  work mode:[{{ workMode }}] /
                  work status:[{{ workStatus }}] /
                  SaleOrder Id:[{{ saleOrderId }}] /
                  Wcc Id:[{{ wccId }}]
                  Invoice Id:[{{ invoiceId }}]
                  Wcc Id:[{{ wccId }}]
                  Payment Id:[{{ paymentId }}]
                </v-toolbar-title>
                <v-spacer></v-spacer>
                <v-btn icon v-show="activeTab === 1" @click="openSaleOrderOptionDialog()">
                  <v-icon>mdi-cog</v-icon>
                </v-btn>
                <v-btn icon v-show="activeTab === 3" @click="openInvoiceOptionDialog()">
                  <v-icon>mdi-cog</v-icon>
                </v-btn>
                <v-btn icon>
                  <v-icon>mdi-dots-vertical</v-icon>
                </v-btn>
                <template v-slot:extension>
                  <v-tabs
                    v-model="activeTab"
                    align-with-title
                    fixed-tabs
                    dark
                    background-color="primary"
                    show-arrows
                  >
                    <v-tabs-slider color="yellow"></v-tabs-slider>
                    <v-tab
                      v-for="tab in tabs"
                      :key="tab.id"
                      @click="changeTab(tab.id)"
                    >{{ tab.name }}</v-tab>
                  </v-tabs>
                </template>
              </v-toolbar>
              <v-tabs-items v-model="activeTab">
                <v-tab-item transition="no-transition" reverse-transition="no-transition">
                  <WorkDialog
                    ref="workComponent"
                    :companies="companies"
                    :projects="projects"
                    :categories="categories"
                    :currencies="currencies"
                    @signal-addItemToList="addItemToList"
                    @signal-changeWorkStatus="changeWorkStatus"
                  ></WorkDialog>
                </v-tab-item>

                <v-tab-item transition="no-transition" reverse-transition="no-transition">
                  <SaleOrderDialog
                    ref="saleOrderComponent"
                    :units="units"
                    @signal-addItemToList="addItemToList"
                  ></SaleOrderDialog>
                </v-tab-item>

                <v-tab-item transition="no-transition" reverse-transition="no-transition">
                  <WccDialog
                    ref="wccComponent"
                    :companies="companies"
                    @signal-addItemToList="addItemToList"
                  ></WccDialog>
                </v-tab-item>

                <v-tab-item transition="no-transition" reverse-transition="no-transition">
                  <InvoiceDialog
                    ref="invoiceComponent"
                    :companies="companies"
                    :currencies="currencies"
                    :units="units"
                    :banks="banks"
                    :users="users"
                    @signal-addItemToList="addItemToList"
                  ></InvoiceDialog>
                </v-tab-item>

                <v-tab-item transition="no-transition" reverse-transition="no-transition">
                  <PaymentDialog
                    ref="paymentComponent"
                    :companies="companies"
                    :currencies="currencies"
                    :banks="banks"
                    :paymentMethods="paymentMethods"
                    @signal-addItemToList="addItemToList"
                  ></PaymentDialog>
                </v-tab-item>
              </v-tabs-items>
            </v-card>
          </v-dialog>
        </v-toolbar>
      </template>

      <template v-slot:item.number="{ item }">
        <v-chip @click="openUpdateWorkDialog(item)" color="light-blue darken-3">
          <span class="font-weight-black white--text">{{ item.number }}</span>
        </v-chip>
      </template>

      <template v-slot:item.sale_order_number="{ item }">
        <span v-if="item.sale_order_number">{{ item.sale_order_number }}</span>
        <span v-else class="grey--text">N/A</span>
      </template>

      <template v-slot:item.sale_order_date="{ item }">
        <span v-if="item.sale_order_date">{{ item.sale_order_date }}</span>
        <span v-else class="grey--text">N/A</span>
      </template>

      <template v-slot:item.wcc_date="{ item }">
        <span v-if="item.wcc_date">{{ item.wcc_date }}</span>
        <span v-else class="grey--text">N/A</span>
      </template>

      <template v-slot:item.invoice_number="{ item }">
        <span v-if="item.invoice_number">{{ item.invoice_number }}</span>
        <span v-else class="grey--text">N/A</span>
      </template>

      <template v-slot:item.invoice_date="{ item }">
        <span v-if="item.invoice_date">{{ item.invoice_date }}</span>
        <span v-else class="grey--text">N/A</span>
      </template>

      <template v-slot:item.payment_due_date="{ item }">
        <span v-if="item.payment_due_date">{{ item.payment_due_date }}</span>
        <span v-else class="grey--text">N/A</span>
      </template>

      <template v-slot:item.payment_date="{ item }">
        <span v-if="item.payment_date">{{ item.payment_date }}</span>
        <span v-else class="grey--text">N/A</span>
      </template>

      <template v-slot:item.sale_order_total_price="{ item }">
        <div class="d-flex justify-space-between">
          <span class="d-block">{{ item.currency_name }}</span>
          <span class="d-block">{{ formatPrice(item.sale_order_total_price) }}</span>
        </div>
      </template>

      <template v-slot:item.invoice_total_price="{ item }">
        <div class="d-flex justify-space-between">
          <span class="d-block">{{ item.currency_name }}</span>
          <span class="d-block">{{ formatPrice(item.invoice_total_price) }}</span>
        </div>
      </template>

      <template v-slot:item.payment_exchanged_total_price="{ item }">
        <div class="d-flex justify-space-between">
          <span class="d-block">KRW</span>
          <span class="d-block">{{ formatPrice(item.payment_exchanged_total_price) }}</span>
        </div>
      </template>

      <template v-slot:item.payment_total_price="{ item }">
        <div class="d-flex justify-space-between">
          <span class="d-block">{{ item.payment_currency }}</span>
          <span class="d-block">{{ formatPrice(item.payment_total_price) }}</span>
        </div>
      </template>

      <template v-slot:no-data>
        <v-btn color="primary" @click="initialize">Reset</v-btn>
      </template>
    </v-data-table>

    <v-dialog v-model="workFilterDialog" max-width="1024">
      <WorkFilter
        :companies="companies"
        :projects="projects"
        :categories="categories"
        @signal-workFilter="workFilter"
        @signal-resetWorkFilter="initialize"
        @signal-closeWorkFilterDialog="closeWorkFilterDialog"
      ></WorkFilter>
    </v-dialog>
  </div>
</template>

<script>
import WorkDialog from "../components/work/WorkDialog";
import SaleOrderDialog from "../components/work/SaleOrderDialog";
import WccDialog from "../components/work/WccDialog";
import InvoiceDialog from "../components/work/InvoiceDialog";
import PaymentDialog from "../components/work/PaymentDialog";
import WorkFilter from "../components/work/WorkFilter";
import Axios from "axios";
import { mapState, mapMutations } from "vuex";

export default {
  components: {
    WorkDialog,
    SaleOrderDialog,
    WccDialog,
    InvoiceDialog,
    PaymentDialog,
    WorkFilter
  },
  data: () => ({
    workDialog: false,
    workFilterDialog: false,
    search: null,
    activeTab: 0,
    tabHistory: [],
    tabs: [
      { id: 0, name: "Work" },
      { id: 1, name: "Purchase Order" },
      { id: 2, name: "WCC Apprived" },
      { id: 3, name: "Invoice" },
      { id: 4, name: "Payment" }
    ],
    headers: [
      { text: "Number", value: "number", divider: true },
      { text: "Status", value: "status", divider: true },
      { text: "Phase", value: "phase", divider: true },
      {
        text: "PO Number",
        value: "sale_order_number",
        divider: true,
        align: "center"
      },
      {
        text: "PO RECV",
        value: "sale_order_date",
        divider: true,
        align: "center"
      },
      { text: "WCC APPRVD", value: "wcc_date", divider: true, align: "center" },
      {
        text: "INV Number",
        value: "invoice_number",
        divider: true,
        align: "center"
      },
      {
        text: "INV Date",
        value: "invoice_date",
        divider: true,
        align: "center"
      },
      {
        text: "PYMT Due Date",
        value: "payment_due_date",
        divider: true,
        align: "center"
      },
      {
        text: "PYMT Date",
        value: "payment_date",
        divider: true,
        align: "center"
      },
      { text: "PO TOT", value: "sale_order_total_price", divider: true },
      { text: "INV TOT", value: "invoice_total_price", divider: true },
      { text: "PYMT TOT", value: "payment_total_price", divider: true },
      {
        text: "EXR",
        value: "payment_exchange_rate",
        divider: true,
        align: "right"
      },
      {
        text: "Exchanged TOT",
        value: "payment_exchanged_total_price",
        divider: true
      }
    ],

    works: [],
    companies: [],
    projects: [],
    categories: [],
    currencies: [],
    units: [],
    banks: [],
    paymentMethods: [],
    users: [],

    totalRecords: null,

    editedIndex: -1,
    editedItem: {
      id: null,
      status: null,
      phase: null,
      sale_order_number: null,
      invoice_number: null,
      sale_order_date: null,
      wcc_date: null,
      invoice_date: null,
      payment_date: null,
      payment_term: null,
      sale_order_total_price: 0,
      invoice_total_price: 0,
      payment_total_price: 0,
      payment_due_date: null,
      currency_name: null,
      payment_currency: null
    },
    defaultItem: {
      id: null,
      status: null,
      phase: null,
      sale_order_number: null,
      invoice_number: null,
      po_date: null,
      inv_date: null,
      payment_date: null,
      payment_term: null,
      sale_order_total_price: 0,
      invoice_total_price: 0,
      payment_total_price: 0,
      payment_due_date: null,
      currency_name: null,
      payment_currency: null
    }
  }),

  computed: {
    isPrevBtnDisabled() {
      if (this.works.prev_page_url === null) return true;
      return false;
    },

    isNextBtnDisabled() {
      if (this.works.next_page_url === null) return true;
      return false;
    },

    ...mapState("work", [
      "workId",
      "workIndex",
      "workStatus",
      "workMode",
      "workFilterQuery"
    ]),

    ...mapState("sale_order", ["saleOrderMode", "saleOrderId"]),

    ...mapState("wcc", ["wccId", "wccMode"]),

    ...mapState("invoice", ["invoiceId", "invoiceMode"]),

    ...mapState("payment", ["paymentId", "paymentMode"])
  },

  watch: {
    workDialog(val) {
      val || this.close();
    },

    workDialog: function(val) {
      document.querySelector("html").style.overflow = val ? "hidden" : null;
    }
  },

  created() {
    this.initialize();
  },

  methods: {
    ...mapMutations("work", [
      "SET_WORK_ID",
      "SET_WORK_INDEX",
      "SET_WORK_STATUS",
      "SET_WORK_MODE"
    ]),

    ...mapMutations("sale_order", ["SET_SALE_ORDER_ID", "SET_SALE_ORDER_MODE"]),

    ...mapMutations("wcc", ["SET_WCC_MODE", "SET_WCC_ID"]),

    ...mapMutations("invoice", ["SET_INVOICE_MODE", "SET_INVOICE_ID"]),

    ...mapMutations("payment", ["SET_PAYMENT_MODE", "SET_PAYMENT_ID"]),

    initialize() {
      Axios.get("/api/works")
        .then(response => {
          console.log(response.data);
          this.works = response.data.works;
          this.totalRecords = response.data.totalRecords;
          this.companies = Object.freeze(response.data.companies);
          this.projects = Object.freeze(response.data.projects);
          this.categories = Object.freeze(response.data.categories);
          this.currencies = Object.freeze(response.data.currencies);
          this.units = Object.freeze(response.data.units);
          this.banks = Object.freeze(response.data.banks);
          this.paymentMethods = Object.freeze(response.data.paymentMethods);
          this.users = Object.freeze(response.data.users);
        })
        .catch(error => {
          console.log(error);
        });
    },

    workFilter() {
      Axios.get("/api/works?" + this.workFilterQuery)
        .then(response => {
          this.works = response.data.works;
          this.totalRecords = response.data.totalRecords;
          console.log(this.$route);
        })
        .catch(error => {
          console.log(error);
        });
    },

    nextPage() {
      Axios.get(this.works.next_page_url + "&" + this.workFilterQuery).then(
        response => {
          this.works = response.data.works;
        }
      );
    },

    prevPage() {
      Axios.get(this.works.prev_page_url + "&" + this.workFilterQuery).then(
        response => {
          this.works = response.data.works;
        }
      );
    },

    openCreateWorkDialog() {
      this.workDialog = true;
      this.SET_WORK_INDEX(-1);
      this.SET_WORK_MODE("create");
    },

    openUpdateWorkDialog(item) {
      this.workDialog = true;
      this.SET_WORK_ID(item.id);
      this.SET_WORK_INDEX(this.works.data.indexOf(item));
      this.SET_WORK_STATUS(item.status);
      this.SET_WORK_MODE("view");
      this.$nextTick(function() {
        this.$refs.workComponent.initialize();
      });
    },

    closeWorkDialog() {
      console.log("Reset", this.tabHistory);
      this.workDialog = false;
      this.activeTab = "0";
      this.$refs.workComponent.resetWork();
      this.tabHistory.includes(1) &&
        this.$refs.saleOrderComponent.resetSaleOrder();
      this.tabHistory.includes(2) && this.$refs.wccComponent.resetWcc();
      this.tabHistory.includes(3) && this.$refs.invoiceComponent.resetInvoice();
      this.tabHistory.includes(4) && this.$refs.paymentComponent.resetPayment();
      this.tabHistory = [];
      this.SET_SALE_ORDER_ID(null);
      this.SET_SALE_ORDER_MODE(null);
      this.SET_WCC_MODE(null);
      this.SET_WCC_ID(null);
      this.SET_INVOICE_MODE(null);
      this.SET_INVOICE_ID(null);
      this.SET_PAYMENT_MODE(null);
      this.SET_PAYMENT_ID(null);
    },

    addItemToList(work) {
      if (work.addType === "newItem") {
        this.works.data.unshift(work.item);
      } else {
        let item = this.works.data.find(element => element.id === this.workId);
        Object.assign(item, work.item);
      }
    },

    changeWorkStatus(workStatus) {
      let item = this.works.data.find(element => element.id === this.workId);
      item.status = workStatus;
    },

    changeTab(tabId) {
      this.tabHistory.push(tabId);
      switch (tabId) {
        case 0:
          this.$refs.workComponent.initialize();
          break;
        case 1:
          setTimeout(() => {
            this.$refs.saleOrderComponent.initialize();
          }, 300);
          break;
        case 2:
          setTimeout(() => {
            this.$refs.wccComponent.initialize();
          }, 300);
          break;
        case 3:
          setTimeout(() => {
            this.$refs.invoiceComponent.initialize();
          }, 300);
          break;
        case 4:
          setTimeout(() => {
            this.$refs.paymentComponent.initialize();
          }, 300);
          break;
        default:
          break;
      }
    },

    openSaleOrderOptionDialog() {
      this.$nextTick(() => {
        this.$refs.saleOrderComponent.openOptionDialog();
      });
    },

    openInvoiceOptionDialog() {
      this.$nextTick(() => {
        this.$refs.invoiceComponent.openOptionDialog();
      });
    },

    openWorkFilterDialog() {
      this.workFilterDialog = true;
    },

    closeWorkFilterDialog() {
      this.workFilterDialog = false;
    },

    formatPrice(value) {
      let val = (value / 1).toFixed(2).replace(",", ".");
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },

    generateDailyReport() {
      Axios.post("/api/daily-reports", "daily").catch(error => {
        console.log(error);
      });
    },

    generateWeeklyReport() {
      Axios.post("/api/weekly-reports", "daily").catch(error => {
        console.log(error);
      });
    },

    convertExcel() {
      console.log(this.workFilterQuery);
      Axios.get("/api/convert-excel/works?" + this.workFilterQuery).then(
        response => {
          console.log(response.data);
          Axios.get("/api/convert-excel/download", {
            responseType: "arraybuffer"
          }).then(response => {
            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement("a");
            link.href = url;
            link.setAttribute("download", response.headers.filename); //or any other extension
            document.body.appendChild(link);
            link.click();
          });
        }
      );
    }
  }
};
</script>