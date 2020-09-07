<template>
  <div class="wrap-work">
    <v-container fluid>
      <v-row>
        <v-col cols="12" md="7">
          <v-card class="mb-3" outlined>
            <v-card-title>
              <h4>INFORMATION</h4>
              <v-spacer></v-spacer>
              <v-btn color="primary" @click="saveWork()" v-if="workMode === 'create'">Save</v-btn>
              <v-btn
                color="primary"
                @click="editWork()"
                v-if="workMode === 'view'"
                :disabled="isEditButtonDisabled"
              >Edit</v-btn>
              <v-btn
                color="pink"
                dark
                @click="updateWork()"
                class="mr-2"
                v-if="workMode ==='edit'"
                :disabled="isEditButtonDisabled"
              >Update</v-btn>
              <v-btn
                color="primary"
                @click="cancelWork()"
                v-if="workMode ==='edit'"
                :disabled="isEditButtonDisabled"
              >Cancel</v-btn>
            </v-card-title>
            <v-divider></v-divider>
            <v-card-text>
              <v-container fluid>
                <v-row>
                  <v-col cols="12" md="6">
                    <v-text-field
                      v-model="editedItem.number"
                      label="Number"
                      filled
                      rounded
                      prepend-inner-icon="mdi-format-list-numbered"
                      disabled
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" md="6">
                    <v-select
                      v-model="editedItem.company_id"
                      :items="companies"
                      item-value="id"
                      item-text="name"
                      label="Client"
                      filled
                      rounded
                      prepend-inner-icon="mdi-account-tie"
                      :error-messages="errors.company_id"
                      :disabled="isFieldDisabled"
                    ></v-select>
                  </v-col>
                  <v-col cols="12" md="6">
                    <v-select
                      v-model="editedItem.project_id"
                      :items="projects"
                      item-value="id"
                      item-text="name"
                      label="Project"
                      filled
                      rounded
                      prepend-inner-icon="mdi-ferry"
                      @change="selectProject(editedItem.project_id)"
                      :error-messages="errors.project_id"
                      :disabled="isFieldDisabled"
                    ></v-select>
                  </v-col>
                  <v-col cols="12" md="6">
                    <v-select
                      v-model="editedItem.sub_project_id"
                      :items="subProjects"
                      item-value="id"
                      item-text="name"
                      label="Sub Project"
                      filled
                      rounded
                      prepend-inner-icon="mdi-sail-boat"
                      :error-messages="errors.sub_project_id"
                      :disabled="isFieldDisabled"
                    ></v-select>
                  </v-col>
                  <v-col cols="12" md="6">
                    <v-select
                      v-model="editedItem.category_id"
                      :items="categories"
                      item-value="id"
                      item-text="name"
                      label="Category"
                      filled
                      rounded
                      prepend-inner-icon="mdi-database"
                      :error-messages="errors.category_id"
                      :disabled="isFieldDisabled"
                    ></v-select>
                  </v-col>
                  <v-col cols="12" md="6">
                    <v-select
                      v-model="editedItem.currency_id"
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
                  <v-col cols="12">
                    <v-textarea v-model="editedItem.description" label="Description" filled rounded></v-textarea>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" md="5">
          <!-- Status -->
          <WorkStatus ref="workStatus" @signal-changeWorkStatus="changeWorkStatus"></WorkStatus>

          <!-- Related Quotation -->
          <RelatedQuotation
            ref="relatedQuotationComponent"
            :company_id="editedItem.company_id"
            :project_id="editedItem.project_id"
            :sub_project_id="editedItem.sub_project_id"
          ></RelatedQuotation>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Axios from "axios";
import { getSubProjects } from "../../mixins/subProjects";
import RelatedQuotation from "./RelatedQuotation";
import WorkStatus from "./WorkStatus";
import { mapState, mapMutations } from "vuex";

