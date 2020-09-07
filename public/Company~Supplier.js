(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Company~Supplier"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/common/Address.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js??ref--18-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/common/Address.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: ["model_id", "model", "countries"],
  data: function data() {
    return {
      dialog: false,
      errors: [],
      headers: [{
        text: "ID",
        value: "id",
        sortable: false
      }, {
        text: "Name",
        value: "name",
        sortable: false
      }, {
        text: "Activation",
        value: "is_active",
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
        street1: null,
        street2: null,
        city: null,
        state: null,
        country: null,
        description: null,
        is_active: null
      },
      defaultItem: {
        id: null,
        name: null,
        street1: null,
        street2: null,
        city: null,
        state: null,
        country: null,
        description: null,
        is_active: null
      }
    };
  },
  computed: {
    formTitle: function formTitle() {
      return this.editedIndex === -1 ? "New Compay Address" : "Edit Company Address";
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

      axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/addresses/" + this.model + "/" + this.model_id).then(function (response) {
        _this.desserts = response.data.addresses;
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
        axios__WEBPACK_IMPORTED_MODULE_0___default.a.put("/api/addresses/" + this.editedItem.id, this.editedItem).then(function (response) {
          Object.assign(_this3.desserts[_this3.editedIndex], response.data.address);

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
        axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("/api/addresses/" + this.model + "/" + this.model_id, this.editedItem).then(function (response) {
          _this3.desserts.push(response.data.address);

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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/common/Employee.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js??ref--18-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/common/Employee.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: ["model", "model_id", "countries"],
  data: function data() {
    return {
      dialog: false,
      errors: [],
      timezones: [],
      titles: ["Mr.", "Mrs", "Miss", "Ms"],
      genders: ["Male", "Female"],
      headers: [{
        text: "ID",
        value: "id",
        sortable: false
      }, {
        text: "Name",
        value: "name",
        sortable: false
      }, {
        text: "Email",
        value: "email",
        sortable: false
      }, {
        text: "Mobile",
        value: "mobile",
        sortable: false
      }, {
        text: "Activation",
        value: "is_active",
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
        title: null,
        name: null,
        day_of_birth: null,
        gender: null,
        position: null,
        email: null,
        phone: null,
        mobile: null,
        fax: null,
        timezone: null,
        description: null,
        is_active: false
      },
      defaultItem: {
        id: null,
        title: null,
        name: null,
        day_of_birth: null,
        gender: null,
        position: null,
        email: null,
        phone: null,
        mobile: null,
        fax: null,
        timezone: null,
        description: null,
        is_active: false
      }
    };
  },
  computed: {
    formTitle: function formTitle() {
      return this.editedIndex === -1 ? "New Client Employee" : "Edit Client Employee";
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

      axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/employees/" + this.model + "/" + this.model_id).then(function (response) {
        console.log(response.data);
        _this.desserts = response.data.employees;
        _this.timezones = response.data.timezones;
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
        axios__WEBPACK_IMPORTED_MODULE_0___default.a.put("/api/employees/" + this.editedItem.id, this.editedItem).then(function (response) {
          Object.assign(_this3.desserts[_this3.editedIndex], response.data.employee);

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
        axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("/api/employees/" + this.model + "/" + this.model_id, this.editedItem).then(function (response) {
          _this3.desserts.push(response.data.employee);

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/common/Address.vue?vue&type=template&id=2a46528a&":
/*!************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--18-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/common/Address.vue?vue&type=template&id=2a46528a& ***!
  \************************************************************************************************************************************************************************************************************************************************************************/
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
                _c("v-toolbar-title", [_vm._v("ADDRESS LIST")]),
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
                              [_c("v-icon", [_vm._v("mdi-home-map-marker")])],
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
                                            label: "Name(*)",
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
                                            label: "Street1",
                                            "error-messages":
                                              _vm.errors.street1,
                                            rounded: "",
                                            filled: ""
                                          },
                                          model: {
                                            value: _vm.editedItem.street1,
                                            callback: function($$v) {
                                              _vm.$set(
                                                _vm.editedItem,
                                                "street1",
                                                $$v
                                              )
                                            },
                                            expression: "editedItem.street1"
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
                                            label: "street2",
                                            "error-messages":
                                              _vm.errors.street2,
                                            rounded: "",
                                            filled: ""
                                          },
                                          model: {
                                            value: _vm.editedItem.street2,
                                            callback: function($$v) {
                                              _vm.$set(
                                                _vm.editedItem,
                                                "street2",
                                                $$v
                                              )
                                            },
                                            expression: "editedItem.street2"
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
                                            label: "City(District)",
                                            "error-messages": _vm.errors.city,
                                            rounded: "",
                                            filled: ""
                                          },
                                          model: {
                                            value: _vm.editedItem.city,
                                            callback: function($$v) {
                                              _vm.$set(
                                                _vm.editedItem,
                                                "city",
                                                $$v
                                              )
                                            },
                                            expression: "editedItem.city"
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
                                            label: "State(Province)",
                                            "error-messages": _vm.errors.state,
                                            rounded: "",
                                            filled: ""
                                          },
                                          model: {
                                            value: _vm.editedItem.state,
                                            callback: function($$v) {
                                              _vm.$set(
                                                _vm.editedItem,
                                                "state",
                                                $$v
                                              )
                                            },
                                            expression: "editedItem.state"
                                          }
                                        })
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "v-col",
                                      { attrs: { cols: "12", md: "6" } },
                                      [
                                        _c("v-select", {
                                          attrs: {
                                            label: "Country(*)",
                                            "item-text": "name",
                                            "item-value": "name",
                                            items: _vm.countries,
                                            "error-messages":
                                              _vm.errors.country,
                                            rounded: "",
                                            filled: ""
                                          },
                                          model: {
                                            value: _vm.editedItem.country,
                                            callback: function($$v) {
                                              _vm.$set(
                                                _vm.editedItem,
                                                "country",
                                                $$v
                                              )
                                            },
                                            expression: "editedItem.country"
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
                                            label: "Zipcode",
                                            "error-messages":
                                              _vm.errors.zipcode,
                                            rounded: "",
                                            filled: ""
                                          },
                                          model: {
                                            value: _vm.editedItem.zipcode,
                                            callback: function($$v) {
                                              _vm.$set(
                                                _vm.editedItem,
                                                "zipcode",
                                                $$v
                                              )
                                            },
                                            expression: "editedItem.zipcode"
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/common/Employee.vue?vue&type=template&id=06cd9412&":
/*!*************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--18-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/common/Employee.vue?vue&type=template&id=06cd9412& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************/
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
                _c("v-toolbar-title", [_vm._v("EMPLOYEE LIST")]),
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
                                        attrs: { cols: "12", sm: "3", md: "3" }
                                      },
                                      [
                                        _c("v-select", {
                                          attrs: {
                                            items: _vm.titles,
                                            label: "Title(*)",
                                            "error-messages": _vm.errors.title,
                                            rounded: "",
                                            filled: ""
                                          },
                                          model: {
                                            value: _vm.editedItem.title,
                                            callback: function($$v) {
                                              _vm.$set(
                                                _vm.editedItem,
                                                "title",
                                                $$v
                                              )
                                            },
                                            expression: "editedItem.title"
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
                                            label: "Name(*)",
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
                                        attrs: { cols: "12", sm: "3", md: "3" }
                                      },
                                      [
                                        _c("v-select", {
                                          attrs: {
                                            items: _vm.genders,
                                            label: "Gender(*)",
                                            "error-messages": _vm.errors.gender,
                                            rounded: "",
                                            filled: ""
                                          },
                                          model: {
                                            value: _vm.editedItem.gender,
                                            callback: function($$v) {
                                              _vm.$set(
                                                _vm.editedItem,
                                                "gender",
                                                $$v
                                              )
                                            },
                                            expression: "editedItem.gender"
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
                                            label: "Position",
                                            "error-messages":
                                              _vm.errors.position,
                                            rounded: "",
                                            filled: ""
                                          },
                                          model: {
                                            value: _vm.editedItem.position,
                                            callback: function($$v) {
                                              _vm.$set(
                                                _vm.editedItem,
                                                "position",
                                                $$v
                                              )
                                            },
                                            expression: "editedItem.position"
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
                                            label: "Email Address(*)",
                                            "error-messages": _vm.errors.email,
                                            rounded: "",
                                            filled: ""
                                          },
                                          model: {
                                            value: _vm.editedItem.email,
                                            callback: function($$v) {
                                              _vm.$set(
                                                _vm.editedItem,
                                                "email",
                                                $$v
                                              )
                                            },
                                            expression: "editedItem.email"
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
                                            label: "Office Phone Number",
                                            "error-messages": _vm.errors.phone,
                                            rounded: "",
                                            filled: ""
                                          },
                                          model: {
                                            value: _vm.editedItem.phone,
                                            callback: function($$v) {
                                              _vm.$set(
                                                _vm.editedItem,
                                                "phone",
                                                $$v
                                              )
                                            },
                                            expression: "editedItem.phone"
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
                                            label: "Mobile Phone Number",
                                            "error-messages": _vm.errors.mobile,
                                            rounded: "",
                                            filled: ""
                                          },
                                          model: {
                                            value: _vm.editedItem.mobile,
                                            callback: function($$v) {
                                              _vm.$set(
                                                _vm.editedItem,
                                                "mobile",
                                                $$v
                                              )
                                            },
                                            expression: "editedItem.mobile"
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
                                            label: "Fax Number",
                                            "error-messages": _vm.errors.fax,
                                            rounded: "",
                                            filled: ""
                                          },
                                          model: {
                                            value: _vm.editedItem.fax,
                                            callback: function($$v) {
                                              _vm.$set(
                                                _vm.editedItem,
                                                "fax",
                                                $$v
                                              )
                                            },
                                            expression: "editedItem.fax"
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
                                        _c("v-autocomplete", {
                                          attrs: {
                                            items: _vm.timezones,
                                            label: "Timezone",
                                            rounded: "",
                                            filled: ""
                                          },
                                          model: {
                                            value: _vm.editedItem.timezone,
                                            callback: function($$v) {
                                              _vm.$set(
                                                _vm.editedItem,
                                                "timezone",
                                                $$v
                                              )
                                            },
                                            expression: "editedItem.timezone"
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

/***/ "./resources/js/components/common/Address.vue":
/*!****************************************************!*\
  !*** ./resources/js/components/common/Address.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Address_vue_vue_type_template_id_2a46528a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Address.vue?vue&type=template&id=2a46528a& */ "./resources/js/components/common/Address.vue?vue&type=template&id=2a46528a&");
/* harmony import */ var _Address_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Address.vue?vue&type=script&lang=js& */ "./resources/js/components/common/Address.vue?vue&type=script&lang=js&");
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
  _Address_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Address_vue_vue_type_template_id_2a46528a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Address_vue_vue_type_template_id_2a46528a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */




















_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VBtn: vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__["VBtn"],VCard: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCard"],VCardActions: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardActions"],VCardText: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardText"],VCheckbox: vuetify_lib_components_VCheckbox__WEBPACK_IMPORTED_MODULE_6__["VCheckbox"],VChip: vuetify_lib_components_VChip__WEBPACK_IMPORTED_MODULE_7__["VChip"],VCol: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_8__["VCol"],VContainer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_8__["VContainer"],VDataTable: vuetify_lib_components_VDataTable__WEBPACK_IMPORTED_MODULE_9__["VDataTable"],VDialog: vuetify_lib_components_VDialog__WEBPACK_IMPORTED_MODULE_10__["VDialog"],VDivider: vuetify_lib_components_VDivider__WEBPACK_IMPORTED_MODULE_11__["VDivider"],VIcon: vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_12__["VIcon"],VRow: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_8__["VRow"],VSelect: vuetify_lib_components_VSelect__WEBPACK_IMPORTED_MODULE_13__["VSelect"],VSpacer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_8__["VSpacer"],VTextField: vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_14__["VTextField"],VTextarea: vuetify_lib_components_VTextarea__WEBPACK_IMPORTED_MODULE_15__["VTextarea"],VToolbar: vuetify_lib_components_VToolbar__WEBPACK_IMPORTED_MODULE_16__["VToolbar"],VToolbarTitle: vuetify_lib_components_VToolbar__WEBPACK_IMPORTED_MODULE_16__["VToolbarTitle"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/common/Address.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/common/Address.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/common/Address.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Address_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vuetify-loader/lib/loader.js??ref--18-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Address.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/common/Address.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Address_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/common/Address.vue?vue&type=template&id=2a46528a&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/common/Address.vue?vue&type=template&id=2a46528a& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Address_vue_vue_type_template_id_2a46528a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vuetify-loader/lib/loader.js??ref--18-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Address.vue?vue&type=template&id=2a46528a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/common/Address.vue?vue&type=template&id=2a46528a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Address_vue_vue_type_template_id_2a46528a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Address_vue_vue_type_template_id_2a46528a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/common/Employee.vue":
/*!*****************************************************!*\
  !*** ./resources/js/components/common/Employee.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Employee_vue_vue_type_template_id_06cd9412___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Employee.vue?vue&type=template&id=06cd9412& */ "./resources/js/components/common/Employee.vue?vue&type=template&id=06cd9412&");
/* harmony import */ var _Employee_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Employee.vue?vue&type=script&lang=js& */ "./resources/js/components/common/Employee.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib_components_VAutocomplete__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VAutocomplete */ "./node_modules/vuetify/lib/components/VAutocomplete/index.js");
/* harmony import */ var vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VBtn */ "./node_modules/vuetify/lib/components/VBtn/index.js");
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/index.js");
/* harmony import */ var vuetify_lib_components_VCheckbox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuetify/lib/components/VCheckbox */ "./node_modules/vuetify/lib/components/VCheckbox/index.js");
/* harmony import */ var vuetify_lib_components_VChip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuetify/lib/components/VChip */ "./node_modules/vuetify/lib/components/VChip/index.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/index.js");
/* harmony import */ var vuetify_lib_components_VDataTable__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vuetify/lib/components/VDataTable */ "./node_modules/vuetify/lib/components/VDataTable/index.js");
/* harmony import */ var vuetify_lib_components_VDialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! vuetify/lib/components/VDialog */ "./node_modules/vuetify/lib/components/VDialog/index.js");
/* harmony import */ var vuetify_lib_components_VDivider__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! vuetify/lib/components/VDivider */ "./node_modules/vuetify/lib/components/VDivider/index.js");
/* harmony import */ var vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! vuetify/lib/components/VIcon */ "./node_modules/vuetify/lib/components/VIcon/index.js");
/* harmony import */ var vuetify_lib_components_VSelect__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! vuetify/lib/components/VSelect */ "./node_modules/vuetify/lib/components/VSelect/index.js");
/* harmony import */ var vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! vuetify/lib/components/VTextField */ "./node_modules/vuetify/lib/components/VTextField/index.js");
/* harmony import */ var vuetify_lib_components_VTextarea__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! vuetify/lib/components/VTextarea */ "./node_modules/vuetify/lib/components/VTextarea/index.js");
/* harmony import */ var vuetify_lib_components_VToolbar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! vuetify/lib/components/VToolbar */ "./node_modules/vuetify/lib/components/VToolbar/index.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Employee_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Employee_vue_vue_type_template_id_06cd9412___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Employee_vue_vue_type_template_id_06cd9412___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */





















_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VAutocomplete: vuetify_lib_components_VAutocomplete__WEBPACK_IMPORTED_MODULE_4__["VAutocomplete"],VBtn: vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_5__["VBtn"],VCard: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_6__["VCard"],VCardActions: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_6__["VCardActions"],VCardText: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_6__["VCardText"],VCheckbox: vuetify_lib_components_VCheckbox__WEBPACK_IMPORTED_MODULE_7__["VCheckbox"],VChip: vuetify_lib_components_VChip__WEBPACK_IMPORTED_MODULE_8__["VChip"],VCol: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_9__["VCol"],VContainer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_9__["VContainer"],VDataTable: vuetify_lib_components_VDataTable__WEBPACK_IMPORTED_MODULE_10__["VDataTable"],VDialog: vuetify_lib_components_VDialog__WEBPACK_IMPORTED_MODULE_11__["VDialog"],VDivider: vuetify_lib_components_VDivider__WEBPACK_IMPORTED_MODULE_12__["VDivider"],VIcon: vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_13__["VIcon"],VRow: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_9__["VRow"],VSelect: vuetify_lib_components_VSelect__WEBPACK_IMPORTED_MODULE_14__["VSelect"],VSpacer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_9__["VSpacer"],VTextField: vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_15__["VTextField"],VTextarea: vuetify_lib_components_VTextarea__WEBPACK_IMPORTED_MODULE_16__["VTextarea"],VToolbar: vuetify_lib_components_VToolbar__WEBPACK_IMPORTED_MODULE_17__["VToolbar"],VToolbarTitle: vuetify_lib_components_VToolbar__WEBPACK_IMPORTED_MODULE_17__["VToolbarTitle"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/common/Employee.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/common/Employee.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/common/Employee.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Employee_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vuetify-loader/lib/loader.js??ref--18-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Employee.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/common/Employee.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Employee_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/common/Employee.vue?vue&type=template&id=06cd9412&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/common/Employee.vue?vue&type=template&id=06cd9412& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Employee_vue_vue_type_template_id_06cd9412___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vuetify-loader/lib/loader.js??ref--18-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Employee.vue?vue&type=template&id=06cd9412& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/common/Employee.vue?vue&type=template&id=06cd9412&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Employee_vue_vue_type_template_id_06cd9412___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Employee_vue_vue_type_template_id_06cd9412___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);