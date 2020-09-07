<template>
  <div class="wrap-component-table">
    <v-data-table
      :headers="headers"
      :items="desserts"
      class="elevation-0"
      :search="search"
      :items-per-page="30"
    >
      <template v-slot:top>
        <v-toolbar flat dark height="85" color="blue accent-2">
          <v-toolbar-title>PERMISSIONS</v-toolbar-title>
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
          <v-dialog v-model="dialog" max-width="400px">
            <template v-slot:activator="{ on }">
              <v-btn color="primary" dark class="mb-2" v-on="on" @click="editItem()">
                <v-icon left dark>mdi-account-network</v-icon>Add Permission
              </v-btn>
            </template>
            <v-card>
              <v-toolbar flat>
                <v-toolbar-title>Permission</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-btn fab small text color="primary" @click="close()">
                  <v-icon>mdi-window-close</v-icon>
                </v-btn>
              </v-toolbar>
              <v-divider></v-divider>
              <v-card-text>
                <v-text-field v-model="editedItem.name" placeholder="Permission Name"></v-text-field>
                <v-divider></v-divider>
                <v-text-field v-model="editedItem.guard_name" placeholder="Guard Name"></v-text-field>
                <v-textarea v-model="editedItem.description" placeholder="description"></v-textarea>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="close()">Cancel</v-btn>
                <v-btn color="blue darken-1" text @click="save()">Save</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-toolbar>
      </template>

      <template v-slot:item.action="{ item }">
        <v-btn color="primary" depressed dark small @click="editItem(item)">
          Edit
          <v-icon right small>mdi-pencil</v-icon>
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
export default {
  data: () => ({
    dialog: false,
    search: "",
    headers: [
      { text: "ID", align: "center", sortable: false, value: "id" },
      {
        text: "Permission Name",
        align: "left",
        sortable: false,
        value: "name"
      },
      {
        text: "Guard Name",
        align: "center",
        sortable: false,
        value: "guard_name"
      },
      {
        text: "Description",
        align: "left",
        sortable: false,
        value: "description"
      },
      { text: "Action", align: "center", sortable: false, value: "action" }
    ],
    desserts: [],
    editedIndex: -1,
    editedItem: {
      id: null,
      name: null,
      guard_name: null,
      description: null,
      created_at: null,
      updated_at: null
    },
    defaultItem: {
      id: null,
      name: null,
      guard_name: null,
      description: null,
      created_at: null,
      updated_at: null
    }
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "Add Permission" : "Edit Permission";
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
      Axios.get("/api/admin/permissions").then(response => {
        this.desserts = response.data.permissions;
      });
    },

    editItem(item) {
      this.editedIndex = this.desserts.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    save() {
      if (this.editedIndex > -1) {
        Axios.put(
          "/api/admin/permissions/" + this.editedItem.id,
          this.editedItem
        )
          .then(response => {
            Object.assign(this.desserts[this.editedIndex], this.editedItem);
            this.$store.dispatch("SHOW_GLOBAL_SNACKBAR", {
              text: response.data.message
            });
          })
          .catch(error => {});
      } else {
        Axios.post("/api/admin/permissions", this.editedItem)
          .then(response => {
            this.desserts.push(response.data.permission);
            this.$store.dispatch("SHOW_GLOBAL_SNACKBAR", {
              text: response.data.message
            });
          })
          .catch(error => {});
      }
      this.close();
    },

    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      }, 300);
    }
  }
};
</script>