export default {
  components: { RelatedQuotation, WorkStatus },
  props: ["companies", "projects", "categories", "currencies"],
  data() {
    return {
      errors: [],
      subProjects: [],
      editedItem: {
        id: null,
        number: null,
        status: null,
        company_id: null,
        project_id: null,
        sub_project_id: null,
        category_id: null,
        currency_id: null,
        description: null
      },

      defaultItem: {
        id: null,
        number: null,
        status: null,
        company_id: null,
        project_id: null,
        sub_project_id: null,
        category_id: null,
        currency_id: null,
        description: null
      }
    };
  },

  computed: {
    isFieldDisabled() {
      if (this.workId) return true;
      return false;
    },

    isEditButtonDisabled() {
      if (this.workStatus === "OPEN" && this.permissions.includes("edit-work"))
        return false;
      return true;
    },

    ...mapState("auth", ["permissions"]),

    ...mapState("work", ["workId", "workIndex", "workStatus", "workMode"])
  },

  methods: {
    ...mapMutations("work", [
      "SET_WORK_ID",
      "SET_WORK_STATUS",
      "SET_WORK_INDEX",
      "SET_WORK_MODE",
      "SET_WORK_PHASE",
      "SET_WORK_COMPANY",
      "SET_WORK_PROJECT",
      "SET_WORK_SUB_PROJECT",
      "SET_WORK_CATEGORY",
      "SET_WORK_CURRENCY",
      "RESET_WORK"
    ]),

    ...mapMutations("sale_order", [
      "SET_SALE_ORDER_ID",
      "SET_SALE_ORDER_DELIVER_TO",
      "SET_SALE_ORDER_PAYMENT_TERM"
    ]),

    ...mapMutations("wcc", ["SET_WCC_ID"]),

    ...mapMutations("invoice", ["SET_INVOICE_ID"]),

    ...mapMutations("payment", ["SET_PAYMENT_ID"]),

    initialize() {
      if (this.workId) {
        this.SET_WORK_MODE("view");
        Axios.get("/api/works/" + this.workId).then(response => {
          this.editedItem = response.data.work;
          this.subProjects = response.data.subProjects;
          this.SET_SALE_ORDER_ID(response.data.saleOrderId);
          this.SET_WCC_ID(response.data.wccId);
          this.SET_INVOICE_ID(response.data.invoiceId);
          this.SET_PAYMENT_ID(response.data.paymentId);
          this.SET_WORK_STATUS(response.data.work.status);
          this.SET_WORK_CURRENCY(response.data.work.currency_id);
          this.SET_WORK_COMPANY(response.data.work.company_id);
          this.SET_WORK_PROJECT(response.data.work.project_id);
          this.SET_WORK_SUB_PROJECT(response.data.work.sub_project_id);
          this.SET_WORK_CATEGORY(response.data.work.category_id);
          this.$nextTick(() => {
            this.$refs.relatedQuotationComponent.initialize();
          });
        });
      } else {
        this.SET_WORK_MODE("create");
      }
    },

    saveWork() {
      Axios.post("/api/works", this.editedItem)
        .then(response => {
          this.SET_WORK_ID(response.data.work.id);
          this.$emit("signal-addItemToList", {
            addType: "newItem",
            item: response.data.work
          });
          this.SET_WORK_MODE("view");
          this.SET_WORK_STATUS("OPEN");
          this.SET_WORK_PHASE("OPENED");
          this.SET_WORK_CURRENCY(response.data.work.currency_id);
          this.SET_WORK_COMPANY(response.data.work.company_id);
          this.SET_WORK_PROJECT(response.data.work.project_id);
          this.SET_WORK_SUB_PROJECT(response.data.work.sub_project_id);
          this.SET_WORK_CATEGORY(response.data.work.category_id);
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

    updateWork() {
      Axios.put("/api/works/" + this.editedItem.id, this.editedItem)
        .then(response => {
          this.editedItem = response.data.work;
          this.SET_WORK_MODE("view");
          this.$emit("signal-addItemToList", {
            addType: "updateItem",
            item: response.data.work
          });
        })
        .catch(error => {
          this.errors = error.response.data.errors;
        });
    },

    editWork() {
      this.SET_WORK_MODE("edit");
    },

    cancelWork() {
      this.initialize();
      this.SET_WORK_MODE("view");
    },

    resetWork() {
      this.editedItem = Object.assign({}, this.defaultItem);
      this.$refs.relatedQuotationComponent.resetRelatedQuotation();
      this.errors = [];
      this.RESET_WORK();
    },

    selectProject(project_id) {
      this.getSubProjects(project_id).then(e => (this.subProjects = e));
    },

    changeWorkStatus(workStatus) {
      this.$emit("signal-changeWorkStatus", workStatus);
    }
  },

  mixins: [getSubProjects]
};
</script>