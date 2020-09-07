<template>
  <div class="wrap-wcc">
    <v-container fluid>
      <v-row>
        <v-col cols="12" md="7">
          <v-card class="mb-3" outlined>
            <v-card-title>
              <h4>INFORMATION {{ wccId }}</h4>
              <v-spacer></v-spacer>
              <v-btn
                color="primary"
                @click="saveWcc()"
                v-if="wccMode === 'create'"
                :disabled="isEditButtonDisabled"
              >Save</v-btn>
              <v-btn
                color="primary"
                @click="editWcc()"
                v-if="wccMode === 'view'"
                :disabled="isEditButtonDisabled"
              >Edit</v-btn>
              <v-btn
                color="pink"
                dark
                @click="updateWcc()"
                class="mr-2"
                v-if="wccMode ==='edit'"
                :disabled="isEditButtonDisabled"
              >Update</v-btn>
              <v-btn
                color="primary"
                @click="cancelWcc()"
                v-if="wccMode ==='edit'"
                :disabled="isEditButtonDisabled"
              >Cancel</v-btn>
            </v-card-title>
            <v-divider></v-divider>
            <v-card-text>
              <v-container fluid>
                <v-row>
                  <!-- Approved by -->
                  <v-col class="d-flex" cols="12" md="6">
                    <v-select
                      v-model="wcc.approver_id"
                      item-text="name"
                      item-value="id"
                      :items="approvers"
                      label="Approved by"
                      filled
                      rounded
                      prepend-inner-icon="mdi-account-star"
                      :disabled="isFieldDisabled"
                      :error-messages="errors.approver_id"
                    ></v-select>
                  </v-col>

                  <!-- Wcc approved on -->
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
                          v-model="wcc.date"
                          label="Approved on"
                          readonly
                          v-on="on"
                          filled
                          rounded
                          prepend-inner-icon="mdi-calendar-check"
                          :error-messages="errors.date"
                          :disabled="isFieldDisabled"
                        ></v-text-field>
                      </template>
                      <v-date-picker v-model="wcc.date" @input="dateCalendar = false"></v-date-picker>
                    </v-menu>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>
          </v-card>

          <Attachment
            ref="attachmentComponent"
            model="Wcc"
            storage="wcc_attachments"
            :model_id="wccId"
            :currentStatus="workStatus"
            :currentMode="wccMode"
            :permissions="permissions"
            editPermission="edit-work"
            approvePermission="approve-work"
            title="Attach WCC approved from client"
          ></Attachment>
        </v-col>

        <v-col cols="12" md="5">
          <!-- file -->
          <File
            v-show="wccId"
            ref="filesComponent"
            :model_id="wccId"
            model="Wcc"
            storage="wcc_files"
            title="FILE UPLOAD"
            :currentStatus="workStatus"
            :currentMode="wccMode"
            :permissions="permissions"
          ></File>

          <!-- comment -->
          <Comment v-show="wccId" ref="commentsComponent" model="Wcc" :model_id="wccId"></Comment>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Axios from "axios";
import { getPeople } from "../../mixins/getPeople";
import { mapState, mapMutations, mapActions, mapGetters } from "vuex";

import File from "../common/File";
import Comment from "../common/Comment";
import Attachment from "../common/Attachment";

export default {
  components: { File, Comment, Attachment },
  props: ["companies"],
  data() {
    return {
      errors: [],
      dateCalendar: false,
      subProjects: [],
      approvers: [],
      optionDialog: false,
      wcc: {
        id: null,
        work_id: null,
        approver_id: null,
        date: null
      },
      defaultWcc: {
        id: null,
        work_id: null,
        approver_id: null,
        date: null
      }
    };
  },

  computed: {
    isFieldDisabled() {
      if (this.wccMode === "view") return true;
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

    ...mapState("wcc", ["wccId", "wccMode"])
  },

  methods: {
    ...mapMutations("work", [
      "SET_WORK_ID",
      "SET_WORK_STATUS",
      "SET_WORK_INDEX",
      "SET_WORK_MODE",
      "SET_WORK_PHASE"
    ]),

    ...mapMutations("wcc", ["SET_WCC_MODE", "SET_WCC_ID", "RESET_WCC"]),

    ...mapMutations("attachments", [
      "INIT_ATTACHMENT_FILE_LIST",
      "RESET_ATTACHMENT_FILE_LIST"
    ]),

    ...mapActions("attachments", ["UPLOAD_ATTACHMENT_FILES"]),

    initialize() {
      if (this.wccId) {
        this.SET_WCC_MODE("view");
        Axios.get("/api/wccs/" + this.wccId).then(response => {
          this.wcc = response.data.wcc;
          this.approvers = response.data.approvers;
          this.INIT_ATTACHMENT_FILE_LIST(response.data.attachments);
        });
        setTimeout(() => {
          this.$refs.filesComponent.initFile();
          this.$refs.commentsComponent.initComment();
        }, 300);
      } else {
        this.SET_WCC_MODE("create");
        if (this.workId) {
          setTimeout(() => {
            this.getEmployees();
          }, 300);
        }
      }
    },

    getEmployees() {
      Axios.get("/api/employees/Company/" + this.workCompany).then(response => {
        this.approvers = response.data.employees;
      });
    },

    saveWcc() {
      this.wcc.work_id = this.workId;
      Axios.post("/api/wccs", this.wcc)
        .then(response => {
          this.wcc = response.data.wcc;
          this.SET_WCC_ID(response.data.wcc.id);
          this.SET_WCC_MODE("view");
          this.UPLOAD_ATTACHMENT_FILES(response.data.wcc.id);
          this.SET_WORK_PHASE("APPRVD WCC");
          this.$emit("signal-addItemToList", {
            addType: "updateItem",
            item: response.data.work
          });
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

    updateWcc() {
      Axios.put("/api/wccs/" + this.wccId, this.wcc)
        .then(response => {
          this.wcc = response.data.wcc;
          this.SET_WCC_MODE("view");
          this.UPLOAD_ATTACHMENT_FILES(response.data.wcc.id);
          this.$emit("signal-addItemToList", {
            addType: "updateItem",
            item: response.data.work
          });
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

    editWcc() {
      this.SET_WCC_MODE("edit");
    },

    cancelWcc() {
      this.initialize();
      this.SET_WCC_MODE("view");
    },

    getReceivers(model, model_id) {
      this.getEmployees(model, model_id).then(e => (this.approvers = e));
    },

    selectProject(project_id) {
      this.getSubProjects(project_id).then(e => (this.subProjects = e));
    },

    resetWcc() {
      this.wcc = Object.assign({}, this.defaultWcc);
      this.errors = [];
      this.subProjects = [];
      this.requestors = [];
      this.RESET_WCC();
      this.RESET_ATTACHMENT_FILE_LIST();
      this.$refs.commentsComponent.resetComment();
      this.$refs.filesComponent.resetFile();
    }
  },

  mixins: [getPeople]
};
</script>