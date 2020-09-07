(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Permission"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/Permission.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js??ref--18-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/admin/Permission.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      dialog: false,
      search: "",
      headers: [{
        text: "ID",
        align: "center",
        sortable: false,
        value: "id"
      }, {
        text: "Permission Name",
        align: "left",
        sortable: false,
        value: "name"
      }, {
        text: "Guard Name",
        align: "center",
        sortable: false,
        value: "guard_name"
      }, {
        text: "Description",
        align: "left",
        sortable: false,
        value: "description"
      }, {
        text: "Action",
        align: "center",
        sortable: false,
        value: "action"
      }],
      desserts: [],
      editedIndex: -1,
      editedItem: {
        id: null,
        name: null,
        guard_name: null,
        description: null,
        created_at: null,
        updated_at: null
      },
      defaultItem: {
        id: null,
        name: null,
        guard_name: null,
        description: null,
        created_at: null,
        updated_at: null
      }
    };
  },
  computed: {
    formTitle: function formTitle() {
      return this.editedIndex === -1 ? "Add Permission" : "Edit Permission";
    }
  },
  watch: {
    dialog: function dialog(val) {
      val || this.close();
    }
  },
  created: function created() {
    this.initialize();
  },
  methods: {
    initialize: function initialize() {
      var _this = this;

      axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/admin/permissions").then(function (response) {
        _this.desserts = response.data.permissions;
      });
    },
    editItem: function editItem(item) {
      this.editedIndex = this.desserts.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },
    save: function save() {
      var _this2 = this;

      if (this.editedIndex > -1) {
        axios__WEBPACK_IMPORTED_MODULE_0___default.a.put("/api/admin/permissions/" + this.editedItem.id, this.editedItem).then(function (response) {
          Object.assign(_this2.desserts[_this2.editedIndex], _this2.editedItem);

          _this2.$store.dispatch("SHOW_GLOBAL_SNACKBAR", {
            text: response.data.message
          });
        })["catch"](function (error) {});
      } else {
        axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("/api/admin/permissions", this.editedItem).then(function (response) {
          _this2.desserts.push(response.data.permission);

          _this2.$store.dispatch("SHOW_GLOBAL_SNACKBAR", {
            text: response.data.message
          });
        })["catch"](function (error) {});
      }

      this.close();
    },
    close: function close() {
      var _this3 = this;

      this.dialog = false;
      this.$nextTick(function () {
        _this3.editedItem = Object.assign({}, _this3.defaultItem);
        _this3.editedIndex = -1;
      }, 300);
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/Permission.vue?vue&type=template&id=ca91fba4&":
/*!*********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--18-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/admin/Permission.vue?vue&type=template&id=ca91fba4& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "wrap-component-table" },
    [
      _c("v-data-table", {
        staticClass: "elevation-0",
        attrs: {
          headers: _vm.headers,
          items: _vm.desserts,
          search: _vm.search,
          "items-per-page": 30
        },
        scopedSlots: _vm._u([
          {
            key: "top",
            fn: function() {
              return [
                _c(
                  "v-toolbar",
                  {
                    attrs: {
                      flat: "",
                      dark: "",
                      height: "85",
                      color: "blue accent-2"
                    }
                  },
                  [
                    _c("v-toolbar-title", [_vm._v("PERMISSIONS")]),
                    _vm._v(" "),
                    _c("v-divider", {
                      staticClass: "mx-4",
                      attrs: { inset: "", vertical: "" }
                    }),
                    _vm._v(" "),
                    _c("v-text-field", {
                      attrs: {
                        "append-icon": "mdi-magnify",
                        label: "Search",
                        "single-line": "",
                        "hide-details": "",
                        "solo-inverted": ""
                      },
                      model: {
                        value: _vm.search,
                        callback: function($$v) {
                          _vm.search = $$v
                        },
                        expression: "search"
                      }
                    }),
                    _vm._v(" "),
                    _c("v-spacer"),
                    _vm._v(" "),
                    _c(
                      "v-dialog",
                      {
                        attrs: { "max-width": "400px" },
                        scopedSlots: _vm._u([
                          {
                            key: "activator",
                            fn: function(ref) {
                              var on = ref.on
                              return [
                                _c(
                                  "v-btn",
                                  _vm._g(
                                    {
                                      staticClass: "mb-2",
                                      attrs: { color: "primary", dark: "" },
                                      on: {
                                        click: function($event) {
                                          return _vm.editItem()
                                        }
                                      }
                                    },
                                    on
                                  ),
                                  [
                                    _c(
                                      "v-icon",
                                      { attrs: { left: "", dark: "" } },
                                      [_vm._v("mdi-account-network")]
                                    ),
                                    _vm._v("Add Permission\n            ")
                                  ],
                                  1
                                )
                              ]
                            }
                          }
                        ]),
                        model: {
                          value: _vm.dialog,
                          callback: function($$v) {
                            _vm.dialog = $$v
                          },
                          expression: "dialog"
                        }
                      },
                      [
                        _vm._v(" "),
                        _c(
                          "v-card",
                          [
                            _c(
                              "v-toolbar",
                              { attrs: { flat: "" } },
                              [
                                _c("v-toolbar-title", [_vm._v("Permission")]),
                                _vm._v(" "),
                                _c("v-spacer"),
                                _vm._v(" "),
                                _c(
                                  "v-btn",
                                  {
                                    attrs: {
                                      fab: "",
                                      small: "",
                                      text: "",
                                      color: "primary"
                                    },
                                    on: {
                                      click: function($event) {
                                        return _vm.close()
                                      }
                                    }
                                  },
                                  [_c("v-icon", [_vm._v("mdi-window-close")])],
                                  1
                                )
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c("v-divider"),
                            _vm._v(" "),
                            _c(
                              "v-card-text",
                              [
                                _c("v-text-field", {
                                  attrs: { placeholder: "Permission Name" },
                                  model: {
                                    value: _vm.editedItem.name,
                                    callback: function($$v) {
                                      _vm.$set(_vm.editedItem, "name", $$v)
                                    },
                                    expression: "editedItem.name"
                                  }
                                }),
                                _vm._v(" "),
                                _c("v-divider"),
                                _vm._v(" "),
                                _c("v-text-field", {
                                  attrs: { placeholder: "Guard Name" },
                                  model: {
                                    value: _vm.editedItem.guard_name,
                                    callback: function($$v) {
                                      _vm.$set(
                                        _vm.editedItem,
                                        "guard_name",
                                        $$v
                                      )
                                    },
                                    expression: "editedItem.guard_name"
                                  }
                                }),
                                _vm._v(" "),
                                _c("v-textarea", {
                                  attrs: { placeholder: "description" },
                                  model: {
                                    value: _vm.editedItem.description,
                                    callback: function($$v) {
                                      _vm.$set(
                                        _vm.editedItem,
                                        "description",
                                        $$v
                                      )
                                    },
                                    expression: "editedItem.description"
                                  }
                                })
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "v-card-actions",
                              [
                                _c("v-spacer"),
                                _vm._v(" "),
                                _c(
                                  "v-btn",
                                  {
                                    attrs: { color: "blue darken-1", text: "" },
                                    on: {
                                      click: function($event) {
                                        return _vm.close()
                                      }
                                    }
                                  },
                                  [_vm._v("Cancel")]
                                ),
                                _vm._v(" "),
                                _c(
                                  "v-btn",
                                  {
                                    attrs: { color: "blue darken-1", text: "" },
                                    on: {
                                      click: function($event) {
                                        return _vm.save()
                                      }
                                    }
                                  },
                                  [_vm._v("Save")]
                                )
                              ],
                              1
                            )
                          ],
                          1
                        )
                      ],
                      1
                    )
                  ],
                  1
                )
              ]
            },
            proxy: true
          },
          {
            key: "item.action",
            fn: function(ref) {
              var item = ref.item
              return [
                _c(
                  "v-btn",
                  {
                    attrs: {
                      color: "primary",
                      depressed: "",
                      dark: "",
                      small: ""
                    },
                    on: {
                      click: function($event) {
                        return _vm.editItem(item)
                      }
                    }
                  },
                  [
                    _vm._v("\n        Edit\n        "),
                    _c("v-icon", { attrs: { right: "", small: "" } }, [
                      _vm._v("mdi-pencil")
                    ])
                  ],
                  1
                )
              ]
            }
          },
          {
            key: "no-data",
            fn: function() {
              return [
                _c(
                  "v-btn",
                  {
                    attrs: { color: "primary" },
                    on: { click: _vm.initialize }
                  },
                  [_vm._v("Reset")]
                )
              ]
            },
            proxy: true
          }
        ])
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/admin/Permission.vue":
/*!*************************************************!*\
  !*** ./resources/js/views/admin/Permission.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Permission_vue_vue_type_template_id_ca91fba4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Permission.vue?vue&type=template&id=ca91fba4& */ "./resources/js/views/admin/Permission.vue?vue&type=template&id=ca91fba4&");
