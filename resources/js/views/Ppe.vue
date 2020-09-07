<template>
  <div>
    <v-data-table :headers="headers" :items="desserts" sort-by="calories" class="elevation-1">
      <template v-slot:top>
        <v-toolbar flat color="primary">
          <v-toolbar-title>PPE MANAGEMENT</v-toolbar-title>
          <v-divider class="mx-4" inset vertical></v-divider>
          <v-spacer></v-spacer>
          <v-btn color="primary" dark class="mr-1" @click="openPpeFormControlDialog()">입력</v-btn>
          <v-btn color="primary" dark class="mr-1" @click="openCategoryManagementDialog()">카테고리 관리</v-btn>
          <v-dialog v-model="ppeFormControlDialog" max-width="1280px">
            <v-card>
              <v-card-title>
                <span class="headline">PPE 입출관리</span>
                <v-spacer></v-spacer>
                <v-select
                  v-model="action"
                  :items="actions"
                  item-value="id"
                  item-text="name"
                  filled
                  rounded
                  class="mr-3"
                  dense
                  max-with="150px"
                  label="구분"
                ></v-select>

                <v-menu
                  v-model="dateCalendar"
                  :close-on-content-click="false"
                  :nudge-right="40"
                  transition="scale-transition"
                  offset-y
                  min-width="290px"
                >
                  <template v-slot:activator="{ on }">
                    <v-text-field
                      v-model="date"
                      label="Date"
                      readonly
                      v-on="on"
                      filled
                      rounded
                      prepend-inner-icon="mdi-calendar-check"
                      :error-messages="errors.date"
                    ></v-text-field>
                  </template>
                  <v-date-picker v-model="date" @input="dateCalendar = false"></v-date-picker>
                </v-menu>
                <v-btn @click="addPpeFormLine" icon class="mb-7 ml-3">
                  <v-icon>mdi-plus</v-icon>
                </v-btn>
              </v-card-title>

              <v-card-text>
                <v-container>
                  <v-row v-for="(item, index) in ppeFormLines" :key="index">
                    <v-col cols="12" sm="4" md="2">
                      <v-select
                        v-model="item.ppe_category"
                        :items="categories"
                        item-value="id"
                        item-text="name"
                        label="카테고리"
                        return-object
                        @change="getSubCategories(item)"
                        :error-messages="errors['ppeFormLines.ppe_category.id']"
                      ></v-select>
                    </v-col>
                    <v-col cols="12" sm="4" md="2">
                      <v-select
                        v-model="item.ppe_sub_category"
                        :items="subCategories[index]"
                        item-value="id"
                        item-text="name"
                        label="서브 카테고리"
                        return-object
                        @change="getSizes(item)"
                      ></v-select>
                    </v-col>
                    <v-col cols="12" sm="4" md="2">
                      <v-select
                        v-model="item.ppe_size"
                        :items="sizes[index]"
                        item-value="id"
                        item-text="name"
                        label="사이즈"
                        return-object
                      ></v-select>
                    </v-col>
                    <v-col cols="12" sm="4" md="2">
                      <v-select
                        v-model="item.ppe_type"
                        :items="types"
                        item-value="id"
                        item-text="name"
                        label="타입"
                        return-object
                      ></v-select>
                    </v-col>
                    <v-col cols="12" sm="4" md="2">
                      <v-text-field v-model="item.amount" label="수량"></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="4" md="2">
                      <v-select
                        v-model="item.receiver"
                        :items="receivers"
                        item-value="id"
                        item-text="name"
                        label="수령인"
                        return-object
                      ></v-select>
                    </v-col>
                    <v-container fluid class="text-right">
                      <v-btn color="orange" small class="mr-3">Memo</v-btn>
                      <v-btn color="pink" small @click="deletePpeFormLine(item)">Delete</v-btn>
                    </v-container>
                    <v-divider></v-divider>
                  </v-row>
                </v-container>
              </v-card-text>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="closePpeFormControlDialog()">Cancel</v-btn>
                <v-btn color="blue darken-1" text @click="savePpeFormLines()">Save</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-toolbar>
      </template>

      <template v-slot:item.actions="{ item }">
        <v-icon small class="mr-2" @click="editItem(item)">mdi-pencil</v-icon>
        <v-icon small @click="deleteItem(item)">mdi-delete</v-icon>
      </template>

      <template v-slot:no-data>
        <v-btn color="primary" @click="initialize">Reset</v-btn>
      </template>
    </v-data-table>

    <v-dialog v-model="categoryManagementDialog" max-width="1280px">
      <PpeCategory
        ref="ppeCategoryComponent"
        @signal-closeCategoryManagementDialog="closeCategoryManagementDialog"
      ></PpeCategory>
    </v-dialog>
  </div>
