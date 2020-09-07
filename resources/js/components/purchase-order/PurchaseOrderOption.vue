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
                <v-text-field v-model="purchaseOrderOption.title"></v-text-field>
              </td>
            </tr>
            <tr>
              <td>Use Tax</td>
              <td>
                <v-checkbox v-model="purchaseOrderOption.is_use_tax"></v-checkbox>
              </td>
            </tr>
            <tr>
              <td>Discount</td>
              <td>
                <v-currency-field v-model="purchaseOrderOption.discount"></v-currency-field>
              </td>
            </tr>
            <tr>
              <td>Shiping Fee</td>
              <td>
                <v-currency-field v-model="purchaseOrderOption.shipping_fee"></v-currency-field>
              </td>
            </tr>
            <tr>
              <td>PDF Form Type</td>
              <td>
                <v-select
                  v-model="purchaseOrderOption.pdf_form_type"
                  :items="formTypes"
                  item-text="name"
                  item-value="type"
                ></v-select>
              </td>
            </tr>
            <tr>
              <td>Terms And Conditions</td>
              <td>
                <v-select
                  v-model="purchaseOrderOption.purchase_order_terms_and_conditions_id"
                  :items="purchaseOrderTermsAndConditions"
                  item-text="name"
                  item-value="id"
                ></v-select>
              </td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-card-text>

    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="blue darken-1" text @click="closeOptionDialog()">Cancel</v-btn>
      <v-btn color="blue darken-1" text @click="updateOption()" v-if="purchaseOrderId">Save</v-btn>
      <v-btn color="blue darken-1" text @click="setOption()" v-else>Save</v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
import { mapState, mapMutations, mapActions, mapGetters } from "vuex";
import Axios from "axios";

export default {
  props: ["purchaseOrderTermsAndConditions"],
  data: () => ({
    formTypes: [
      { name: "Default Form", type: "default" },
      { name: "Baker Hughes Form", type: "baker-hughes" }
    ]
  }),

  computed: {
    ...mapState("purchase_order", ["purchaseOrderOption", "purchaseOrderId"])
  },

  methods: {
    ...mapMutations("purchase_order", ["SET_PURCHASE_ORDER_OPTION"]),

    ...mapActions("purchase_order", ["UPDATE_PURCHASE_ORDER_OPTION"]),

    setOption() {
      this.SET_PURCHASE_ORDER_OPTION(this.purchaseOrderOption);
      this.closeOptionDialog();
    },

    updateOption() {
      Axios.put(
        "/api/purchase-orders/" +
          this.purchaseOrderId +
          "/option/" +
          this.purchaseOrderOption.id,
        this.purchaseOrderOption
      ).then(response => {
        this.SET_PURCHASE_ORDER_OPTION(response.data.option);
      });
      this.closeOptionDialog();
    },

    closeOptionDialog() {
      this.$emit("signal-closeOptionDialog");
    }
  }
};
</script>