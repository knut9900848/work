<template>
  <v-card>
    <v-card-title>
      <span class="headline">Setting</span>
    </v-card-title>
    <v-card-text class="wrap-component-table">
      <v-simple-table class="ies-purchase-order-content-dialog-table">
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-center">OPTION</th>
              <th class="text-center">SELECT</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Item List Title</td>
              <td>
                <v-text-field v-model="quotationOption.title"></v-text-field>
              </td>
            </tr>
            <tr>
              <td>Use Tax</td>
              <td>
                <v-checkbox v-model="quotationOption.is_use_tax"></v-checkbox>
              </td>
            </tr>
            <tr>
              <td>Discount</td>
              <td>
                <v-currency-field v-model="quotationOption.discount" type="number"></v-currency-field>
              </td>
            </tr>
            <tr>
              <td>Shpping / Handling Fee</td>
              <td>
                <v-currency-field v-model="quotationOption.shipping_fee" type="number"></v-currency-field>
              </td>
            </tr>
            <tr>
              <td>Use Description</td>
              <td>
                <v-checkbox v-model="quotationOption.is_use_description"></v-checkbox>
              </td>
            </tr>
            <tr>
              <td>PDF Form Type</td>
              <td>
                <v-select v-model="quotationOption.pdf_form_type" :items="formTypes"></v-select>
              </td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-card-text>

    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="blue darken-1" text @click="closeOptionDialog()">Cancel</v-btn>
      <v-btn color="blue darken-1" text @click="updateOption()" v-if="quotationId">Save</v-btn>
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
    formTypes: ["default"]
  }),

  computed: {
    ...mapState("quotation", ["quotationOption", "quotationId"])
  },

  methods: {
    ...mapMutations("quotation", ["SET_QUOTATION_OPTION"]),

    ...mapActions("quotation", ["UPDATE_QUOTATION_OPTION"]),

    setOption() {
      this.SET_QUOTATION_OPTION(this.quotationOption);
      this.closeOptionDialog();
    },

    updateOption() {
      Axios.put(
        "/api/quotations/" +
          this.quotationId +
          "/option/" +
          this.quotationOption.id,
        this.quotationOption
      )
        .then(response => {
          this.SET_QUOTATION_OPTION(response.data.option);
        })
        .catch(error => {
          if (error.response.status !== 403)
            this.errors = error.response.data.errors;
          this.$store.dispatch("SHOW_GLOBAL_SNACKBAR", {
            text: error.response.data.message,
            color: "red"
          });
        });
      this.closeOptionDialog();
    },

    closeOptionDialog() {
      this.$emit("signal-closeOptionDialog");
    }
  }
};
</script>