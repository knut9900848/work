<template>
  <v-card outlined class="mb-3">
    <v-card-title>
      <h4>{{ title }}</h4>
      <v-spacer></v-spacer>
      <v-btn depressed @click="update">
        <v-icon left>mdi-update</v-icon>Update Now
      </v-btn>
    </v-card-title>
    <v-divider></v-divider>
    <v-card-text>
      <v-form>
        <v-autocomplete
          v-model="reminders"
          :items="people"
          filled
          chips
          label="Select Reminder Email Receivers"
          item-text="name"
          item-value="id"
          multiple
          return-object
        >
          <template v-slot:selection="data">
            <v-chip
              v-bind="data.attrs"
              :input-value="data.selected"
              close
              @click="data.select"
              @click:close="remove(data.item)"
            >
              <v-avatar left>
                <span v-if="data.item.avatar">
                  <v-img :src="'img/avatars/'+data.item.avatar" width="30"></v-img>
                </span>
                <span v-else>
                  <v-img :src="'img/default-avatars/'+data.item.gender+'-avatar.png'" width="30"></v-img>
                </span>
              </v-avatar>
              {{ data.item.name }}
            </v-chip>
          </template>
          <template v-slot:item="data">
            <template v-if="typeof data.item !== 'object'">
              <v-list-item-content v-text="data.item"></v-list-item-content>
            </template>
            <template v-else>
              <v-list-item-avatar>
                <span v-if="data.item.avatar">
                  <img :src="'img/avatars/'+data.item.avatar" width="30" />
                </span>
                <span v-else>
                  <img :src="'img/default-avatars/'+data.item.gender+'-avatar.png'" width="30" />
                </span>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title v-html="data.item.name"></v-list-item-title>
                <v-list-item-subtitle v-html="data.item.position"></v-list-item-subtitle>
              </v-list-item-content>
            </template>
          </template>
        </v-autocomplete>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script>
import Axios from "axios";
import { mapState } from "vuex";
export default {
  props: ["people", "title", "updateUrl", "initUrl", "number"],
  data() {
    return {
      reminders: []
    };
  },

  computed: {
    ...mapState("invoice", ["invoiceId"])
  },

  methods: {
    initInvoiceReminderList() {
      Axios.get("/api/invoices/" + this.invoiceId + "/" + this.initUrl).then(
        response => {
          this.reminders = response.data.reminders;
        }
      );
    },

    update() {
      Axios.post("/api/invoices/" + this.invoiceId + "/" + this.updateUrl, {
        reminders: this.reminders,
        invoice_number: this.number
      }).then(response => {
        this.$store.dispatch("SHOW_GLOBAL_SNACKBAR", {
          text: response.data.message
        });
      });
    },

    remove(item) {
      const index = this.reminders.indexOf(item);
      if (index >= 0) this.reminders.splice(index, 1);
    }
  }
};
</script>