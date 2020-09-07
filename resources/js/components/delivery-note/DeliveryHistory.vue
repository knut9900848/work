<template>
  <div>
    <v-list subheader selevation="1">
      <v-subheader>HISTORY</v-subheader>

      <v-list-item v-for="history in histories" :key="history.id">
        <v-list-item-avatar>
          <span v-if="!history.receiver.avatar">
            <v-img
              :src="'../img/default-avatars/'+history.receiver.gender+'-avatar.png'"
              width="45"
            ></v-img>
          </span>
          <span v-else>
            <v-img :src="'../img/avatars/'+history.receiver.avatar"></v-img>
          </span>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>
            <v-chip small color="green" v-show="history.status === 'OPENED'">{{ history.status }}</v-chip>
            <v-chip
              small
              color="light-blue"
              v-show="history.status === 'ORDERED'"
            >{{ history.status }}</v-chip>
            <v-chip
              small
              color="blue"
              v-show="history.status === 'ON DELIVERY'"
            >{{ history.status }}</v-chip>
            <v-chip
              small
              color="blue darken-1"
              v-show="history.status === 'DELIVERIED'"
            >{{ history.status }}</v-chip>
            <v-chip small color="pink" v-show="history.status === 'CANCELED'">{{ history.status }}</v-chip>
            <v-chip
              small
              class="black--text"
              color="yellow"
              v-show="history.status === 'HOLDING'"
            >{{ history.status }}</v-chip>
          </v-list-item-title>
          <v-list-item-subtitle class="mt-1">
            <span class="ml-1">By {{ history.receiver.name }}</span>
            {{ $moment(history.created_at).format('YYYY-MM-DD hh:mm') }}
          </v-list-item-subtitle>
        </v-list-item-content>

        <v-list-item-icon @click="history.message ? openMessageDialog(history.message) : false">
          <v-icon :color="history.message ? 'deep-purple accent-4' : 'grey'">mdi-message</v-icon>
        </v-list-item-icon>
      </v-list-item>
    </v-list>
    <v-dialog v-model="messageDialog" max-width="400">
      <v-card>
        <v-card-title>Message</v-card-title>
        <v-divider></v-divider>
        <v-card-text class="mt-3">
          <div v-html="message"></div>
        </v-card-text>
        <v-spacer></v-spacer>
        <v-card-actions>
          <v-btn color="green darken-1" text @click="closeMessageDialog()">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  props: {
    histories: { type: Array }
  },

  computed: {},

  data: () => ({
    messageDialog: false,
    message: ""
  }),

  methods: {
    openMessageDialog(message) {
      this.messageDialog = true;
      this.message = message;
    },

    closeMessageDialog(message) {
      this.messageDialog = false;
      this.message = "";
    }
  }
};
</script>