<template>
  <div>
    <v-data-table :headers="headers" :items="desserts" sort-by="calories" class="elevation-1">
      <template v-slot:top>
        <v-toolbar flat color="primary">
          <v-toolbar-title>PPE MANAGEMENT</v-toolbar-title>
          <v-divider class="mx-4" inset vertical></v-divider>
          <v-spacer></v-spacer>

          <v-btn color="primary" dark class="mr-1" @click="addItem()">입력</v-btn>
          <v-btn color="primary" dark class="mr-1" @click="addCate()">카테고리 추가</v-btn>
          <v-btn color="primary" dark @click="addType()">타입추가</v-btn>
          <v-dialog v-model="itemDialog" max-width="1024px">
            <v-card>
              <v-card-title>
                <span class="headline">
                  <v-btn @click="addForm">ADD FORM</v-btn>
                </span>
              </v-card-title>

              <v-card-text>
                <v-container>
                  <v-row v-for="(item, index) in items" :key="index">
                    <v-col cols="12" sm="4" md="2">
                      <v-select
                        v-model="item.category"
                        :items="categories"
                        item-value="id"
                        item-text="name"
                        label="카테고리"
                        return-object
                      ></v-select>
                    </v-col>
                    <v-col cols="12" sm="4" md="2">
                      <v-select
                        v-model="item.subCategory"
                        :items="item.category.ppe_sub_categories"
                        item-value="id"
                        item-text="name"
                        label="서브 카테고리"
                        return-object
                      ></v-select>
                    </v-col>
                    <v-col cols="12" sm="4" md="2">
                      <v-select
                        v-model="item.size"
                        :items="item.subCategory.ppe_sizes"
                        item-value="id"
                        item-text="name"
                        label="사이즈"
                        return-object
                      ></v-select>
                    </v-col>
                    <v-col cols="12" sm="4" md="2">
                      <v-select
                        v-model="item.type"
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
                        v-model="item.action"
                        :items="actions"
                        item-value="id"
                        item-text="name"
                        label="Action"
                        return-object
                      ></v-select>
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

    <v-dialog v-model="cateDialog" max-width="1280px">
      <v-card>
        <v-toolbar flat color="blue" dark>
          <v-toolbar-title>Category Management</v-toolbar-title>
        </v-toolbar>
        <v-divider class="mx-4" inset vertical></v-divider>
        <v-card-text>
          <v-container fluid>
            <v-row>
              <v-col cols="12" md="4">
                <v-card>
                  <v-card-title>
                    CATEGORIES
                    <v-spacer></v-spacer>
                    <v-dialog v-model="editCategoryDialog" max-width="640px">
                      <template v-slot:activator="{ on, attrs }">
                        <v-btn
                          icon
                          color="pink"
                          @click="openEditCategoryDialog()"
                          v-bind="attrs"
                          v-on="on"
                        >
                          <v-icon>mdi-plus</v-icon>
                        </v-btn>
                      </template>
                      <v-card>
                        <v-card-title>
                          EDIT CATEGORY
                          <v-spacer></v-spacer>
                          <v-btn icon @click="closeEditCategoryDialog()">
                            <v-icon color="pink">mdi-close</v-icon>
                          </v-btn>
                        </v-card-title>
                        <v-card-text>
                          <v-text-field v-model="editedCategory.name" label="Category name"></v-text-field>
                        </v-card-text>
                        <v-card-actions>
                          <v-btn @click="saveCategory()">Save</v-btn>
                        </v-card-actions>
                      </v-card>
                    </v-dialog>
                  </v-card-title>
                  <v-card-text>
                    <v-simple-table>
                      <template v-slot:default>
                        <thead>
                          <tr>
                            <th class="text-left">Name</th>
                            <th class="text-left">Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr
                            v-for="(category, index) in categories"
                            :key="index"
                            @click="getSubCategories(category)"
                          >
                            <td>
                              <v-chip>{{ category.name }}</v-chip>
                            </td>
                            <td class="d-flex justify-center align-center text-center">
                              <span class="d-block">
                                <v-btn icon class="mr-2">
                                  <v-icon small>mdi-pencil</v-icon>
                                </v-btn>
                              </span>
                              <span class="d-block">
                                <v-btn icon>
                                  <v-icon>mdi-close</v-icon>
                                </v-btn>
                              </span>
                            </td>
                          </tr>
                        </tbody>
                      </template>
                    </v-simple-table>
                  </v-card-text>
                </v-card>
              </v-col>

              <v-col cols="12" md="4">
                <v-card>
                  <v-card-title>
                    SUB CATEGORIES
                    <v-spacer></v-spacer>
                    <v-dialog v-model="editSubCategoryDialog" max-width="640px">
                      <template v-slot:activator="{ on, attrs }">
                        <v-btn
                          icon
                          color="pink"
                          @click="openEditSubCategoryDialog()"
                          v-bind="attrs"
                          v-on="on"
                        >
                          <v-icon>mdi-plus</v-icon>
                        </v-btn>
                      </template>
                      <v-card>
                        <v-card-title>
                          EDIT SUB CATEGORY
                          <v-spacer></v-spacer>
                          <v-btn icon @click="closeEditSubCategoryDialog">
                            <v-icon>mdi-close</v-icon>
                          </v-btn>
                        </v-card-title>
                        <v-card-text>
                          <v-text-field v-model="editedSubCategory.name" label="Category name"></v-text-field>
                        </v-card-text>
                        <v-card-actions>
                          <v-btn @click="saveSubCategory()">Save</v-btn>
                        </v-card-actions>
                      </v-card>
                    </v-dialog>
                  </v-card-title>
                  <v-card-text>
                    <v-simple-table>
                      <template v-slot:default>
                        <thead>
                          <tr>
                            <th class="text-left">Name</th>
                            <th class="text-left">Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr
                            v-for="(subCategory, i) in subCategories"
                            :key="i"
                            @click="getSizes(subCategory)"
                          >
                            <td>
                              <v-chip>{{ subCategory.name }}</v-chip>
                            </td>
                            <td class="d-flex justify-center align-center text-center">
                              <span class="d-block">
                                <v-btn class="mr-2" icon>
                                  <v-icon small>mdi-pencil</v-icon>
                                </v-btn>
                              </span>
                              <span class="d-block">
                                <v-btn icon>
                                  <v-icon>mdi-close</v-icon>
                                </v-btn>
                              </span>
                            </td>
                          </tr>
                        </tbody>
                      </template>
                    </v-simple-table>
                  </v-card-text>
                </v-card>
              </v-col>

              <v-col cols="12" md="4">
                <v-card>
                  <v-card-title>
                    Size
                    <v-spacer></v-spacer>
                    <v-dialog v-model="editSizeDialog" max-width="640px">
                      <template v-slot:activator="{ on, attrs }">
                        <v-btn
                          icon
                          color="pink"
                          @click="openEditSizeDialog()"
                          v-bind="attrs"
                          v-on="on"
                        >
                          <v-icon>mdi-plus</v-icon>
                        </v-btn>
                      </template>

                      <v-card>
                        <v-card-title>
                          EDIT SIZE
                          <v-spacer></v-spacer>
                          <v-btn icon @click="closeEditSizeDialog()">
                            <v-icon>mdi-close</v-icon>
                          </v-btn>
                        </v-card-title>
                        <v-card-text>
                          <v-text-field v-model="editedSize.name" label="Category name"></v-text-field>
                        </v-card-text>
                        <v-card-actions>
                          <v-btn @click="editSize()">Save</v-btn>
                        </v-card-actions>
                      </v-card>
                    </v-dialog>
                  </v-card-title>
                  <v-card-text>
                    <v-simple-table>
                      <template v-slot:default>
                        <thead>
                          <tr>
                            <th class="text-left">Name</th>
                            <th class="text-left">Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr v-for="(size, i) in sizes" :key="i">
                            <td>
                              <v-chip>{{ size.name }}</v-chip>
                            </td>
                            <td class="d-flex justify-center align-center text-center">
                              <span class="d-block">
                                <v-btn icon class="mr-2">
                                  <v-icon small>mdi-pencil</v-icon>
                                </v-btn>
                              </span>
                              <span class="d-block">
                                <v-btn icon>
                                  <v-icon samll>mdi-close</v-icon>
                                </v-btn>
                              </span>
                            </td>
                          </tr>
                        </tbody>
                      </template>
                    </v-simple-table>
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import Axios from "axios";
export default {
  data: () => ({
    itemDialog: false,
    cateDialog: false,
    typeDialog: false,
    editCategoryDialog: false,
    editSubCategoryDialog: false,
    editSizeDialog: false,
    categoryEditedIndex: null,
    categoryEditedIndex: null,
    categoryEditedIndex: null,
    headers: [
      {
        text: "Dessert (100g serving)",
        align: "start",
        sortable: false,
        value: "name",
        divider: true
      },
      { text: "Calories", value: "calories", divider: true },
      { text: "Fat (g)", value: "fat", divider: true },
      { text: "Carbs (g)", value: "carbs", divider: true },
      { text: "Protein (g)", value: "protein", divider: true },
      { text: "Actions", value: "actions", sortable: false, divider: true }
    ],
    desserts: [],
    editedIndex: -1,
    editedCategoryIndex: -1,
    editedSubCategoryIndex: -1,
    editedSizeIndex: -1,
    editedCategory: {
      name: null
    },
    defaultCategory: {
      name: null
    },

    editedSubCategory: {
      name: null,
      category_id: null
    },
    defaultSubCategory: {
      name: null,
      category_id: null
    },

    editedSize: {
      name: null,
      sub_category_id: null
    },
    defaultSize: {
      name: null,
      sub_category_id: null
    },

    items: [
      {
        category: {
          id: null,
          name: null,
          ppe_sub_categories: []
        },
        subCategory: {
          id: null,
          name: null,
          ppe_sub_category_id: null,
          ppe_sizes: []
        },
        size: null,
        type: null,
        amount: null
      }
    ],
    categories: [],
    subCategories: [],
    sizes: [],

    types: [
      { id: 1, name: "새상품" },
      { id: 2, name: "중고상품" }
    ],

    actions: [
      { id: 1, name: "입고" },
      { id: 2, name: "출고" },
      { id: 3, name: "폐기" },
      { id: 4, name: "분실" },
      { id: 5, name: "기타" }
    ]
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "New Item" : "Edit Item";
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
    addItem() {
      this.itemDialog = true;
    },

    addCate() {
      this.cateDialog = true;
    },
    addType() {
      this.typeDialog = true;
    },

    getSubCategories(category) {
      this.sizes = [];
      this.editedSubCategory.category_id = category.id;
      this.subCategories = category.ppe_sub_categories;
      console.log(this.editedSubCategory);
    },

    getSizes(subCategory) {
      this.editedSize.sub_category_id = subCategory.id;
      this.sizes = subCategory.ppe_sizes;
    },

    openEditCategoryDialog() {
      this.editCategoryDialog = true;
    },

    openEditSubCategoryDialog() {
      this.editSubCategoryDialog = true;
    },

    openEditSizeDialog() {
      this.editSizeDialog = true;
    },

    closeEditCategoryDialog() {
      this.editCategoryDialog = false;
      this.editedCategory = Object.assign({}, this.defaultCategory);
      this.editedCategoryIndex = -1;
    },

    closeEditSubCategoryDialog() {
      this.editSubCategoryDialog = false;
      this.editedSubCategory = Object.assign({}, this.defaultSubCategory);
      this.editedSubCategoryIndex = -1;
    },

    closeEditSizeDialog() {
      this.editSizeDialog = false;
      this.editedSize = Object.assign({}, this.defaultSize);
      this.editedSizeIndex = -1;
    },

    saveCategory() {
      Axios.post(
        "/api/assets/ppe-categories/category",
        this.editedCategory
      ).then(response => {
        console.log(response.data.category);
        this.categories.push(response.data.category);
        this.closeEditCategoryDialog();
      });
    },

    saveSubCategory() {
      console.log(this.editedSubCategory);
      Axios.post(
        "/api/assets/ppe-categories/sub-category",
        this.editedSubCategory
      ).then(response => {
        console.log(response.data.subCategory);
        this.subCategories.push(response.data.subCategory);
        this.closeEditSubCategoryDialog();
      });
    },

    saveSize() {
      Axios.post("/api/assets/ppe-categories/size", this.editedSize).then(
        response => {
          this.sizes.push(response.data.size);
          this.closeEditSizeDialog();
        }
      );
    },

    addForm() {
      this.items.push({
        category: {
          id: null,
          name: null,
          ppe_sub_categories: []
        },
        subCategory: {
          id: null,
          name: null,
          ppe_sub_category_id: null,
          ppe_sizes: []
        },
        size: null,
        type: null,
        amount: null
      });
    },

    initialize() {
      this.desserts = [];
      Axios.get("/api/assets/ppe-categories").then(response => {
        console.log(response.data);
        this.categories = response.data.categories;
      });
    },

    editItem(item) {
      this.editedIndex = this.desserts.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      const index = this.desserts.indexOf(item);
      confirm("Are you sure you want to delete this item?") &&
        this.desserts.splice(index, 1);
    },

    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.desserts[this.editedIndex], this.editedItem);
      } else {
        this.desserts.push(this.editedItem);
      }
      this.close();
    }
  }
};
</script>