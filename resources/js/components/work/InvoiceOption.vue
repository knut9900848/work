<template>
  <v-card>
    <v-card-title>
      <span class="headline">Setting</span>
    </v-card-title>
    <v-card-text>
      <v-simple-table>
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-center">OPTION</th>
              <th class="text-center">SELECT</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Use Tax</td>
              <td>
                <v-checkbox v-model="invoiceOption.is_use_tax"></v-checkbox>
              </td>
            </tr>
            <tr>
              <td>Discount</td>
              <td>
                <v-currency-field v-model="invoiceOption.discount"></v-currency-field>
              </td>
            </tr>
            <tr>
              <td>Shpping / Handling Fee</td>
              <td>
                <v-currency-field v-model="invoiceOption.shipping_fee"></v-currency-field>
              </td>
            </tr>
            <tr>
              <td>PDF Form Type</td>
              <td>
                <v-select
                  v-model="invoiceOption.pdf_form_type"
                  :items="formTypes"
                  item-text="name"
                  item-value="type"
                ></v-select>
              </td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-card-text>

    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="blue darken-1" text @click="updateInvoiceOption()" v-if="invoiceId">Save</v-btn>
      <v-btn color="blue darken-1" text @click="setOption()" v-else>Save</v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
import { mapState, mapMutations, mapActions, mapGetters } from "vuex";
import Axios from "axios";

export default {
  props: [],
  data: () => ({
    formTypes: [
      { name: "Default Form", type: "default" },
      { name: "Baker Hughes Form", type: "baker-hughes" },
      { name: "lisa", type: "lisa" }
    ]
  }),

  computed: {
    ...mapState("invoice", ["invoiceOption", "invoiceId"])
  },

  methods: {
    ...mapMutations("invoice", ["SET_INVOICE_OPTION"]),

    ...mapActions("invoice", ["SAVE_INVOICE_OPTION", "UPDATE_INVOICE_OPTION"]),

    setOption() {
      this.SET_INVOICE_OPTION(this.invoiceOption);
      this.closeOptionDialog();
    },

    saveInvoiceOption() {
      this.SAVE_INVOICE_OPTION(this.invoiceId);
    },

    updateInvoiceOption() {
      this.UPDATE_INVOICE_OPTION(this.invoiceId);
      this.closeOptionDialog();
    },

    closeOptionDialog() {
      this.$emit("signal-closeOptionDialog");
    }
  }
};
</script>