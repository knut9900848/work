<template>
  <v-card>
    <v-toolbar flat color="blue" dark>
      <v-toolbar-title>Category Management {{ selectedCategoryId }} / {{ selectedSubCategoryId }}</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon @click="closeCategoryManagementDialog">
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </v-toolbar>
    <v-divider class="mx-4" inset vertical></v-divider>
    <v-card-text>
      <v-container fluid>
        <v-row>
          <v-col cols="12" md="4">
            <v-data-table :headers="categoryHeaders" :items="categories" class="elevation-1">
              <template v-slot:top>
                <v-toolbar flat color="primary">
                  <v-toolbar-title>CATEGORY</v-toolbar-title>
                  <v-divider class="mx-4" inset vertical></v-divider>
                  <v-spacer></v-spacer>
                  <v-dialog v-model="categoryDialog" max-width="500px">
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn color="primary" dark class="mb-2" v-bind="attrs" v-on="on">New Item</v-btn>
                    </template>
                    <v-card>
                      <v-card-title>
                        <span class="headline">{{ categoryFormTitle }}</span>
                      </v-card-title>

                      <v-card-text>
                        <v-text-field
                          v-model="editedCategoryItem.name"
                          label="Category name"
                          :error-messages="errors.name"
                        ></v-text-field>
                      </v-card-text>

                      <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="blue darken-1" text @click="closeCategory">Cancel</v-btn>
                        <v-btn color="blue darken-1" text @click="saveCategory">Save</v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-dialog>
                </v-toolbar>
              </template>

              <template v-slot:item.name="{ item }">
                <v-chip @click="getSubCategories(item)">{{ item.name }}</v-chip>
              </template>

              <template v-slot:item.actions="{ item }">
                <v-icon small class="mr-2" @click="editCategoryItem(item)">mdi-pencil</v-icon>
                <v-icon small @click="deleteCategoryItem(item)">mdi-delete</v-icon>
              </template>

              <template v-slot:no-data>
                <v-btn color="primary" @click="initialize">Reset</v-btn>
              </template>
            </v-data-table>
          </v-col>

          <v-col cols="12" md="4">
            <v-data-table :headers="subCategoryHeaders" :items="subCategories" class="elevation-1">
              <template v-slot:top>
                <v-toolbar flat color="primary">
                  <v-toolbar-title>SUB CATEGORY</v-toolbar-title>
                  <v-divider class="mx-4" inset vertical></v-divider>
                  <v-spacer></v-spacer>
                  <v-dialog v-model="subCategoryDialog" max-width="500px">
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn color="primary" dark class="mb-2" v-bind="attrs" v-on="on">New Item</v-btn>
                    </template>
                    <v-card>
                      <v-card-title>
                        <span class="headline">{{ subCategoryFormTitle }}</span>
                      </v-card-title>

                      <v-card-text>
                        <v-text-field
                          v-model="editedSubCategoryItem.name"
                          label="Sub category name"
                          :error-messages="errors.name"
                        ></v-text-field>
                      </v-card-text>

                      <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="blue darken-1" text @click="closeSubCategory">Cancel</v-btn>
                        <v-btn color="blue darken-1" text @click="saveSubCategory">Save</v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-dialog>
                </v-toolbar>
              </template>

              <template v-slot:item.name="{ item }">
                <v-chip @click="getSizes(item)">{{ item.name }}</v-chip>
              </template>

              <template v-slot:item.actions="{ item }">
                <v-icon small class="mr-2" @click="editSubCategoryItem(item)">mdi-pencil</v-icon>
                <v-icon small @click="deleteSubCategoryItem(item)">mdi-delete</v-icon>
              </template>

              <template v-slot:no-data>
                <v-btn color="primary" @click="initialize">Reset</v-btn>
              </template>
            </v-data-table>
          </v-col>

          <v-col cols="12" md="4">
            <v-data-table :headers="sizeHeaders" :items="sizes" class="elevation-1">
              <template v-slot:top>
                <v-toolbar flat color="primary">
                  <v-toolbar-title>SIZE</v-toolbar-title>
                  <v-divider class="mx-4" inset vertical></v-divider>
                  <v-spacer></v-spacer>
                  <v-dialog v-model="sizeDialog" max-width="500px">
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn color="primary" dark class="mb-2" v-bind="attrs" v-on="on">New Item</v-btn>
                    </template>
                    <v-card>
                      <v-card-title>
                        <span class="headline">{{ sizeFormTitle }}</span>
                      </v-card-title>

                      <v-card-text>
                        <v-text-field
                          v-model="editedSizeItem.name"
                          label="Size name"
                          :error-messages="errors.name"
                        ></v-text-field>
                      </v-card-text>

                      <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="blue darken-1" text @click="closeSize">Cancel</v-btn>
                        <v-btn color="blue darken-1" text @click="saveSize">Save</v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-dialog>
                </v-toolbar>
              </template>

              <template v-slot:item.name="{ item }">
                <v-chip>{{ item.name }}</v-chip>
              </template>

              <template v-slot:item.actions="{ item }">
                <v-icon small class="mr-2" @click="editSizeItem(item)">mdi-pencil</v-icon>
                <v-icon small @click="deleteSizeItem(item)">mdi-delete</v-icon>
              </template>

              <template v-slot:no-data>
                <v-btn color="primary" @click="initialize">Reset</v-btn>
              </template>
            </v-data-table>
          </v-col>
        </v-row>
      </v-container>
    </v-card-text>
  </v-card>
