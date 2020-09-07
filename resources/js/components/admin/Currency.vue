<template>
  <v-card class="wrap-component-table">
    <v-toolbar flat>
      <v-toolbar-title>
        <v-badge color="error" bordered :content="itemCount" offset-x="15" offset-y="20">
          <v-chip dark color="blue">
            <v-icon dark>mdi-currency-usd</v-icon>
          </v-chip>
        </v-badge>&nbsp;
        Currency
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn fab small text color="primary" @click="openDialog">
        <v-icon>mdi-plus</v-icon>
      </v-btn>
      <v-dialog v-model="dialog" max-width="500px">
        <v-card>
          <v-toolbar flat color="blue-grey darken-1">
            <v-toolbar-title>Currency</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn fab small text color="primary" @click="closeDialog">
              <v-icon>mdi-window-close</v-icon>
            </v-btn>
          </v-toolbar>
          <v-card-text>
            <div class="mt-5">
              <v-text-field
                v-model="editedItem.name"
                label="Currency Name"
                outlined
                :error-messages="errors.name"
              ></v-text-field>
              <v-text-field
                v-model="editedItem.display_name"
                label="Currency Display Name"
                outlined
                :error-messages="errors.display_name"
              ></v-text-field>
              <v-text-field v-model="editedItem.country" label="Country" outlined></v-text-field>
              <v-text-field
                v-model="editedItem.exchange_rate"
                label="Default Exchange Rate"
                outlined
                type="number"
              ></v-text-field>
              <v-text-field
                v-model="editedItem.symbol"
                outlined
                :error-messages="errors.symbol"
                label="Symbol"
              ></v-text-field>
              <v-textarea
                v-model="editedItem.description"
                outlined
                :error-messages="errors.description"
                label="Description"
              ></v-textarea>
              <v-checkbox v-model="editedItem.is_active" label="Activate"></v-checkbox>
            </div>
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
              <th class="text-center">Symbol</th>
              <th class="text-center">Exchange Rate</th>
              <th class="text-center">Activation</th>
              <th class="text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in data" :key="item.id">
              <td class="text-center">{{ item.id }}</td>
              <td class="text-center">{{ item.display_name }}</td>
              <td class="text-center">{{ item.symbol }}</td>
              <td class="text-center">{{ item.exchange_rate }}</td>
              <td class="text-center">
                <v-chip
                  color="primary"
                  v-if="item.is_active === true || item.is_active === 1"
                >Active</v-chip>
                <v-chip v-else>Active</v-chip>
              </td>
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
        id: "",
        name: "",
        display_name: "",
        country: "",
        exchange_rate: "",
        symbol: "",
        is_active: false,
        description: ""
      },
      resetEditedItem: {
        id: "",
        name: "",
        display_name: "",
        country: "",
        exchange_rate: "",
        symbol: "",
        is_active: false,
        description: ""
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
        Axios.put(
          "/api/admin/currencies/" + this.editedItem.id,
          this.editedItem
        )
          .then(response => {
            Object.assign(this.data[this.editedIndex], this.editedItem);
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
        Axios.post("/api/admin/currencies", this.editedItem)
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
        Axios.delete("/api/admin/currencies/" + item.id).then(response => {
          this.data.splice(index, 1);
          this.$store.dispatch("SHOW_GLOBAL_SNACKBAR", {
            text: response.data.message
          });
          this.errors = [];
        });
      }
    }
  }
};
</script>