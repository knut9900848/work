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
                        v-model="quotationLine.description"
                        label="description"
                        :rules="[required('Description')]"
                      ></v-textarea>
                    </v-col>

                    <!-- Item Name -->
                    <v-col cols="12" md="6">
                      <v-text-field v-model="quotationLine.name" label="Item Name" required></v-text-field>
                    </v-col>

                    <!-- Item Size -->
                    <v-col cols="12" md="6">
                      <v-text-field
                        v-model="quotationLine.size"
                        label="Size(Model)"
                        required
                        :rules="[required('Size'), maxLength('Size', 100)]"
                      ></v-text-field>
                    </v-col>

                    <!-- Item Purchasing Price -->
                    <v-col cols="12" md="6">
                      <v-currency-field
                        v-model="quotationLine.price"
                        label="Price"
                        required
                        type="number"
                        :rules="[required('Price'), maxLength('Price', 30)]"
                      ></v-currency-field>
                    </v-col>

                    <!-- Item Quantity -->
                    <v-col cols="12" md="6">
                      <v-currency-field
                        v-model="quotationLine.quantity"
                        label="Quantity"
                        required
                        type="number"
                        :rules="[required('Quantity'), maxLength('Qunatity', 30)]"
                      ></v-currency-field>
                    </v-col>

                    <!-- Item Unit -->
                    <v-col cols="12" md="6">
                      <v-select
                        v-model="quotationLine.unit"
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
                        v-model="quotationLine.title"
                        label="Line Title"
                        required
                        :rules="[required('title'), maxLength('title', 30)]"
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
              <tr v-for="(item, index) in quotationLines" :key="index">
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
                  <v-chip>{{ formatPrice(quotationTotalPrice) }}</v-chip>
                </td>
              </tr>
              <tr v-if="quotationOption.discount > 0">
                <td colspan="7" class="text-right">DISCOUNT</td>
                <td colspan="1" class="text-right">
                  <v-chip>{{ formatPrice(quotationOption.discount) }}</v-chip>
                </td>
              </tr>
              <tr v-if="quotationOption.shipping_fee > 0">
                <td colspan="7" class="text-right">SHIPPING / HANDLING</td>
                <td colspan="1" class="text-right">
                  <v-chip>{{ formatPrice(quotationOption.shipping_fee) }}</v-chip>
                </td>
              </tr>
              <tr v-if="quotationOption.is_use_tax">
                <td colspan="7" class="text-right">TAX</td>
                <td colspan="1" class="text-right">
                  <v-chip>{{ formatPrice(quotationTax) }}</v-chip>
                </td>
              </tr>
              <tr>
                <td colspan="7" class="text-right font-weight-black">GRAND TOTAL</td>
                <td colspan="1" class="text-right">
                  <v-chip color="primary">{{ formatPrice(quotationGrandTotal) }}</v-chip>
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
        this.quotationStatus === "OPENED" &&
        this.permissions.includes("edit-quotation") &&
        (this.quotationMode === "edit" || this.quotationMode === "create")
      ) {
        return false;
      } else {
        return true;
      }
    },

    quotationTotalPrice() {
      return this.quotationLines.reduce((acc, item) => {
        return acc + parseFloat(item.price * item.quantity);
      }, 0);
    },

    quotationTax() {
      if (this.quotationOption.is_use_tax) {
        return parseFloat(
          (this.quotationTotalPrice +
            this.quotationOption.shipping_fee -
            this.quotationOption.discount) *
            0.1
        );
      } else {
        return 0;
      }
    },

    quotationGrandTotal() {
      return parseFloat(
        this.quotationTotalPrice +
          this.quotationOption.shipping_fee -
          this.quotationOption.discount +
          this.quotationTax
      );
    },

    ...mapState("quotation", ["quotationStatus"]),

    ...mapState("quotation", ["quotationOption", "quotationMode"]),

    ...mapState("quotation_line", ["quotationLines", "quotationLine"])
  },

  methods: {
    ...mapMutations("quotation_line", [
      "ADD_QUOTATION_LINE",
      "EDIT_QUOTATION_LINE",
      "UPDATE_QUOTATION_LINE",
      "RESET_QUOTATION_LINE",
      "REMOVE_QUOTATION_LINE"
    ]),

    closeItemDialog() {
      this.itemDialog = false;
      this.$nextTick(() => {
        this.RESET_QUOTATION_LINE();
        this.editedItemIndex = -1;
      });
    },

    addItem() {
      if (this.editedItemIndex > -1) {
        this.UPDATE_QUOTATION_LINE(this.editedItemIndex);
      } else {
        this.ADD_QUOTATION_LINE();
      }
      this.closeItemDialog();
    },

    editItem(item) {
      this.editedItemIndex = this.quotationLines.indexOf(item);
      this.EDIT_QUOTATION_LINE(item);
      this.itemDialog = true;
    },

    removeItem(item) {
      this.REMOVE_QUOTATION_LINE(item);
    },

    formatPrice(value) {
      let val = (value / 1).toFixed(2).replace(",", ".");
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
  }
};
</script>
