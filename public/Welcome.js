(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Welcome"],{

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Welcome.vue?vue&type=template&id=1ae8ae93&":
/*!************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--18-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Welcome.vue?vue&type=template&id=1ae8ae93& ***!
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
    "v-row",
    [
      _c(
        "v-col",
        { attrs: { cols: "12", sm: "6", "offset-sm": "3" } },
        [
          _c(
            "v-card",
            [
              _c(
                "v-container",
                { attrs: { fluid: "" } },
                [
                  _c(
                    "v-row",
                    _vm._l(9, function(n) {
                      return _c(
                        "v-col",
                        {
                          key: n,
                          staticClass: "d-flex child-flex",
                          attrs: { cols: "4" }
                        },
                        [
                          _c(
                            "v-card",
                            {
                              staticClass: "d-flex",
                              attrs: { flat: "", tile: "" }
                            },
                            [
                              _c("v-img", {
                                staticClass: "grey lighten-2",
                                attrs: {
                                  src: "../img/activity/0" + n + ".jpg",
                                  "aspect-ratio": "1.2"
                                },
                                scopedSlots: _vm._u(
                                  [
                                    {
                                      key: "placeholder",
                                      fn: function() {
                                        return [
                                          _c(
                                            "v-row",
                                            {
                                              staticClass: "fill-height ma-0",
                                              attrs: {
                                                align: "center",
                                                justify: "center"
                                              }
                                            },
                                            [
                                              _c("v-progress-circular", {
                                                attrs: {
                                                  indeterminate: "",
                                                  color: "grey lighten-5"
                                                }
                                              })
                                            ],
                                            1
                                          )
                                        ]
                                      },
                                      proxy: true
                                    }
                                  ],
                                  null,
                                  true
                                )
                              })
                            ],
                            1
                          )
                        ],
                        1
                      )
                    }),
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

/***/ "./resources/js/views/Welcome.vue":
/*!****************************************!*\
  !*** ./resources/js/views/Welcome.vue ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Welcome_vue_vue_type_template_id_1ae8ae93___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Welcome.vue?vue&type=template&id=1ae8ae93& */ "./resources/js/views/Welcome.vue?vue&type=template&id=1ae8ae93&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/index.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/index.js");
/* harmony import */ var vuetify_lib_components_VImg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VImg */ "./node_modules/vuetify/lib/components/VImg/index.js");
/* harmony import */ var vuetify_lib_components_VProgressCircular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VProgressCircular */ "./node_modules/vuetify/lib/components/VProgressCircular/index.js");

var script = {}


/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _Welcome_vue_vue_type_template_id_1ae8ae93___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Welcome_vue_vue_type_template_id_1ae8ae93___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */







_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_2___default()(component, {VCard: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_3__["VCard"],VCol: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_4__["VCol"],VContainer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_4__["VContainer"],VImg: vuetify_lib_components_VImg__WEBPACK_IMPORTED_MODULE_5__["VImg"],VProgressCircular: vuetify_lib_components_VProgressCircular__WEBPACK_IMPORTED_MODULE_6__["VProgressCircular"],VRow: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_4__["VRow"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Welcome.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Welcome.vue?vue&type=template&id=1ae8ae93&":
/*!***********************************************************************!*\
  !*** ./resources/js/views/Welcome.vue?vue&type=template&id=1ae8ae93& ***!
  \***********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Welcome_vue_vue_type_template_id_1ae8ae93___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vuetify-loader/lib/loader.js??ref--18-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Welcome.vue?vue&type=template&id=1ae8ae93& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Welcome.vue?vue&type=template&id=1ae8ae93&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Welcome_vue_vue_type_template_id_1ae8ae93___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Welcome_vue_vue_type_template_id_1ae8ae93___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);