(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Company"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Company.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js??ref--18-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Company.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_common_Employee__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/common/Employee */ "./resources/js/components/common/Employee.vue");
/* harmony import */ var _components_common_Address__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/common/Address */ "./resources/js/components/common/Address.vue");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
  components: {
    Employee: _components_common_Employee__WEBPACK_IMPORTED_MODULE_1__["default"],
    Address: _components_common_Address__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      search: "",
      dialog: false,
      headers: [{
        text: "ID",
        value: "id"
      }, {
        text: "Name",
        value: "name"
      }, {
        text: "Display Name",
        value: "display_name"
      }, {
        text: "Client Page",
        value: ""
      }, {
        text: "Code",
        value: "code"
      }, {
        text: "Activation",
        value: "is_active",
        sortable: false
      }, {
        text: "Actions",
        value: "action",
        sortable: false
      }],
      desserts: [],
      editedIndex: -1,
      editedItem: {
        id: "",
        name: "",
        display_name: "",
        email: "",
        phone: "",
        fax: "",
        url: "",
        street1: "",
        street2: "",
        city: "",
        state: "",
        country_id: "",
        zipcode: "",
        reg_number: "",
        vat_reg_number: "",
        code: "",
        logo: "",
        is_active: "",
        description: ""
      },
      defaultItem: {
        id: "",
        name: "",
        display_name: "",
        email: "",
        phone: "",
        fax: "",
        url: "",
        street1: "",
        street2: "",
        city: "",
        state: "",
        country_id: "",
        zipcode: "",
        reg_number: "",
        vat_reg_number: "",
        code: "",
        logo: "",
        is_active: "",
        description: ""
      },
      errors: [],
      countries: []
    };
  },
  computed: {
    formTitle: function formTitle() {
      return this.editedIndex === -1 ? "Add Client" : "Edit Client";
    }
  },
  watch: _defineProperty({
    dialog: function dialog(val) {
      val || this.close();
    }
  }, "dialog", function dialog(val) {
    document.querySelector("html").style.overflow = val ? "hidden" : null;
  }),
  created: function created() {
    this.initialize();
  },
  methods: {
    initialize: function initialize() {
      var _this = this;

      axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/companies").then(function (response) {
        _this.desserts = response.data.companies;
        _this.countries = response.data.countries;
      });
    },
    editItem: function editItem(item) {
      var _this2 = this;

      this.editedIndex = this.desserts.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
      setTimeout(function () {
        _this2.$refs.employeeListComponent.initialize();

        _this2.$refs.addressListComponent.initialize();
      }, 500);
    },
    deleteItem: function deleteItem(item) {
      var index = this.desserts.indexOf(item);
      confirm("Are you sure you want to delete this item?") && this.desserts.splice(index, 1);
    },
    close: function close() {
      var _this3 = this;

      this.dialog = false;
      setTimeout(function () {
        _this3.editedItem = Object.assign({}, _this3.defaultItem);
        _this3.editedIndex = -1;
      }, 300);
    },
    save: function save() {
      var _this4 = this;

      if (this.editedIndex > -1) {
        axios__WEBPACK_IMPORTED_MODULE_0___default.a.put("/api/companies/" + this.editedItem.id, this.editedItem).then(function (response) {
          Object.assign(_this4.desserts[_this4.editedIndex], response.data.company);

          _this4.$store.dispatch("SHOW_GLOBAL_SNACKBAR", {
            text: response.data.message
          });

          _this4.close();
        })["catch"](function (error) {
          _this4.errors = error.response.data.errors;

          _this4.$store.dispatch("SHOW_GLOBAL_SNACKBAR", {
            text: error.response.data.message,
            color: "red"
          });
        });
      } else {
        axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("/api/companies", this.editedItem).then(function (response) {
          _this4.desserts.unshift(response.data.company);

          _this4.$store.dispatch("SHOW_GLOBAL_SNACKBAR", {
            text: response.data.message
          });

          _this4.close();
        })["catch"](function (error) {
          _this4.errors = error.response.data.errors;

          _this4.$store.dispatch("SHOW_GLOBAL_SNACKBAR", {
            text: error.response.data.message,
            color: "red"
          });
        });
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Company.vue?vue&type=template&id=06576ba4&":
/*!************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--18-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Company.vue?vue&type=template&id=06576ba4& ***!
  \************************************************************************************************************************************************************************************************************************************************************/
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
          search: _vm.search
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
                    _c("v-toolbar-title", [_vm._v("CLIENT LIST")]),
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
                        attrs: { fullscreen: "", "hide-overlay": "" },
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
                                      attrs: { color: "primary", dark: "" }
                                    },
                                    on
                                  ),
                                  [
                                    _c(
                                      "v-icon",
                                      { attrs: { left: "", dark: "" } },
                                      [_vm._v("mdi-account-tie")]
                                    ),
                                    _vm._v("CLIENT\n            ")
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
                              {
                                attrs: { color: "blue-grey darken-1", dark: "" }
                              },
                              [
                                _c("v-toolbar-title", [
                                  _c("span", { staticClass: "headline" }, [
                                    _vm._v(_vm._s(_vm.formTitle))
                                  ])
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
                                  { attrs: { fluid: "" } },
                                  [
                                    _c(
                                      "v-row",
                                      [
                                        _c(
                                          "v-col",
                                          { attrs: { cols: "12", md: "6" } },
                                          [
                                            _c(
                                              "v-card",
                                              [
                                                _c(
                                                  "v-toolbar",
                                                  {
                                                    attrs: {
                                                      color: "primary",
                                                      dark: "",
                                                      flat: ""
                                                    }
                                                  },
                                                  [
                                                    _c("v-toolbar-title", [
                                                      _vm._v(
                                                        "CLIENT INFORMATION"
                                                      )
                                                    ])
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
                                                                attrs: {
                                                                  cols: "12",
                                                                  md: "6"
                                                                }
                                                              },
                                                              [
                                                                _c(
                                                                  "v-text-field",
                                                                  {
                                                                    attrs: {
                                                                      label:
                                                                        "Name",
                                                                      "error-messages":
                                                                        _vm
                                                                          .errors
                                                                          .name,
                                                                      rounded:
                                                                        "",
                                                                      filled: ""
                                                                    },
                                                                    model: {
                                                                      value:
                                                                        _vm
                                                                          .editedItem
                                                                          .name,
                                                                      callback: function(
                                                                        $$v
                                                                      ) {
                                                                        _vm.$set(
                                                                          _vm.editedItem,
                                                                          "name",
                                                                          $$v
                                                                        )
                                                                      },
                                                                      expression:
                                                                        "editedItem.name"
                                                                    }
                                                                  }
                                                                )
                                                              ],
                                                              1
                                                            ),
                                                            _vm._v(" "),
                                                            _c(
                                                              "v-col",
                                                              {
                                                                attrs: {
                                                                  cols: "12",
                                                                  md: "6"
                                                                }
                                                              },
                                                              [
                                                                _c(
                                                                  "v-text-field",
                                                                  {
                                                                    attrs: {
                                                                      label:
                                                                        "Display Name",
                                                                      "error-messages":
                                                                        _vm
                                                                          .errors
                                                                          .display_name,
                                                                      rounded:
                                                                        "",
                                                                      filled: ""
                                                                    },
                                                                    model: {
                                                                      value:
                                                                        _vm
                                                                          .editedItem
                                                                          .display_name,
                                                                      callback: function(
                                                                        $$v
                                                                      ) {
                                                                        _vm.$set(
                                                                          _vm.editedItem,
                                                                          "display_name",
                                                                          $$v
                                                                        )
                                                                      },
                                                                      expression:
                                                                        "editedItem.display_name"
                                                                    }
                                                                  }
                                                                )
                                                              ],
                                                              1
                                                            ),
                                                            _vm._v(" "),
                                                            _c(
                                                              "v-col",
                                                              {
                                                                attrs: {
                                                                  cols: "12",
                                                                  md: "6"
                                                                }
                                                              },
                                                              [
                                                                _c(
                                                                  "v-text-field",
                                                                  {
                                                                    attrs: {
                                                                      label:
                                                                        "Email",
                                                                      "error-messages":
                                                                        _vm
                                                                          .errors
                                                                          .email,
                                                                      rounded:
                                                                        "",
                                                                      filled: ""
                                                                    },
                                                                    model: {
                                                                      value:
                                                                        _vm
                                                                          .editedItem
                                                                          .email,
                                                                      callback: function(
                                                                        $$v
                                                                      ) {
                                                                        _vm.$set(
                                                                          _vm.editedItem,
                                                                          "email",
                                                                          $$v
                                                                        )
                                                                      },
                                                                      expression:
                                                                        "editedItem.email"
                                                                    }
                                                                  }
                                                                )
                                                              ],
                                                              1
                                                            ),
                                                            _vm._v(" "),
                                                            _c(
                                                              "v-col",
                                                              {
                                                                attrs: {
                                                                  cols: "12",
                                                                  md: "6"
                                                                }
                                                              },
                                                              [
                                                                _c(
                                                                  "v-text-field",
                                                                  {
                                                                    attrs: {
                                                                      label:
                                                                        "Phone",
                                                                      "error-messages":
                                                                        _vm
                                                                          .errors
                                                                          .phone,
                                                                      rounded:
                                                                        "",
                                                                      filled: ""
                                                                    },
                                                                    model: {
                                                                      value:
                                                                        _vm
                                                                          .editedItem
                                                                          .phone,
                                                                      callback: function(
                                                                        $$v
                                                                      ) {
                                                                        _vm.$set(
                                                                          _vm.editedItem,
                                                                          "phone",
                                                                          $$v
                                                                        )
                                                                      },
                                                                      expression:
                                                                        "editedItem.phone"
                                                                    }
                                                                  }
                                                                )
                                                              ],
                                                              1
                                                            ),
                                                            _vm._v(" "),
                                                            _c(
                                                              "v-col",
                                                              {
                                                                attrs: {
                                                                  cols: "12",
                                                                  md: "6"
                                                                }
                                                              },
                                                              [
                                                                _c(
                                                                  "v-text-field",
                                                                  {
                                                                    attrs: {
                                                                      label:
                                                                        "Fax",
                                                                      "error-messages":
                                                                        _vm
                                                                          .errors
                                                                          .fax,
                                                                      rounded:
                                                                        "",
                                                                      filled: ""
                                                                    },
                                                                    model: {
                                                                      value:
                                                                        _vm
                                                                          .editedItem
                                                                          .fax,
                                                                      callback: function(
                                                                        $$v
                                                                      ) {
                                                                        _vm.$set(
                                                                          _vm.editedItem,
                                                                          "fax",
                                                                          $$v
                                                                        )
                                                                      },
                                                                      expression:
                                                                        "editedItem.fax"
                                                                    }
                                                                  }
                                                                )
                                                              ],
                                                              1
                                                            ),
                                                            _vm._v(" "),
                                                            _c(
                                                              "v-col",
                                                              {
                                                                attrs: {
                                                                  cols: "12",
                                                                  md: "6"
                                                                }
                                                              },
                                                              [
                                                                _c(
                                                                  "v-text-field",
                                                                  {
                                                                    attrs: {
                                                                      label:
                                                                        "Url",
                                                                      "error-messages":
                                                                        _vm
                                                                          .errors
                                                                          .url,
                                                                      rounded:
                                                                        "",
                                                                      filled: ""
                                                                    },
                                                                    model: {
                                                                      value:
                                                                        _vm
                                                                          .editedItem
                                                                          .url,
                                                                      callback: function(
                                                                        $$v
                                                                      ) {
                                                                        _vm.$set(
                                                                          _vm.editedItem,
                                                                          "url",
                                                                          $$v
                                                                        )
                                                                      },
                                                                      expression:
                                                                        "editedItem.url"
                                                                    }
                                                                  }
                                                                )
                                                              ],
                                                              1
                                                            ),
                                                            _vm._v(" "),
                                                            _c(
                                                              "v-col",
                                                              {
                                                                attrs: {
                                                                  cols: "12",
                                                                  md: "6"
                                                                }
                                                              },
                                                              [
                                                                _c(
                                                                  "v-text-field",
                                                                  {
                                                                    attrs: {
                                                                      label:
                                                                        "Business Registration Number",
                                                                      "error-messages":
                                                                        _vm
                                                                          .errors
                                                                          .reg_number,
                                                                      rounded:
                                                                        "",
                                                                      filled: ""
                                                                    },
                                                                    model: {
                                                                      value:
                                                                        _vm
                                                                          .editedItem
                                                                          .reg_number,
                                                                      callback: function(
                                                                        $$v
                                                                      ) {
                                                                        _vm.$set(
                                                                          _vm.editedItem,
                                                                          "reg_number",
                                                                          $$v
                                                                        )
                                                                      },
                                                                      expression:
                                                                        "editedItem.reg_number"
                                                                    }
                                                                  }
                                                                )
                                                              ],
                                                              1
                                                            ),
                                                            _vm._v(" "),
                                                            _c(
                                                              "v-col",
                                                              {
                                                                attrs: {
                                                                  cols: "12",
                                                                  md: "6"
                                                                }
                                                              },
                                                              [
                                                                _c(
                                                                  "v-text-field",
                                                                  {
                                                                    attrs: {
                                                                      label:
                                                                        "VAT Registration Number",
                                                                      "error-messages":
                                                                        _vm
                                                                          .errors
                                                                          .vat_reg_number,
                                                                      rounded:
                                                                        "",
                                                                      filled: ""
                                                                    },
                                                                    model: {
                                                                      value:
                                                                        _vm
                                                                          .editedItem
                                                                          .vat_reg_number,
                                                                      callback: function(
                                                                        $$v
                                                                      ) {
                                                                        _vm.$set(
                                                                          _vm.editedItem,
                                                                          "vat_reg_number",
                                                                          $$v
                                                                        )
                                                                      },
                                                                      expression:
                                                                        "editedItem.vat_reg_number"
                                                                    }
                                                                  }
                                                                )
                                                              ],
                                                              1
                                                            ),
                                                            _vm._v(" "),
                                                            _c(
                                                              "v-col",
                                                              {
                                                                attrs: {
                                                                  cols: "12",
                                                                  md: "6"
                                                                }
                                                              },
                                                              [
                                                                _c(
                                                                  "v-text-field",
                                                                  {
                                                                    attrs: {
                                                                      label:
                                                                        "Code",
                                                                      "error-messages":
                                                                        _vm
                                                                          .errors
                                                                          .code,
                                                                      rounded:
                                                                        "",
                                                                      filled: ""
                                                                    },
                                                                    model: {
                                                                      value:
                                                                        _vm
                                                                          .editedItem
                                                                          .code,
                                                                      callback: function(
                                                                        $$v
                                                                      ) {
                                                                        _vm.$set(
                                                                          _vm.editedItem,
                                                                          "code",
                                                                          $$v
                                                                        )
                                                                      },
                                                                      expression:
                                                                        "editedItem.code"
                                                                    }
                                                                  }
                                                                )
                                                              ],
                                                              1
                                                            ),
                                                            _vm._v(" "),
                                                            _c(
                                                              "v-col",
                                                              {
                                                                attrs: {
                                                                  cols: "12",
                                                                  sm: "12"
                                                                }
                                                              },
                                                              [
                                                                _c(
                                                                  "v-textarea",
                                                                  {
                                                                    attrs: {
                                                                      label:
                                                                        "Description",
                                                                      filled: ""
                                                                    },
                                                                    model: {
                                                                      value:
                                                                        _vm
                                                                          .editedItem
                                                                          .description,
                                                                      callback: function(
                                                                        $$v
                                                                      ) {
                                                                        _vm.$set(
                                                                          _vm.editedItem,
                                                                          "description",
                                                                          $$v
                                                                        )
                                                                      },
                                                                      expression:
                                                                        "editedItem.description"
                                                                    }
                                                                  }
                                                                )
                                                              ],
                                                              1
                                                            ),
                                                            _vm._v(" "),
                                                            _c(
                                                              "v-col",
                                                              {
                                                                attrs: {
                                                                  cols: "12",
                                                                  md: "6"
                                                                }
                                                              },
                                                              [
                                                                _c(
                                                                  "v-checkbox",
                                                                  {
                                                                    attrs: {
                                                                      label:
                                                                        "Activation"
                                                                    },
                                                                    model: {
                                                                      value:
                                                                        _vm
                                                                          .editedItem
                                                                          .is_active,
                                                                      callback: function(
                                                                        $$v
                                                                      ) {
                                                                        _vm.$set(
                                                                          _vm.editedItem,
                                                                          "is_active",
                                                                          $$v
                                                                        )
                                                                      },
                                                                      expression:
                                                                        "editedItem.is_active"
                                                                    }
                                                                  },
                                                                  [_vm._v(">")]
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
                                                        attrs: {
                                                          color:
                                                            "blue darken-1",
                                                          text: ""
                                                        },
                                                        on: { click: _vm.close }
                                                      },
                                                      [_vm._v("Cancel")]
                                                    ),
                                                    _vm._v(" "),
                                                    _c(
                                                      "v-btn",
                                                      {
                                                        attrs: {
                                                          color:
                                                            "blue darken-1",
                                                          text: ""
                                                        },
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
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "v-col",
                                          { attrs: { cols: "12", md: "6" } },
                                          [
                                            _vm.editedIndex > -1
                                              ? _c("Employee", {
                                                  ref: "employeeListComponent",
                                                  attrs: {
                                                    model_id: _vm.editedItem.id,
                                                    countries: _vm.countries,
                                                    model: "Company"
                                                  }
                                                })
                                              : _vm._e(),
                                            _vm._v(" "),
                                            _c("div", {
                                              staticClass: "mt-2 mb-2"
                                            }),
                                            _vm._v(" "),
                                            _vm.editedIndex > -1
                                              ? _c("Address", {
                                                  ref: "addressListComponent",
                                                  attrs: {
                                                    model_id: _vm.editedItem.id,
                                                    countries: _vm.countries,
                                                    model: "Company"
                                                  }
                                                })
                                              : _vm._e()
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
            key: "item.action",
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
                  [
                    _c("v-icon", { attrs: { small: "" } }, [
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

/***/ "./resources/js/views/Company.vue":
/*!****************************************!*\
  !*** ./resources/js/views/Company.vue ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Company_vue_vue_type_template_id_06576ba4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Company.vue?vue&type=template&id=06576ba4& */ "./resources/js/views/Company.vue?vue&type=template&id=06576ba4&");
/* harmony import */ var _Company_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Company.vue?vue&type=script&lang=js& */ "./resources/js/views/Company.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
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
/* harmony import */ var vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! vuetify/lib/components/VTextField */ "./node_modules/vuetify/lib/components/VTextField/index.js");
/* harmony import */ var vuetify_lib_components_VTextarea__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! vuetify/lib/components/VTextarea */ "./node_modules/vuetify/lib/components/VTextarea/index.js");
/* harmony import */ var vuetify_lib_components_VToolbar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! vuetify/lib/components/VToolbar */ "./node_modules/vuetify/lib/components/VToolbar/index.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Company_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Company_vue_vue_type_template_id_06576ba4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Company_vue_vue_type_template_id_06576ba4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */



















_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VBtn: vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__["VBtn"],VCard: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCard"],VCardActions: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardActions"],VCardText: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardText"],VCheckbox: vuetify_lib_components_VCheckbox__WEBPACK_IMPORTED_MODULE_6__["VCheckbox"],VChip: vuetify_lib_components_VChip__WEBPACK_IMPORTED_MODULE_7__["VChip"],VCol: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_8__["VCol"],VContainer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_8__["VContainer"],VDataTable: vuetify_lib_components_VDataTable__WEBPACK_IMPORTED_MODULE_9__["VDataTable"],VDialog: vuetify_lib_components_VDialog__WEBPACK_IMPORTED_MODULE_10__["VDialog"],VDivider: vuetify_lib_components_VDivider__WEBPACK_IMPORTED_MODULE_11__["VDivider"],VIcon: vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_12__["VIcon"],VRow: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_8__["VRow"],VSpacer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_8__["VSpacer"],VTextField: vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_13__["VTextField"],VTextarea: vuetify_lib_components_VTextarea__WEBPACK_IMPORTED_MODULE_14__["VTextarea"],VToolbar: vuetify_lib_components_VToolbar__WEBPACK_IMPORTED_MODULE_15__["VToolbar"],VToolbarTitle: vuetify_lib_components_VToolbar__WEBPACK_IMPORTED_MODULE_15__["VToolbarTitle"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Company.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Company.vue?vue&type=script&lang=js&":
/*!*****************************************************************!*\
  !*** ./resources/js/views/Company.vue?vue&type=script&lang=js& ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Company_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vuetify-loader/lib/loader.js??ref--18-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Company.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Company.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Company_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Company.vue?vue&type=template&id=06576ba4&":
/*!***********************************************************************!*\
  !*** ./resources/js/views/Company.vue?vue&type=template&id=06576ba4& ***!
  \***********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Company_vue_vue_type_template_id_06576ba4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vuetify-loader/lib/loader.js??ref--18-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Company.vue?vue&type=template&id=06576ba4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Company.vue?vue&type=template&id=06576ba4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Company_vue_vue_type_template_id_06576ba4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Company_vue_vue_type_template_id_06576ba4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);