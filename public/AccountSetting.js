(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["AccountSetting"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/auth/AccountSetting.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js??ref--18-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/auth/AccountSetting.vue?vue&type=script&lang=js& ***!
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

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      errors: [],
      editedItem: {
        name: null,
        korean_name: null,
        gender: null,
        email: null,
        password: null,
        password_confirmation: null,
        postion: null,
        mobile: null,
        phone: null,
        avatar: null
      },
      avatar: null
    };
  },
  created: function created() {
    this.initialize();
  },
  methods: {
    initialize: function initialize() {
      var _this = this;

      axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/account/get-member-info").then(function (response) {
        _this.editedItem = response.data.account;
        console.log(response.data);
      });
    },
    update: function update() {
      var _this2 = this;

      axios__WEBPACK_IMPORTED_MODULE_0___default.a.put("/api/account/update-member-info", this.editedItem).then(function (response) {
        _this2.editedItem = response.data.account;

        _this2.$store.dispatch("SHOW_GLOBAL_SNACKBAR", {
          text: response.data.message
        });
      })["catch"](function (error) {
        _this2.errors = error.response.data.errors;

        _this2.$store.dispatch("SHOW_GLOBAL_SNACKBAR", {
          text: error.response.data.message,
          color: "red"
        });
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/auth/AccountSetting.vue?vue&type=template&id=3faa56ca&":
/*!************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--18-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/auth/AccountSetting.vue?vue&type=template&id=3faa56ca& ***!
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
  return _c(
    "v-card",
    [
      _c("v-card-title", [_c("span", { staticClass: "headline" })]),
      _vm._v(" "),
      _c("v-card-text", [
        _c(
          "div",
          [
            _c(
              "v-row",
              [
                _c(
                  "v-col",
                  { attrs: { cols: "12", sm: "6" } },
                  [
                    _c("v-text-field", {
                      attrs: {
                        label: "Name",
                        "error-messages": _vm.errors.name
                      },
                      model: {
                        value: _vm.editedItem.name,
                        callback: function($$v) {
                          _vm.$set(_vm.editedItem, "name", $$v)
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
                  { attrs: { cols: "12", sm: "6" } },
                  [
                    _c("v-text-field", {
                      attrs: {
                        label: "Name (Korean)",
                        "error-messages": _vm.errors.kor_name
                      },
                      model: {
                        value: _vm.editedItem.kor_name,
                        callback: function($$v) {
                          _vm.$set(_vm.editedItem, "kor_name", $$v)
                        },
                        expression: "editedItem.kor_name"
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
                    _c("v-text-field", {
                      attrs: { disabled: "", label: "Email" },
                      model: {
                        value: _vm.editedItem.email,
                        callback: function($$v) {
                          _vm.$set(_vm.editedItem, "email", $$v)
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
                  { attrs: { cols: "12", sm: "6" } },
                  [
                    _c("v-text-field", {
                      attrs: { type: "password", label: "Password" },
                      model: {
                        value: _vm.editedItem.password,
                        callback: function($$v) {
                          _vm.$set(_vm.editedItem, "password", $$v)
                        },
                        expression: "editedItem.password"
                      }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "v-col",
                  { attrs: { cols: "12", sm: "6" } },
                  [
                    _c("v-text-field", {
                      attrs: { type: "password", label: "Password Confirm" },
                      model: {
                        value: _vm.editedItem.password_confirmation,
                        callback: function($$v) {
                          _vm.$set(_vm.editedItem, "password_confirmation", $$v)
                        },
                        expression: "editedItem.password_confirmation"
                      }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "v-col",
                  { attrs: { cols: "12", sm: "6" } },
                  [
                    _c("v-text-field", {
                      attrs: { label: "Position" },
                      model: {
                        value: _vm.editedItem.position,
                        callback: function($$v) {
                          _vm.$set(_vm.editedItem, "position", $$v)
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
                  { attrs: { cols: "12", sm: "6" } },
                  [
                    _c("v-text-field", {
                      attrs: { label: "Position (Korean)" },
                      model: {
                        value: _vm.editedItem.kor_position,
                        callback: function($$v) {
                          _vm.$set(_vm.editedItem, "kor_position", $$v)
                        },
                        expression: "editedItem.kor_position"
                      }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "v-col",
                  { attrs: { cols: "12", sm: "6" } },
                  [
                    _c("v-text-field", {
                      attrs: { label: "Mobile" },
                      model: {
                        value: _vm.editedItem.mobile,
                        callback: function($$v) {
                          _vm.$set(_vm.editedItem, "mobile", $$v)
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
                  { attrs: { cols: "12", sm: "6" } },
                  [
                    _c("v-text-field", {
                      attrs: { label: "Phone" },
                      model: {
                        value: _vm.editedItem.phone,
                        callback: function($$v) {
                          _vm.$set(_vm.editedItem, "phone", $$v)
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
                  { attrs: { cols: "12" } },
                  [
                    _c("v-file-input", {
                      attrs: {
                        placeholder: "Pick an avatar",
                        "prepend-icon": "mdi-camera",
                        label: "Avatar"
                      },
                      model: {
                        value: _vm.avatar,
                        callback: function($$v) {
                          _vm.avatar = $$v
                        },
                        expression: "avatar"
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
      ]),
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
              on: { click: _vm.update }
            },
            [_vm._v("update")]
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

/***/ "./resources/js/views/auth/AccountSetting.vue":
/*!****************************************************!*\
  !*** ./resources/js/views/auth/AccountSetting.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AccountSetting_vue_vue_type_template_id_3faa56ca___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AccountSetting.vue?vue&type=template&id=3faa56ca& */ "./resources/js/views/auth/AccountSetting.vue?vue&type=template&id=3faa56ca&");
/* harmony import */ var _AccountSetting_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AccountSetting.vue?vue&type=script&lang=js& */ "./resources/js/views/auth/AccountSetting.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VBtn */ "./node_modules/vuetify/lib/components/VBtn/index.js");
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/index.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/index.js");
/* harmony import */ var vuetify_lib_components_VFileInput__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuetify/lib/components/VFileInput */ "./node_modules/vuetify/lib/components/VFileInput/index.js");
/* harmony import */ var vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuetify/lib/components/VTextField */ "./node_modules/vuetify/lib/components/VTextField/index.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AccountSetting_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AccountSetting_vue_vue_type_template_id_3faa56ca___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AccountSetting_vue_vue_type_template_id_3faa56ca___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */











_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VBtn: vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__["VBtn"],VCard: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCard"],VCardActions: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardActions"],VCardText: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardText"],VCardTitle: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardTitle"],VCol: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__["VCol"],VFileInput: vuetify_lib_components_VFileInput__WEBPACK_IMPORTED_MODULE_7__["VFileInput"],VRow: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__["VRow"],VSpacer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__["VSpacer"],VTextField: vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_8__["VTextField"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/auth/AccountSetting.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/auth/AccountSetting.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/views/auth/AccountSetting.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountSetting_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vuetify-loader/lib/loader.js??ref--18-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./AccountSetting.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/auth/AccountSetting.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountSetting_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/auth/AccountSetting.vue?vue&type=template&id=3faa56ca&":
/*!***********************************************************************************!*\
  !*** ./resources/js/views/auth/AccountSetting.vue?vue&type=template&id=3faa56ca& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountSetting_vue_vue_type_template_id_3faa56ca___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vuetify-loader/lib/loader.js??ref--18-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./AccountSetting.vue?vue&type=template&id=3faa56ca& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/auth/AccountSetting.vue?vue&type=template&id=3faa56ca&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountSetting_vue_vue_type_template_id_3faa56ca___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountSetting_vue_vue_type_template_id_3faa56ca___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);