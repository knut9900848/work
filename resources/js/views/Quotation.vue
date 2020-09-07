<template>
  <div class="wrap-component-table">
    <v-data-table
      :headers="headers"
      :items="quotations.data"
      :search="search"
      outline
      :items-per-page="15"
    >
      <template v-slot:top>
        <v-toolbar flat height="85" color="blue" dark>
          <v-toolbar-title class="font-weight-black">QUOTATION LIST</v-toolbar-title>
          <v-divider class="mx-4" inset vertical></v-divider>

          <!-- Filter Button -->
          <v-tooltip bottom>
            <template v-slot:activator="{ on }">
              <v-btn color="primary" fab depressed class="mr-1" dark v-on="on" icon>
                <v-icon color="white">mdi-filter-menu-outline</v-icon>
              </v-btn>
            </template>
            <span>Filter</span>
          </v-tooltip>

          <!-- Excel Button -->
          <v-tooltip bottom>
            <template v-slot:activator="{ on }">
              <v-btn color="primary" fab depressed class="mr-1" dark v-on="on" icon>
                <v-icon color="white">mdi-microsoft-excel</v-icon>
              </v-btn>
            </template>
            <span>Convert To Excel</span>
          </v-tooltip>

          <!-- Add Quotation Button -->
          <v-tooltip bottom>
            <template v-slot:activator="{ on }">
              <v-btn
                color="primary"
                @click="openCreateQuotationDialog()"
                :disabled="isCreateButtonDisabled"
                fab
                depressed
                dark
                v-on="on"
                icon
              >
                <v-icon color="white">mdi-plus</v-icon>
              </v-btn>
            </template>
            <span>Add Quotation</span>
          </v-tooltip>

          <v-spacer></v-spacer>

          <!-- Display current records / total records -->
          <v-chip small>{{ quotations.to }} of {{ totalRecords }}</v-chip>

          <!-- Prev 500 Records button -->
          <v-tooltip bottom>
            <template v-slot:activator="{ on }">
              <v-btn icon @click="prevPage()" :disabled="isPrevBtnDisabled" v-on="on">
                <v-icon>mdi-arrow-left</v-icon>
              </v-btn>
            </template>
            <span>Prev 500 Records</span>
          </v-tooltip>

          <!-- Initialize Records button -->
          <v-btn icon @click="initialize()">
            <v-icon>mdi-square-medium</v-icon>
          </v-btn>

          <!-- Next 500 Records button -->
          <v-tooltip bottom>
            <template v-slot:activator="{ on }">
              <v-btn icon @click="nextPage()" :disabled="isNextBtnDisabled" v-on="on">
                <v-icon>mdi-arrow-right</v-icon>
              </v-btn>
            </template>
            <span>Next 500 Records</span>
          </v-tooltip>

          <!-- Search Field -->
          <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="Search"
            single-line
            hide-details
            solo-inverted
          ></v-text-field>

          <!-- Quotation Dialog -->
          <v-dialog
            v-model="dialog"
            fullscreen
            hide-overlay
            transition="dialog-bottom-transition"
            persistent
            :no-click-animation="true"
          >
            <QuotationDialog
              ref="quotationComponent"
              @signal-closeQuotationDialog="closeQuotationDialog"
              @signal-addItemToList="addItemToList"
              @signal-changeQuotationStatusToList="changeQuotationStatusToList"
              :companies="companies"
              :projects="projects"
              :branches="branches"
              :categories="categories"
              :currencies="currencies"
              :users="users"
              :units="units"
            ></QuotationDialog>
          </v-dialog>
        </v-toolbar>
      </template>

      <template v-slot:item.number="{ item }">
        <span class="font-weight-black" @click="oepnEditQuotationDialog(item)">{{ item.number }}</span>
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
import QuotationDialog from "../components/quotation/QuotationDialog";
import Axios from "axios";
export default {
  components: { QuotationDialog },
  data: () => ({
    errors: [],
    dialog: false,
    defaultData: "",
    search: "",
    quotations: [],
    companies: [],
    projects: [],
    branches: [],
    categories: [],
    currencies: [],
    users: [],
    units: [],
    totalRecords: null,

    headers: [
      { text: "Number", value: "number", divider: true },
      {
        text: "Issued Date",
        align: "center",
        value: "issued_date",
        divider: true
      },
      { text: "Status", value: "status", divider: true },
      { text: "Related Sale Order", value: "sale_order", divider: true },
      { text: "Company", value: "company", divider: true },
      { text: "Project", value: "project", divider: true },
      { text: "Category", value: "category", divider: true },
      { text: "Total Price", value: "total_price", divider: true },
      { text: "SR Number", align: "center", value: "sr_number", divider: true }
    ]
  }),

  computed: {
    isPrevBtnDisabled() {
      if (this.quotations.prev_page_url === null) return true;
      return false;
    },

    isNextBtnDisabled() {
      if (this.quotations.next_page_url === null) return true;
      return false;
    },

    ...mapState("quotation", [
      "quotationIndex",
      "quotationMode",
      "quotationStatus",
      "quotationId"
    ]),

    ...mapState("auth", ["user", "isLogIn", "permissions"]),

    isCreateButtonDisabled() {
      return this.permissions.includes("edit-quotation") ? false : true;
    }
  },

  watch: {
    dialog(val) {
      val || this.closeQuotationDialog();
    },

    dialog: function(val) {
      document.querySelector("html").style.overflow = val ? "hidden" : null;
    }
  },

  created() {
    // 외부 링크로 들어 오는 경우라면
    if (Object.keys(this.$route.params).length !== 0) {
      if (!localStorage.getItem("storageUserInfo")) {
        this.$router.push({ name: "login", query: { redirect: "/path" } });
      }
    }
    this.initialize();
  },

  beforeDestroy() {
    this.quotations = [];
    this.companies = [];
    this.projects = [];
    this.branches = [];
    this.categories = [];
    this.currencies = [];
    this.users = [];
    this.units = [];
  },

  methods: {
    ...mapMutations("quotation", [
      "SET_QUOTATION_INDEX",
      "SET_QUOTATION_ID",
      "SET_QUOTATION_MODE",
      "SET_QUOTATION_STATUS",
      "RESET_QUOTATION"
    ]),

    ...mapMutations("fields", ["RESET_FIELD_LIST"]),

    initialize() {
      Axios.get("/api/quotations").then(response => {
        console.log(response.data);
        this.quotations = response.data.quotations;
        this.totalRecords = response.data.totalRecords;
        this.companies = Object.freeze(response.data.companies);
        this.projects = Object.freeze(response.data.projects);
        this.branches = Object.freeze(response.data.branches);
        this.categories = Object.freeze(response.data.categories);
        this.currencies = Object.freeze(response.data.currencies);
        this.users = Object.freeze(response.data.users);
        this.units = Object.freeze(response.data.units);

        // 외부 링크로 들어 오는 경우라면
        if (Object.keys(this.$route.params).length !== 0) {
          const item = this.quotations.data.find(
            item => item.quotation_id === Number(this.$route.params.id)
          );
          item
            ? this.oepnEditQuotationDialog(item)
            : alert("There is no Quotation what you request");
        }
      });
    },

    addItemToList(quotation) {
      if (quotation.addType === "newItem") {
        this.quotations.data.unshift(quotation.item);
      } else {
        let item = this.quotations.data.find(
          element => element.quotation_id === this.quotationId
        );
        Object.assign(item, quotation.item);
      }
    },

    changeQuotationStatusToList(status) {
      if (this.quotationIndex > -1) {
        this.quotations.data[this.quotationIndex].status = status;
      } else {
        let item = this.quotations.data.find(
          item => item.id === this.quotationId
        );
        item.status = status;
      }
    },

    openCreateQuotationDialog() {
      this.dialog = true;
      const index = -1;
      this.SET_QUOTATION_INDEX(index);
      setTimeout(() => {
        this.SET_QUOTATION_MODE("create");
        this.SET_QUOTATION_STATUS("OPENED");
      }, 300);
    },

    oepnEditQuotationDialog(item) {
      const index = this.quotations.data.indexOf(item);
      this.SET_QUOTATION_INDEX(index);
      setTimeout(() => {
        this.SET_QUOTATION_MODE("view");
        this.SET_QUOTATION_ID(item.quotation_id);
        this.SET_QUOTATION_STATUS(item.status);
        this.$refs.quotationComponent.initQuotation(item.quotation_id);
      }, 500);
      this.dialog = true;
    },

    closeQuotationDialog() {
      this.dialog = false;
    },

    prevPage() {
      Axios.get(this.quotations.prev_page_url).then(response => {
        this.quotations = response.data.quotations;
      });
    },

    nextPage() {
      Axios.get(this.quotations.next_page_url).then(response => {
        this.quotations = response.data.quotations;
      });
    },

    formatPrice(value) {
      let val = (value / 1).toFixed(2).replace(",", ".");
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
  }
};
</script>