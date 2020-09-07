<template>
  <v-card class="wrap-component-table">
    <v-toolbar flat>
      <v-toolbar-title>
        <v-badge color="error" bordered :content="itemCount" offset-x="15" offset-y="20">
          <v-chip dark color="blue">
            <v-icon dark>mdi-source-branch</v-icon>
          </v-chip>
        </v-badge>&nbsp;
        IES Branch
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn fab small text color="primary" @click="openDialog">
        <v-icon>mdi-plus</v-icon>
      </v-btn>
      <v-dialog v-model="dialog" max-width="1024px">
        <v-card>
          <v-toolbar flat color="blue-grey darken-1">
            <v-toolbar-title>IES Branch</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn fab small text color="primary" @click="closeDialog">
              <v-icon>mdi-window-close</v-icon>
            </v-btn>
          </v-toolbar>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12" md="6">
                  <v-text-field
                    v-model="editedItem.name"
                    label="Name(*)"
                    :error-messages="errors.name"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                  <v-text-field v-model="editedItem.display_name" label="Display Name(*)"></v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                  <v-text-field v-model="editedItem.kor_name" label="Kor Name(*)"></v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                  <v-text-field
                    v-model="editedItem.street1"
                    label="Street1"
                    :error-messages="errors.street1"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                  <v-text-field
                    v-model="editedItem.street2"
                    label="Street2"
                    :error-messages="errors.street2"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                  <v-text-field
                    v-model="editedItem.city"
                    label="City(District)"
                    :error-messages="errors.city"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                  <v-text-field
                    v-model="editedItem.state"
                    label="State / Province"
                    :error-messages="errors.state"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                  <v-text-field
                    v-model="editedItem.country"
                    label="Country"
                    :error-messages="errors.country"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                  <v-text-field
                    v-model="editedItem.kor_address"
                    label="Address(Korean)"
                    :error-messages="errors.kor_address"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                  <v-text-field v-model="editedItem.zipcode" label="Postal Code"></v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                  <v-text-field
                    v-model="editedItem.phone"
                    label="Contact Number"
                    :error-messages="errors.phone"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                  <v-text-field v-model="editedItem.fax" label="Fax Number"></v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                  <v-text-field v-model="editedItem.vat_reg_number" label="V.A.T Number"></v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                  <v-text-field v-model="editedItem.reg_number" label="Registration Number"></v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                  <v-text-field
                    v-model="editedItem.email"
                    label="Email"
                    :error-messages="errors.email"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                  <v-text-field v-model="editedItem.code" label="Branch Code"></v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                  <v-checkbox v-model="editedItem.is_active" label="Activate"></v-checkbox>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn text color="primary" class="mr-3" @click="save">SAVE</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-toolbar>
    <v-card-text>
      <v-simple-table height="350" fixed-header>
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-center">ID</th>
              <th class="text-center">Display Name</th>
              <th class="text-center">Activation</th>
              <th class="text-center">Code</th>
              <th class="text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in data" :key="item.id">
              <td class="text-center">{{ item.id }}</td>
              <td class="text-center">{{ item.display_name }}</td>
              <td class="text-center">
                <v-chip
                  color="primary"
                  v-if="item.is_active === true || item.is_active === 1"
                >Active</v-chip>
                <v-chip v-else>Active</v-chip>
              </td>
              <td class="text-center">{{ item.code }}</td>
              <td class="text-center">
                <v-btn small text @click="openDialog(item)">
                  <v-icon color="blue lighten-2">mdi-pencil-circle</v-icon>
                </v-btn>
              </td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-card-text>
  </v-card>
</template>

<script>
import Axios from "axios";
export default {
  props: ["data"],
  data() {
    return {
      editedIndex: -1,
      errors: [],
      dialog: false,
      editedItem: {
        id: null,
        name: null,
        display_name: null,
        kor_name: null,
        kor_address: null,
        street1: null,
        street2: null,
        city: null,
        state: null,
        country: null,
        zipcode: null,
        phone: null,
        fax: null,
        vat_reg_number: null,
        reg_number: null,
        email: null,
        code: null,
        is_active: null
      },
      resetEditedItem: {
        id: null,
        name: null,
        display_name: null,
        kor_name: null,
        kor_address: null,
        street1: null,
        street2: null,
        city: null,
        state: null,
        country: null,
        zipcode: null,
        phone: null,
        fax: null,
        vat_reg_number: null,
        reg_number: null,
        email: null,
        code: null,
        is_active: null
      }
    };
  },

  computed: {
    itemCount() {
      return this.data.length;
    }
  },

  methods: {
    openDialog(item) {
      this.editedIndex = this.data.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    closeDialog() {
      this.dialog = false;
      this.errors = [];
      setTimeout(() => {
        this.editedItem = Object.assign({}, this.resetEditedItem);
        this.editedIndex = -1;
      }, 300);
    },

    save() {
      if (this.editedIndex > -1) {
        Axios.put("/api/admin/branches/" + this.editedItem.id, this.editedItem)
          .then(response => {
            Object.assign(this.data[this.editedIndex], response.data.data);
            this.$store.dispatch("SHOW_GLOBAL_SNACKBAR", {
              text: response.data.message
            });
            this.errors = [];
            this.closeDialog();
          })
          .catch(error => {
            this.errors = error.response.data.errors;
            this.$store.dispatch("SHOW_GLOBAL_SNACKBAR", {
              text: error.response.data.message,
              color: "red"
            });
          });
      } else {
        Axios.post("/api/admin/branches", this.editedItem)
          .then(response => {
            this.data.push(response.data.data);
            this.$store.dispatch("SHOW_GLOBAL_SNACKBAR", {
              text: response.data.message
            });
            this.errors = [];
            this.closeDialog();
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

    deleteItem(item) {
      const index = this.data.indexOf(item);
      if (confirm("Do you really want to delete?") === true) {
        Axios.delete("/api/default-data/branches/" + item.id).then(response => {
          this.data.splice(index, 1);
          // this.$store.dispatch('SHOW_GLOBAL_SNACKBAR',{ text: response.data.message })
          this.errors = [];
        });
      }
    }
  }
};
</script>