</template>

<script>
import Axios from "axios";
import PpeCategory from "../components/ppe/PpeCategory";

export default {
  components: {
    PpeCategory
  },
  data: () => ({
    receivers: [],
    types: [],
    actions: [],
    errors: [],
    desserts: [],

    categories: [],
    subCategories: [],
    sizes: [],

    action: null,
    date: null,

    ppeFormControlDialog: false,
    categoryManagementDialog: false,
    dateCalendar: false,

    headers: [
      { text: "No", value: "id", divider: true },
      { text: "Date", value: "date", divider: true },
      { text: "Category", value: "ppe_category.name", divider: true },
      { text: "Sub category", value: "ppe_sub_category.name", divider: true },
      { text: "Size", value: "ppe_size.name", divider: true },
      { text: "Type", value: "ppe_type.name", divider: true },
      { text: "Amount", value: "amount", divider: true },
      { text: "Receiver", value: "receiver.name", divider: true },
      { text: "Actions", value: "action.name", divider: true },
      { text: "Actions", divider: true }
    ],

    ppeFormLines: [
      {
        id: null,
        ppe_category: null,
        ppe_sub_category: null,
        ppe_size: null,
        ppe_type: null,
        amount: 0,
        receiver: null
      }
    ]
  }),

  computed: {},

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
      Axios.get("/api/assets/ppes").then(response => {
        console.log(response.data);
        this.desserts = response.data.desserts;
        this.categories = response.data.categories;
        this.receivers = response.data.workers;
        this.actions = response.data.actions;
        this.types = response.data.types;
      });
    },

    getSubCategories(item) {
      console.log(item);
      Axios.get(
        "/api/assets/ppe-categories/category/" + item.ppe_category.id
      ).then(response => {
        var formLineIndex = this.ppeFormLines.indexOf(item);

        if (this.subCategories[formLineIndex]) {
          this.subCategories[formLineIndex] = [];
          this.ppeFormLines[formLineIndex].ppe_sub_category = null;
          this.sizes[formLineIndex] = [];
          this.ppeFormLines[formLineIndex].size = null;
          Object.assign(
            this.subCategories[formLineIndex],
            response.data.subCategories
          );
        } else {
          this.subCategories.push(response.data.subCategories);
        }
      });
    },

    getSizes(item) {
      Axios.get(
        "/api/assets/ppe-categories/sub-category/" + item.ppe_sub_category.id
      ).then(response => {
        var formLineIndex = this.ppeFormLines.indexOf(item);

        if (this.sizes[formLineIndex]) {
          this.sizes[formLineIndex] = [];
          this.ppeFormLines[formLineIndex].ppe_size = null;
          this.sizes[formLineIndex] = response.data.sizes;
        } else {
          this.sizes.push(response.data.sizes);
        }
      });
    },

    openPpeFormControlDialog() {
      this.ppeFormControlDialog = true;
    },

    closePpeFormControlDialog() {
      this.ppeFormLines = [];
      this.ppeFormControlDialog = false;
    },

    addPpeFormLine() {
      this.ppeFormLines.push({
        id: null,
        ppe_category: null,
        ppe_sub_category: null,
        ppe_size: null,
        ppe_type: null,
        amount: 0,
        receiver: null
      });
    },

    deletePpeFormLine(item) {
      const index = this.ppeFormLines.indexOf(item);
      confirm("Are you sure you want to delete this item?") &&
        this.ppeFormLines.splice(index, 1) &&
        this.subCategories.splice(index, 1) &&
        this.sizes.splice(index, 1);
    },

    savePpeFormLines() {
      console.log(this.ppeFormLines);
      console.log(this.action);
      Axios.post("api/assets/ppes", {
        items: this.ppeFormLines,
        action: this.action,
        date: this.date
      })
        .then(response => {
          response.data.lines.forEach(line => this.desserts.push(line));
        })
        .catch(error => {
          console.log(error.response.data);
          this.errors = error.response.data.errors;
        });

      console.log(this.desserts);
    },

    openCategoryManagementDialog() {
      setTimeout(() => {
        this.$refs.ppeCategoryComponent.initialize();
      }, 300);
      this.categoryManagementDialog = true;
    },

    closeCategoryManagementDialog() {
      this.categoryManagementDialog = false;
    }
  }
};
</script>