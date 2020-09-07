<template>
  <v-card>
    <v-card-title>
      <span class="headline">FILTER</span>
      <v-spacer></v-spacer>
      <v-btn icon @click="closeWorkFilterDialog()">
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </v-card-title>
    <v-card-text>
      <v-container></v-container>
      <v-row>
        <!-- Status -->
        <v-col cols="12" md="6">
          <v-select
            v-model="filter.status"
            label="Work Status"
            :items="statuses"
            @click:clear="clearStatusField"
            clearable
          ></v-select>
        </v-col>

        <!-- Phase -->
        <v-col cols="12" md="6">
          <v-select
            v-model="filter.phase"
            label="Work Phase"
            :items="phases"
            @click:clear="clearPhaseField"
            clearable
          ></v-select>
        </v-col>

        <!-- Project -->
        <v-col cols="12" md="6">
          <v-select
            v-model="filter.project"
            label="Project"
            :items="projects"
            item-value="id"
            item-text="name"
            @click:clear="clearProjectField"
            clearable
            @change="selectProject(filter.project)"
          ></v-select>
        </v-col>

        <!-- Sub Project -->
        <v-col cols="12" md="6">
          <v-select
            v-model="filter.subProject"
            label="Sub Project"
            :items="subProjects"
            item-value="id"
            item-text="name"
            @click:clear="clearSubProjectField"
            clearable
          ></v-select>
        </v-col>

        <!-- Company -->
        <v-col cols="12" md="6">
          <v-select
            v-model="filter.company"
            label="Client"
            :items="companies"
            item-value="id"
            item-text="name"
            @click:clear="clearCompanyField"
            clearable
          ></v-select>
        </v-col>

        <!-- Category -->
        <v-col cols="12" md="6">
          <v-select
            v-model="filter.category"
            label="Category"
            :items="categories"
            item-value="id"
            item-text="name"
            @click:clear="clearCategoryField"
            clearable
          ></v-select>
        </v-col>

        <!-- Sale Order start date -->
        <v-col cols="12" md="6">
          <v-menu
            v-model="poStartDateCalendar"
            :close-on-content-click="false"
            :nudge-right="40"
            transition="scale-transition"
            offset-y
            min-width="290px"
          >
            <template v-slot:activator="{ on }">
              <v-text-field
                v-model="filter.poStartDate"
                label="PO date from"
                readonly
                v-on="on"
                filled
                rounded
                prepend-inner-icon="mdi-calendar-check"
                :error-messages="errors.filter.poStartDate"
                @click:clear="clearPoStartDateField"
                clearable
              ></v-text-field>
            </template>
            <v-date-picker v-model="filter.poStartDate" @input="poStartDateCalendar = false"></v-date-picker>
          </v-menu>
        </v-col>

        <!-- Sale Order end date -->
        <v-col cols="12" md="6">
          <v-menu
            v-model="poEndDateCalendar"
            :close-on-content-click="false"
            :nudge-right="40"
            transition="scale-transition"
            offset-y
            min-width="290px"
          >
            <template v-slot:activator="{ on }">
              <v-text-field
                v-model="filter.poEndDate"
                label="PO date to"
                readonly
                v-on="on"
                filled
                rounded
                prepend-inner-icon="mdi-calendar-check"
                :error-messages="errors.filter.poEndDate"
                @click:clear="clearPoEndDateField"
                clearable
              ></v-text-field>
            </template>
            <v-date-picker v-model="filter.poEndDate" @input="poEndDateCalendar = false"></v-date-picker>
          </v-menu>
        </v-col>

        <!-- Invoice start date -->
        <v-col cols="12" md="6">
          <v-menu
            v-model="invoiceStartDateCalendar"
            :close-on-content-click="false"
            :nudge-right="40"
            transition="scale-transition"
            offset-y
            min-width="290px"
          >
            <template v-slot:activator="{ on }">
              <v-text-field
                v-model="filter.invoiceStartDate"
                label="Invoice date from"
                readonly
                v-on="on"
                filled
                rounded
                prepend-inner-icon="mdi-calendar-check"
                :error-messages="errors.filter.invoiceStartDate"
                @click:clear="clearInvoiceStartDateField"
                clearable
              ></v-text-field>
            </template>
            <v-date-picker
              v-model="filter.invoiceStartDate"
              @input="invoiceStartDateCalendar = false"
            ></v-date-picker>
          </v-menu>
        </v-col>

        <!-- Invoice end date -->
        <v-col cols="12" md="6">
          <v-menu
            v-model="invoiceEndDateCalendar"
            :close-on-content-click="false"
            :nudge-right="40"
            transition="scale-transition"
            offset-y
            min-width="290px"
          >
            <template v-slot:activator="{ on }">
              <v-text-field
                v-model="filter.invoiceEndDate"
                label="Invoice date to"
                readonly
                v-on="on"
                filled
                rounded
                prepend-inner-icon="mdi-calendar-check"
                :error-messages="errors.filter.invoiceEndDate"
                @click:clear="clearInvoiceEndDateField"
                clearable
              ></v-text-field>
            </template>
            <v-date-picker v-model="filter.invoiceEndDate" @input="invoiceEndDateCalendar = false"></v-date-picker>
          </v-menu>
        </v-col>

        <!-- Payment due date start date-->
        <v-col cols="12" md="6">
          <v-menu
            v-model="paymentDueDateStartDateCalendar"
            :close-on-content-click="false"
            :nudge-right="40"
            transition="scale-transition"
            offset-y
            min-width="290px"
          >
            <template v-slot:activator="{ on }">
              <v-text-field
                v-model="filter.paymentDueDateStartDate"
                label="Payment due date from"
                readonly
                v-on="on"
                filled
                rounded
                prepend-inner-icon="mdi-calendar-check"
                :error-messages="errors.filter.paymentDueDateStartDate"
                @click:clear="clearPaymentDueDateStartDateField"
                clearable
              ></v-text-field>
            </template>
            <v-date-picker
              v-model="filter.paymentDueDateStartDate"
              @input="paymentDueDateStartDateCalendar = false"
            ></v-date-picker>
          </v-menu>
        </v-col>

        <!-- Payment due date end date-->
        <v-col cols="12" md="6">
          <v-menu
            v-model="paymentDueDateEndDateCalendar"
            :close-on-content-click="false"
            :nudge-right="40"
            transition="scale-transition"
            offset-y
            min-width="290px"
          >
            <template v-slot:activator="{ on }">
              <v-text-field
                v-model="filter.paymentDueDateEndDate"
                label="Payment due date to"
                readonly
                v-on="on"
                filled
                rounded
                prepend-inner-icon="mdi-calendar-check"
                :error-messages="errors.filter.paymentDueDateEndDate"
                @click:clear="clearPaymentDueDateEndDateField"
                clearable
              ></v-text-field>
            </template>
            <v-date-picker
              v-model="filter.paymentDueDateEndDate"
              @input="paymentDueDateEndDateCalendar = false"
            ></v-date-picker>
          </v-menu>
        </v-col>

        <!-- Payment start date -->
        <v-col cols="12" md="6">
          <v-menu
            v-model="paymentStartDateCalendar"
            :close-on-content-click="false"
            :nudge-right="40"
            transition="scale-transition"
            offset-y
            min-width="290px"
          >
            <template v-slot:activator="{ on }">
              <v-text-field
                v-model="filter.paymentStartDate"
                label="Payment date from"
                readonly
                v-on="on"
                filled
                rounded
                prepend-inner-icon="mdi-calendar-check"
                :error-messages="errors.filter.paymentStartDate"
                @click:clear="clearPaymentStartDateField"
                clearable
              ></v-text-field>
            </template>
            <v-date-picker
              v-model="filter.paymentStartDate"
              @input="paymentStartDateCalendar = false"
            ></v-date-picker>
          </v-menu>
        </v-col>

        <!-- Payment end date -->
        <v-col cols="12" md="6">
          <v-menu
            v-model="paymentEndDateCalendar"
            :close-on-content-click="false"
            :nudge-right="40"
            transition="scale-transition"
            offset-y
            min-width="290px"
          >
            <template v-slot:activator="{ on }">
              <v-text-field
                v-model="filter.paymentEndDate"
                label="Payment date to"
                readonly
                v-on="on"
                filled
                rounded
                prepend-inner-icon="mdi-calendar-check"
                :error-messages="errors.filter.paymentEndDate"
                @click:clear="clearPaymentEndDateField"
                clearable
              ></v-text-field>
            </template>
            <v-date-picker v-model="filter.paymentEndDate" @input="paymentEndDateCalendar = false"></v-date-picker>
          </v-menu>
        </v-col>
      </v-row>
    </v-card-text>
    <v-card-actions>
      <v-btn @click="workFilter()">Search</v-btn>
      <v-btn @click="resetWorkFilter()">Reset</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import Axios from "axios";
