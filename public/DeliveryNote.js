(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["DeliveryNote"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/delivery-note/DeliveryHistory.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js??ref--18-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/delivery-note/DeliveryHistory.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: {
    histories: {
      type: Array
    }
  },
  computed: {},
  data: function data() {
    return {
      messageDialog: false,
      message: ""
    };
  },
  methods: {
    openMessageDialog: function openMessageDialog(message) {
      this.messageDialog = true;
      this.message = message;
    },
    closeMessageDialog: function closeMessageDialog(message) {
      this.messageDialog = false;
      this.message = "";
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/delivery-note/DeliveryStatus.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js??ref--18-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/delivery-note/DeliveryStatus.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _DeliveryHistory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DeliveryHistory */ "./resources/js/components/delivery-note/DeliveryHistory.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: {
    users: {
      type: Array
    },
    delivery_note_id: {
      type: Number
    },
    handleCloseChangeStatusDialog: {
      type: Function
    }
  },
  components: {
    DeliveryHistory: _DeliveryHistory__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      errors: [],
      histories: [],
      receivers: [],
      status: "",
      statuses: ["OPENED", "ORDERED", "ON DELIVERY", "DELIVERED", "CANCELED", "HOLDING"],
      message: ""
    };
  },
  computed: {},
  methods: {
    init: function init() {
      var _this = this;

      axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/delivery-notes/" + this.delivery_note_id + "/histories").then(function (response) {
        _this.histories = response.data.deliveryHistories;
      });
    },
    save: function save() {
      var _this2 = this;

      axios__WEBPACK_IMPORTED_MODULE_0___default.a.put("/api/delivery-notes/" + this.delivery_note_id + "/change-status", {
        status: this.status,
        message: this.message,
        receivers: this.receivers
      }).then(function (response) {
        console.log(response.data);
        _this2.histories = response.data.deliveryHistories;

        _this2.$store.dispatch("SHOW_GLOBAL_SNACKBAR", {
          text: response.data.message
        });

        _this2.$emit("signal-changeDeliveryStatus", response.data.status);

        _this2.$emit("signal-changeDeliveryDate", response.data.deliveredDate);

        _this2.receivers = [];
        _this2.status = "";
        _this2.message = "";
      })["catch"](function (error) {
        _this2.errors = error.response.data.errors;

        _this2.$store.dispatch("SHOW_GLOBAL_SNACKBAR", {
          text: error.response.data.message,
          color: "red"
        });
      });
    },
    removeReceiver: function removeReceiver(item) {
      var index = this.receivers.indexOf(item);
      if (index >= 0) this.receivers.splice(index, 1);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/DeliveryNote.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js??ref--18-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/DeliveryNote.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_delivery_note_DeliveryStatus__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/delivery-note/DeliveryStatus */ "./resources/js/components/delivery-note/DeliveryStatus.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    DeliveryStatus: _components_delivery_note_DeliveryStatus__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      headers: [{
        text: "QT Number",
        value: "quotation_number",
        divider: true
      }, {
        text: "Item",
        align: "left",
        value: "line_description",
        divider: true
      }, {
        text: "Status",
        value: "status",
        divider: true
      }, {
        text: "Issued Date",
        value: "quotation_issued_date",
        divider: true
      }, {
        text: "Delivered Date",
        value: "delivered_date",
        divider: true
      }, {
        text: "PO Number",
        value: "sale_order_number",
        divider: true
      }, {
        text: "INV Date",
        value: "invoice_date",
        divider: true
      }, {
        text: "Due Date",
        value: "invoice_payment_due_date",
        divider: true
      }, {
        text: "Received Date",
        value: "payment_received_date",
        divider: true
      }, {
        text: "Project",
        value: "quotation_project",
        divider: true
      }, {
        text: "SR Number",
        value: "quotation_sr_number",
        divider: true
      }, {
        text: "Price",
        align: "center",
        value: "price",
        divider: true
      }],
      desserts: [],
      statuses: ["OPENED", "ORDERED", "ON DELIVERY", "DELIVERED", "CANCELED", "HOLDING"],
      users: [],
      search: "",
      index: "",
      delivery_note_id: "",
      changeStatusDialog: false
    };
  },
  computed: {
    deliveryStatus: function deliveryStatus() {}
  },
  created: function created() {
    this.initialize();
  },
  methods: {
    initialize: function initialize() {
      var _this = this;

      axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("/api/delivery-notes").then(function (response) {
        _this.desserts = response.data.deliveryNotes;
        _this.users = response.data.users;
      });
    },
    openChangeStatusDialog: function openChangeStatusDialog(item) {
      var _this2 = this;

      this.changeStatusDialog = true;
      this.index = this.desserts.indexOf(item);
      this.delivery_note_id = item.id;
      this.$nextTick(function () {
        _this2.$refs.deliveryStatusComponent.init();
      });
    },
    closeChangeStatusDialog: function closeChangeStatusDialog() {
      this.changeStatusDialog = false;
    },
    changeDeliveryStatus: function changeDeliveryStatus(status) {
      this.desserts[this.index].status = status;
    },
    changeDeliveryDate: function changeDeliveryDate(date) {
      console.log(date);
      console.log(this.desserts[this.index]);
      this.desserts[this.index].delivered_date = date;
    },
    formatPrice: function formatPrice(value) {
      var val = (value / 1).toFixed(2).replace(",", ".");
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/delivery-note/DeliveryHistory.vue?vue&type=template&id=7a89d47e&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--18-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/delivery-note/DeliveryHistory.vue?vue&type=template&id=7a89d47e& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************/
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
    [
      _c(
        "v-list",
        { attrs: { subheader: "", selevation: "1" } },
        [
          _c("v-subheader", [_vm._v("HISTORY")]),
          _vm._v(" "),
          _vm._l(_vm.histories, function(history) {
            return _c(
              "v-list-item",
              { key: history.id },
              [
                _c("v-list-item-avatar", [
                  !history.receiver.avatar
                    ? _c(
                        "span",
                        [
                          _c("v-img", {
                            attrs: {
                              src:
                                "../img/default-avatars/" +
                                history.receiver.gender +
                                "-avatar.png",
                              width: "45"
                            }
                          })
                        ],
                        1
                      )
                    : _c(
                        "span",
                        [
                          _c("v-img", {
                            attrs: {
                              src: "../img/avatars/" + history.receiver.avatar
                            }
                          })
                        ],
                        1
                      )
                ]),
                _vm._v(" "),
                _c(
                  "v-list-item-content",
                  [
                    _c(
                      "v-list-item-title",
                      [
                        _c(
                          "v-chip",
                          {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: history.status === "OPENED",
                                expression: "history.status === 'OPENED'"
                              }
                            ],
                            attrs: { small: "", color: "green" }
                          },
                          [_vm._v(_vm._s(history.status))]
                        ),
                        _vm._v(" "),
                        _c(
                          "v-chip",
                          {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: history.status === "ORDERED",
                                expression: "history.status === 'ORDERED'"
                              }
                            ],
                            attrs: { small: "", color: "light-blue" }
                          },
                          [_vm._v(_vm._s(history.status))]
                        ),
                        _vm._v(" "),
                        _c(
                          "v-chip",
                          {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: history.status === "ON DELIVERY",
                                expression: "history.status === 'ON DELIVERY'"
                              }
                            ],
                            attrs: { small: "", color: "blue" }
                          },
                          [_vm._v(_vm._s(history.status))]
                        ),
                        _vm._v(" "),
                        _c(
                          "v-chip",
                          {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: history.status === "DELIVERIED",
                                expression: "history.status === 'DELIVERIED'"
                              }
                            ],
                            attrs: { small: "", color: "blue darken-1" }
                          },
                          [_vm._v(_vm._s(history.status))]
                        ),
                        _vm._v(" "),
                        _c(
                          "v-chip",
                          {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: history.status === "CANCELED",
                                expression: "history.status === 'CANCELED'"
                              }
                            ],
                            attrs: { small: "", color: "pink" }
                          },
                          [_vm._v(_vm._s(history.status))]
                        ),
                        _vm._v(" "),
                        _c(
                          "v-chip",
                          {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: history.status === "HOLDING",
                                expression: "history.status === 'HOLDING'"
                              }
                            ],
                            staticClass: "black--text",
                            attrs: { small: "", color: "yellow" }
                          },
                          [_vm._v(_vm._s(history.status))]
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c("v-list-item-subtitle", { staticClass: "mt-1" }, [
                      _c("span", { staticClass: "ml-1" }, [
                        _vm._v("By " + _vm._s(history.receiver.name))
                      ]),
                      _vm._v(
                        "\n          " +
                          _vm._s(
                            _vm
                              .$moment(history.created_at)
                              .format("YYYY-MM-DD hh:mm")
                          ) +
                          "\n        "
                      )
                    ])
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "v-list-item-icon",
                  {
                    on: {
                      click: function($event) {
                        history.message
                          ? _vm.openMessageDialog(history.message)
                          : false
                      }
                    }
                  },
                  [
                    _c(
                      "v-icon",
                      {
                        attrs: {
                          color: history.message
                            ? "deep-purple accent-4"
                            : "grey"
                        }
                      },
                      [_vm._v("mdi-message")]
                    )
                  ],
                  1
                )
              ],
              1
            )
          })
        ],
        2
      ),
      _vm._v(" "),
      _c(
        "v-dialog",
        {
          attrs: { "max-width": "400" },
          model: {
            value: _vm.messageDialog,
            callback: function($$v) {
              _vm.messageDialog = $$v
            },
            expression: "messageDialog"
          }
        },
        [
          _c(
            "v-card",
            [
              _c("v-card-title", [_vm._v("Message")]),
              _vm._v(" "),
              _c("v-divider"),
              _vm._v(" "),
              _c("v-card-text", { staticClass: "mt-3" }, [
                _c("div", { domProps: { innerHTML: _vm._s(_vm.message) } })
              ]),
              _vm._v(" "),
              _c("v-spacer"),
              _vm._v(" "),
              _c(
                "v-card-actions",
                [
                  _c(
                    "v-btn",
                    {
                      attrs: { color: "green darken-1", text: "" },
                      on: {
                        click: function($event) {
                          return _vm.closeMessageDialog()
                        }
                      }
                    },
                    [_vm._v("Close")]
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
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/delivery-note/DeliveryStatus.vue?vue&type=template&id=08e72b56&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--18-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/delivery-note/DeliveryStatus.vue?vue&type=template&id=08e72b56& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************/
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
    [
      _c(
        "v-card",
        [
          _c(
            "v-card-title",
            [
              _c("h4", [_vm._v("CHANGE DELIVERY HISTORY")]),
              _vm._v(" "),
              _c("v-spacer"),
              _vm._v(" "),
              _c(
                "v-btn",
                {
                  attrs: { fab: "", small: "", text: "" },
                  on: { click: _vm.handleCloseChangeStatusDialog }
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
          _c("v-divider"),
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
                        { attrs: { cols: "12", md: "6" } },
                        [
                          _c(
                            "v-card",
                            [
                              _c(
                                "v-card-text",
                                [
                                  _c("v-subheader", [_vm._v("Select Status")]),
                                  _vm._v(" "),
                                  _c("v-select", {
                                    attrs: {
                                      items: _vm.statuses,
                                      chips: "",
                                      "error-messages": _vm.errors.status
                                    },
                                    model: {
                                      value: _vm.status,
                                      callback: function($$v) {
                                        _vm.status = $$v
                                      },
                                      expression: "status"
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("v-divider"),
                                  _vm._v(" "),
                                  _c("v-textarea", {
                                    attrs: { label: "Message" },
                                    model: {
                                      value: _vm.message,
                                      callback: function($$v) {
                                        _vm.message = $$v
                                      },
                                      expression: "message"
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("v-divider"),
                                  _vm._v(" "),
                                  _c(
                                    "v-form",
                                    [
                                      _c("v-autocomplete", {
                                        attrs: {
                                          items: _vm.users,
                                          filled: "",
                                          chips: "",
                                          label:
                                            "Select Delivery Notification Receivers",
                                          "item-text": "name",
                                          "item-value": "id",
                                          "return-object": "",
                                          multiple: ""
                                        },
                                        scopedSlots: _vm._u([
                                          {
                                            key: "selection",
                                            fn: function(user) {
                                              return [
                                                _c(
                                                  "v-chip",
                                                  _vm._b(
                                                    {
                                                      attrs: {
                                                        "input-value":
                                                          user.selected,
                                                        close: ""
                                                      },
                                                      on: {
                                                        click: user.select,
                                                        "click:close": function(
                                                          $event
                                                        ) {
                                                          return _vm.removeReceiver(
                                                            user.item
                                                          )
                                                        }
                                                      }
                                                    },
                                                    "v-chip",
                                                    user.attrs,
                                                    false
                                                  ),
                                                  [
                                                    _c(
                                                      "v-avatar",
                                                      { attrs: { left: "" } },
                                                      [
                                                        user.item.avatar
                                                          ? _c(
                                                              "span",
                                                              [
                                                                _c("v-img", {
                                                                  attrs: {
                                                                    src:
                                                                      "img/avatars/" +
                                                                      user.item
                                                                        .avatar,
                                                                    width: "30"
                                                                  }
                                                                })
                                                              ],
                                                              1
                                                            )
                                                          : _c(
                                                              "span",
                                                              [
                                                                _c("v-img", {
                                                                  attrs: {
                                                                    src:
                                                                      "img/" +
                                                                      user.item
                                                                        .gender +
                                                                      "-avatar.png",
                                                                    width: "30"
                                                                  }
                                                                })
                                                              ],
                                                              1
                                                            )
                                                      ]
                                                    ),
                                                    _vm._v(
                                                      "\n                        " +
                                                        _vm._s(user.item.name) +
                                                        "\n                      "
                                                    )
                                                  ],
                                                  1
                                                )
                                              ]
                                            }
                                          },
                                          {
                                            key: "item",
                                            fn: function(user) {
                                              return [
                                                typeof user.item !== "object"
                                                  ? [
                                                      _c(
                                                        "v-list-item-content",
                                                        {
                                                          domProps: {
                                                            textContent: _vm._s(
                                                              user.item
                                                            )
                                                          }
                                                        }
                                                      )
                                                    ]
                                                  : [
                                                      _c("v-list-item-avatar", [
                                                        user.item.avatar
                                                          ? _c("span", [
                                                              _c("img", {
                                                                attrs: {
                                                                  src:
                                                                    "img/avatars/" +
                                                                    user.item
                                                                      .avatar,
                                                                  width: "30"
                                                                }
                                                              })
                                                            ])
                                                          : _c("span", [
                                                              _c("img", {
                                                                attrs: {
                                                                  src:
                                                                    "img/" +
                                                                    user.item
                                                                      .gender +
                                                                    "-avatar.png",
                                                                  width: "30"
                                                                }
                                                              })
                                                            ])
                                                      ]),
                                                      _vm._v(" "),
                                                      _c(
                                                        "v-list-item-content",
                                                        [
                                                          _c(
                                                            "v-list-item-title",
                                                            {
                                                              domProps: {
                                                                innerHTML: _vm._s(
                                                                  user.item.name
                                                                )
                                                              }
                                                            }
                                                          ),
                                                          _vm._v(" "),
                                                          _c(
                                                            "v-list-item-subtitle",
                                                            {
                                                              domProps: {
                                                                innerHTML: _vm._s(
                                                                  user.item
                                                                    .position
                                                                )
                                                              }
                                                            }
                                                          )
                                                        ],
                                                        1
                                                      )
                                                    ]
                                              ]
                                            }
                                          }
                                        ]),
                                        model: {
                                          value: _vm.receivers,
                                          callback: function($$v) {
                                            _vm.receivers = $$v
                                          },
                                          expression: "receivers"
                                        }
                                      })
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
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        { attrs: { cols: "12", md: "6" } },
                        [
                          _c("DeliveryHistory", {
                            attrs: { histories: _vm.histories }
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
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/DeliveryNote.vue?vue&type=template&id=42929ba5&":
/*!*****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--18-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/DeliveryNote.vue?vue&type=template&id=42929ba5& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************/
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
        attrs: {
          headers: _vm.headers,
          items: _vm.desserts,
          search: _vm.search,
          outline: "",
          "items-per-page": 15
        },
        scopedSlots: _vm._u([
          {
            key: "top",
            fn: function() {
              return [
                _c(
                  "v-toolbar",
                  { attrs: { flat: "", dark: "", height: "85" } },
                  [
                    _c("v-toolbar-title", [
                      _c("span", { staticClass: "page-title" }, [
                        _vm._v("Deliver Notes")
                      ])
                    ]),
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
                      "v-btn",
                      { attrs: { color: "primary" } },
                      [
                        _c("v-icon", [_vm._v("mdi-plus")]),
                        _vm._v("FILTER\n        ")
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
            key: "item.status",
            fn: function(ref) {
              var item = ref.item
              return [
                _c(
                  "v-chip",
                  {
                    on: {
                      click: function($event) {
                        return _vm.openChangeStatusDialog(item)
                      }
                    }
                  },
                  [_vm._v(_vm._s(item.status))]
                )
              ]
            }
          },
          {
            key: "item.price",
            fn: function(ref) {
              var item = ref.item
              return [
                _c("div", { staticClass: "d-flex justify-space-between" }, [
                  _c("span", { staticClass: "d-block" }, [
                    _vm._v(_vm._s(item.currency))
                  ]),
                  _vm._v(" "),
                  _c("span", { staticClass: "d-block" }, [
                    _vm._v(_vm._s(_vm.formatPrice(item.price)))
                  ])
                ])
              ]
            }
          },
          {
            key: "no-data",
            fn: function() {
              return [
                _c("v-btn", { attrs: { color: "primary" } }, [_vm._v("Reset")])
              ]
            },
            proxy: true
          }
        ])
      }),
      _vm._v(" "),
      _c(
        "v-dialog",
        {
          attrs: { "max-width": "1024", persistent: "" },
          model: {
            value: _vm.changeStatusDialog,
            callback: function($$v) {
              _vm.changeStatusDialog = $$v
            },
            expression: "changeStatusDialog"
          }
        },
        [
          _c("DeliveryStatus", {
            ref: "deliveryStatusComponent",
            attrs: {
              statuses: _vm.statuses,
              users: _vm.users,
              delivery_note_id: _vm.delivery_note_id,
              handleCloseChangeStatusDialog: _vm.closeChangeStatusDialog
            },
            on: {
              "signal-changeDeliveryStatus": _vm.changeDeliveryStatus,
              "signal-changeDeliveryDate": _vm.changeDeliveryDate
            }
          })
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/delivery-note/DeliveryHistory.vue":
/*!*******************************************************************!*\
  !*** ./resources/js/components/delivery-note/DeliveryHistory.vue ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DeliveryHistory_vue_vue_type_template_id_7a89d47e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DeliveryHistory.vue?vue&type=template&id=7a89d47e& */ "./resources/js/components/delivery-note/DeliveryHistory.vue?vue&type=template&id=7a89d47e&");
/* harmony import */ var _DeliveryHistory_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DeliveryHistory.vue?vue&type=script&lang=js& */ "./resources/js/components/delivery-note/DeliveryHistory.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VBtn */ "./node_modules/vuetify/lib/components/VBtn/index.js");
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/index.js");
/* harmony import */ var vuetify_lib_components_VChip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VChip */ "./node_modules/vuetify/lib/components/VChip/index.js");
/* harmony import */ var vuetify_lib_components_VDialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuetify/lib/components/VDialog */ "./node_modules/vuetify/lib/components/VDialog/index.js");
/* harmony import */ var vuetify_lib_components_VDivider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuetify/lib/components/VDivider */ "./node_modules/vuetify/lib/components/VDivider/index.js");
/* harmony import */ var vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vuetify/lib/components/VIcon */ "./node_modules/vuetify/lib/components/VIcon/index.js");
/* harmony import */ var vuetify_lib_components_VImg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vuetify/lib/components/VImg */ "./node_modules/vuetify/lib/components/VImg/index.js");
/* harmony import */ var vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! vuetify/lib/components/VList */ "./node_modules/vuetify/lib/components/VList/index.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/index.js");
/* harmony import */ var vuetify_lib_components_VSubheader__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! vuetify/lib/components/VSubheader */ "./node_modules/vuetify/lib/components/VSubheader/index.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _DeliveryHistory_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DeliveryHistory_vue_vue_type_template_id_7a89d47e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _DeliveryHistory_vue_vue_type_template_id_7a89d47e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */




















_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VBtn: vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__["VBtn"],VCard: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCard"],VCardActions: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardActions"],VCardText: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardText"],VCardTitle: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardTitle"],VChip: vuetify_lib_components_VChip__WEBPACK_IMPORTED_MODULE_6__["VChip"],VDialog: vuetify_lib_components_VDialog__WEBPACK_IMPORTED_MODULE_7__["VDialog"],VDivider: vuetify_lib_components_VDivider__WEBPACK_IMPORTED_MODULE_8__["VDivider"],VIcon: vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_9__["VIcon"],VImg: vuetify_lib_components_VImg__WEBPACK_IMPORTED_MODULE_10__["VImg"],VList: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_11__["VList"],VListItem: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_11__["VListItem"],VListItemAvatar: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_11__["VListItemAvatar"],VListItemContent: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_11__["VListItemContent"],VListItemIcon: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_11__["VListItemIcon"],VListItemSubtitle: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_11__["VListItemSubtitle"],VListItemTitle: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_11__["VListItemTitle"],VSpacer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_12__["VSpacer"],VSubheader: vuetify_lib_components_VSubheader__WEBPACK_IMPORTED_MODULE_13__["VSubheader"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/delivery-note/DeliveryHistory.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/delivery-note/DeliveryHistory.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/delivery-note/DeliveryHistory.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DeliveryHistory_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vuetify-loader/lib/loader.js??ref--18-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./DeliveryHistory.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/delivery-note/DeliveryHistory.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DeliveryHistory_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/delivery-note/DeliveryHistory.vue?vue&type=template&id=7a89d47e&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/components/delivery-note/DeliveryHistory.vue?vue&type=template&id=7a89d47e& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DeliveryHistory_vue_vue_type_template_id_7a89d47e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vuetify-loader/lib/loader.js??ref--18-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./DeliveryHistory.vue?vue&type=template&id=7a89d47e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/delivery-note/DeliveryHistory.vue?vue&type=template&id=7a89d47e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DeliveryHistory_vue_vue_type_template_id_7a89d47e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DeliveryHistory_vue_vue_type_template_id_7a89d47e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/delivery-note/DeliveryStatus.vue":
/*!******************************************************************!*\
  !*** ./resources/js/components/delivery-note/DeliveryStatus.vue ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DeliveryStatus_vue_vue_type_template_id_08e72b56___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DeliveryStatus.vue?vue&type=template&id=08e72b56& */ "./resources/js/components/delivery-note/DeliveryStatus.vue?vue&type=template&id=08e72b56&");
/* harmony import */ var _DeliveryStatus_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DeliveryStatus.vue?vue&type=script&lang=js& */ "./resources/js/components/delivery-note/DeliveryStatus.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib_components_VAutocomplete__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VAutocomplete */ "./node_modules/vuetify/lib/components/VAutocomplete/index.js");
/* harmony import */ var vuetify_lib_components_VAvatar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VAvatar */ "./node_modules/vuetify/lib/components/VAvatar/index.js");
/* harmony import */ var vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VBtn */ "./node_modules/vuetify/lib/components/VBtn/index.js");
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/index.js");
/* harmony import */ var vuetify_lib_components_VChip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuetify/lib/components/VChip */ "./node_modules/vuetify/lib/components/VChip/index.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/index.js");
/* harmony import */ var vuetify_lib_components_VDivider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vuetify/lib/components/VDivider */ "./node_modules/vuetify/lib/components/VDivider/index.js");
/* harmony import */ var vuetify_lib_components_VForm__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! vuetify/lib/components/VForm */ "./node_modules/vuetify/lib/components/VForm/index.js");
/* harmony import */ var vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! vuetify/lib/components/VIcon */ "./node_modules/vuetify/lib/components/VIcon/index.js");
/* harmony import */ var vuetify_lib_components_VImg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! vuetify/lib/components/VImg */ "./node_modules/vuetify/lib/components/VImg/index.js");
/* harmony import */ var vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! vuetify/lib/components/VList */ "./node_modules/vuetify/lib/components/VList/index.js");
/* harmony import */ var vuetify_lib_components_VSelect__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! vuetify/lib/components/VSelect */ "./node_modules/vuetify/lib/components/VSelect/index.js");
/* harmony import */ var vuetify_lib_components_VSubheader__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! vuetify/lib/components/VSubheader */ "./node_modules/vuetify/lib/components/VSubheader/index.js");
/* harmony import */ var vuetify_lib_components_VTextarea__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! vuetify/lib/components/VTextarea */ "./node_modules/vuetify/lib/components/VTextarea/index.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _DeliveryStatus_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DeliveryStatus_vue_vue_type_template_id_08e72b56___WEBPACK_IMPORTED_MODULE_0__["render"],
  _DeliveryStatus_vue_vue_type_template_id_08e72b56___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */
























_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VAutocomplete: vuetify_lib_components_VAutocomplete__WEBPACK_IMPORTED_MODULE_4__["VAutocomplete"],VAvatar: vuetify_lib_components_VAvatar__WEBPACK_IMPORTED_MODULE_5__["VAvatar"],VBtn: vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_6__["VBtn"],VCard: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_7__["VCard"],VCardActions: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_7__["VCardActions"],VCardText: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_7__["VCardText"],VCardTitle: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_7__["VCardTitle"],VChip: vuetify_lib_components_VChip__WEBPACK_IMPORTED_MODULE_8__["VChip"],VCol: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_9__["VCol"],VContainer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_9__["VContainer"],VDivider: vuetify_lib_components_VDivider__WEBPACK_IMPORTED_MODULE_10__["VDivider"],VForm: vuetify_lib_components_VForm__WEBPACK_IMPORTED_MODULE_11__["VForm"],VIcon: vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_12__["VIcon"],VImg: vuetify_lib_components_VImg__WEBPACK_IMPORTED_MODULE_13__["VImg"],VListItemAvatar: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_14__["VListItemAvatar"],VListItemContent: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_14__["VListItemContent"],VListItemSubtitle: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_14__["VListItemSubtitle"],VListItemTitle: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_14__["VListItemTitle"],VRow: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_9__["VRow"],VSelect: vuetify_lib_components_VSelect__WEBPACK_IMPORTED_MODULE_15__["VSelect"],VSpacer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_9__["VSpacer"],VSubheader: vuetify_lib_components_VSubheader__WEBPACK_IMPORTED_MODULE_16__["VSubheader"],VTextarea: vuetify_lib_components_VTextarea__WEBPACK_IMPORTED_MODULE_17__["VTextarea"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/delivery-note/DeliveryStatus.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/delivery-note/DeliveryStatus.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/delivery-note/DeliveryStatus.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DeliveryStatus_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vuetify-loader/lib/loader.js??ref--18-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./DeliveryStatus.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/delivery-note/DeliveryStatus.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DeliveryStatus_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/delivery-note/DeliveryStatus.vue?vue&type=template&id=08e72b56&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/delivery-note/DeliveryStatus.vue?vue&type=template&id=08e72b56& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DeliveryStatus_vue_vue_type_template_id_08e72b56___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vuetify-loader/lib/loader.js??ref--18-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./DeliveryStatus.vue?vue&type=template&id=08e72b56& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/delivery-note/DeliveryStatus.vue?vue&type=template&id=08e72b56&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DeliveryStatus_vue_vue_type_template_id_08e72b56___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DeliveryStatus_vue_vue_type_template_id_08e72b56___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/DeliveryNote.vue":
/*!*********************************************!*\
  !*** ./resources/js/views/DeliveryNote.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DeliveryNote_vue_vue_type_template_id_42929ba5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DeliveryNote.vue?vue&type=template&id=42929ba5& */ "./resources/js/views/DeliveryNote.vue?vue&type=template&id=42929ba5&");
/* harmony import */ var _DeliveryNote_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DeliveryNote.vue?vue&type=script&lang=js& */ "./resources/js/views/DeliveryNote.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VBtn */ "./node_modules/vuetify/lib/components/VBtn/index.js");
/* harmony import */ var vuetify_lib_components_VChip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VChip */ "./node_modules/vuetify/lib/components/VChip/index.js");
/* harmony import */ var vuetify_lib_components_VDataTable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VDataTable */ "./node_modules/vuetify/lib/components/VDataTable/index.js");
/* harmony import */ var vuetify_lib_components_VDialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuetify/lib/components/VDialog */ "./node_modules/vuetify/lib/components/VDialog/index.js");
/* harmony import */ var vuetify_lib_components_VDivider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuetify/lib/components/VDivider */ "./node_modules/vuetify/lib/components/VDivider/index.js");
/* harmony import */ var vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vuetify/lib/components/VIcon */ "./node_modules/vuetify/lib/components/VIcon/index.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/index.js");
/* harmony import */ var vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! vuetify/lib/components/VTextField */ "./node_modules/vuetify/lib/components/VTextField/index.js");
/* harmony import */ var vuetify_lib_components_VToolbar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! vuetify/lib/components/VToolbar */ "./node_modules/vuetify/lib/components/VToolbar/index.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _DeliveryNote_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DeliveryNote_vue_vue_type_template_id_42929ba5___WEBPACK_IMPORTED_MODULE_0__["render"],
  _DeliveryNote_vue_vue_type_template_id_42929ba5___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */











_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VBtn: vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__["VBtn"],VChip: vuetify_lib_components_VChip__WEBPACK_IMPORTED_MODULE_5__["VChip"],VDataTable: vuetify_lib_components_VDataTable__WEBPACK_IMPORTED_MODULE_6__["VDataTable"],VDialog: vuetify_lib_components_VDialog__WEBPACK_IMPORTED_MODULE_7__["VDialog"],VDivider: vuetify_lib_components_VDivider__WEBPACK_IMPORTED_MODULE_8__["VDivider"],VIcon: vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_9__["VIcon"],VSpacer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_10__["VSpacer"],VTextField: vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_11__["VTextField"],VToolbar: vuetify_lib_components_VToolbar__WEBPACK_IMPORTED_MODULE_12__["VToolbar"],VToolbarTitle: vuetify_lib_components_VToolbar__WEBPACK_IMPORTED_MODULE_12__["VToolbarTitle"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/DeliveryNote.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/DeliveryNote.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/js/views/DeliveryNote.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DeliveryNote_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vuetify-loader/lib/loader.js??ref--18-0!../../../node_modules/vue-loader/lib??vue-loader-options!./DeliveryNote.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/DeliveryNote.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DeliveryNote_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/DeliveryNote.vue?vue&type=template&id=42929ba5&":
/*!****************************************************************************!*\
  !*** ./resources/js/views/DeliveryNote.vue?vue&type=template&id=42929ba5& ***!
  \****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DeliveryNote_vue_vue_type_template_id_42929ba5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vuetify-loader/lib/loader.js??ref--18-0!../../../node_modules/vue-loader/lib??vue-loader-options!./DeliveryNote.vue?vue&type=template&id=42929ba5& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/DeliveryNote.vue?vue&type=template&id=42929ba5&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DeliveryNote_vue_vue_type_template_id_42929ba5___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DeliveryNote_vue_vue_type_template_id_42929ba5___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);