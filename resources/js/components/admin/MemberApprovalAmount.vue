<template>
  <v-data-table :headers="headers" :items="desserts" sort-by="calories" class="elevation-1">
    <template v-slot:top>
      <v-toolbar flat>
        <v-toolbar-title>List</v-toolbar-title>
        <v-divider class="mx-4" inset vertical></v-divider>
        <v-spacer></v-spacer>
        <v-dialog v-model="dialog" max-width="500px">
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="primary" dark class="mb-2" v-bind="attrs" v-on="on">New Item</v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="headline">{{ formTitle }}</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12" sm="6">
                    <v-text-field v-model="editedItem.name" label="Name"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6">
                    <v-text-field v-model="editedItem.display_name" label="Display Name"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6">
                    <v-text-field v-model="editedItem.amount" label="Amount"></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-textarea v-model="editedItem.description" label="Description"></v-textarea>
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
    <template v-slot:item.actions="{ item }">
      <v-icon small class="mr-2" @click="editItem(item)">mdi-pencil</v-icon>
    </template>
    <template v-slot:no-data>
      <v-btn color="primary" @click="initialize">Reset</v-btn>
    </template>
  </v-data-table>
</template>

<script>
import Axios from "axios";
export default {
  data: () => ({
    dialog: false,
    member_id: null,
    headers: [
      { text: "ID", value: "id", sortable: false },
      { text: "Name", value: "display_name", sortable: false },
      { text: "Approval Amount", value: "amount", sortable: false },
      { text: "Actions", value: "actions", sortable: false }
    ],
    desserts: [],
    editedIndex: -1,
    editedItem: {
      id: null,
      name: null,
      dispay_name: null,
      amount: 0,
      user_id: null,
      description: null
    },
    defaultItem: {
      id: null,
      name: null,
      dispay_name: null,
      amount: 0,
      user_id: null,
      description: null
    }
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "New Item" : "Edit Item";
    }
  },

  watch: {
    dialog(val) {
      val || this.close();
    }
  },

  methods: {
    initialize(member_id) {
      Axios.get("/api/admin/members/" + member_id + "/approval-amounts").then(
        response => {
          this.member_id = member_id;
          this.desserts = response.data.memberApprovalAmounts;
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
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    save() {
      if (this.editedIndex > -1) {
        Axios.put(
          "/api/admin/members/" +
            this.member_id +
            "/approval-amounts/" +
            this.editedItem.id,
          this.editedItem
        ).then(response => {
          Object.assign(this.desserts[this.editedIndex], this.editedItem);
        });
      } else {
        Axios.post(
          "/api/admin/members/" + this.member_id + "/approval-amounts/",
          this.editedItem
        ).then(response => {
          this.desserts.push(response.data.memberApprovalAmount);
        });
      }
      this.close();
    }
  }
};
</script>