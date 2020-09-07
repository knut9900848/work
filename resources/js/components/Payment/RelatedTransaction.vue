<template>
  <div class="wrap-related-quotations wrap-component-table">
    <v-card class="mb-3" outlined>
      <v-card-title>
        <h4>Connect Transaction</h4>
        <v-spacer></v-spacer>
        <v-btn color="primary" small @click="openTransactionDialog()">
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
      </v-card-title>
      <v-divider></v-divider>
      <v-card-text>
        <v-simple-table>
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left">Number</th>
                <th class="text-center">Date</th>
                <th class="text-center">Bank</th>
                <th class="text-center">Deposit Amount</th>
                <th class="text-center">Currency</th>
                <th class="text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr v-if="relatedTransaction">
                <td class="text-center">{{ relatedTransaction.id }}</td>
                <td class="text-center">{{ relatedTransaction.received_date }}</td>
                <td class="text-center">{{ relatedTransaction.bank }}</td>
                <td class="text-center">{{ relatedTransaction.deposit_amount }}</td>
                <td class="text-center">{{ relatedTransaction.currency }}</td>
                <td class="text-center">
                  <v-btn
                    small
                    fab
                    icon
                    color="red"
                    @click="disconnectTransaction(relatedTransaction.id)"
                  >
                    <v-icon>mdi-close</v-icon>
                  </v-btn>
                </td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-card-text>
    </v-card>

    <v-dialog v-model="transactionsDialog" max-width="1024px">
      <v-card>
        <v-card-title>
          <h4>SELECT RELATED TRANSACTION</h4>
          <v-spacer></v-spacer>
          <v-btn icon fab @click="closeTransactionDialog()">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>
        <v-divider></v-divider>
        <v-card-text>
          <v-data-table
            v-model="selected"
            :headers="headers"
            :items="transactions"
            item-key="id"
            show-select
            :disable-sort="true"
            :single-select="true"
          ></v-data-table>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" @click="connectTransaction()">Connect</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import Axios from "axios";
import { mapState } from "vuex";

export default {
  data() {
    return {
      transactionsDialog: false,
      relatedTransaction: {
        bank: null,
        created_at: null,
        currency: null,
        deposit_amount: 0,
        description: null,
        exchange_rate: 0,
        exchanged_amount: 0,
        id: null,
        received_date: null,
        sale_order_number: null,
        updated_at: null
      },
      transactions: [],
      selected: [],
      headers: [
        { text: "Date", value: "received_date" },
        { text: "Deposit Amount", value: "deposit_amount", align: "center" },
        { text: "bank", value: "bank", align: "center" },
        { text: "currency", value: "currency", align: "center" },
        { text: "Status", value: "status", align: "center" }
      ]
    };
  },

  computed: {
    ...mapState("work", ["workId"])
  },

  methods: {
    initialize() {
      Axios.get("/api/works/" + this.workId + "/related-transactions").then(
        response => {
          console.log(response.data);
          this.relatedTransaction = response.data.relatedTransaction;
        }
      );
    },

    openTransactionDialog() {
      this.transactionsDialog = true;
      Axios.get("/api/works/" + this.workId + "/search-transactions").then(
        response => {
          this.transactions = response.data.transactions;
        }
      );
    },

    closeTransactionDialog() {
      this.transactionsDialog = false;
      this.selected = [];
    },

    connectTransaction() {
      Axios.put("/api/works/" + this.workId + "/connect-transactions", {
        id: this.selected[0].id
      }).then(response => {
        console.log(response.data);
        this.relatedTransaction = Object.assign({}, response.data.transaction);
        this.$store.dispatch("SHOW_GLOBAL_SNACKBAR", {
          text: response.data.message
        });
        this.closeTransactionDialog();
      });
    },

    disconnectTransaction(relatedTransactionId) {
      Axios.put(
        "/api/works/" + this.workId + "/disconnect-transactions",
        this.relatedTransactionId
      ).then(response => {
        this.relatedTransaction = Object.assign({});
        this.$store.dispatch("SHOW_GLOBAL_SNACKBAR", {
          text: response.data.message
        });
      });
    },

    resetRelatedTransaction() {
      this.transactions = [];
      this.relatedTransaction = [];
    }
  }
};
</script>