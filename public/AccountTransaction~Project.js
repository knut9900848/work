(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["AccountTransaction~Project"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/project/SubProject.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js??ref--15-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/project/SubProject.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************/
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
  props: ["project_id", "companies"],
  data: function data() {
    return {
      dialog: false,
      errors: [],
      subProjects: [],
      headers: [{
        text: "ID",
        value: "id",
        sortable: false
      }, {
        text: "Name",
        value: "name",
        sortable: false
      }, {
        text: "Client",
        value: "client",
        sortable: false
      }, {
        text: "Code",
        value: "code",
        sortable: false
      }, {
        text: "Actions",
        value: "actions",
        sortable: false
      }],
      desserts: [],
      editedIndex: -1,
      editedItem: {
        id: null,
        name: null,
        display_name: null,
        code: null,
        client_id: null,
        project_id: null,
        description: null,
        is_active: null
      },
      defaultItem: {
        id: null,
        name: null,
        display_name: null,
        code: null,
        client_id: null,
        project_id: null,
        description: null,
        is_active: null
      }
    };
  },
  computed: {
    formTitle: function formTitle() {
      return this.editedIndex === -1 ? "New Sub Project" : "Edit Sub Project";
    }
  },
  watch: {
    dialog: function dialog(val) {
      val || this.close();
    }
  },
  methods: {
    initialize: function initialize() {
      var _this = this;

      axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/projects/" + this.project_id + "/sub-projects").then(function (response) {
        console.log(response.data);
        _this.desserts = response.data.subProjects;
      });
    },
    editItem: function editItem(item) {
      this.editedIndex = this.desserts.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },
    close: function close() {
      var _this2 = this;

      this.dialog = false;
      setTimeout(function () {
        _this2.editedItem = Object.assign({}, _this2.defaultItem);
        _this2.editedIndex = -1;
      }, 300);
    },
    save: function save() {
      var _this3 = this;

      if (this.editedIndex > -1) {
        axios__WEBPACK_IMPORTED_MODULE_0___default.a.put("/api/projects/" + this.project_id + "/sub-projects/" + this.editedItem.id, this.editedItem).then(function (response) {
          Object.assign(_this3.desserts[_this3.editedIndex], response.data.subProject);

          _this3.$store.dispatch("SHOW_GLOBAL_SNACKBAR", {
            text: response.data.message
          });

          _this3.close();
        })["catch"](function (error) {
          _this3.errors = error.response.data.errors;

          _this3.$store.dispatch("SHOW_GLOBAL_SNACKBAR", {
            text: error.response.data.message,
            color: "red"
          });
        });
      } else {
        axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("/api/projects/" + this.project_id + "/sub-projects", this.editedItem).then(function (response) {
          _this3.desserts.push(response.data.subProject);

          _this3.$store.dispatch("SHOW_GLOBAL_SNACKBAR", {
            text: response.data.message
          });

          _this3.close();
        })["catch"](function (error) {
          _this3.errors = error.response.data.errors;

          _this3.$store.dispatch("SHOW_GLOBAL_SNACKBAR", {
            text: error.response.data.message,
            color: "red"
          });
        });
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/project/SubProject.vue?vue&type=template&id=3cfb239a&":
/*!****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--15-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/project/SubProject.vue?vue&type=template&id=3cfb239a& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************/
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
  return _c("v-data-table", {
    staticClass: "elevation-1",
    attrs: { headers: _vm.headers, items: _vm.desserts, "sort-by": "calories" },
    scopedSlots: _vm._u([
      {
        key: "top",
        fn: function() {
          return [
            _c(
              "v-toolbar",
              { attrs: { elevation: "0", color: "blue", dark: "" } },
              [
                _c("v-toolbar-title", [_vm._v("SUB PROJECT")]),
                _vm._v(" "),
                _c("v-divider", {
                  staticClass: "mx-4",
                  attrs: { inset: "", vertical: "" }
                }),
                _vm._v(" "),
                _c("v-spacer"),
                _vm._v(" "),
                _c(
                  "v-dialog",
                  {
                    attrs: { "max-width": "1024px" },
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
                                  attrs: {
                                    color: "blue-grey lighten-5",
                                    fab: "",
                                    text: "",
                                    small: ""
                                  }
                                },
                                on
                              ),
                              [_c("v-icon", [_vm._v("mdi-account-plus")])],
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
                          { attrs: { color: "blue-grey darken-1", dark: "" } },
                          [
                            _c("v-toolbar-title", [
                              _vm._v(_vm._s(_vm.formTitle))
                            ]),
                            _vm._v(" "),
                            _c("v-spacer"),
                            _vm._v(" "),
                            _c(
                              "v-btn",
                              {
                                attrs: { fab: "", small: "", text: "" },
                                on: {
                                  click: function($event) {
                                    return _vm.close()
                                  }
                                }
                              },
                              [
                                _c("v-icon", { attrs: { dark: "" } }, [
                                  _vm._v("mdi-window-close")
                                ])
                              ],
                              1
                            )
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "v-card-text",
                          [
                            _c(
                              "v-container",
                              [
                                _c(
                                  "v-row",
                                  [
                                    _c(
                                      "v-col",
                                      {
                                        attrs: { cols: "12", sm: "6", md: "6" }
                                      },
                                      [
                                        _c("v-text-field", {
                                          attrs: {
                                            label: "Sub Project Name(*)",
                                            "error-messages": _vm.errors.name,
                                            rounded: "",
                                            filled: ""
                                          },
                                          model: {
                                            value: _vm.editedItem.name,
                                            callback: function($$v) {
                                              _vm.$set(
                                                _vm.editedItem,
                                                "name",
                                                $$v
                                              )
                                            },
                                            expression: "editedItem.name"
                                          }
                                        })
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "v-col",
                                      {
                                        attrs: { cols: "12", sm: "6", md: "6" }
                                      },
                                      [
                                        _c("v-text-field", {
                                          attrs: {
                                            label: "Display Name(*)",
                                            "error-messages":
                                              _vm.errors.display_name,
                                            rounded: "",
                                            filled: ""
                                          },
                                          model: {
                                            value: _vm.editedItem.display_name,
                                            callback: function($$v) {
                                              _vm.$set(
                                                _vm.editedItem,
                                                "display_name",
                                                $$v
                                              )
                                            },
                                            expression:
                                              "editedItem.display_name"
                                          }
                                        })
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "v-col",
                                      {
                                        attrs: { cols: "12", sm: "6", md: "6" }
                                      },
                                      [
                                        _c("v-select", {
                                          attrs: {
                                            items: _vm.companies,
                                            "item-text": "name",
                                            "item-value": "id",
                                            label: "Client",
                                            "error-messages":
                                              _vm.errors.company_id,
                                            rounded: "",
                                            filled: ""
                                          },
                                          model: {
                                            value: _vm.editedItem.company_id,
                                            callback: function($$v) {
                                              _vm.$set(
                                                _vm.editedItem,
                                                "company_id",
                                                $$v
                                              )
                                            },
                                            expression: "editedItem.company_id"
                                          }
                                        })
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "v-col",
                                      {
                                        attrs: { cols: "12", sm: "6", md: "6" }
                                      },
                                      [
                                        _c("v-text-field", {
                                          attrs: {
                                            label: "Code(*)",
                                            "error-messages": _vm.errors.code,
                                            rounded: "",
                                            filled: ""
                                          },
                                          model: {
                                            value: _vm.editedItem.code,
                                            callback: function($$v) {
                                              _vm.$set(
                                                _vm.editedItem,
                                                "code",
                                                $$v
                                              )
                                            },
                                            expression: "editedItem.code"
                                          }
                                        })
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "v-col",
                                      { attrs: { cols: "12" } },
                                      [
                                        _c("v-textarea", {
                                          attrs: {
                                            label: "Description",
                                            "error-messages":
                                              _vm.errors.description,
                                            filled: ""
                                          },
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
                                      "v-col",
                                      [
                                        _c("v-checkbox", {
                                          attrs: { label: "Activate" },
                                          model: {
                                            value: _vm.editedItem.is_active,
                                            callback: function($$v) {
                                              _vm.$set(
                                                _vm.editedItem,
                                                "is_active",
                                                $$v
                                              )
                                            },
                                            expression: "editedItem.is_active"
                                          }
                                        })
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
                                on: { click: _vm.close }
                              },
                              [_vm._v("Cancel")]
                            ),
                            _vm._v(" "),
                            _c(
                              "v-btn",
                              {
                                attrs: { color: "blue darken-1", text: "" },
                                on: { click: _vm.save }
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
        key: "item.is_active",
        fn: function(ref) {
          var item = ref.item
          return [
            item.is_active === 1 || item.is_active === true
              ? _c("v-chip", { attrs: { color: "primary" } }, [
                  _vm._v("Active")
                ])
              : _c("v-chip", [_vm._v("Active")])
          ]
        }
      },
      {
        key: "item.actions",
        fn: function(ref) {
          var item = ref.item
          return [
            _c(
              "v-btn",
              {
                attrs: { small: "", depressed: "", color: "primary" },
                on: {
                  click: function($event) {
                    return _vm.editItem(item)
                  }
                }
              },
              [_c("v-icon", { attrs: { small: "" } }, [_vm._v("mdi-pencil")])],
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
              { attrs: { color: "primary" }, on: { click: _vm.initialize } },
              [_vm._v("Reset")]
            )
          ]
        },
        proxy: true
      }
    ])
  })
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/project/SubProject.vue":
/*!********************************************************!*\
  !*** ./resources/js/components/project/SubProject.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SubProject_vue_vue_type_template_id_3cfb239a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SubProject.vue?vue&type=template&id=3cfb239a& */ "./resources/js/components/project/SubProject.vue?vue&type=template&id=3cfb239a&");
/* harmony import */ var _SubProject_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SubProject.vue?vue&type=script&lang=js& */ "./resources/js/components/project/SubProject.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VBtn */ "./node_modules/vuetify/lib/components/VBtn/index.js");
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/index.js");
/* harmony import */ var vuetify_lib_components_VCheckbox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VCheckbox */ "./node_modules/vuetify/lib/components/VCheckbox/index.js");
/* harmony import */ var vuetify_lib_components_VChip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuetify/lib/components/VChip */ "./node_modules/vuetify/lib/components/VChip/index.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/index.js");
/* harmony import */ var vuetify_lib_components_VDataTable__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vuetify/lib/components/VDataTable */ "./node_modules/vuetify/lib/components/VDataTable/index.js");
/* harmony import */ var vuetify_lib_components_VDialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vuetify/lib/components/VDialog */ "./node_modules/vuetify/lib/components/VDialog/index.js");
/* harmony import */ var vuetify_lib_components_VDivider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! vuetify/lib/components/VDivider */ "./node_modules/vuetify/lib/components/VDivider/index.js");
/* harmony import */ var vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! vuetify/lib/components/VIcon */ "./node_modules/vuetify/lib/components/VIcon/index.js");
/* harmony import */ var vuetify_lib_components_VSelect__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! vuetify/lib/components/VSelect */ "./node_modules/vuetify/lib/components/VSelect/index.js");
/* harmony import */ var vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! vuetify/lib/components/VTextField */ "./node_modules/vuetify/lib/components/VTextField/index.js");
/* harmony import */ var vuetify_lib_components_VTextarea__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! vuetify/lib/components/VTextarea */ "./node_modules/vuetify/lib/components/VTextarea/index.js");
/* harmony import */ var vuetify_lib_components_VToolbar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! vuetify/lib/components/VToolbar */ "./node_modules/vuetify/lib/components/VToolbar/index.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SubProject_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SubProject_vue_vue_type_template_id_3cfb239a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SubProject_vue_vue_type_template_id_3cfb239a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */




















_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VBtn: vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__["VBtn"],VCard: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCard"],VCardActions: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardActions"],VCardText: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardText"],VCheckbox: vuetify_lib_components_VCheckbox__WEBPACK_IMPORTED_MODULE_6__["VCheckbox"],VChip: vuetify_lib_components_VChip__WEBPACK_IMPORTED_MODULE_7__["VChip"],VCol: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_8__["VCol"],VContainer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_8__["VContainer"],VDataTable: vuetify_lib_components_VDataTable__WEBPACK_IMPORTED_MODULE_9__["VDataTable"],VDialog: vuetify_lib_components_VDialog__WEBPACK_IMPORTED_MODULE_10__["VDialog"],VDivider: vuetify_lib_components_VDivider__WEBPACK_IMPORTED_MODULE_11__["VDivider"],VIcon: vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_12__["VIcon"],VRow: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_8__["VRow"],VSelect: vuetify_lib_components_VSelect__WEBPACK_IMPORTED_MODULE_13__["VSelect"],VSpacer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_8__["VSpacer"],VTextField: vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_14__["VTextField"],VTextarea: vuetify_lib_components_VTextarea__WEBPACK_IMPORTED_MODULE_15__["VTextarea"],VToolbar: vuetify_lib_components_VToolbar__WEBPACK_IMPORTED_MODULE_16__["VToolbar"],VToolbarTitle: vuetify_lib_components_VToolbar__WEBPACK_IMPORTED_MODULE_16__["VToolbarTitle"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/project/SubProject.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/project/SubProject.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/project/SubProject.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_15_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SubProject_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vuetify-loader/lib/loader.js??ref--15-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./SubProject.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/project/SubProject.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_15_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SubProject_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/project/SubProject.vue?vue&type=template&id=3cfb239a&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/project/SubProject.vue?vue&type=template&id=3cfb239a& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_15_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SubProject_vue_vue_type_template_id_3cfb239a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vuetify-loader/lib/loader.js??ref--15-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./SubProject.vue?vue&type=template&id=3cfb239a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/project/SubProject.vue?vue&type=template&id=3cfb239a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_15_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SubProject_vue_vue_type_template_id_3cfb239a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_15_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SubProject_vue_vue_type_template_id_3cfb239a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);