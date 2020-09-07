<template>
  <div class="wrap-component-table">
    <v-data-table :headers="headers" :items="desserts" class="elevation-0" :search="search">
      <template v-slot:top>
        <v-toolbar flat dark height="85" color="blue accent-2">
          <v-toolbar-title>PROJECT LIST</v-toolbar-title>
          <v-divider class="mx-4" inset vertical></v-divider>
          <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="Search"
            single-line
            hide-details
            solo-inverted
          ></v-text-field>
          <v-spacer></v-spacer>
          <v-dialog v-model="dialog" hide-overlay fullscreen>
            <template v-slot:activator="{ on }">
              <v-btn color="primary" dark class="mb-2" v-on="on">
                <v-icon left dark>mdi-ferry</v-icon>PROJECT
              </v-btn>
            </template>
            <v-card>
              <v-toolbar color="blue-grey darken-1" dark>
                <v-toolbar-title>
                  <span class="headline">{{ formTitle }}</span>
                </v-toolbar-title>
                <v-spacer></v-spacer>
                <v-btn fab small text @click="close()">
                  <v-icon dark>mdi-window-close</v-icon>
                </v-btn>
              </v-toolbar>
              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col cols="12" md="6">
                      <v-card>
                        <v-toolbar color="primary" dark flat>
                          <v-toolbar-title>PROJECT INFORMATION</v-toolbar-title>
                        </v-toolbar>
                        <v-card-text>
                          <v-container>
                            <v-row>
                              <v-col cols="12" md="6">
                                <v-text-field
                                  v-model="editedItem.name"
                                  label="Name"
                                  :error-messages="errors.name"
                                  rounded
                                  filled
                                ></v-text-field>
                              </v-col>
                              <v-col cols="12" md="6">
                                <v-text-field
                                  v-model="editedItem.display_name"
                                  label="Display Name"
                                  :error-messages="errors.display_name"
                                  rounded
                                  filled
                                ></v-text-field>
                              </v-col>
                              <v-col cols="12" md="6">
                                <v-select
                                  v-model="editedItem.status"
                                  label="Status"
                                  item-text="name"
                                  item-value="name"
                                  :items="statuses"
                                  :error-messages="errors.status"
                                  rounded
                                  filled
                                ></v-select>
                              </v-col>
                              <v-col cols="12" md="6">
                                <v-select
                                  v-model="editedItem.company_id"
                                  item-text="name"
                                  item-value="id"
                                  :items="companies"
                                  label="Client"
                                  filled
                                  rounded
                                  :error-messages="errors.company_id"
                                ></v-select>
                              </v-col>
                              <v-col cols="12" md="6">
                                <v-text-field
                                  v-model="editedItem.code"
                                  label="Project Code"
                                  :error-messages="errors.code"
                                  rounded
                                  filled
                                ></v-text-field>
                              </v-col>
                              <v-col cols="12" sm="12">
                                <v-textarea
                                  v-model="editedItem.description"
                                  filled
                                  label="Description"
                                ></v-textarea>
                              </v-col>
                              <v-col cols="12">
                                <v-checkbox v-model="editedItem.is_active" label="Activation"></v-checkbox>
                              </v-col>
                            </v-row>
                          </v-container>
                        </v-card-text>
                        <v-card-actions>
                          <v-spacer></v-spacer>
                          <v-btn color="blue darken-1" text @click="close">Cancel</v-btn>
                          <v-btn color="blue darken-1" text @click="save">Save</v-btn>
                        </v-card-actions>
                      </v-card>
                    </v-col>
                    <v-col cols="12" md="6">
                      <SubProject
                        ref="subProjectComponent"
                        :companies="companies"
                        :project_id="editedItem.id"
                      ></SubProject>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>
            </v-card>
          </v-dialog>
        </v-toolbar>
      </template>

      <template v-slot:item.is_active="{ item }">
        <v-chip color="primary" v-if="item.is_active === 1 || item.is_active === true">Active</v-chip>
        <v-chip v-else>Active</v-chip>
      </template>

      <template v-slot:item.action="{ item }">
        <v-btn @click="editItem(item)" small depressed color="primary">
          <v-icon small>mdi-pencil</v-icon>
        </v-btn>
      </template>

      <template v-slot:no-data>
        <v-btn color="primary" @click="initialize">Reset</v-btn>
      </template>
    </v-data-table>
  </div>
</template>
<script>
import Axios from "axios";
import SubProject from "../components/project/SubProject";

export default {
  components: {
    SubProject
  },
  data: () => ({
    search: "",
    dialog: false,
    headers: [
      { text: "ID", value: "id" },
      { text: "Name", value: "name" },
      { text: "Display Name", value: "display_name" },
      { text: "Code", value: "code" },
      { text: "Activation", value: "is_active" },
      { text: "Actions", value: "action", sortable: false }
    ],
    desserts: [],
    editedIndex: -1,
    editedItem: {
      id: null,
      name: null,
      display_name: null,
      status: null,
      company_id: null,
      code: null,
      description: null,
      is_active: false
    },
    defaultItem: {
      id: null,
      name: null,
      display_name: null,
      status: null,
      company_id: null,
      code: null,
      description: null,
      is_active: false
    },
    errors: [],
    companies: [],
    statuses: ["Normal", "Holding", "Canceled", "Finished"]
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "Add Project" : "Edit Project";
    }
  },

  watch: {
    dialog(val) {
      val || this.close();
    }
  },

  created() {
    this.initialize();
  },

  methods: {
    initialize() {
      Axios.get("/api/projects").then(response => {
        this.desserts = response.data.projects;
        this.companies = response.data.companies;
      });
    },

    editItem(item) {
      this.editedIndex = this.desserts.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
      if (this.editedIndex > -1) {
        this.$nextTick(function() {
          this.$refs.subProjectComponent.initialize();
        });
      }
    },

    close() {
      this.dialog = false;
      setTimeout(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      }, 300);
    },

    save() {
      if (this.editedIndex > -1) {
        Axios.put("/api/projects/" + this.editedItem.id, this.editedItem)
          .then(response => {
            Object.assign(
              this.desserts[this.editedIndex],
              response.data.project
            );
            this.$store.dispatch("SHOW_GLOBAL_SNACKBAR", {
              text: response.data.message
            });
            this.close();
          })
          .catch(error => {
            this.errors = error.response.data.errors;
            this.$store.dispatch("SHOW_GLOBAL_SNACKBAR", {
              text: error.response.data.message,
              color: "red"
            });
          });
      } else {
        Axios.post("/api/projects", this.editedItem)
          .then(response => {
            this.desserts.unshift(response.data.project);
            this.$store.dispatch("SHOW_GLOBAL_SNACKBAR", {
              text: response.data.message
            });
            this.close();
          })
          .catch(error => {
            this.errors = error.response.data.errors;
            this.$store.dispatch("SHOW_GLOBAL_SNACKBAR", {
              text: error.response.data.message,
              color: "red"
            });
          });
      }
    }
  }
};
</script>