/* harmony import */ var _Permission_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Permission.vue?vue&type=script&lang=js& */ "./resources/js/views/admin/Permission.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VBtn */ "./node_modules/vuetify/lib/components/VBtn/index.js");
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/index.js");
/* harmony import */ var vuetify_lib_components_VDataTable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VDataTable */ "./node_modules/vuetify/lib/components/VDataTable/index.js");
/* harmony import */ var vuetify_lib_components_VDialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuetify/lib/components/VDialog */ "./node_modules/vuetify/lib/components/VDialog/index.js");
/* harmony import */ var vuetify_lib_components_VDivider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuetify/lib/components/VDivider */ "./node_modules/vuetify/lib/components/VDivider/index.js");
/* harmony import */ var vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vuetify/lib/components/VIcon */ "./node_modules/vuetify/lib/components/VIcon/index.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/index.js");
/* harmony import */ var vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! vuetify/lib/components/VTextField */ "./node_modules/vuetify/lib/components/VTextField/index.js");
/* harmony import */ var vuetify_lib_components_VTextarea__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! vuetify/lib/components/VTextarea */ "./node_modules/vuetify/lib/components/VTextarea/index.js");
/* harmony import */ var vuetify_lib_components_VToolbar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! vuetify/lib/components/VToolbar */ "./node_modules/vuetify/lib/components/VToolbar/index.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Permission_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Permission_vue_vue_type_template_id_ca91fba4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Permission_vue_vue_type_template_id_ca91fba4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */














