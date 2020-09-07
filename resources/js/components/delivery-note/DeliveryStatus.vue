<template>
  <div>
    <v-card>
      <v-card-title>
        <h4>CHANGE DELIVERY HISTORY</h4>
        <v-spacer></v-spacer>
        <v-btn fab small text @click="handleCloseChangeStatusDialog">
          <v-icon dark>mdi-window-close</v-icon>
        </v-btn>
      </v-card-title>
      <v-divider></v-divider>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12" md="6">
              <v-card>
                <v-card-text>
                  <v-subheader>Select Status</v-subheader>
                  <v-select
                    v-model="status"
                    :items="statuses"
                    chips
                    :error-messages="errors.status"
                  ></v-select>
                  <v-divider></v-divider>
                  <v-textarea v-model="message" label="Message"></v-textarea>
                  <v-divider></v-divider>
                  <v-form>
                    <v-autocomplete
                      v-model="receivers"
                      :items="users"
                      filled
                      chips
                      label="Select Delivery Notification Receivers"
                      item-text="name"
                      item-value="id"
                      return-object
                      multiple
                    >
                      <template v-slot:selection="user">
                        <v-chip
                          v-bind="user.attrs"
                          :input-value="user.selected"
                          close
                          @click="user.select"
                          @click:close="removeReceiver(user.item)"
                        >
                          <v-avatar left>
                            <span v-if="user.item.avatar">
                              <v-img :src="'img/avatars/'+user.item.avatar" width="30"></v-img>
                            </span>
                            <span v-else>
                              <v-img :src="'img/'+user.item.gender+'-avatar.png'" width="30"></v-img>
                            </span>
                          </v-avatar>
                          {{ user.item.name }}
                        </v-chip>
                      </template>
                      <template v-slot:item="user">
                        <template v-if="typeof user.item !== 'object'">
                          <v-list-item-content v-text="user.item"></v-list-item-content>
                        </template>
                        <template v-else>
                          <v-list-item-avatar>
                            <span v-if="user.item.avatar">
                              <img :src="'img/avatars/'+user.item.avatar" width="30" />
                            </span>
                            <span v-else>
                              <img :src="'img/'+user.item.gender+'-avatar.png'" width="30" />
                            </span>
                          </v-list-item-avatar>
                          <v-list-item-content>
                            <v-list-item-title v-html="user.item.name"></v-list-item-title>
                            <v-list-item-subtitle v-html="user.item.position"></v-list-item-subtitle>
                          </v-list-item-content>
                        </template>
                      </template>
                    </v-autocomplete>
                  </v-form>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn @click="save()">Save</v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
            <v-col cols="12" md="6">
              <DeliveryHistory :histories="histories"></DeliveryHistory>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import Axios from "axios";
import DeliveryHistory from "./DeliveryHistory";
export default {
  props: {
    users: { type: Array },
    delivery_note_id: { type: Number },
    handleCloseChangeStatusDialog: { type: Function }
  },

  components: {
    DeliveryHistory
  },
  data: () => ({
    errors: [],
    histories: [],
    receivers: [],
    status: "",
    statuses: [
      "OPENED",
      "ORDERED",
      "ON DELIVERY",
      "DELIVERED",
      "CANCELED",
      "HOLDING"
    ],
    message: ""
  }),

  computed: {},

  methods: {
    init() {
      Axios.get(
        "/api/delivery-notes/" + this.delivery_note_id + "/histories"
      ).then(response => {
        this.histories = response.data.deliveryHistories;
      });
    },

    save() {
      Axios.put(
        "/api/delivery-notes/" + this.delivery_note_id + "/change-status",
        {
          status: this.status,
          message: this.message,
          receivers: this.receivers
        }
      )
        .then(response => {
          console.log(response.data);
          this.histories = response.data.deliveryHistories;
          this.$store.dispatch("SHOW_GLOBAL_SNACKBAR", {
            text: response.data.message
          });
          this.$emit("signal-changeDeliveryStatus", response.data.status);
          this.$emit("signal-changeDeliveryDate", response.data.deliveredDate);
          this.receivers = [];
          this.status = "";
          this.message = "";
        })
        .catch(error => {
          this.errors = error.response.data.errors;
          this.$store.dispatch("SHOW_GLOBAL_SNACKBAR", {
            text: error.response.data.message,
            color: "red"
          });
        });
    },

    removeReceiver(item) {
      const index = this.receivers.indexOf(item);
      if (index >= 0) this.receivers.splice(index, 1);
    }
  }
};
</script>