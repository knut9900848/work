<template>
  <v-data-table :headers="headers" :items="desserts" sort-by="calories" class="elevation-1">
    <template v-slot:top>
      <v-toolbar elevation="0" color="blue" dark>
        <v-toolbar-title>ADDRESS LIST</v-toolbar-title>
        <v-divider class="mx-4" inset vertical></v-divider>
        <v-spacer></v-spacer>
        <v-dialog v-model="dialog" max-width="1024px">
          <template v-slot:activator="{ on }">
            <v-btn color="blue-grey lighten-5" fab text small v-on="on">
              <v-icon>mdi-home-map-marker</v-icon>
            </v-btn>
          </template>
          <v-card>
            <v-toolbar color="blue-grey darken-1" dark>
              <v-toolbar-title>{{ formTitle }}</v-toolbar-title>
              <v-spacer></v-spacer>
              <v-btn fab small text @click="close()">
                <v-icon dark>mdi-window-close</v-icon>
              </v-btn>
            </v-toolbar>
            <v-card-text>
              <v-container>
                <v-row>
                  <!-- Name -->
                  <v-col cols="12" sm="6" md="6">
                    <v-text-field
                      v-model="editedItem.name"
                      label="Name(*)"
                      :error-messages="errors.name"
                      rounded
                      filled
                    ></v-text-field>
                  </v-col>

                  <!-- Street 1 -->
                  <v-col cols="12" sm="6" md="6">
                    <v-text-field
                      v-model="editedItem.street1"
                      label="Street1"
                      :error-messages="errors.street1"
                      rounded
                      filled
                    ></v-text-field>
                  </v-col>

                  <!-- Street 2 -->
                  <v-col cols="12" sm="6" md="6">
                    <v-text-field
                      v-model="editedItem.street2"
                      label="street2"
                      :error-messages="errors.street2"
                      rounded
                      filled
                    ></v-text-field>
                  </v-col>

                  <!-- City -->
                  <v-col cols="12" sm="6" md="6">
                    <v-text-field
                      v-model="editedItem.city"
                      label="City(District)"
                      :error-messages="errors.city"
                      rounded
                      filled
                    ></v-text-field>
                  </v-col>

                  <!-- State -->
                  <v-col cols="12" sm="6" md="6">
                    <v-text-field
                      v-model="editedItem.state"
                      label="State(Province)"
                      :error-messages="errors.state"
                      rounded
                      filled
                    ></v-text-field>
                  </v-col>

                  <!-- Country -->
                  <v-col cols="12" md="6">
                    <v-select
                      v-model="editedItem.country"
                      label="Country(*)"
                      item-text="name"
                      item-value="name"
                      :items="countries"
                      :error-messages="errors.country"
                      rounded
                      filled
                    ></v-select>
                  </v-col>

                  <!-- ZipCode -->
                  <v-col cols="12" sm="6" md="6">
                    <v-text-field
                      v-model="editedItem.zipcode"
                      label="Zipcode"
                      :error-messages="errors.zipcode"
                      rounded
                      filled
                    ></v-text-field>
                  </v-col>

                  <!-- Description -->
                  <v-col cols="12">
                    <v-textarea
                      v-model="editedItem.description"
                      label="Description"
                      :error-messages="errors.description"
                      filled
                    ></v-textarea>
                  </v-col>

                  <!-- Is Active -->
                  <v-col>
                    <v-checkbox v-model="editedItem.is_active" label="Activate"></v-checkbox>
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
        </v-dialog>
      </v-toolbar>
    </template>

    <template v-slot:item.is_active="{ item }">
      <v-chip color="primary" v-if="item.is_active === 1 || item.is_active === true">Active</v-chip>
      <v-chip v-else>Active</v-chip>
    </template>

    <template v-slot:item.actions="{ item }">
      <v-btn @click="editItem(item)" small depressed color="primary">
        <v-icon small>mdi-pencil</v-icon>
      </v-btn>
    </template>
    <template v-slot:no-data>
      <v-btn color="primary" @click="initialize">Reset</v-btn>
    </template>
  </v-data-table>
</template>

<script>
import Axios from "axios";
export default {
  props: ["model_id", "model", "countries"],
  data: () => ({
    dialog: false,
    errors: [],
    headers: [
      { text: "ID", value: "id", sortable: false },
      { text: "Name", value: "name", sortable: false },
      { text: "Activation", value: "is_active", sortable: false },
      { text: "Actions", value: "actions", sortable: false }
    ],
    desserts: [],
    editedIndex: -1,
    editedItem: {
      id: null,
      name: null,
      street1: null,
      street2: null,
      city: null,
      state: null,
      country: null,
      description: null,
      is_active: null
    },
    defaultItem: {
      id: null,
      name: null,
      street1: null,
      street2: null,
      city: null,
      state: null,
      country: null,
      description: null,
      is_active: null
    }
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1
        ? "New Compay Address"
        : "Edit Company Address";
    }
  },

  watch: {
    dialog(val) {
      val || this.close();
    }
  },

  methods: {
    initialize() {
      Axios.get("/api/addresses/" + this.model + "/" + this.model_id).then(
        response => {
          this.desserts = response.data.addresses;
        }
      );
    },

    editItem(item) {
      this.editedIndex = this.desserts.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
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
        Axios.put("/api/addresses/" + this.editedItem.id, this.editedItem)
          .then(response => {
            Object.assign(
              this.desserts[this.editedIndex],
              response.data.address
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
        Axios.post(
          "/api/addresses/" + this.model + "/" + this.model_id,
          this.editedItem
        )
          .then(response => {
            this.desserts.push(response.data.address);
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