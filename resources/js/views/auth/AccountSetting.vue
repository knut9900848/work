<template>
  <v-card>
    <v-card-title>
      <span class="headline"></span>
    </v-card-title>

    <v-card-text>
      <div>
        <v-row>
          <v-col cols="12" sm="6">
            <v-text-field v-model="editedItem.name" label="Name" :error-messages="errors.name"></v-text-field>
          </v-col>
          <v-col cols="12" sm="6">
            <v-text-field
              v-model="editedItem.kor_name"
              label="Name (Korean)"
              :error-messages="errors.kor_name"
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-text-field v-model="editedItem.email" disabled label="Email"></v-text-field>
          </v-col>
          <v-col cols="12" sm="6">
            <v-text-field v-model="editedItem.password" type="password" label="Password"></v-text-field>
          </v-col>
          <v-col cols="12" sm="6">
            <v-text-field
              v-model="editedItem.password_confirmation"
              type="password"
              label="Password Confirm"
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="6">
            <v-text-field v-model="editedItem.position" label="Position"></v-text-field>
          </v-col>
          <v-col cols="12" sm="6">
            <v-text-field v-model="editedItem.kor_position" label="Position (Korean)"></v-text-field>
          </v-col>
          <v-col cols="12" sm="6">
            <v-text-field v-model="editedItem.mobile" label="Mobile"></v-text-field>
          </v-col>
          <v-col cols="12" sm="6">
            <v-text-field v-model="editedItem.phone" label="Phone"></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-file-input
              placeholder="Pick an avatar"
              prepend-icon="mdi-camera"
              label="Avatar"
              v-model="avatar"
            ></v-file-input>
          </v-col>
        </v-row>
      </div>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="blue darken-1" text @click="update">update</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import Axios from "axios";
export default {
  data: () => ({
    errors: [],
    editedItem: {
      name: null,
      korean_name: null,
      gender: null,
      email: null,
      password: null,
      password_confirmation: null,
      postion: null,
      mobile: null,
      phone: null,
      avatar: null
    },
    avatar: null
  }),

  created() {
    this.initialize();
  },

  methods: {
    initialize() {
      Axios.get("/api/account/get-member-info").then(response => {
        this.editedItem = response.data.account;
        console.log(response.data);
      });
    },

    update() {
      Axios.put("/api/account/update-member-info", this.editedItem)
        .then(response => {
          this.editedItem = response.data.account;
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
    }
  }
};
</script>