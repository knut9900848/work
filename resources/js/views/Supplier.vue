<template>
  <div class="wrap-component-table">
    <v-data-table :headers="headers" :items="desserts" class="elevation-0" :search="search">
      <template v-slot:top>
        <v-toolbar flat dark height="85" color="blue accent-2">
          <v-toolbar-title>SUPPLIER LIST</v-toolbar-title>
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
          <v-dialog v-model="dialog" fullscreen hide-overlay>
            <template v-slot:activator="{ on }">
              <v-btn color="primary" dark class="mb-2" v-on="on">
                <v-icon left dark>mdi-account-plus</v-icon>SUPPLIER
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
                <v-container fluid>
                  <v-row>
                    <v-col cols="12" md="6">
                      <v-card>
                        <v-toolbar color="primary" dark flat>
                          <v-toolbar-title>SUPPLIER INFORMATION</v-toolbar-title>
                        </v-toolbar>
                        <v-card-text>
                          <v-container>
                            <v-row>
                              <!-- Name -->
                              <v-col cols="12" md="6">
                                <v-text-field
                                  v-model="editedItem.name"
                                  label="Name"
                                  :error-messages="errors.name"
                                  rounded
                                  filled
                                ></v-text-field>
                              </v-col>

                              <!-- Display Name -->
                              <v-col cols="12" md="6">
                                <v-text-field
                                  v-model="editedItem.display_name"
                                  label="Display Name"
                                  :error-messages="errors.display_name"
                                  rounded
                                  filled
                                ></v-text-field>
                              </v-col>

                              <!-- Email -->
                              <v-col cols="12" md="6">
                                <v-text-field
                                  v-model="editedItem.email"
                                  label="Email"
                                  :error-messages="errors.email"
                                  rounded
                                  filled
                                ></v-text-field>
                              </v-col>

                              <!-- Phone -->
                              <v-col cols="12" md="6">
                                <v-text-field
                                  v-model="editedItem.phone"
                                  label="Contact Number"
                                  :error-messages="errors.phone"
                                  rounded
                                  filled
                                ></v-text-field>
                              </v-col>

                              <!-- Fax -->
                              <v-col cols="12" md="6">
                                <v-text-field
                                  v-model="editedItem.fax"
                                  label="Fax Number"
                                  :error-messages="errors.fax"
                                  rounded
                                  filled
                                ></v-text-field>
                              </v-col>

                              <!-- Homepage -->
                              <v-col cols="12" md="6">
                                <v-text-field
                                  v-model="editedItem.url"
                                  label="Homepage"
                                  :error-messages="errors.url"
                                  rounded
                                  filled
                                ></v-text-field>
                              </v-col>

                              <!-- BRC Number -->
                              <v-col cols="12" md="6">
                                <v-text-field
                                  v-model="editedItem.reg_number"
                                  label="Business Registration Number"
                                  :error-messages="errors.reg_number"
                                  rounded
                                  filled
                                ></v-text-field>
                              </v-col>

                              <!-- VAT Reg. No. -->
                              <v-col cols="12" md="6">
                                <v-text-field
                                  v-model="editedItem.vat_reg_number"
                                  label="VAT Registration Number"
                                  :error-messages="errors.vat_reg_number"
                                  rounded
                                  filled
                                ></v-text-field>
                              </v-col>

                              <!-- Code -->
                              <v-col cols="12" md="6">
                                <v-text-field
                                  v-model="editedItem.code"
                                  label="Code"
                                  :error-messages="errors.code"
                                  rounded
                                  filled
                                ></v-text-field>
                              </v-col>

                              <!-- Description -->
                              <v-col cols="12" sm="12">
                                <v-textarea
                                  v-model="editedItem.description"
                                  filled
                                  label="Description"
                                ></v-textarea>
                              </v-col>

                              <!-- is Active -->
                              <v-col cols="12" md="6">
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
                      <Employee
                        v-if="editedIndex > -1"
                        :model_id="editedItem.id"
                        model="Supplier"
                        ref="employeeListComponent"
                      ></Employee>

                      <div class="mt-2 mb-2"></div>

                      <Address
                        v-if="editedIndex > -1"
                        :model_id="editedItem.id"
                        model="Supplier"
                        :countries="countries"
                        ref="addressListComponent"
                      ></Address>

                      <div class="mt-2 mb-2"></div>

                      <SupplierBankAccount
                        v-if="editedIndex > -1"
                        :supplier_id="editedItem.id"
                        ref="bankAccountListComponent"
                      ></SupplierBankAccount>
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
import Employee from "../components/common/Employee";
import Address from "../components/common/Address";
import SupplierBankAccount from "../components/supplier/SupplierBankAccount";

import { mapMutations } from "vuex";
export default {
  components: {
    // AttachedFile
    Employee,
    Address,
    SupplierBankAccount
  },

  data: () => ({
    search: "",
    dialog: false,
    headers: [
      { text: "ID", value: "id" },
      { text: "Name", value: "name" },
      { text: "Display Name", value: "display_name" },
      { text: "Code", value: "code" },
      { text: "Activation", value: "is_active", sortable: false },
      { text: "Actions", value: "action", sortable: false }
    ],
    desserts: [],
    countries: [],
    editedIndex: -1,
    editedItem: {
      id: null,
      name: null,
      display_name: null,
      email: null,
      phone: null,
      fax: null,
      url: null,
      reg_number: null,
      vat_vat_number: null,
      code: null,
      is_active: false,
      description: null
    },
    defaultItem: {
      id: null,
      name: null,
      display_name: null,
      email: null,
      phone: null,
      fax: null,
      url: null,
      reg_number: null,
      vat_vat_number: null,
      code: null,
      is_active: false,
      description: null
    },
    errors: []
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "Add Supplier" : "Edit Supplier";
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
      Axios.get("/api/suppliers").then(response => {
        this.desserts = response.data.suppliers;
        this.countries = response.data.countries;
      });
    },

    editItem(item) {
      this.editedIndex = this.desserts.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
      setTimeout(() => {
        this.$refs.employeeListComponent.initialize();
        this.$refs.bankAccountListComponent.initialize();
        this.$refs.addressListComponent.initialize();
      }, 500);
    },

    deleteItem(item) {
      const index = this.desserts.indexOf(item);
      confirm("Are you sure you want to delete this item?") &&
        this.desserts.splice(index, 1);
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
        Axios.put("/api/suppliers/" + this.editedItem.id, this.editedItem)
          .then(response => {
            Object.assign(
              this.desserts[this.editedIndex],
              response.data.supplier
            );
            this.$store.dispatch("SHOW_GLOBAL_SNACKBAR", {
              text: "Supplier has been updated successfully"
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
        Axios.post("/api/suppliers", this.editedItem)
          .then(response => {
            this.desserts.unshift(response.data.supplier);
            this.$store.dispatch("SHOW_GLOBAL_SNACKBAR", {
              text: "Supplier has been created successfully"
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
    },

    ...mapMutations("filesModule", ["RESET_FILE_LIST"]),

    openFileDialog(item) {
      this.fileDialog = true;
      setTimeout(() => {
        this.$refs.fileComponent.initFileList({
          model: "Supplier",
          id: item.id
        });
      }, 300);
    },

    closeFileDialog() {
      this.fileDialog = false;
      this.RESET_FILE_LIST();
    }
  }
};
</script>

<style scoped>
</style>