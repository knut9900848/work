<template>
  <div class="wrap-component-table">
    <v-data-table
      :headers="headers"
      :items="desserts"
      :search="search"
      outline
      :items-per-page="15"
    >
      <template v-slot:top>
        <v-toolbar flat dark height="85">
          <v-toolbar-title>
            <span class="page-title">Deliver Notes</span>
          </v-toolbar-title>
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
          <v-btn color="primary">
            <v-icon>mdi-plus</v-icon>FILTER
          </v-btn>
        </v-toolbar>
      </template>

      <template v-slot:item.status="{ item }">
        <v-chip @click="openChangeStatusDialog(item)">{{ item.status }}</v-chip>
      </template>

      <template v-slot:item.price="{ item }">
        <div class="d-flex justify-space-between">
          <span class="d-block">{{ item.currency }}</span>
          <span class="d-block">{{ formatPrice(item.price) }}</span>
        </div>
      </template>

      <template v-slot:no-data>
        <v-btn color="primary">Reset</v-btn>
      </template>
    </v-data-table>

    <v-dialog v-model="changeStatusDialog" max-width="1024" persistent>
      <DeliveryStatus
        ref="deliveryStatusComponent"
        :statuses="statuses"
        :users="users"
        :delivery_note_id="delivery_note_id"
        :handleCloseChangeStatusDialog="closeChangeStatusDialog"
        @signal-changeDeliveryStatus="changeDeliveryStatus"
        @signal-changeDeliveryDate="changeDeliveryDate"
      ></DeliveryStatus>
    </v-dialog>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";

import Axios from "axios";
import DeliveryStatus from "../components/delivery-note/DeliveryStatus";
export default {
  components: {
    DeliveryStatus
  },
  data: () => ({
    headers: [
      { text: "QT Number", value: "quotation_number", divider: true },
      { text: "Item", align: "left", value: "line_description", divider: true },
      { text: "Status", value: "status", divider: true },
      { text: "Issued Date", value: "quotation_issued_date", divider: true },
      { text: "Delivered Date", value: "delivered_date", divider: true },
      { text: "PO Number", value: "sale_order_number", divider: true },
      { text: "INV Date", value: "invoice_date", divider: true },
      { text: "Due Date", value: "invoice_payment_due_date", divider: true },
      { text: "Received Date", value: "payment_received_date", divider: true },
      { text: "Project", value: "quotation_project", divider: true },
      { text: "SR Number", value: "quotation_sr_number", divider: true },
      { text: "Price", align: "center", value: "price", divider: true }
    ],

    desserts: [],
    statuses: [
      "OPENED",
      "ORDERED",
      "ON DELIVERY",
      "DELIVERED",
      "CANCELED",
      "HOLDING"
    ],
    users: [],
    search: "",
    index: "",
    delivery_note_id: "",
    changeStatusDialog: false
  }),

  computed: {
    deliveryStatus() {}
  },

  created() {
    this.initialize();
  },

  methods: {
    initialize() {
      Axios.get("/api/delivery-notes").then(response => {
        this.desserts = response.data.deliveryNotes;
        this.users = response.data.users;
      });
    },

    openChangeStatusDialog(item) {
      this.changeStatusDialog = true;
      this.index = this.desserts.indexOf(item);
      this.delivery_note_id = item.id;
      this.$nextTick(() => {
        this.$refs.deliveryStatusComponent.init();
      });
    },

    closeChangeStatusDialog() {
      this.changeStatusDialog = false;
    },

    changeDeliveryStatus(status) {
      this.desserts[this.index].status = status;
    },

    changeDeliveryDate(date) {
      console.log(date);
      console.log(this.desserts[this.index]);
      this.desserts[this.index].delivered_date = date;
    },

    formatPrice(value) {
      let val = (value / 1).toFixed(2).replace(",", ".");
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
  }
};
</script>