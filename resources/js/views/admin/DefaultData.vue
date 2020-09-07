<template>
  <v-card>
    <v-toolbar flat dark height="85" color="blue accent-2">
      <v-toolbar-title>DEFAULT DATA</v-toolbar-title>
      <v-divider class="mx-4" inset vertical></v-divider>
    </v-toolbar>
    <v-card-text>
      <v-container fluid>
        <v-row>
          <v-col md="6" cols="12">
            <Branch :data="branches"></Branch>
          </v-col>
          <v-col md="6" cols="12">
            <Bank :data="banks"></Bank>
          </v-col>
          <v-col md="6" cols="12">
            <Currency :data="currencies"></Currency>
          </v-col>
          <v-col md="6" cols="12">
            <Unit :data="units"></Unit>
          </v-col>
          <v-col md="6" cols="12">
            <Country :data="countries"></Country>
          </v-col>
          <v-col md="6" cols="12">
            <PaymentMethod :data="paymentMethods"></PaymentMethod>
          </v-col>
          <v-col md="6" cols="12">
            <PaymentTerms :data="paymentTerms"></PaymentTerms>
          </v-col>
          <v-col md="6" cols="12">
            <ManpowerDiscipline :data="manpowerDisciplines"></ManpowerDiscipline>
          </v-col>
          <v-col md="6" cols="12">
            <ManpowerPosition :data="manpowerPositions"></ManpowerPosition>
          </v-col>
          <v-col md="6" cols="12">
            <ShippingMethod :data="shippingMethods"></ShippingMethod>
          </v-col>
          <v-col md="6" cols="12">
            <DeliveryTerms :data="deliveryTerms"></DeliveryTerms>
          </v-col>
          <v-col md="6" cols="12">
            <LaborWage :data="laborWages"></LaborWage>
          </v-col>
          <v-col md="6" cols="12">
            <PurchaseOrderTermsAndConditions :data="purchaseOrderTermsAndConditions"></PurchaseOrderTermsAndConditions>
          </v-col>
        </v-row>
      </v-container>
    </v-card-text>
  </v-card>
</template>
<script>
import Axios from "axios";
import Branch from "../../components/admin/Branch";
import Bank from "../../components/admin/Bank";
import Currency from "../../components/admin/Currency";
import Unit from "../../components/admin/Unit";
import Country from "../../components/admin/Country";
import PaymentMethod from "../../components/admin/PaymentMethod";
import PaymentTerms from "../../components/admin/PaymentTerms";
import ShippingMethod from "../../components/admin/ShippingMethod";
import DeliveryTerms from "../../components/admin/DeliveryTerms";
import ManpowerDiscipline from "../../components/admin/ManpowerDiscipline";
import ManpowerPosition from "../../components/admin/ManpowerPosition";
import LaborWage from "../../components/admin/LaborWage";
import PurchaseOrderTermsAndConditions from "../../components/admin/PurchaseOrderTermsAndConditions";

export default {
  components: {
    Branch,
    Bank,
    Currency,
    Unit,
    Country,
    PaymentMethod,
    PaymentTerms,
    ShippingMethod,
    DeliveryTerms,
    ManpowerDiscipline,
    ManpowerPosition,
    LaborWage,
    PurchaseOrderTermsAndConditions
  },
  data() {
    return {
      branches: [],
      banks: [],
      currencies: [],
      units: [],
      countries: [],
      paymentMethods: [],
      paymentTerms: [],
      shippingMethods: [],
      deliveryTerms: [],
      manpowerDisciplines: [],
      manpowerPositions: [],
      laborWages: [],
      purchaseOrderTermsAndConditions: []
    };
  },

  created() {
    this.initialize();
  },

  methods: {
    initialize() {
      Axios.get("/api/admin/default-data").then(response => {
        console.log(response.data);
        this.branches = response.data.defaultData.branches;
        this.banks = response.data.defaultData.banks;
        this.currencies = response.data.defaultData.currencies;
        this.units = response.data.defaultData.units;
        this.countries = response.data.defaultData.countries;
        this.paymentMethods = response.data.defaultData.paymentMethods;
        this.paymentTerms = response.data.defaultData.paymentTerms;
        this.manpowerDisciplines =
          response.data.defaultData.manpowerDisciplines;
        this.manpowerPositions = response.data.defaultData.manpowerPositions;
        this.departments = response.data.defaultData.departments;
        this.positions = response.data.defaultData.positions;
        this.shippingMethods = response.data.defaultData.shippingMethods;
        this.deliveryTerms = response.data.defaultData.deliveryTerms;
        this.laborWages = response.data.defaultData.laborWages;
        this.purchaseOrderTermsAndConditions =
          response.data.defaultData.purchaseOrderTermsAndConditions;
      });
    }
  }
};
</script>