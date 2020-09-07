<template>
  <div>
    <v-card class="mb-3" flat outlined>
      <v-card-title>
        <h4>ITEM LIST</h4>
        <v-spacer></v-spacer>
        <!-- Items Dialog -->
        <v-dialog v-model="itemDialog" max-width="980">
          <template v-slot:activator="{ on }">
            <v-btn color="pink" outlined text v-on="on" :disabled="isButtonDisabled">ADD ITEM</v-btn>
          </template>
          <v-card>
            <v-toolbar flat dark color="primary" class="mb-3">
              <v-toolbar-title>ADD ITEM</v-toolbar-title>
              <v-spacer></v-spacer>
              <v-toolbar-items>
                <v-btn @click="closeItemDialog" fab text>
                  <v-icon>mdi-close</v-icon>
                </v-btn>
              </v-toolbar-items>
            </v-toolbar>
            <v-card-text>
              <v-form v-model="valid">
                <v-container>
                  <v-row>
                    <v-col cols="12">
                      <v-textarea
                        v-model="purchaseOrderLine.description"
                        label="description"
                        :rules="[required('Description')]"
                      ></v-textarea>
                    </v-col>

                    <!-- Item Name -->
                    <v-col cols="12" md="6">
                      <v-text-field v-model="purchaseOrderLine.name" label="Item Name" required></v-text-field>
                    </v-col>

                    <!-- Item Size -->
                    <v-col cols="12" md="6">
                      <v-text-field
                        v-model="purchaseOrderLine.size"
                        label="Size(Model)"
                        required
                        :rules="[required('Size'), maxLength('Size', 100)]"
                      ></v-text-field>
                    </v-col>

                    <!-- Item Purchasing Price -->
                    <v-col cols="12" md="6">
                      <v-currency-field
                        v-model="purchaseOrderLine.price"
                        label="Price"
                        required
                        type="number"
                        :rules="[required('Price'), maxLength('Price', 30)]"
                      ></v-currency-field>
                    </v-col>

                    <!-- Item Quantity -->
                    <v-col cols="12" md="6">
                      <v-currency-field
                        v-model="purchaseOrderLine.quantity"
                        label="Quantity"
                        required
                        type="number"
                        :rules="[required('Quantity'), maxLength('Qunatity', 30)]"
                      ></v-currency-field>
                    </v-col>

                    <!-- Item Unit -->
                    <v-col cols="12" md="6">
                      <v-select
                        v-model="purchaseOrderLine.unit"
                        item-text="name"
                        item-value="name"
                        :items="units"
                        label="Unit"
                        required
                        :rules="[required('Unit'), maxLength('Unit', 30)]"
                      ></v-select>
                    </v-col>

                    <!-- Line Title -->
                    <v-col cols="12" md="6">
                      <v-text-field
                        v-model="purchaseOrderLine.title"
                        label="Line Title"
                        required
                        :rules="[required('title')]"
                      ></v-text-field>
                    </v-col>
                  </v-row>
                </v-container>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn :disabled="!valid" color="primary" text @click="addItem()">Add</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-card-title>
      <v-divider></v-divider>
      <v-card-text class="wrap-component-table">
        <v-simple-table class="ies-purchase-order-content-dialog-table">
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-center">Line Title</th>
                <th class="text-center">Description</th>
                <th class="text-center">Size</th>
                <th class="text-center">Q'ty</th>
                <th class="text-center">Unit</th>
                <th class="text-center">Unit Price</th>
                <th class="text-center">Sub Total</th>
                <th class="text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in purchaseOrderLines" :key="index">
                <td class="text-center">{{ item.title }}</td>
                <td v-html="item.description"></td>
                <td class="text-center">{{ item.size }}</td>
                <td class="text-center">{{ item.quantity }}</td>
                <td class="text-center">{{ item.unit }}</td>
                <td class="text-center">{{ formatPrice(item.price) }}</td>
                <td class="text-center">{{ formatPrice(item.price * item.quantity) }}</td>
                <td class="d-flex justify-center align-center text-center">
                  <span class="d-block mr-1">
                    <v-btn
                      fab
                      depressed
                      x-small
                      color="blue-grey"
                      elevation
                      @click.prevent="removeItem(item)"
                      :disabled="isButtonDisabled"
                    >
                      <v-icon dark color="white">mdi-minus</v-icon>
                    </v-btn>
                  </span>
                  <span class="d-block">
                    <v-btn
                      fab
                      depressed
                      x-small
                      color="primary"
                      elevation
                      @click.prevent="editItem(item)"
                      :disabled="isButtonDisabled"
                    >
                      <v-icon dark color="white">mdi-pencil</v-icon>
                    </v-btn>
                  </span>
                </td>
              </tr>
            </tbody>

            <tfoot>
              <tr>
                <td colspan="7" class="text-right">TOTAL</td>
                <td colspan="1" class="text-right">
                  <v-chip>{{ formatPrice(purchaseOrderTotalPrice) }}</v-chip>
                </td>
              </tr>
              <tr v-if="purchaseOrderOption.discount > 0">
                <td colspan="7" class="text-right">DISCOUNT</td>
                <td colspan="1" class="text-right">
                  <v-chip>{{ formatPrice(purchaseOrderOption.discount) }}</v-chip>
                </td>
              </tr>
              <tr v-if="purchaseOrderOption.shipping_fee > 0">
                <td colspan="7" class="text-right">SHIPPING / HANDLING</td>
                <td colspan="1" class="text-right">
                  <v-chip>{{ formatPrice(purchaseOrderOption.shipping_fee) }}</v-chip>
                </td>
              </tr>
              <tr v-if="purchaseOrderOption.is_use_tax">
                <td colspan="7" class="text-right">TAX</td>
                <td colspan="1" class="text-right">
                  <v-chip>{{ formatPrice(purchaseOrderTax) }}</v-chip>
                </td>
              </tr>
              <tr>
                <td colspan="7" class="text-right font-weight-black">GRAND TOTAL</td>
                <td colspan="1" class="text-right">
                  <v-chip color="primary">{{ formatPrice(purchaseOrderGrandTotal) }}</v-chip>
                </td>
              </tr>
            </tfoot>
          </template>
        </v-simple-table>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