</template>

<script>
import Axios from "axios";
export default {
  data: () => ({
    errors: [],
    categoryDialog: false,
    subCategoryDialog: false,
    sizeDialog: false,

    categoryHeaders: [
      { text: "Name", value: "name" },
      { text: "Actions", value: "actions", sortable: false }
    ],
    subCategoryHeaders: [
      { text: "Name", value: "name" },
      { text: "Actions", value: "actions", sortable: false }
    ],

    sizeHeaders: [
      { text: "Name", value: "name" },
      { text: "Actions", value: "actions", sortable: false }
    ],

    categories: [],
    subCategories: [],
    sizes: [],

    editedCategoryIndex: -1,
    editedSubCategoryIndex: -1,
    editedSizeIndex: -1,

    editedCategoryItem: {
      name: null
    },
    defaultCategoryItem: {
      name: null
    },

    editedSubCategoryItem: {
      name: null,
      ppe_category_id: null
    },
    defaultSubCategoryItem: {
      name: null,
      ppe_category_id: null
    },

    editedSizeItem: {
      name: null,
      ppe_sub_category_id: null
    },
    defaultSizeItem: {
      name: null,
      ppe_sub_category_id: null
    },

    selectedCategoryId: null,
    selectedSubCategoryId: null
  }),

  computed: {
    categoryFormTitle() {
      return this.editedCategoryIndex === -1 ? "New Item" : "Edit Item";
    },

    subCategoryFormTitle() {
      return this.editedSubCategoryIndex === -1 ? "New Item" : "Edit Item";
    },

    sizeFormTitle() {
      return this.editedSizeIndex === -1 ? "New Item" : "Edit Item";
    }
  },

  watch: {
    dialog(val) {
      val || this.close();
    }
  },

  methods: {
    initialize() {
      console.log("open");
      Axios.get("/api/assets/ppe-categories/").then(response => {
        console.log(response.data);
        this.categories = response.data.categories;
      });
    },

    getSubCategories(item) {
      Axios.get("/api/assets/ppe-categories/category/" + item.id).then(
        response => {
          console.log(response.data);
          this.subCategories = response.data.subCategories;
          this.selectedCategoryId = item.id;
          this.selectedSubCategoryId = null;
          this.sizes = [];
        }
      );
    },

    getSizes(item) {
      Axios.get("/api/assets/ppe-categories/sub-category/" + item.id).then(
        response => {
          console.log(response.data);
          this.sizes = response.data.sizes;
          this.selectedSubCategoryId = item.id;
        }
      );
    },

    closeCategoryManagementDialog() {
      this.categories = [];
      this.subCategories = [];
      this.sizes = [];
      this.$emit("signal-closeCategoryManagementDialog");
    },

    openCatgoryDialog() {
      Axios.get("/api/assets/ppe-categories").then(response => {
        this.categories = response.data.categories;
      });
    },

    editCategoryItem(item) {
      this.editedCategoryIndex = this.categories.indexOf(item);
      this.editedCategoryItem = Object.assign({}, item);
      this.categoryDialog = true;
    },

    deleteCategoryItem(item) {
      const categoryIndex = this.categories.indexOf(item);
      confirm("Are you sure you want to delete this item?") &&
        this.categories.splice(categoryIndex, 1);
    },

    closeCategory() {
      this.categoryDialog = false;
      this.$nextTick(() => {
        this.editedCategoryItem = Object.assign({}, this.defaultCategoryItem);
        this.editedCategoryIndex = -1;
      });
    },

    saveCategory() {
      if (this.editedCategoryIndex > -1) {
        Axios.put(
          "/api/assets/ppe-categories/category/" + this.editedCategoryItem.id,
          this.editedCategoryItem
        )
          .then(response => {
            Object.assign(
              this.categories[this.editedCategoryIndex],
              response.data.category
            );
            this.$store.dispatch("SHOW_GLOBAL_SNACKBAR", {
              text: response.data.message
            });
          })
          .catch(error => {
            this.errors = error.response.data.errors;
            this.$store.dispatch("SHOW_GLOBAL_SNACKBAR", {
              text: error.response.data.message,
              color: "red"
            });
          })
          .finally(() => {
            this.closeCategory();
            this.errors = [];
          });
      } else {
        Axios.post(
          "/api/assets/ppe-categories/category",
          this.editedCategoryItem
        )
          .then(response => {
            this.categories.push(response.data.category);
            this.$store.dispatch("SHOW_GLOBAL_SNACKBAR", {
              text: response.data.message
            });
          })
          .catch(error => {
            this.errors = error.response.data.errors;
            this.$store.dispatch("SHOW_GLOBAL_SNACKBAR", {
              text: error.response.data.message,
              color: "red"
            });
          })
          .finally(() => {
            this.closeCategory();
            this.errors = [];
          });
      }
    },

    editSubCategoryItem(item) {
      this.editedSubCategoryIndex = this.subCategories.indexOf(item);
      this.editedSubCategoryItem = Object.assign({}, item);
      this.subCategoryDialog = true;
    },

    deleteSubCategoryItem(item) {
      const subCategoryIndex = this.subCategories.indexOf(item);
      confirm("Are you sure you want to delete this item?") &&
        this.subCategories.splice(subCategoryIndex, 1);
    },

    closeSubCategory() {
      this.subCategoryDialog = false;
      this.$nextTick(() => {
        this.editedSubCategoryItem = Object.assign(
          {},
          this.defaultSubCategoryItem
        );
        this.editedSubCategoryIndex = -1;
      });
    },

    saveSubCategory() {
      if (this.editedSubCategoryIndex > -1) {
        console.log(this.editedSubCategoryItem);
        Axios.put(
          "/api/assets/ppe-categories/sub-category/" +
            this.editedSubCategoryItem.id,
          this.editedSubCategoryItem
        )
          .then(response => {
            Object.assign(
              this.subCategories[this.editedSubCategoryIndex],
              response.data.subCategory
            );
            this.$store.dispatch("SHOW_GLOBAL_SNACKBAR", {
              text: response.data.message
            });
          })
          .catch(error => {
            this.errors = error.response.data.errors;
            this.$store.dispatch("SHOW_GLOBAL_SNACKBAR", {
              text: error.response.data.message,
              color: "red"
            });
          })
          .finally(() => {
            this.closeSubCategory();
            this.errors = [];
          });
      } else {
        Axios.post(
          "/api/assets/ppe-categories/category/" +
            this.selectedCategoryId +
            "/sub-category",
          this.editedSubCategoryItem
        )
          .then(response => {
            this.subCategories.push(response.data.subCategory);
            this.$store.dispatch("SHOW_GLOBAL_SNACKBAR", {
              text: response.data.message
            });
          })
          .catch(error => {
            this.errors = error.response.data.errors;
            this.$store.dispatch("SHOW_GLOBAL_SNACKBAR", {
              text: error.response.data.message,
              color: "red"
            });
          })
          .finally(() => {
            this.closeSubCategory();
            this.errors = [];
          });
      }
    },

    editSizeItem(item) {
      this.editedSizeIndex = this.sizes.indexOf(item);
      this.editedSizeItem = Object.assign({}, item);
      this.sizeDialog = true;
    },

    deleteSizeItem(item) {
      const sizeIndex = this.sizes.indexOf(item);
      confirm("Are you sure you want to delete this item?") &&
        this.sizes.splice(sizeIndex, 1);
    },

    closeSize() {
      this.sizeDialog = false;
      this.$nextTick(() => {
        this.editedSizeItem = Object.assign({}, this.defaultSizeItem);
        this.editedSizeIndex = -1;
      });
    },

    saveSize() {
      if (this.editedSizeIndex > -1) {
        Axios.put(
          "/api/assets/ppe-categories/size/" + this.editedSizeItem.id,
          this.editedSizeItem
        )
          .then(response => {
            Object.assign(this.sizes[this.editedSizeIndex], response.data.size);
            this.$store.dispatch("SHOW_GLOBAL_SNACKBAR", {
              text: response.data.message
            });
          })
          .catch(error => {
            this.errors = error.response.data.errors;
            this.$store.dispatch("SHOW_GLOBAL_SNACKBAR", {
              text: error.response.data.message,
              color: "red"
            });
          })
          .finally(() => {
            this.closeSize();
            this.errors = [];
          });
      } else {
        Axios.post(
          "/api/assets/ppe-categories/sub-category/" +
            this.selectedSubCategoryId +
            "/size",
          this.editedSizeItem
        )
          .then(response => {
            this.sizes.push(response.data.size);
            this.$store.dispatch("SHOW_GLOBAL_SNACKBAR", {
              text: response.data.message
            });
          })
          .catch(error => {
            this.errors = error.response.data.errors;
            this.$store.dispatch("SHOW_GLOBAL_SNACKBAR", {
              text: error.response.data.message,
              color: "red"
            });
          })
          .finally(() => {
            this.closeSize();
            this.errors = [];
          });
      }
    }
  }
};
</script>