import { mapState, mapMutations } from "vuex";
import { getSubProjects } from "../../mixins/subProjects";
export default {
  props: {
    companies: Array,
    categories: Array,
    projects: Array
  },

  data() {
    return {
      statuses: ["OPEN", "HOLDING", "CANCELED", "COMPLETED", "DISUSED"],
      phases: ["OPENED", "RECPT PO", "APPRVD WCC", "SENT INV", "PYMT"],
      errors: [],
      subProjects: [],
      poStartDateCalendar: false,
      poEndDateCalendar: false,
      invoiceStartDateCalendar: false,
      invoiceEndDateCalendar: false,
      paymentDueDateStartDateCalendar: false,
      paymentDueDateEndDateCalendar: false,
      paymentStartDateCalendar: false,
      paymentEndDateCalendar: false,
      filter: {
        workFilterMode: false,
        status: "",
        phase: "",
        company: "",
        category: "",
        project: "",
        subProject: "",
        poStartDate: "",
        poEndDate: "",
        invoiceStartDate: "",
        invoiceEndDate: "",
        paymentDueDateStartDate: "",
        paymentDueDateEndDate: "",
        paymentStartDate: "",
        paymentEndDate: ""
      },
      resetFilter: {
        workFilterMode: false,
        status: "",
        phase: "",
        company: "",
        category: "",
        project: "",
        subProject: "",
        poStartDate: "",
        poEndDate: "",
        invoiceStartDate: "",
        invoiceEndDate: "",
        paymentDueDateStartDate: "",
        paymentDueDateEndDate: "",
        paymentStartDate: "",
        paymentEndDate: ""
      }
    };
  },

  computed: {
    ...mapState("work", ["workFilterQuery"])
  },

  methods: {
    ...mapMutations("work", ["SET_WORK_FILTER_QUERY"]),

    workFilter() {
      this.filter.workFilterMode = true;
      const filterQuery =
        "workFilterMode=" +
        this.filter.workFilterMode +
        "&status=" +
        this.filter.status +
        "&phase=" +
        this.filter.phase +
        "&company=" +
        this.filter.company +
        "&category=" +
        this.filter.category +
        "&project=" +
        this.filter.project +
        "&subProject=" +
        this.filter.subProject +
        "&poStartDate=" +
        this.filter.poStartDate +
        "&poEndDate=" +
        this.filter.poEndDate +
        "&invoiceStartDate=" +
        this.filter.invoiceStartDate +
        "&invoiceEndDate=" +
        this.filter.invoiceEndDate +
        "&paymentDueDateStartDate=" +
        this.filter.paymentDueDateStartDate +
        "&paymentDueDateEndDate=" +
        this.filter.paymentDueDateEndDate +
        "&paymentStartDate=" +
        this.filter.paymentStartDate +
        "&paymentEndDate=" +
        this.filter.paymentEndDate;

      this.SET_WORK_FILTER_QUERY(filterQuery);
      this.$emit("signal-workFilter");
      this.closeWorkFilterDialog();
    },

    resetWorkFilter() {
      this.filter = Object.assign({}, this.resetFilter);
      this.SET_WORK_FILTER_QUERY("");
      this.$emit("signal-resetWorkFilter");
      this.closeWorkFilterDialog();
    },

    closeWorkFilterDialog() {
      this.$emit("signal-closeWorkFilterDialog");
    },

    clearStatusField() {
      this.filter.status = false;
    },

    clearPhaseField() {
      this.filter.phase = false;
    },

    clearProjectField() {
      this.filter.project = false;
    },

    clearSubProjectField() {
      this.filter.subProject = false;
    },

    clearCategoryField() {
      this.filter.category = false;
    },

    clearCompanyField() {
      this.filter.company = false;
    },

    clearPoStartDateField() {
      this.filter.poStartDate = null;
    },

    clearPoEndDateField() {
      this.filter.poEndDate = null;
    },

    clearInvoiceStartDateField() {
      this.filter.invoiceStartDate = null;
    },

    clearInvoiceEndDateField() {
      this.filter.invoiceEndDate = null;
    },

    clearPaymentDueDateStartDateField() {
      this.filter.invoiceEndDate = null;
    },

    clearPaymentDueDateEndDateField() {
      this.filter.invoiceEndDate = null;
    },

    clearPaymentStartDateField() {
      this.filter.paymentStartDate = null;
    },

    clearPaymentEndDateField() {
      this.filter.paymentEndDate = null;
    },

    selectProject(project_id) {
      this.getSubProjects(project_id).then(e => (this.subProjects = e));
    }
  },
  mixins: [getSubProjects]
};
</script>