export default {
  props: [
    "units",
    "permissions",
    "editPermission",
    "approvePermission",
    "shipping_fee"
  ],
  data: () => ({
    valid: false,
    itemDialog: false,
    editedItemIndex: -1,
    required(propertyType) {
      return v => (v && v.length > 0) || `You must input a ${propertyType}`;
    },
    maxLength(propertyType, maxLength) {
      return v =>
        (v && v.length <= maxLength) ||
        `${propertyType} must be less than ${maxLength} characters`;
    },
    minLength(propertyType, minLength) {
      return v =>
        (v && v.length >= minLength) ||
        `${propertyType} must be at least ${minLength} characters`;
    }
  }),

  computed: {
    isButtonDisabled() {
      if (
        this.purchaseOrderStatus === "OPENED" &&
        this.permissions.includes("edit-purchase-order") &&
        (this.purchaseOrderMode === "edit" ||
          this.purchaseOrderMode === "create")
      ) {
        return false;
      } else {
        return true;
      }
    },

    purchaseOrderTotalPrice() {
      return this.purchaseOrderLines.reduce((acc, item) => {
        return acc + parseFloat(item.price * item.quantity);
      }, 0);
    },

    purchaseOrderTax() {
      if (this.purchaseOrderOption.is_use_tax) {
        return parseFloat(
          (this.purchaseOrderTotalPrice +
            this.purchaseOrderOption.shipping_fee -
            this.purchaseOrderOption.discount) *
            0.1
        );
      } else {
        return 0;
      }
    },

    purchaseOrderGrandTotal() {
      return parseFloat(
        this.purchaseOrderTotalPrice +
          this.purchaseOrderOption.shipping_fee -
          this.purchaseOrderOption.discount +
          this.purchaseOrderTax
      );
    },

    ...mapState("purchase_order", ["purchaseOrderStatus"]),

    ...mapState("purchase_order", ["purchaseOrderOption", "purchaseOrderMode"]),

    ...mapState("purchase_order_line", [
      "purchaseOrderLines",
      "purchaseOrderLine"
    ])
  },

  methods: {
    ...mapMutations("purchase_order_line", [
      "ADD_PURCHASE_ORDER_LINE",
      "EDIT_PURCHASE_ORDER_LINE",
      "UPDATE_PURCHASE_ORDER_LINE",
      "RESET_PURCHASE_ORDER_LINE",
      "REMOVE_PURCHASE_ORDER_LINE"
    ]),

    closeItemDialog() {
      this.itemDialog = false;
      this.$nextTick(() => {
        this.RESET_PURCHASE_ORDER_LINE();
        this.editedItemIndex = -1;
      });
    },

    addItem() {
      if (this.editedItemIndex > -1) {
        this.UPDATE_PURCHASE_ORDER_LINE(this.editedItemIndex);
      } else {
        this.ADD_PURCHASE_ORDER_LINE();
      }
      this.closeItemDialog();
    },

    editItem(item) {
      this.editedItemIndex = this.purchaseOrderLines.indexOf(item);
      this.EDIT_PURCHASE_ORDER_LINE(item);
      this.itemDialog = true;
    },

    removeItem(item) {
      this.REMOVE_PURCHASE_ORDER_LINE(item);
    },

    formatPrice(value) {
      let val = (value / 1).toFixed(2).replace(",", ".");
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
  }
};
</script>