_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VBtn: vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__["VBtn"],VCard: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCard"],VCardActions: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardActions"],VCardText: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardText"],VDataTable: vuetify_lib_components_VDataTable__WEBPACK_IMPORTED_MODULE_6__["VDataTable"],VDialog: vuetify_lib_components_VDialog__WEBPACK_IMPORTED_MODULE_7__["VDialog"],VDivider: vuetify_lib_components_VDivider__WEBPACK_IMPORTED_MODULE_8__["VDivider"],VIcon: vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_9__["VIcon"],VSpacer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_10__["VSpacer"],VTextField: vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_11__["VTextField"],VTextarea: vuetify_lib_components_VTextarea__WEBPACK_IMPORTED_MODULE_12__["VTextarea"],VToolbar: vuetify_lib_components_VToolbar__WEBPACK_IMPORTED_MODULE_13__["VToolbar"],VToolbarTitle: vuetify_lib_components_VToolbar__WEBPACK_IMPORTED_MODULE_13__["VToolbarTitle"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/admin/Permission.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/admin/Permission.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/views/admin/Permission.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Permission_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vuetify-loader/lib/loader.js??ref--18-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Permission.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/Permission.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Permission_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/admin/Permission.vue?vue&type=template&id=ca91fba4&":
/*!********************************************************************************!*\
  !*** ./resources/js/views/admin/Permission.vue?vue&type=template&id=ca91fba4& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Permission_vue_vue_type_template_id_ca91fba4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vuetify-loader/lib/loader.js??ref--18-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Permission.vue?vue&type=template&id=ca91fba4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/Permission.vue?vue&type=template&id=ca91fba4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Permission_vue_vue_type_template_id_ca91fba4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Permission_vue_vue_type_template_id_ca91fba4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);