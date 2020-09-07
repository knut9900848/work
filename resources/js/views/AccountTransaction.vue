<template>
  <div class="wrap-component-table account-transaction-table">
    <v-data-table :items="desserts" class="elevation-0" :search="search">
      <template v-slot:top>
        <v-toolbar flat dark height="85" color="blue accent-2">
          <v-toolbar-title>Account Transaction History</v-toolbar-title>
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
          <v-dialog v-model="dialog" hide-overlay max-width="1024px">
            <template v-slot:activator="{ on }">
              <v-btn color="primary" dark class="mb-2" v-on="on">
                <v-icon left dark>mdi-bank</v-icon>Add Transaction
              </v-btn>
            </template>
            <v-card>
              <v-toolbar color="blue-grey darken-1" dark>
                <v-toolbar-title>
                  <span class="headline">{{ formTitle }}</span>
                </v-toolbar-title>
                <v-spacer></v-spacer>
                <v-btn fab small text @click="close()">
                  <v-icon dark>mdi-window-close</v-icon>
                </v-btn>
              </v-toolbar>
              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col cols="12">
                      <v-card>
                        <v-toolbar color="primary" dark flat>
                          <v-toolbar-title>Account Transaction</v-toolbar-title>
                        </v-toolbar>
                        <v-card-text>
                          <v-container>
                            <v-row>
                              <!-- Reveived Date -->
                              <v-col cols="12" md="6">
                                <v-menu
                                  v-model="receivedDateCalendar"
                                  :close-on-content-click="false"
                                  :nudge-right="40"
                                  transition="scale-transition"
                                  offset-y
                                  min-width="290px"
                                >
                                  <template v-slot:activator="{ on }">
                                    <v-text-field
                                      v-model="editedItem.received_date"
                                      label="Received On"
                                      readonly
                                      v-on="on"
                                      filled
                                      rounded
                                      prepend-inner-icon="mdi-calendar-check"
                                      :error-messages="errors.date"
                                    ></v-text-field>
                                  </template>
                                  <v-date-picker
                                    v-model="editedItem.received_date"
                                    @input="receivedDateCalendar = false"
                                  ></v-date-picker>
                                </v-menu>
                              </v-col>

                              <!-- Bank -->
                              <v-col cols="12" md="6">
                                <v-select
                                  v-model="editedItem.bank"
                                  label="Bank"
                                  item-text="name"
                                  item-value="name"
                                  :items="banks"
                                  :error-messages="errors.bank"
                                  rounded
                                  filled
                                ></v-select>
                              </v-col>

                              <!-- Currency -->
                              <v-col cols="12" md="6">
                                <v-select
                                  v-model="editedItem.currency"
                                  item-text="name"
                                  item-value="name"
                                  :items="currencies"
                                  label="Currency"
                                  filled
                                  rounded
                                  :error-messages="errors.currency"
                                ></v-select>
                              </v-col>

                              <!-- Diposit Amount -->
                              <v-col cols="12" md="6">
                                <v-text-field
                                  v-model="editedItem.deposit_amount"
                                  label="Diposit Amount"
                                  :error-messages="errors.deposit_amount"
                                  rounded
                                  filled
                                ></v-text-field>
                              </v-col>

                              <!-- Exchange Rate -->
                              <v-col cols="12" md="6">
                                <v-text-field
                                  v-model="editedItem.exchange_rate"
                                  label="Exchange Rate"
                                  :error-messages="errors.exchange_rate"
                                  rounded
                                  filled
                                ></v-text-field>
                              </v-col>

                              <!-- Exchange Amount -->
                              <v-col cols="12" md="6">
                                <v-text-field
                                  v-model="editedItem.exchanged_amount"
                                  label="Exchanged Amount"
                                  :error-messages="errors.exchanged_amount"
                                  rounded
                                  filled
                                ></v-text-field>
                              </v-col>

                              <v-col cols="12" sm="12">
                                <v-textarea
                                  v-model="editedItem.description"
                                  filled
                                  label="Description"
                                ></v-textarea>
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
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>
            </v-card>
          </v-dialog>
        </v-toolbar>
      </template>

      <template v-slot:header>
        <thead>
          <tr>
            <th>ID</th>
            <th>Date</th>
            <th>Bank</th>
            <th>Currency</th>
            <th>Deposit Amount</th>
            <th>Exchange Rate</th>
            <th>Amount(KRW)</th>
            <th>Related PO NO.</th>
            <th>Action</th>
          </tr>
        </thead>
      </template>

      <template v-slot:body>
        <tbody>
          <tr v-for="item in desserts" :key="item.id">
            <td>{{ item.id }}</td>
            <td>{{ item.received_date }}</td>
            <td>{{ item.bank }}</td>
            <td>{{ item.currency }}</td>
            <td>{{ formatPrice(item.deposit_amount) }}</td>
            <td>{{ formatPrice(item.exchange_rate) }}</td>
            <td>{{ formatPrice(item.exchanged_amount) }}</td>
            <td>
              <span v-for="work in item.works" :key="work.id">
                <span>{{ work.sale_order_number }}</span>
                <br />
              </span>
            </td>
            <td>
              <v-btn small text @click="openDialog(item)">
                <v-icon color="blue lighten-2">mdi-pencil-circle</v-icon>
              </v-btn>
            </td>
          </tr>
        </tbody>
      </template>

      <!-- <template v-slot:item.action="{ item }">
        <v-btn @click="editItem(item)" small depressed color="primary">
          <v-icon small>mdi-pencil</v-icon>
        </v-btn>
      </template>-->

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
    search: "",
    dialog: false,
    receivedDateCalendar: false,

    desserts: [],
    editedIndex: -1,
    editedItem: {
      id: null,
      name: null,
      received_date: null,
      bank: null,
      currency: null,
      deposit_amount: 0,
      exchange_rate: 0,
      exchanged_amount: 0,
      description: null,
      works: []
    },
    defaultItem: {
      id: null,
      name: null,
      received_date: null,
      bank: null,
      currency: null,
      deposit_amount: 0,
      exchange_rate: 0,
      exchanged_amount: 0,
      description: null,
      works: []
    },
    errors: [],
    currencies: [],
    banks: []
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1
        ? "Add Account Transaction"
        : "Edit Account Transaction";
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
      Axios.get("/api/account-transactions").then(response => {
        console.log(response.data);
        this.desserts = response.data.accountTransactions;
        this.currencies = response.data.currencies;
        this.banks = response.data.banks;
      });
    },

    editItem(item) {
      this.editedIndex = this.desserts.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
      if (this.editedIndex > -1) {
        this.$nextTick(function() {
          this.$refs.subProjectComponent.initialize();
        });
      }
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
        Axios.put(
          "/api/account-transactions/" + this.editedItem.id,
          this.editedItem
        )
          .then(response => {
            Object.assign(
              this.desserts[this.editedIndex],
              response.data.accountTransaction
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
        Axios.post("/api/account-transactions", this.editedItem)
          .then(response => {
            this.desserts.unshift(response.data.accountTransaction);
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
    },

    formatPrice(value) {
      let val = (value / 1).toFixed(2).replace(",", ".");
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
  }
};
</script>