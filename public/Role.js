(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Role"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/Role.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js??ref--18-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/admin/Role.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************/
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

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      dialog: false,
      addRoleDialog: false,
      search: '',
      headers: [{
        text: 'ID',
        align: 'center',
        sortable: false,
        value: 'id'
      }, {
        text: 'Role',
        align: 'center',
        sortable: false,
        value: 'name'
      }, {
        text: 'Permissions',
        align: 'center',
        sortable: false,
        value: 'permissions'
      }, {
        text: 'Action',
        align: 'center',
        sortable: false,
        value: 'action'
      }],
      desserts: [],
      editedIndex: -1,
      editedRoleIndex: -1,
      editedItem: {
        id: '',
        name: '',
        permissions: []
      },
      defaultItem: {
        id: '',
        name: '',
        permissions: []
      },
      editedRole: {
        id: '',
        name: '',
        guard_name: ''
      },
      defaultRole: {
        id: '',
        name: '',
        guard_name: ''
      },
      permissions: [],
      rolePermissions: []
    };
  },
  computed: {
    formTitle: function formTitle() {
      return this.editedIndex === -1 ? 'Add Role' : 'Edit Role';
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

      axios__WEBPACK_IMPORTED_MODULE_0___default.a.get('/api/admin/roles').then(function (response) {
        _this.desserts = response.data.roles;
        _this.permissions = response.data.permissions;
      });
    },
    editItem: function editItem(item) {
      this.editedIndex = this.desserts.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
      this.getPermissions();
    },
    getPermissions: function getPermissions() {
      var _this2 = this;

      axios__WEBPACK_IMPORTED_MODULE_0___default.a.get('/api/admin/roles/' + this.editedItem.id + '/getPermissions').then(function (response) {
        _this2.rolePermissions = response.data.permissions;
      });
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

      axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('/api/admin/roles/' + this.editedItem.id + '/async-role', {
        permissions: this.rolePermissions
      }).then(function (response) {
        _this4.desserts[_this4.editedIndex].permissions = response.data.permissions;

        _this4.$store.dispatch('SHOW_GLOBAL_SNACKBAR', {
          text: response.data.message
        });

        _this4.close();
      });
    },
    saveRole: function saveRole() {
      var _this5 = this;

      axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('/api/admin/roles', this.editedRole).then(function (response) {
        _this5.desserts.push(response.data.role);

        _this5.$store.dispatch('SHOW_GLOBAL_SNACKBAR', {
          text: response.data.message
        }); // Object.assign({}, this.defaultRole)

      });
      this.closeAddRoleDialog();
    },
    editRole: function editRole(role) {
      this.addRoleDialog = true;
    },
    closeAddRoleDialog: function closeAddRoleDialog() {
      this.addRoleDialog = false;
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/Role.vue?vue&type=template&id=c2fd5ad6&":
/*!***************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--18-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/admin/Role.vue?vue&type=template&id=c2fd5ad6& ***!
  \***************************************************************************************************************************************************************************************************************************************************************/
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
                    _c("v-toolbar-title", [_vm._v("ROLES")]),
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
                                          return _vm.editRole()
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
                                    _vm._v(
                                      "\n              Add Role\n            "
                                    )
                                  ],
                                  1
                                )
                              ]
                            }
                          }
                        ]),
                        model: {
                          value: _vm.addRoleDialog,
                          callback: function($$v) {
                            _vm.addRoleDialog = $$v
                          },
                          expression: "addRoleDialog"
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
                                _c("v-toolbar-title", [
                                  _vm._v(
                                    "\n                Avatar\n              "
                                  )
                                ]),
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
                                        return _vm.closeAddRoleDialog()
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
                                  attrs: { placeholder: "Role Name" },
                                  model: {
                                    value: _vm.editedRole.name,
                                    callback: function($$v) {
                                      _vm.$set(_vm.editedRole, "name", $$v)
                                    },
                                    expression: "editedRole.name"
                                  }
                                }),
                                _vm._v(" "),
                                _c("v-divider"),
                                _vm._v(" "),
                                _c("v-text-field", {
                                  attrs: { placeholder: "Role Guard Name" },
                                  model: {
                                    value: _vm.editedRole.guard_name,
                                    callback: function($$v) {
                                      _vm.$set(
                                        _vm.editedRole,
                                        "guard_name",
                                        $$v
                                      )
                                    },
                                    expression: "editedRole.guard_name"
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
                                        return _vm.closeAddRoleDialog()
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
                                        return _vm.saveRole()
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
                      "v-dialog",
                      {
                        attrs: { "max-width": "800px" },
                        model: {
                          value: _vm.dialog,
                          callback: function($$v) {
                            _vm.dialog = $$v
                          },
                          expression: "dialog"
                        }
                      },
                      [
                        _c(
                          "v-card",
                          [
                            _c("v-card-title", [
                              _c("span", { staticClass: "headline" }, [
                                _vm._v("EDIT ROLE")
                              ])
                            ]),
                            _vm._v(" "),
                            _c(
                              "v-card-text",
                              [
                                _c("v-simple-table", {
                                  staticClass: "mt-3",
                                  scopedSlots: _vm._u([
                                    {
                                      key: "default",
                                      fn: function() {
                                        return [
                                          _c("thead", [
                                            _c("tr", [
                                              _c(
                                                "th",
                                                { staticClass: "text-center" },
                                                [_vm._v("ID")]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "th",
                                                { staticClass: "text-center" },
                                                [_vm._v("Permission")]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "th",
                                                { staticClass: "text-center" },
                                                [_vm._v("Guard")]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "th",
                                                { staticClass: "text-center" },
                                                [_vm._v("Action")]
                                              )
                                            ])
                                          ]),
                                          _vm._v(" "),
                                          _c(
                                            "tbody",
                                            _vm._l(_vm.permissions, function(
                                              permission,
                                              index
                                            ) {
                                              return _c(
                                                "tr",
                                                { key: permission.id },
                                                [
                                                  _c("td", [
                                                    _vm._v(_vm._s(index + 1))
                                                  ]),
                                                  _vm._v(" "),
                                                  _c("td", [
                                                    _vm._v(
                                                      _vm._s(permission.name)
                                                    )
                                                  ]),
                                                  _vm._v(" "),
                                                  _c("td", [
                                                    _vm._v(
                                                      _vm._s(
                                                        permission.guard_name
                                                      )
                                                    )
                                                  ]),
                                                  _vm._v(" "),
                                                  _c(
                                                    "td",
                                                    [
                                                      _c("v-checkbox", {
                                                        attrs: {
                                                          value: permission.name
                                                        },
                                                        model: {
                                                          value:
                                                            _vm.rolePermissions,
                                                          callback: function(
                                                            $$v
                                                          ) {
                                                            _vm.rolePermissions = $$v
                                                          },
                                                          expression:
                                                            "rolePermissions"
                                                        }
                                                      })
                                                    ],
                                                    1
                                                  )
                                                ]
                                              )
                                            }),
                                            0
                                          )
                                        ]
                                      },
                                      proxy: true
                                    }
                                  ])
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
            key: "item.name",
            fn: function(ref) {
              var item = ref.item
              return [
                _c("v-chip", { attrs: { color: "primary" } }, [
                  _vm._v("\n        " + _vm._s(item.name) + "\n      ")
                ])
              ]
            }
          },
          {
            key: "item.permissions",
            fn: function(ref) {
              var item = ref.item
              return [
                _c(
                  "v-chip-group",
                  { attrs: { column: "", mandatory: "" } },
                  _vm._l(item.permissions, function(permission) {
                    return _c(
                      "v-chip",
                      { key: permission.id, attrs: { samll: "" } },
                      [
                        _vm._v(
                          "\n            " +
                            _vm._s(permission.name) +
                            "\n          "
                        )
                      ]
                    )
                  }),
                  1
                )
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
                      _vm._v("\n          mdi-pencil\n        ")
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

/***/ "./resources/js/views/admin/Role.vue":
/*!*******************************************!*\
  !*** ./resources/js/views/admin/Role.vue ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Role_vue_vue_type_template_id_c2fd5ad6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Role.vue?vue&type=template&id=c2fd5ad6& */ "./resources/js/views/admin/Role.vue?vue&type=template&id=c2fd5ad6&");
/* harmony import */ var _Role_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Role.vue?vue&type=script&lang=js& */ "./resources/js/views/admin/Role.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VBtn */ "./node_modules/vuetify/lib/components/VBtn/index.js");
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/index.js");
/* harmony import */ var vuetify_lib_components_VCheckbox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VCheckbox */ "./node_modules/vuetify/lib/components/VCheckbox/index.js");
/* harmony import */ var vuetify_lib_components_VChip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuetify/lib/components/VChip */ "./node_modules/vuetify/lib/components/VChip/index.js");
/* harmony import */ var vuetify_lib_components_VChipGroup__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuetify/lib/components/VChipGroup */ "./node_modules/vuetify/lib/components/VChipGroup/index.js");
/* harmony import */ var vuetify_lib_components_VDataTable__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vuetify/lib/components/VDataTable */ "./node_modules/vuetify/lib/components/VDataTable/index.js");
/* harmony import */ var vuetify_lib_components_VDialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vuetify/lib/components/VDialog */ "./node_modules/vuetify/lib/components/VDialog/index.js");
/* harmony import */ var vuetify_lib_components_VDivider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! vuetify/lib/components/VDivider */ "./node_modules/vuetify/lib/components/VDivider/index.js");
/* harmony import */ var vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! vuetify/lib/components/VIcon */ "./node_modules/vuetify/lib/components/VIcon/index.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/index.js");
/* harmony import */ var vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! vuetify/lib/components/VTextField */ "./node_modules/vuetify/lib/components/VTextField/index.js");
/* harmony import */ var vuetify_lib_components_VToolbar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! vuetify/lib/components/VToolbar */ "./node_modules/vuetify/lib/components/VToolbar/index.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Role_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Role_vue_vue_type_template_id_c2fd5ad6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Role_vue_vue_type_template_id_c2fd5ad6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */


















_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VBtn: vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__["VBtn"],VCard: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCard"],VCardActions: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardActions"],VCardText: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardText"],VCardTitle: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardTitle"],VCheckbox: vuetify_lib_components_VCheckbox__WEBPACK_IMPORTED_MODULE_6__["VCheckbox"],VChip: vuetify_lib_components_VChip__WEBPACK_IMPORTED_MODULE_7__["VChip"],VChipGroup: vuetify_lib_components_VChipGroup__WEBPACK_IMPORTED_MODULE_8__["VChipGroup"],VDataTable: vuetify_lib_components_VDataTable__WEBPACK_IMPORTED_MODULE_9__["VDataTable"],VDialog: vuetify_lib_components_VDialog__WEBPACK_IMPORTED_MODULE_10__["VDialog"],VDivider: vuetify_lib_components_VDivider__WEBPACK_IMPORTED_MODULE_11__["VDivider"],VIcon: vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_12__["VIcon"],VSimpleTable: vuetify_lib_components_VDataTable__WEBPACK_IMPORTED_MODULE_9__["VSimpleTable"],VSpacer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_13__["VSpacer"],VTextField: vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_14__["VTextField"],VToolbar: vuetify_lib_components_VToolbar__WEBPACK_IMPORTED_MODULE_15__["VToolbar"],VToolbarTitle: vuetify_lib_components_VToolbar__WEBPACK_IMPORTED_MODULE_15__["VToolbarTitle"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/admin/Role.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/admin/Role.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./resources/js/views/admin/Role.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Role_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vuetify-loader/lib/loader.js??ref--18-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Role.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/Role.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Role_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/admin/Role.vue?vue&type=template&id=c2fd5ad6&":
/*!**************************************************************************!*\
  !*** ./resources/js/views/admin/Role.vue?vue&type=template&id=c2fd5ad6& ***!
  \**************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Role_vue_vue_type_template_id_c2fd5ad6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vuetify-loader/lib/loader.js??ref--18-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Role.vue?vue&type=template&id=c2fd5ad6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/admin/Role.vue?vue&type=template&id=c2fd5ad6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Role_vue_vue_type_template_id_c2fd5ad6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Role_vue_vue_type_template_id_c2fd5ad6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);