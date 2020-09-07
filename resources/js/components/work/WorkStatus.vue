<template>
  <div class="wrap-work-status">
    <v-card outlined class="mb-3">
      <v-toolbar flat>
        <v-toolbar-title>
          <h4>WORK STATUS</h4>
        </v-toolbar-title>
        <v-divider class="mx-4" inset vertical></v-divider>
        <v-spacer></v-spacer>
        <v-dialog v-model="dialog" max-width="500px">
          <template v-slot:activator="{ on }">
            <v-btn color="primary" dark small v-on="on">
              <v-icon>mdi-gesture-double-tap</v-icon>
            </v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="headline">CHANGE WORK STATUS</span>
              <v-spacer></v-spacer>
              <v-btn icon @click="close()">
                <v-icon>mdi-close</v-icon>
              </v-btn>
            </v-card-title>
            <v-divider></v-divider>
            <v-card-text>
              <v-select v-model="editedItem.name" :items="statuses" label="Select Status"></v-select>
              <v-text-field v-model="editedItem.description" filled label="Note"></v-text-field>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="close">Cancel</v-btn>
              <v-btn color="blue darken-1" text @click="save">Save</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
      <v-divider></v-divider>
      <v-card-text>
        <v-chip @click="openStatusHistoryDialog()">{{ workStatus }}</v-chip>
      </v-card-text>
    </v-card>

    <v-dialog v-model="workStatusHistoryDialog" max-width="640">
      <v-card>
        <v-card-title>
          <h4>STATUS HOSTORY</h4>
          <v-spacer></v-spacer>
          <v-btn icon>
            <v-icon @click="closeStatusHistoryDialog">mdi-close</v-icon>
          </v-btn>
        </v-card-title>
        <v-divider></v-divider>
        <v-card-text>
          <v-timeline>
            <v-timeline-item v-for="(history, index) in workStatusHistories" :key="index">
              <template v-slot:icon>
                <v-avatar size="36px" v-if="history.user_avatar">
                  <img :src="'../img/avatars/'+history.user_avatar" />
                </v-avatar>
                <v-avatar size="36px" v-else>
                  <img :src="'/img/man-avatar.png'" />
                </v-avatar>
              </template>
              <template v-slot:opposite>
                <v-chip color="primary">{{ history.name }}</v-chip>
              </template>
              <v-card class="elevation-2">
                <v-card-title>{{ history.user_name }}</v-card-title>
                <v-card-text>
                  {{ $moment(history.updated_at).format('YYYY-MM-DD hh:mm') }}
                  <br />
                  {{ history.description }}
                </v-card-text>
              </v-card>
            </v-timeline-item>
          </v-timeline>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import Axios from "axios";
import { mapState, mapMutations } from "vuex";
export default {
  data: () => ({
    dialog: false,
    workStatusHistoryDialog: false,
    workStatusHistories: [],
    statuses: ["OPEN", "HOLDING", "CANCELED", "COMPLETED", "DISUSED"],
    editedItem: {
      name: null,
      description: null
    },
    defaultItem: {
      name: null,
      description: null
    }
  }),

  computed: {
    ...mapState("work", ["workId", "workStatus"])
  },

  watch: {
    dialog(val) {
      val || this.close();
    }
  },

  methods: {
    ...mapMutations("work", ["SET_WORK_STATUS"]),

    close() {
      this.editedItem = Object.assign({}, this.defaultItem);
      this.dialog = false;
    },

    save() {
      Axios.post(
        "/api/works/" + this.workId + "/work-status-histories",
        this.editedItem
      ).then(response => {
        this.$store.dispatch("SHOW_GLOBAL_SNACKBAR", {
          text: response.data.message,
          color: response.data.color
        });
        this.SET_WORK_STATUS(response.data.name);
        this.$emit("signal-changeWorkStatus", response.data.name);
      });
      this.close();
    },

    openStatusHistoryDialog() {
      this.workStatusHistoryDialog = true;
      Axios.get("/api/works/" + this.workId + "/work-status-histories").then(
        response => {
          this.workStatusHistories = response.data.workStatusHistories;
        }
      );
    },

    closeStatusHistoryDialog() {
      this.workStatusHistoryDialog = false;
    }
  }
};
</script>