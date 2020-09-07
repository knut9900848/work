(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Quotation"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/quotation/QuotationDialog.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js??ref--18-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/quotation/QuotationDialog.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mixins_getPeople__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../mixins/getPeople */ "./resources/js/mixins/getPeople.js");
/* harmony import */ var _mixins_subProjects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../mixins/subProjects */ "./resources/js/mixins/subProjects.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var vue2_editor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vue2-editor */ "./node_modules/vue2-editor/dist/vue2-editor.esm.js");
/* harmony import */ var _components_quotation_QuotationLine__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/quotation/QuotationLine */ "./resources/js/components/quotation/QuotationLine.vue");
/* harmony import */ var _common_Field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/Field */ "./resources/js/components/common/Field.vue");
/* harmony import */ var _common_File__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../common/File */ "./resources/js/components/common/File.vue");
/* harmony import */ var _common_Comment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../common/Comment */ "./resources/js/components/common/Comment.vue");
/* harmony import */ var _components_quotation_QuotationPdfDocument__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/quotation/QuotationPdfDocument */ "./resources/js/components/quotation/QuotationPdfDocument.vue");
/* harmony import */ var _common_Attachment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../common/Attachment */ "./resources/js/components/common/Attachment.vue");
/* harmony import */ var _components_quotation_QuotationOption__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/quotation/QuotationOption */ "./resources/js/components/quotation/QuotationOption.vue");
/* harmony import */ var _QuotationStatusDescription__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./QuotationStatusDescription */ "./resources/js/components/quotation/QuotationStatusDescription.vue");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    VueEditor: vue2_editor__WEBPACK_IMPORTED_MODULE_5__["VueEditor"],
    QuotationLine: _components_quotation_QuotationLine__WEBPACK_IMPORTED_MODULE_6__["default"],
    Field: _common_Field__WEBPACK_IMPORTED_MODULE_7__["default"],
    File: _common_File__WEBPACK_IMPORTED_MODULE_8__["default"],
    Comment: _common_Comment__WEBPACK_IMPORTED_MODULE_9__["default"],
    QuotationPdfDocument: _components_quotation_QuotationPdfDocument__WEBPACK_IMPORTED_MODULE_10__["default"],
    Attachment: _common_Attachment__WEBPACK_IMPORTED_MODULE_11__["default"],
    QuotationOption: _components_quotation_QuotationOption__WEBPACK_IMPORTED_MODULE_12__["default"],
    QuotationStatusDescription: _QuotationStatusDescription__WEBPACK_IMPORTED_MODULE_13__["default"]
  },
  props: ["companies", "projects", "branches", "categories", "currencies", "users", "units"],
  data: function data() {
    return {
      quotationDescriptionDialog: false,
      optionDialog: false,
      errors: [],
      menuCalendar: false,
      receivers: [],
      lazyItem: false,
      lazyAttachment: false,
      lazyField: false,
      lazyComment: false,
      subProjects: [],
      editPermission: "edit-quotation",
      approvePermission: "approve-quotation",
      exchangeRate: 0,
      quotation: {
        id: null,
        number: null,
        company_id: null,
        project_id: null,
        category_id: null,
        currency_id: null,
        status: null,
        issued_date: null,
        valid_terms: null,
        expired_date: null,
        receiver_id: null,
        originator_id: null,
        sr_number: null,
        is_emergency: false,
        total_price: 0,
        tax: 0,
        discount: 0,
        shipping_fee: 0,
        grnad_total: 0,
        remarks: null
      },
      resetQuotation: {
        id: null,
        number: null,
        company_id: null,
        project_id: null,
        category_id: null,
        currency_id: null,
        status: null,
        issued_date: null,
        valid_terms: null,
        expired_date: null,
        receiver_id: null,
        originator_id: null,
        sr_number: null,
        is_emergency: false,
        total_price: 0,
        tax: 0,
        discount: 0,
        shipping_fee: 0,
        grnad_total: 0,
        remarks: null,
        summary: null
      }
    };
  },
  computed: _objectSpread({
    isFieldDisabled: function isFieldDisabled() {
      if (this.quotationMode === "view") {
        return true;
      } else {
        return false;
      }
    },
    isEditButtonDisabled: function isEditButtonDisabled() {
      if (this.quotationStatus === "OPENED" && this.permissions.includes("edit-quotation")) {
        return false;
      } else {
        return true;
      }
    },
    expired_date: function expired_date() {
      if (this.quotation.valid_terms && this.quotation.issued_date) {
        var issuedDate = moment__WEBPACK_IMPORTED_MODULE_4___default()(this.quotation.issued_date);
        var expiredDate = issuedDate.add(this.quotation.valid_terms, "days").format("YYYY-MM-DD");
        this.quotation.expired_date = expiredDate;
        return expiredDate;
      }
    }
  }, Object(vuex__WEBPACK_IMPORTED_MODULE_2__["mapState"])("auth", ["permissions"]), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_2__["mapState"])("quotation", ["quotationId", "quotationMode", "quotationStatus", "quotationOption"]), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_2__["mapState"])("quotation_line", ["quotationLines"]), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_2__["mapState"])("fields", ["fields", "field"]), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_2__["mapState"])("attachments", ["selectedAttachments"])),
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_2__["mapMutations"])("quotation", ["SET_QUOTATION_MODE", "SET_QUOTATION_ID", "SET_QUOTATION_STATUS", "RESET_QUOTATION", "SET_QUOTATION_OPTION"]), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_2__["mapMutations"])("items", ["INIT_ITEM_LIST", "RESET_ITEM_LIST"]), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_2__["mapMutations"])("quotation_line", ["INIT_QUOTATION_LINE_LIST", "RESET_QUOTATION_LINE_LIST"]), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_2__["mapMutations"])("fields", ["INIT_FIELD_LIST", "RESET_FIELD_LIST"]), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_2__["mapMutations"])("attachments", ["INIT_ATTACHMENT_FILE_LIST", "RESET_ATTACHMENT_FILE_LIST"]), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_2__["mapActions"])("quotation", ["SAVE_QUOTATION_OPTION"]), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_2__["mapActions"])("quotation_line", ["SAVE_QUOTATION_LINES"]), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_2__["mapActions"])("fields", ["SAVE_FIELDS"]), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_2__["mapActions"])("attachments", ["UPLOAD_ATTACHMENT_FILES"]), {
    initQuotation: function initQuotation() {
      var _this = this;

      axios__WEBPACK_IMPORTED_MODULE_3___default.a.get("/api/quotations/" + this.quotationId).then(function (response) {
        console.log(_this.permissions);
        _this.quotation = response.data.quotation;
        _this.receivers = response.data.receivers;
        _this.subProjects = response.data.subProjects;
        _this.exchangeRate = response.data.exchangeRate;

        _this.INIT_QUOTATION_LINE_LIST(response.data.quotationLines);

        _this.INIT_FIELD_LIST(response.data.fields);

        _this.INIT_ATTACHMENT_FILE_LIST(response.data.attachments);

        _this.SET_QUOTATION_OPTION(response.data.option);

        _this.SET_QUOTATION_MODE("view");
      });
      setTimeout(function () {
        _this.$refs.filesComponent.initFile();

        _this.$refs.pdfDocumentsComponent.initialize();

        _this.$refs.commentsComponent.initComment();
      }, 300);
    },
    saveQuotation: function saveQuotation() {
      var _this2 = this;

      this.quotation.total_price = this.$refs.quotationLineComponent.quotationTotalPrice;
      this.quotation.discount = this.quotationOption.discount;
      this.quotation.shipping_fee = this.quotationOption.shipping_fee;
      this.quotation.tax = this.$refs.quotationLineComponent.quotationTax;
      this.quotation.grand_total = this.$refs.quotationLineComponent.quotationGrandTotal;
      axios__WEBPACK_IMPORTED_MODULE_3___default.a.post("/api/quotations", this.quotation).then(function (response) {
        _this2.quotation = response.data.quotation;
        _this2.exchangeRate = response.data.exchangeRate;

        _this2.SET_QUOTATION_ID(response.data.quotation.id);

        _this2.SAVE_QUOTATION_LINES(response.data.quotation.id);

        _this2.SAVE_FIELDS({
          model_id: _this2.quotationId,
          fields: _this2.fields,
          model: "Quotation"
        });

        _this2.UPLOAD_ATTACHMENT_FILES(response.data.quotation.id);

        _this2.SAVE_QUOTATION_OPTION();

        _this2.$refs.attachmentComponent.files = [];

        _this2.$emit("signal-addItemToList", {
          addType: "newItem",
          item: response.data.quotationListItem
        });

        _this2.SET_QUOTATION_MODE("view");

        _this2.$store.dispatch("SHOW_GLOBAL_SNACKBAR", {
          text: response.data.message
        });
      })["catch"](function (error) {
        console.log(error);
        _this2.errors = error.response.data.errors;

        _this2.$store.dispatch("SHOW_GLOBAL_SNACKBAR", {
          text: error.response.data.message,
          color: "red"
        });
      });
    },
    updateQuotation: function updateQuotation() {
      var _this3 = this;

      this.quotation.total_price = this.$refs.quotationLineComponent.quotationTotalPrice;
      this.quotation.discount = this.quotationOption.discount;
      this.quotation.shipping_fee = this.quotationOption.shipping_fee;
      this.quotation.tax = this.$refs.quotationLineComponent.quotationTax;
      this.quotation.grand_total = this.$refs.quotationLineComponent.quotationGrandTotal;
      axios__WEBPACK_IMPORTED_MODULE_3___default.a.put("/api/quotations/" + this.quotationId, this.quotation).then(function (response) {
        _this3.quotation = response.data.quotation;
        _this3.exchangeRate = response.data.exchangeRate;

        _this3.SAVE_QUOTATION_LINES(response.data.quotation.id);

        _this3.SAVE_FIELDS({
          model_id: _this3.quotationId,
          fields: _this3.fields,
          model: "Quotation"
        });

        _this3.UPLOAD_ATTACHMENT_FILES(response.data.quotation.id);

        _this3.$refs.attachmentComponent.files = [];

        _this3.$emit("signal-addItemToList", {
          addType: "updateItem",
          item: response.data.quotationListItem
        });

        _this3.SET_QUOTATION_MODE("view");

        _this3.$store.dispatch("SHOW_GLOBAL_SNACKBAR", {
          text: response.data.message
        });
      })["catch"](function (error) {
        if (error.response.status !== 403) _this3.errors = error.response.data.errors;

        _this3.$store.dispatch("SHOW_GLOBAL_SNACKBAR", {
          text: error.response.data.message,
          color: "red"
        });
      });
    },
    editQuotation: function editQuotation() {
      this.SET_QUOTATION_MODE("edit");
    },
    cancelQuotation: function cancelQuotation() {
      this.initQuotation();
    },
    close: function close() {
      this.quotation = Object.assign({}, this.resetQuotation);
      this.receivers = [];
      this.errors = [];
      this.RESET_QUOTATION();
      this.RESET_QUOTATION_LINE_LIST();
      this.RESET_ATTACHMENT_FILE_LIST();
      this.RESET_FIELD_LIST();
      this.$refs.pdfDocumentsComponent.reset();
      this.$refs.filesComponent.reset();
      this.$refs.commentsComponent.reset();
      this.$emit("signal-closeQuotationDialog");
    },
    getReceivers: function getReceivers(model, model_id) {
      var _this4 = this;

      this.getEmployees(model, model_id).then(function (e) {
        return _this4.receivers = e;
      });
    },
    selectProject: function selectProject(project_id) {
      var _this5 = this;

      this.getSubProjects(project_id).then(function (e) {
        return _this5.subProjects = e;
      });
    },
    changeQuotationStatusToList: function changeQuotationStatusToList(status) {
      this.$emit("signal-changeQuotationStatusToList", status);
    },
    closeOptionDialog: function closeOptionDialog() {
      this.optionDialog = false;
    }
  }),
  mixins: [_mixins_getPeople__WEBPACK_IMPORTED_MODULE_0__["getPeople"], _mixins_subProjects__WEBPACK_IMPORTED_MODULE_1__["getSubProjects"]]
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/quotation/QuotationLine.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js??ref--18-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/quotation/QuotationLine.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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

/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["units", "permissions", "editPermission", "approvePermission", "shipping_fee"],
  data: function data() {
    return {
      valid: false,
      itemDialog: false,
      editedItemIndex: -1,
      required: function required(propertyType) {
        return function (v) {
          return v && v.length > 0 || "You must input a ".concat(propertyType);
        };
      },
      maxLength: function maxLength(propertyType, _maxLength) {
        return function (v) {
          return v && v.length <= _maxLength || "".concat(propertyType, " must be less than ").concat(_maxLength, " characters");
        };
      },
      minLength: function minLength(propertyType, _minLength) {
        return function (v) {
          return v && v.length >= _minLength || "".concat(propertyType, " must be at least ").concat(_minLength, " characters");
        };
      }
    };
  },
  computed: _objectSpread({
    isButtonDisabled: function isButtonDisabled() {
      if (this.quotationStatus === "OPENED" && this.permissions.includes("edit-quotation") && (this.quotationMode === "edit" || this.quotationMode === "create")) {
        return false;
      } else {
        return true;
      }
    },
    quotationTotalPrice: function quotationTotalPrice() {
      return this.quotationLines.reduce(function (acc, item) {
        return acc + parseFloat(item.price * item.quantity);
      }, 0);
    },
    quotationTax: function quotationTax() {
      if (this.quotationOption.is_use_tax) {
        return parseFloat((this.quotationTotalPrice + this.quotationOption.shipping_fee - this.quotationOption.discount) * 0.1);
      } else {
        return 0;
      }
    },
    quotationGrandTotal: function quotationGrandTotal() {
      return parseFloat(this.quotationTotalPrice + this.quotationOption.shipping_fee - this.quotationOption.discount + this.quotationTax);
    }
  }, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])("quotation", ["quotationStatus"]), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])("quotation", ["quotationOption", "quotationMode"]), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])("quotation_line", ["quotationLines", "quotationLine"])),
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapMutations"])("quotation_line", ["ADD_QUOTATION_LINE", "EDIT_QUOTATION_LINE", "UPDATE_QUOTATION_LINE", "RESET_QUOTATION_LINE", "REMOVE_QUOTATION_LINE"]), {
    closeItemDialog: function closeItemDialog() {
      var _this = this;

      this.itemDialog = false;
      this.$nextTick(function () {
        _this.RESET_QUOTATION_LINE();

        _this.editedItemIndex = -1;
      });
    },
    addItem: function addItem() {
      if (this.editedItemIndex > -1) {
        this.UPDATE_QUOTATION_LINE(this.editedItemIndex);
      } else {
        this.ADD_QUOTATION_LINE();
      }

      this.closeItemDialog();
    },
    editItem: function editItem(item) {
      this.editedItemIndex = this.quotationLines.indexOf(item);
      this.EDIT_QUOTATION_LINE(item);
      this.itemDialog = true;
    },
    removeItem: function removeItem(item) {
      this.REMOVE_QUOTATION_LINE(item);
    },
    formatPrice: function formatPrice(value) {
      var val = (value / 1).toFixed(2).replace(",", ".");
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
  })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/quotation/QuotationOption.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js??ref--18-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/quotation/QuotationOption.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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


/* harmony default export */ __webpack_exports__["default"] = ({
  props: [],
  data: function data() {
    return {
      formTypes: ["default"]
    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])("quotation", ["quotationOption", "quotationId"])),
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapMutations"])("quotation", ["SET_QUOTATION_OPTION"]), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])("quotation", ["UPDATE_QUOTATION_OPTION"]), {
    setOption: function setOption() {
      this.SET_QUOTATION_OPTION(this.quotationOption);
      this.closeOptionDialog();
    },
    updateOption: function updateOption() {
      var _this = this;

      axios__WEBPACK_IMPORTED_MODULE_1___default.a.put("/api/quotations/" + this.quotationId + "/option/" + this.quotationOption.id, this.quotationOption).then(function (response) {
        _this.SET_QUOTATION_OPTION(response.data.option);
      })["catch"](function (error) {
        if (error.response.status !== 403) _this.errors = error.response.data.errors;

        _this.$store.dispatch("SHOW_GLOBAL_SNACKBAR", {
          text: error.response.data.message,
          color: "red"
        });
      });
      this.closeOptionDialog();
    },
    closeOptionDialog: function closeOptionDialog() {
      this.$emit("signal-closeOptionDialog");
    }
  })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/quotation/QuotationPdfDocument.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js??ref--18-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/quotation/QuotationPdfDocument.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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


/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["permissions", "editPermission", "approvePermission", "currentMode", "formType", "formFolder", "exchangeRate", "emergency", "totalPrice"],
  data: function data() {
    return {
      dialog: false,
      errors: [],
      pdfDocuments: [],
      pdfDocument: {
        id: null,
        name: null,
        origin_name: null,
        version: null,
        extension: null,
        process: null,
        user_id: null,
        creator_name: null,
        quotation_id: null,
        created_at: null,
        updated_at: null
      },
      resetPdfDocument: {
        id: null,
        name: null,
        origin_name: null,
        version: null,
        extension: null,
        process: null,
        user_id: null,
        creator_name: null,
        quotation_id: null,
        created_at: null,
        updated_at: null
      }
    };
  },
  computed: _objectSpread({
    currentProcess: function currentProcess() {
      if (typeof this.pdfDocuments !== "undefined" && this.pdfDocuments.length > 0) {
        return this.pdfDocuments[this.pdfDocuments.length - 1].process;
      } else {
        return null;
      }
    },
    isApproveButtonDisabled: function isApproveButtonDisabled() {
      if (this.currentMode === "view" && this.permissions.includes(this.approvePermission) || this.exchangeRate * this.totalPrice < 500000 && (this.emergency === 0 || this.emergency === false)) {
        return false;
      } else {
        return true;
      }
    },
    isSubmitButtonDisabled: function isSubmitButtonDisabled() {
      if (this.permissions.includes(this.editPermission) && this.currentMode === "view") {
        return false;
      } else {
        return true;
      }
    },
    isEditButtonDisabled: function isEditButtonDisabled() {
      if (this.permissions.includes(this.editPermission)) {
        return false;
      } else {
        return true;
      }
    }
  }, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])("quotation", ["quotationId"])),
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapMutations"])("quotation", ["SET_QUOTATION_STATUS"]), {
    initialize: function initialize() {
      var _this = this;

      axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("/api/quotations/" + this.quotationId + "/pdf-documents").then(function (response) {
        console.log(response.data);
        _this.pdfDocuments = response.data.pdfDocuments;
      });
    },
    generatePdfDocument: function generatePdfDocument() {
      var _this2 = this;

      axios__WEBPACK_IMPORTED_MODULE_1___default.a.post("/api/quotations/" + this.quotationId + "/pdf-documents").then(function (response) {
        _this2.pdfDocuments.push(response.data.pdf);

        _this2.$store.dispatch("SHOW_GLOBAL_SNACKBAR", {
          text: response.data.message
        });

        console.log("PDF Items =>", _this2.pdfDocuments);
      })["catch"](function (error) {
        console.log(error);

        _this2.$store.dispatch("SHOW_GLOBAL_SNACKBAR", {
          text: error.response.data.message,
          color: "red"
        });
      });
    },
    updatePdfDocument: function updatePdfDocument(item) {
      var _this3 = this;

      var index = this.pdfDocuments.indexOf(item);
      axios__WEBPACK_IMPORTED_MODULE_1___default.a.put("/api/quotations/" + this.quotationId + "/pdf-documents/").then(function (response) {
        _this3.$store.dispatch("SHOW_GLOBAL_SNACKBAR", {
          text: response.data.message
        });
      })["catch"](function (error) {
        _this3.$store.dispatch("SHOW_GLOBAL_SNACKBAR", {
          text: error.response.data.message,
          color: "red"
        });
      });
    },
    changeProcess: function changeProcess(item, action, overwrite, process, status) {
      var _this4 = this;

      var index = this.pdfDocuments.indexOf(item);
      axios__WEBPACK_IMPORTED_MODULE_1___default.a.put("/api/quotations/" + this.quotationId + "/pdf-documents/" + item.id + "/change-status", {
        action: action,
        overwrite: overwrite,
        process: process,
        status: status
      }).then(function (response) {
        console.log(response.data);
        _this4.pdfDocuments[index].process = response.data.process;

        _this4.SET_QUOTATION_STATUS(response.data.status);

        _this4.$emit("signal-changeQuotationStatusToList", response.data.status);

        _this4.$store.dispatch("SHOW_GLOBAL_SNACKBAR", {
          text: response.data.message
        });
      })["catch"](function (error) {
        _this4.$store.dispatch("SHOW_GLOBAL_SNACKBAR", {
          text: error.response.data.message,
          color: "red"
        });
      });
    },
    forceFileDownload: function forceFileDownload(response) {
      var url = window.URL.createObjectURL(new Blob([response.data]));
      var link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", response.headers.filename); //or any other extension

      document.body.appendChild(link);
      link.click();
    },
    downloadPdfFile: function downloadPdfFile(pdfId) {
      var _this5 = this;

      axios__WEBPACK_IMPORTED_MODULE_1___default()({
        method: "get",
        url: "/api/quotations/" + this.quotationId + "/pdf-documents/" + pdfId + "/download",
        responseType: "arraybuffer"
      }).then(function (response) {
        _this5.forceFileDownload(response);
      })["catch"](function (error) {
        console.log(error);

        _this5.$store.dispatch("SHOW_GLOBAL_SNACKBAR", {
          text: error.response.data.message,
          color: "red"
        });
      });
    },
    reset: function reset() {
      this.pdfDocuments = [];
      this.errors = [];
      this.pdfDocument = Object.assign({}, this.resetPdfDocument);
    },
    close: function close() {
      var _this6 = this;

      this.dialog = false;
      this.$nextTick(function () {
        _this6.editedItem = Object.assign({}, _this6.defaultItem);
        _this6.editedIndex = -1;
      });
    }
  })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Quotation.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js??ref--18-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Quotation.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _components_quotation_QuotationDialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/quotation/QuotationDialog */ "./resources/js/components/quotation/QuotationDialog.vue");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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



/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    QuotationDialog: _components_quotation_QuotationDialog__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      errors: [],
      dialog: false,
      defaultData: "",
      search: "",
      quotations: [],
      companies: [],
      projects: [],
      branches: [],
      categories: [],
      currencies: [],
      users: [],
      units: [],
      totalRecords: null,
      headers: [{
        text: "Number",
        value: "number",
        divider: true
      }, {
        text: "Issued Date",
        align: "center",
        value: "issued_date",
        divider: true
      }, {
        text: "Status",
        value: "status",
        divider: true
      }, {
        text: "Related Sale Order",
        value: "sale_order",
        divider: true
      }, {
        text: "Company",
        value: "company",
        divider: true
      }, {
        text: "Project",
        value: "project",
        divider: true
      }, {
        text: "Category",
        value: "category",
        divider: true
      }, {
        text: "Total Price",
        value: "total_price",
        divider: true
      }, {
        text: "SR Number",
        align: "center",
        value: "sr_number",
        divider: true
      }]
    };
  },
  computed: _objectSpread({
    isPrevBtnDisabled: function isPrevBtnDisabled() {
      if (this.quotations.prev_page_url === null) return true;
      return false;
    },
    isNextBtnDisabled: function isNextBtnDisabled() {
      if (this.quotations.next_page_url === null) return true;
      return false;
    }
  }, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])("quotation", ["quotationIndex", "quotationMode", "quotationStatus", "quotationId"]), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])("auth", ["user", "isLogIn", "permissions"]), {
    isCreateButtonDisabled: function isCreateButtonDisabled() {
      return this.permissions.includes("edit-quotation") ? false : true;
    }
  }),
  watch: _defineProperty({
    dialog: function dialog(val) {
      val || this.closeQuotationDialog();
    }
  }, "dialog", function dialog(val) {
    document.querySelector("html").style.overflow = val ? "hidden" : null;
  }),
  created: function created() {
    // 외부 링크로 들어 오는 경우라면
    if (Object.keys(this.$route.params).length !== 0) {
      if (!localStorage.getItem("storageUserInfo")) {
        this.$router.push({
          name: "login",
          query: {
            redirect: "/path"
          }
        });
      }
    }

    this.initialize();
  },
  beforeDestroy: function beforeDestroy() {
    this.quotations = [];
    this.companies = [];
    this.projects = [];
    this.branches = [];
    this.categories = [];
    this.currencies = [];
    this.users = [];
    this.units = [];
  },
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapMutations"])("quotation", ["SET_QUOTATION_INDEX", "SET_QUOTATION_ID", "SET_QUOTATION_MODE", "SET_QUOTATION_STATUS", "RESET_QUOTATION"]), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapMutations"])("fields", ["RESET_FIELD_LIST"]), {
    initialize: function initialize() {
      var _this = this;

      axios__WEBPACK_IMPORTED_MODULE_2___default.a.get("/api/quotations").then(function (response) {
        console.log(response.data);
        _this.quotations = response.data.quotations;
        _this.totalRecords = response.data.totalRecords;
        _this.companies = Object.freeze(response.data.companies);
        _this.projects = Object.freeze(response.data.projects);
        _this.branches = Object.freeze(response.data.branches);
        _this.categories = Object.freeze(response.data.categories);
        _this.currencies = Object.freeze(response.data.currencies);
        _this.users = Object.freeze(response.data.users);
        _this.units = Object.freeze(response.data.units); // 외부 링크로 들어 오는 경우라면

        if (Object.keys(_this.$route.params).length !== 0) {
          var item = _this.quotations.data.find(function (item) {
            return item.quotation_id === Number(_this.$route.params.id);
          });

          item ? _this.oepnEditQuotationDialog(item) : alert("There is no Quotation what you request");
        }
      });
    },
    addItemToList: function addItemToList(quotation) {
      var _this2 = this;

      if (quotation.addType === "newItem") {
        this.quotations.data.unshift(quotation.item);
      } else {
        var item = this.quotations.data.find(function (element) {
          return element.quotation_id === _this2.quotationId;
        });
        Object.assign(item, quotation.item);
      }
    },
    changeQuotationStatusToList: function changeQuotationStatusToList(status) {
      var _this3 = this;

      if (this.quotationIndex > -1) {
        this.quotations.data[this.quotationIndex].status = status;
      } else {
        var item = this.quotations.data.find(function (item) {
          return item.id === _this3.quotationId;
        });
        item.status = status;
      }
    },
    openCreateQuotationDialog: function openCreateQuotationDialog() {
      var _this4 = this;

      this.dialog = true;
      var index = -1;
      this.SET_QUOTATION_INDEX(index);
      setTimeout(function () {
        _this4.SET_QUOTATION_MODE("create");

        _this4.SET_QUOTATION_STATUS("OPENED");
      }, 300);
    },
    oepnEditQuotationDialog: function oepnEditQuotationDialog(item) {
      var _this5 = this;

      var index = this.quotations.data.indexOf(item);
      this.SET_QUOTATION_INDEX(index);
      setTimeout(function () {
        _this5.SET_QUOTATION_MODE("view");

        _this5.SET_QUOTATION_ID(item.quotation_id);

        _this5.SET_QUOTATION_STATUS(item.status);

        _this5.$refs.quotationComponent.initQuotation(item.quotation_id);
      }, 500);
      this.dialog = true;
    },
    closeQuotationDialog: function closeQuotationDialog() {
      this.dialog = false;
    },
    prevPage: function prevPage() {
      var _this6 = this;

      axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(this.quotations.prev_page_url).then(function (response) {
        _this6.quotations = response.data.quotations;
      });
    },
    nextPage: function nextPage() {
      var _this7 = this;

      axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(this.quotations.next_page_url).then(function (response) {
        _this7.quotations = response.data.quotations;
      });
    },
    formatPrice: function formatPrice(value) {
      var val = (value / 1).toFixed(2).replace(",", ".");
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
  })
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/quotation/QuotationDialog.vue?vue&type=template&id=70ef0716&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--18-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/quotation/QuotationDialog.vue?vue&type=template&id=70ef0716& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "wrap-dialog" },
    [
      _c(
        "v-card",
        [
          _c(
            "v-toolbar",
            { attrs: { flat: "", dark: "", color: "blue-grey darken-1" } },
            [
              _c(
                "v-btn",
                {
                  attrs: { icon: "", dark: "" },
                  on: {
                    click: function($event) {
                      return _vm.close()
                    }
                  }
                },
                [_c("v-icon", [_vm._v("mdi-close")])],
                1
              ),
              _vm._v(" "),
              _c("v-toolbar-title", [_vm._v("QUOTATION")]),
              _vm._v(" "),
              _c("v-spacer"),
              _vm._v(" "),
              _c(
                "v-dialog",
                {
                  attrs: { "max-width": "500px" },
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
                                staticClass: "mr-3",
                                attrs: {
                                  color: "indigo",
                                  small: "",
                                  depressed: "",
                                  fab: "",
                                  dark: "",
                                  disabled: _vm.isEditButtonDisabled
                                }
                              },
                              on
                            ),
                            [_c("v-icon", [_vm._v("mdi-cog")])],
                            1
                          )
                        ]
                      }
                    }
                  ]),
                  model: {
                    value: _vm.optionDialog,
                    callback: function($$v) {
                      _vm.optionDialog = $$v
                    },
                    expression: "optionDialog"
                  }
                },
                [
                  _vm._v(" "),
                  _c("QuotationOption", {
                    on: { "signal-closeOptionDialog": _vm.closeOptionDialog }
                  })
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
                        { attrs: { cols: "12", md: "7" } },
                        [
                          _c(
                            "v-card",
                            { staticClass: "mb-3", attrs: { outlined: "" } },
                            [
                              _c(
                                "v-card-title",
                                [
                                  _c("h4", [_vm._v("QUOTATION")]),
                                  _vm._v(" "),
                                  _c("v-spacer"),
                                  _vm._v(" "),
                                  _vm.quotationMode === "create"
                                    ? _c(
                                        "v-btn",
                                        {
                                          attrs: { color: "primary" },
                                          on: {
                                            click: function($event) {
                                              return _vm.saveQuotation()
                                            }
                                          }
                                        },
                                        [_vm._v("Save")]
                                      )
                                    : _vm._e(),
                                  _vm._v(" "),
                                  _vm.quotationMode === "view"
                                    ? _c(
                                        "v-btn",
                                        {
                                          attrs: {
                                            color: "primary",
                                            disabled: _vm.isEditButtonDisabled
                                          },
                                          on: {
                                            click: function($event) {
                                              return _vm.editQuotation()
                                            }
                                          }
                                        },
                                        [_vm._v("Edit")]
                                      )
                                    : _vm._e(),
                                  _vm._v(" "),
                                  _vm.quotationMode === "edit"
                                    ? _c(
                                        "v-btn",
                                        {
                                          staticClass: "mr-2",
                                          attrs: {
                                            color: "pink",
                                            dark: "",
                                            disabled: _vm.isEditButtonDisabled
                                          },
                                          on: {
                                            click: function($event) {
                                              return _vm.updateQuotation()
                                            }
                                          }
                                        },
                                        [_vm._v("Update")]
                                      )
                                    : _vm._e(),
                                  _vm._v(" "),
                                  _vm.quotationMode === "edit"
                                    ? _c(
                                        "v-btn",
                                        {
                                          attrs: {
                                            color: "primary",
                                            disabled: _vm.isEditButtonDisabled
                                          },
                                          on: {
                                            click: function($event) {
                                              return _vm.cancelQuotation()
                                            }
                                          }
                                        },
                                        [_vm._v("Cancel")]
                                      )
                                    : _vm._e()
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
                                              _c("v-text-field", {
                                                attrs: {
                                                  label: "Quotation Number",
                                                  filled: "",
                                                  rounded: "",
                                                  "prepend-inner-icon":
                                                    "mdi-format-list-numbered-rtl",
                                                  "error-messages":
                                                    _vm.errors.number,
                                                  disabled: _vm.isFieldDisabled
                                                },
                                                model: {
                                                  value: _vm.quotation.number,
                                                  callback: function($$v) {
                                                    _vm.$set(
                                                      _vm.quotation,
                                                      "number",
                                                      $$v
                                                    )
                                                  },
                                                  expression: "quotation.number"
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
                                              _c("v-text-field", {
                                                attrs: {
                                                  label: "SR Number",
                                                  filled: "",
                                                  rounded: "",
                                                  "prepend-inner-icon":
                                                    "mdi-check",
                                                  disabled: _vm.isFieldDisabled
                                                },
                                                model: {
                                                  value:
                                                    _vm.quotation.sr_number,
                                                  callback: function($$v) {
                                                    _vm.$set(
                                                      _vm.quotation,
                                                      "sr_number",
                                                      $$v
                                                    )
                                                  },
                                                  expression:
                                                    "quotation.sr_number"
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
                                                  "item-text": "name",
                                                  "item-value": "id",
                                                  items: _vm.companies,
                                                  label: "Client",
                                                  filled: "",
                                                  rounded: "",
                                                  "prepend-inner-icon":
                                                    "mdi-account-tie",
                                                  "error-messages":
                                                    _vm.errors.company_id,
                                                  disabled: _vm.isFieldDisabled
                                                },
                                                on: {
                                                  change: function($event) {
                                                    return _vm.getReceivers(
                                                      "Company",
                                                      _vm.quotation.company_id
                                                    )
                                                  }
                                                },
                                                model: {
                                                  value:
                                                    _vm.quotation.company_id,
                                                  callback: function($$v) {
                                                    _vm.$set(
                                                      _vm.quotation,
                                                      "company_id",
                                                      $$v
                                                    )
                                                  },
                                                  expression:
                                                    "quotation.company_id"
                                                }
                                              })
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "v-col",
                                            {
                                              staticClass: "d-flex",
                                              attrs: { cols: "12", md: "6" }
                                            },
                                            [
                                              _c("v-select", {
                                                attrs: {
                                                  "item-text": "name",
                                                  "item-value": "id",
                                                  items: _vm.receivers,
                                                  label: "Receiver",
                                                  filled: "",
                                                  rounded: "",
                                                  "prepend-inner-icon":
                                                    "mdi-account-star",
                                                  disabled: _vm.isFieldDisabled,
                                                  "error-messages":
                                                    _vm.errors.receiver_id
                                                },
                                                scopedSlots: _vm._u([
                                                  {
                                                    key: "selection",
                                                    fn: function(receivers) {
                                                      return [
                                                        _vm._v(
                                                          _vm._s(
                                                            receivers.item.name
                                                          ) +
                                                            " - " +
                                                            _vm._s(
                                                              receivers.item
                                                                .email
                                                            )
                                                        )
                                                      ]
                                                    }
                                                  },
                                                  {
                                                    key: "item",
                                                    fn: function(receivers) {
                                                      return [
                                                        _vm._v(
                                                          _vm._s(
                                                            receivers.item.name
                                                          ) +
                                                            " - " +
                                                            _vm._s(
                                                              receivers.item
                                                                .email
                                                            )
                                                        )
                                                      ]
                                                    }
                                                  }
                                                ]),
                                                model: {
                                                  value:
                                                    _vm.quotation.receiver_id,
                                                  callback: function($$v) {
                                                    _vm.$set(
                                                      _vm.quotation,
                                                      "receiver_id",
                                                      $$v
                                                    )
                                                  },
                                                  expression:
                                                    "quotation.receiver_id"
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
                                                  "item-text": "name",
                                                  "item-value": "id",
                                                  items: _vm.projects,
                                                  label: "Project",
                                                  filled: "",
                                                  rounded: "",
                                                  "prepend-inner-icon":
                                                    "mdi-ferry",
                                                  "error-messages":
                                                    _vm.errors.project_id,
                                                  disabled: _vm.isFieldDisabled
                                                },
                                                on: {
                                                  change: function($event) {
                                                    return _vm.selectProject(
                                                      _vm.quotation.project_id
                                                    )
                                                  }
                                                },
                                                model: {
                                                  value:
                                                    _vm.quotation.project_id,
                                                  callback: function($$v) {
                                                    _vm.$set(
                                                      _vm.quotation,
                                                      "project_id",
                                                      $$v
                                                    )
                                                  },
                                                  expression:
                                                    "quotation.project_id"
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
                                                  "item-text": "name",
                                                  "item-value": "id",
                                                  items: _vm.subProjects,
                                                  label: "Sub Project",
                                                  filled: "",
                                                  rounded: "",
                                                  "prepend-inner-icon":
                                                    "mdi-sail-boat",
                                                  "error-messages":
                                                    _vm.errors.project_id,
                                                  disabled: _vm.isFieldDisabled
                                                },
                                                model: {
                                                  value:
                                                    _vm.quotation
                                                      .sub_project_id,
                                                  callback: function($$v) {
                                                    _vm.$set(
                                                      _vm.quotation,
                                                      "sub_project_id",
                                                      $$v
                                                    )
                                                  },
                                                  expression:
                                                    "quotation.sub_project_id"
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
                                                  "item-text": "name",
                                                  "item-value": "id",
                                                  items: _vm.categories,
                                                  label: "Cagegory",
                                                  filled: "",
                                                  rounded: "",
                                                  "prepend-inner-icon":
                                                    "mdi-database",
                                                  "error-messages":
                                                    _vm.errors.category_id,
                                                  disabled: _vm.isFieldDisabled
                                                },
                                                model: {
                                                  value:
                                                    _vm.quotation.category_id,
                                                  callback: function($$v) {
                                                    _vm.$set(
                                                      _vm.quotation,
                                                      "category_id",
                                                      $$v
                                                    )
                                                  },
                                                  expression:
                                                    "quotation.category_id"
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
                                                  "item-text": "name",
                                                  "item-value": "id",
                                                  items: _vm.users,
                                                  label: "Originator",
                                                  filled: "",
                                                  rounded: "",
                                                  "prepend-inner-icon":
                                                    "mdi-account-plus",
                                                  "error-messages":
                                                    _vm.errors.originator_id,
                                                  disabled: _vm.isFieldDisabled
                                                },
                                                model: {
                                                  value:
                                                    _vm.quotation.originator_id,
                                                  callback: function($$v) {
                                                    _vm.$set(
                                                      _vm.quotation,
                                                      "originator_id",
                                                      $$v
                                                    )
                                                  },
                                                  expression:
                                                    "quotation.originator_id"
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
                                              _c(
                                                "v-menu",
                                                {
                                                  attrs: {
                                                    "close-on-content-click": false,
                                                    "nudge-right": 40,
                                                    transition:
                                                      "scale-transition",
                                                    "offset-y": "",
                                                    "min-width": "290px"
                                                  },
                                                  scopedSlots: _vm._u([
                                                    {
                                                      key: "activator",
                                                      fn: function(ref) {
                                                        var on = ref.on
                                                        return [
                                                          _c(
                                                            "v-text-field",
                                                            _vm._g(
                                                              {
                                                                attrs: {
                                                                  label:
                                                                    "Issued Date",
                                                                  readonly: "",
                                                                  filled: "",
                                                                  rounded: "",
                                                                  "prepend-inner-icon":
                                                                    "mdi-calendar-check",
                                                                  "error-messages":
                                                                    _vm.errors
                                                                      .issued_date,
                                                                  disabled:
                                                                    _vm.isFieldDisabled
                                                                },
                                                                model: {
                                                                  value:
                                                                    _vm
                                                                      .quotation
                                                                      .issued_date,
                                                                  callback: function(
                                                                    $$v
                                                                  ) {
                                                                    _vm.$set(
                                                                      _vm.quotation,
                                                                      "issued_date",
                                                                      $$v
                                                                    )
                                                                  },
                                                                  expression:
                                                                    "quotation.issued_date"
                                                                }
                                                              },
                                                              on
                                                            )
                                                          )
                                                        ]
                                                      }
                                                    }
                                                  ]),
                                                  model: {
                                                    value: _vm.menuCalendar,
                                                    callback: function($$v) {
                                                      _vm.menuCalendar = $$v
                                                    },
                                                    expression: "menuCalendar"
                                                  }
                                                },
                                                [
                                                  _vm._v(" "),
                                                  _c("v-date-picker", {
                                                    on: {
                                                      input: function($event) {
                                                        _vm.menuCalendar = false
                                                      }
                                                    },
                                                    model: {
                                                      value:
                                                        _vm.quotation
                                                          .issued_date,
                                                      callback: function($$v) {
                                                        _vm.$set(
                                                          _vm.quotation,
                                                          "issued_date",
                                                          $$v
                                                        )
                                                      },
                                                      expression:
                                                        "quotation.issued_date"
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
                                            "v-col",
                                            { attrs: { cols: "12", md: "6" } },
                                            [
                                              _c("v-text-field", {
                                                attrs: {
                                                  label: "Valid Terms",
                                                  filled: "",
                                                  rounded: "",
                                                  "prepend-inner-icon":
                                                    "mdi-timer-sand",
                                                  "error-messages":
                                                    _vm.errors.valid_terms,
                                                  disabled: _vm.isFieldDisabled,
                                                  type: "number"
                                                },
                                                model: {
                                                  value:
                                                    _vm.quotation.valid_terms,
                                                  callback: function($$v) {
                                                    _vm.$set(
                                                      _vm.quotation,
                                                      "valid_terms",
                                                      $$v
                                                    )
                                                  },
                                                  expression:
                                                    "quotation.valid_terms"
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
                                              _c("v-text-field", {
                                                attrs: {
                                                  label: "Expired Date",
                                                  filled: "",
                                                  rounded: "",
                                                  "prepend-inner-icon":
                                                    "mdi-timer-off-outline",
                                                  disabled: _vm.isFieldDisabled,
                                                  readonly: ""
                                                },
                                                model: {
                                                  value: _vm.expired_date,
                                                  callback: function($$v) {
                                                    _vm.expired_date = $$v
                                                  },
                                                  expression: "expired_date"
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
                                                  "item-text": "name",
                                                  "item-value": "id",
                                                  items: _vm.currencies,
                                                  label: "Currency",
                                                  filled: "",
                                                  rounded: "",
                                                  "prepend-inner-icon":
                                                    "mdi-currency-usd",
                                                  "error-messages":
                                                    _vm.errors.currency_id,
                                                  disabled: _vm.isFieldDisabled
                                                },
                                                scopedSlots: _vm._u([
                                                  {
                                                    key: "selection",
                                                    fn: function(currecies) {
                                                      return [
                                                        _c(
                                                          "v-chip",
                                                          {
                                                            attrs: {
                                                              small: "",
                                                              color: "primary"
                                                            }
                                                          },
                                                          [
                                                            _vm._v(
                                                              _vm._s(
                                                                currecies.item
                                                                  .name
                                                              )
                                                            )
                                                          ]
                                                        ),
                                                        _vm._v(" "),
                                                        _c(
                                                          "v-chip",
                                                          {
                                                            attrs: { small: "" }
                                                          },
                                                          [
                                                            _vm._v(
                                                              _vm._s(
                                                                currecies.item
                                                                  .symbol
                                                              )
                                                            )
                                                          ]
                                                        )
                                                      ]
                                                    }
                                                  },
                                                  {
                                                    key: "item",
                                                    fn: function(currecies) {
                                                      return [
                                                        _c(
                                                          "v-chip",
                                                          {
                                                            attrs: {
                                                              small: "",
                                                              color: "primary"
                                                            }
                                                          },
                                                          [
                                                            _vm._v(
                                                              _vm._s(
                                                                currecies.item
                                                                  .name
                                                              )
                                                            )
                                                          ]
                                                        ),
                                                        _vm._v(" "),
                                                        _c(
                                                          "v-chip",
                                                          {
                                                            attrs: { small: "" }
                                                          },
                                                          [
                                                            _vm._v(
                                                              _vm._s(
                                                                currecies.item
                                                                  .symbol
                                                              )
                                                            )
                                                          ]
                                                        )
                                                      ]
                                                    }
                                                  }
                                                ]),
                                                model: {
                                                  value:
                                                    _vm.quotation.currency_id,
                                                  callback: function($$v) {
                                                    _vm.$set(
                                                      _vm.quotation,
                                                      "currency_id",
                                                      $$v
                                                    )
                                                  },
                                                  expression:
                                                    "quotation.currency_id"
                                                }
                                              })
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "v-col",
                                            {
                                              directives: [
                                                {
                                                  name: "show",
                                                  rawName: "v-show",
                                                  value:
                                                    _vm.quotationOption
                                                      .is_use_shipping_fee,
                                                  expression:
                                                    "quotationOption.is_use_shipping_fee"
                                                }
                                              ],
                                              attrs: { cols: "12", md: "6" }
                                            },
                                            [
                                              _c("v-currency-field", {
                                                attrs: {
                                                  label: "Shipping Fee",
                                                  rounded: "",
                                                  filled: ""
                                                },
                                                model: {
                                                  value:
                                                    _vm.quotation.shipping_fee,
                                                  callback: function($$v) {
                                                    _vm.$set(
                                                      _vm.quotation,
                                                      "shipping_fee",
                                                      $$v
                                                    )
                                                  },
                                                  expression:
                                                    "quotation.shipping_fee"
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
                                              _c("v-checkbox", {
                                                attrs: {
                                                  label: "Emergency",
                                                  disabled:
                                                    _vm.isEditButtonDisabled
                                                },
                                                model: {
                                                  value:
                                                    _vm.quotation.is_emergency,
                                                  callback: function($$v) {
                                                    _vm.$set(
                                                      _vm.quotation,
                                                      "is_emergency",
                                                      $$v
                                                    )
                                                  },
                                                  expression:
                                                    "quotation.is_emergency"
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
                                                  label: "Quotation Summary",
                                                  filled: "",
                                                  disabled: _vm.isFieldDisabled
                                                },
                                                model: {
                                                  value: _vm.quotation.summary,
                                                  callback: function($$v) {
                                                    _vm.$set(
                                                      _vm.quotation,
                                                      "summary",
                                                      $$v
                                                    )
                                                  },
                                                  expression:
                                                    "quotation.summary"
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
                                              _c("vue-editor", {
                                                attrs: {
                                                  label: "Remarks",
                                                  disabled: _vm.isFieldDisabled
                                                },
                                                model: {
                                                  value: _vm.quotation.remarks,
                                                  callback: function($$v) {
                                                    _vm.$set(
                                                      _vm.quotation,
                                                      "remarks",
                                                      $$v
                                                    )
                                                  },
                                                  expression:
                                                    "quotation.remarks"
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
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("QuotationLine", {
                            ref: "quotationLineComponent",
                            attrs: {
                              units: _vm.units,
                              currentStatus: _vm.quotationStatus,
                              currentMode: _vm.quotationMode,
                              permissions: _vm.permissions,
                              editPermission: "edit-quotation",
                              approvePermission: "approve-quotation",
                              shipping_fee: _vm.quotation.shipping_fee
                            }
                          }),
                          _vm._v(" "),
                          _c("Attachment", {
                            ref: "attachmentComponent",
                            attrs: {
                              model: "Quotation",
                              model_id: _vm.quotationId,
                              storage: "quotation_attachments",
                              currentStatus: _vm.quotationStatus,
                              currentMode: _vm.quotationMode,
                              permissions: _vm.permissions,
                              editPermission: _vm.editPermission,
                              approvePermission: _vm.approvePermission,
                              title: "Files to be merged with the quote"
                            }
                          }),
                          _vm._v(" "),
                          _c(
                            "v-lazy",
                            {
                              attrs: {
                                options: { threshold: 0.5 },
                                "min-height": "200",
                                transition: "fade-transition"
                              },
                              model: {
                                value: _vm.lazyField,
                                callback: function($$v) {
                                  _vm.lazyField = $$v
                                },
                                expression: "lazyField"
                              }
                            },
                            [
                              _c("Field", {
                                ref: "fieldComponent",
                                attrs: {
                                  currentStatus: _vm.quotationStatus,
                                  currentMode: _vm.quotationMode,
                                  permissions: _vm.permissions,
                                  editPermission: _vm.editPermission,
                                  approvePermission: _vm.approvePermission
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
                        "v-col",
                        { attrs: { md: "5" } },
                        [
                          _c(
                            "v-card",
                            { staticClass: "mb-3", attrs: { outlined: "" } },
                            [
                              _c(
                                "v-card-title",
                                [
                                  _c("h4", [_vm._v("STATUS")]),
                                  _vm._v(" "),
                                  _c("v-spacer"),
                                  _vm._v(" "),
                                  _c(
                                    "v-dialog",
                                    {
                                      attrs: { width: "1024" },
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
                                                      depressed: "",
                                                      outlined: "",
                                                      color: "primary"
                                                    }
                                                  },
                                                  on
                                                ),
                                                [_vm._v("Status Description")]
                                              )
                                            ]
                                          }
                                        }
                                      ]),
                                      model: {
                                        value: _vm.quotationDescriptionDialog,
                                        callback: function($$v) {
                                          _vm.quotationDescriptionDialog = $$v
                                        },
                                        expression: "quotationDescriptionDialog"
                                      }
                                    },
                                    [
                                      _vm._v(" "),
                                      _c("QuotationStatusDescription")
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
                                  _c("v-chip", [
                                    _vm._v(_vm._s(_vm.quotationStatus))
                                  ])
                                ],
                                1
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("QuotationPdfDocument", {
                            ref: "pdfDocumentsComponent",
                            attrs: {
                              permissions: _vm.permissions,
                              editPermission: _vm.editPermission,
                              approvePermission: _vm.approvePermission,
                              currentStatus: _vm.quotationStatus,
                              currentMode: _vm.quotationMode,
                              exchangeRate: _vm.exchangeRate,
                              emergency: _vm.quotation.is_emergency,
                              totalPrice: _vm.quotation.total_price
                            },
                            on: {
                              "signal-changeQuotationStatusToList":
                                _vm.changeQuotationStatusToList
                            }
                          }),
                          _vm._v(" "),
                          _c("File", {
                            ref: "filesComponent",
                            attrs: {
                              model_id: _vm.quotationId,
                              model: "Quotation",
                              storage: "quotation_files",
                              title: "FILE UPLOAD",
                              currentStatus: _vm.quotationStatus,
                              currentMode: _vm.quotationMode,
                              permissions: _vm.permissions,
                              editPermission: _vm.editPermission,
                              approvePermission: _vm.approvePermission
                            }
                          }),
                          _vm._v(" "),
                          _c(
                            "v-lazy",
                            {
                              attrs: {
                                options: { threshold: 0.5 },
                                "min-height": "200",
                                transition: "fade-transition"
                              },
                              model: {
                                value: _vm.lazyComment,
                                callback: function($$v) {
                                  _vm.lazyComment = $$v
                                },
                                expression: "lazyComment"
                              }
                            },
                            [
                              _c("Comment", {
                                ref: "commentsComponent",
                                attrs: {
                                  model: "Quotation",
                                  model_id: _vm.quotationId
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/quotation/QuotationLine.vue?vue&type=template&id=d0104d7c&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--18-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/quotation/QuotationLine.vue?vue&type=template&id=d0104d7c& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************/
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
        { staticClass: "mb-3", attrs: { flat: "", outlined: "" } },
        [
          _c(
            "v-card-title",
            [
              _c("h4", [_vm._v("ITEM LIST")]),
              _vm._v(" "),
              _c("v-spacer"),
              _vm._v(" "),
              _c(
                "v-dialog",
                {
                  attrs: { "max-width": "980" },
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
                                  color: "pink",
                                  outlined: "",
                                  text: "",
                                  disabled: _vm.isButtonDisabled
                                }
                              },
                              on
                            ),
                            [_vm._v("ADD ITEM")]
                          )
                        ]
                      }
                    }
                  ]),
                  model: {
                    value: _vm.itemDialog,
                    callback: function($$v) {
                      _vm.itemDialog = $$v
                    },
                    expression: "itemDialog"
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
                          staticClass: "mb-3",
                          attrs: { flat: "", dark: "", color: "primary" }
                        },
                        [
                          _c("v-toolbar-title", [_vm._v("ADD ITEM")]),
                          _vm._v(" "),
                          _c("v-spacer"),
                          _vm._v(" "),
                          _c(
                            "v-toolbar-items",
                            [
                              _c(
                                "v-btn",
                                {
                                  attrs: { fab: "", text: "" },
                                  on: { click: _vm.closeItemDialog }
                                },
                                [_c("v-icon", [_vm._v("mdi-close")])],
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
                        "v-card-text",
                        [
                          _c(
                            "v-form",
                            {
                              model: {
                                value: _vm.valid,
                                callback: function($$v) {
                                  _vm.valid = $$v
                                },
                                expression: "valid"
                              }
                            },
                            [
                              _c(
                                "v-container",
                                [
                                  _c(
                                    "v-row",
                                    [
                                      _c(
                                        "v-col",
                                        { attrs: { cols: "12" } },
                                        [
                                          _c("v-textarea", {
                                            attrs: {
                                              label: "description",
                                              rules: [
                                                _vm.required("Description")
                                              ]
                                            },
                                            model: {
                                              value:
                                                _vm.quotationLine.description,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  _vm.quotationLine,
                                                  "description",
                                                  $$v
                                                )
                                              },
                                              expression:
                                                "quotationLine.description"
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
                                          _c("v-text-field", {
                                            attrs: {
                                              label: "Item Name",
                                              required: ""
                                            },
                                            model: {
                                              value: _vm.quotationLine.name,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  _vm.quotationLine,
                                                  "name",
                                                  $$v
                                                )
                                              },
                                              expression: "quotationLine.name"
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
                                          _c("v-text-field", {
                                            attrs: {
                                              label: "Size(Model)",
                                              required: "",
                                              rules: [
                                                _vm.required("Size"),
                                                _vm.maxLength("Size", 100)
                                              ]
                                            },
                                            model: {
                                              value: _vm.quotationLine.size,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  _vm.quotationLine,
                                                  "size",
                                                  $$v
                                                )
                                              },
                                              expression: "quotationLine.size"
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
                                          _c("v-currency-field", {
                                            attrs: {
                                              label: "Price",
                                              required: "",
                                              type: "number",
                                              rules: [
                                                _vm.required("Price"),
                                                _vm.maxLength("Price", 30)
                                              ]
                                            },
                                            model: {
                                              value: _vm.quotationLine.price,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  _vm.quotationLine,
                                                  "price",
                                                  $$v
                                                )
                                              },
                                              expression: "quotationLine.price"
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
                                          _c("v-currency-field", {
                                            attrs: {
                                              label: "Quantity",
                                              required: "",
                                              type: "number",
                                              rules: [
                                                _vm.required("Quantity"),
                                                _vm.maxLength("Qunatity", 30)
                                              ]
                                            },
                                            model: {
                                              value: _vm.quotationLine.quantity,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  _vm.quotationLine,
                                                  "quantity",
                                                  $$v
                                                )
                                              },
                                              expression:
                                                "quotationLine.quantity"
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
                                              "item-text": "name",
                                              "item-value": "name",
                                              items: _vm.units,
                                              label: "Unit",
                                              required: "",
                                              rules: [
                                                _vm.required("Unit"),
                                                _vm.maxLength("Unit", 30)
                                              ]
                                            },
                                            model: {
                                              value: _vm.quotationLine.unit,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  _vm.quotationLine,
                                                  "unit",
                                                  $$v
                                                )
                                              },
                                              expression: "quotationLine.unit"
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
                                          _c("v-text-field", {
                                            attrs: {
                                              label: "Line Title",
                                              required: "",
                                              rules: [
                                                _vm.required("title"),
                                                _vm.maxLength("title", 30)
                                              ]
                                            },
                                            model: {
                                              value: _vm.quotationLine.title,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  _vm.quotationLine,
                                                  "title",
                                                  $$v
                                                )
                                              },
                                              expression: "quotationLine.title"
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
                                disabled: !_vm.valid,
                                color: "primary",
                                text: ""
                              },
                              on: {
                                click: function($event) {
                                  return _vm.addItem()
                                }
                              }
                            },
                            [_vm._v("Add")]
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
          _c("v-divider"),
          _vm._v(" "),
          _c(
            "v-card-text",
            { staticClass: "wrap-component-table" },
            [
              _c("v-simple-table", {
                staticClass: "ies-purchase-order-content-dialog-table",
                scopedSlots: _vm._u([
                  {
                    key: "default",
                    fn: function() {
                      return [
                        _c("thead", [
                          _c("tr", [
                            _c("th", { staticClass: "text-center" }, [
                              _vm._v("Line Title")
                            ]),
                            _vm._v(" "),
                            _c("th", { staticClass: "text-center" }, [
                              _vm._v("Description")
                            ]),
                            _vm._v(" "),
                            _c("th", { staticClass: "text-center" }, [
                              _vm._v("Size")
                            ]),
                            _vm._v(" "),
                            _c("th", { staticClass: "text-center" }, [
                              _vm._v("Q'ty")
                            ]),
                            _vm._v(" "),
                            _c("th", { staticClass: "text-center" }, [
                              _vm._v("Unit")
                            ]),
                            _vm._v(" "),
                            _c("th", { staticClass: "text-center" }, [
                              _vm._v("Unit Price")
                            ]),
                            _vm._v(" "),
                            _c("th", { staticClass: "text-center" }, [
                              _vm._v("Sub Total")
                            ]),
                            _vm._v(" "),
                            _c("th", { staticClass: "text-center" }, [
                              _vm._v("Action")
                            ])
                          ])
                        ]),
                        _vm._v(" "),
                        _c(
                          "tbody",
                          _vm._l(_vm.quotationLines, function(item, index) {
                            return _c("tr", { key: index }, [
                              _c("td", { staticClass: "text-center" }, [
                                _vm._v(_vm._s(item.title))
                              ]),
                              _vm._v(" "),
                              _c("td", {
                                domProps: {
                                  innerHTML: _vm._s(item.description)
                                }
                              }),
                              _vm._v(" "),
                              _c("td", { staticClass: "text-center" }, [
                                _vm._v(_vm._s(item.size))
                              ]),
                              _vm._v(" "),
                              _c("td", { staticClass: "text-center" }, [
                                _vm._v(_vm._s(item.quantity))
                              ]),
                              _vm._v(" "),
                              _c("td", { staticClass: "text-center" }, [
                                _vm._v(_vm._s(item.unit))
                              ]),
                              _vm._v(" "),
                              _c("td", { staticClass: "text-center" }, [
                                _vm._v(_vm._s(_vm.formatPrice(item.price)))
                              ]),
                              _vm._v(" "),
                              _c("td", { staticClass: "text-center" }, [
                                _vm._v(
                                  _vm._s(
                                    _vm.formatPrice(item.price * item.quantity)
                                  )
                                )
                              ]),
                              _vm._v(" "),
                              _c(
                                "td",
                                {
                                  staticClass:
                                    "d-flex justify-center align-center text-center"
                                },
                                [
                                  _c(
                                    "span",
                                    { staticClass: "d-block mr-1" },
                                    [
                                      _c(
                                        "v-btn",
                                        {
                                          attrs: {
                                            fab: "",
                                            depressed: "",
                                            "x-small": "",
                                            color: "blue-grey",
                                            elevation: "",
                                            disabled: _vm.isButtonDisabled
                                          },
                                          on: {
                                            click: function($event) {
                                              $event.preventDefault()
                                              return _vm.removeItem(item)
                                            }
                                          }
                                        },
                                        [
                                          _c(
                                            "v-icon",
                                            {
                                              attrs: {
                                                dark: "",
                                                color: "white"
                                              }
                                            },
                                            [_vm._v("mdi-minus")]
                                          )
                                        ],
                                        1
                                      )
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "span",
                                    { staticClass: "d-block" },
                                    [
                                      _c(
                                        "v-btn",
                                        {
                                          attrs: {
                                            fab: "",
                                            depressed: "",
                                            "x-small": "",
                                            color: "primary",
                                            elevation: "",
                                            disabled: _vm.isButtonDisabled
                                          },
                                          on: {
                                            click: function($event) {
                                              $event.preventDefault()
                                              return _vm.editItem(item)
                                            }
                                          }
                                        },
                                        [
                                          _c(
                                            "v-icon",
                                            {
                                              attrs: {
                                                dark: "",
                                                color: "white"
                                              }
                                            },
                                            [_vm._v("mdi-pencil")]
                                          )
                                        ],
                                        1
                                      )
                                    ],
                                    1
                                  )
                                ]
                              )
                            ])
                          }),
                          0
                        ),
                        _vm._v(" "),
                        _c("tfoot", [
                          _c("tr", [
                            _c(
                              "td",
                              {
                                staticClass: "text-right",
                                attrs: { colspan: "7" }
                              },
                              [_vm._v("TOTAL")]
                            ),
                            _vm._v(" "),
                            _c(
                              "td",
                              {
                                staticClass: "text-right",
                                attrs: { colspan: "1" }
                              },
                              [
                                _c("v-chip", [
                                  _vm._v(
                                    _vm._s(
                                      _vm.formatPrice(_vm.quotationTotalPrice)
                                    )
                                  )
                                ])
                              ],
                              1
                            )
                          ]),
                          _vm._v(" "),
                          _vm.quotationOption.discount > 0
                            ? _c("tr", [
                                _c(
                                  "td",
                                  {
                                    staticClass: "text-right",
                                    attrs: { colspan: "7" }
                                  },
                                  [_vm._v("DISCOUNT")]
                                ),
                                _vm._v(" "),
                                _c(
                                  "td",
                                  {
                                    staticClass: "text-right",
                                    attrs: { colspan: "1" }
                                  },
                                  [
                                    _c("v-chip", [
                                      _vm._v(
                                        _vm._s(
                                          _vm.formatPrice(
                                            _vm.quotationOption.discount
                                          )
                                        )
                                      )
                                    ])
                                  ],
                                  1
                                )
                              ])
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.quotationOption.shipping_fee > 0
                            ? _c("tr", [
                                _c(
                                  "td",
                                  {
                                    staticClass: "text-right",
                                    attrs: { colspan: "7" }
                                  },
                                  [_vm._v("SHIPPING / HANDLING")]
                                ),
                                _vm._v(" "),
                                _c(
                                  "td",
                                  {
                                    staticClass: "text-right",
                                    attrs: { colspan: "1" }
                                  },
                                  [
                                    _c("v-chip", [
                                      _vm._v(
                                        _vm._s(
                                          _vm.formatPrice(
                                            _vm.quotationOption.shipping_fee
                                          )
                                        )
                                      )
                                    ])
                                  ],
                                  1
                                )
                              ])
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.quotationOption.is_use_tax
                            ? _c("tr", [
                                _c(
                                  "td",
                                  {
                                    staticClass: "text-right",
                                    attrs: { colspan: "7" }
                                  },
                                  [_vm._v("TAX")]
                                ),
                                _vm._v(" "),
                                _c(
                                  "td",
                                  {
                                    staticClass: "text-right",
                                    attrs: { colspan: "1" }
                                  },
                                  [
                                    _c("v-chip", [
                                      _vm._v(
                                        _vm._s(
                                          _vm.formatPrice(_vm.quotationTax)
                                        )
                                      )
                                    ])
                                  ],
                                  1
                                )
                              ])
                            : _vm._e(),
                          _vm._v(" "),
                          _c("tr", [
                            _c(
                              "td",
                              {
                                staticClass: "text-right font-weight-black",
                                attrs: { colspan: "7" }
                              },
                              [_vm._v("GRAND TOTAL")]
                            ),
                            _vm._v(" "),
                            _c(
                              "td",
                              {
                                staticClass: "text-right",
                                attrs: { colspan: "1" }
                              },
                              [
                                _c("v-chip", { attrs: { color: "primary" } }, [
                                  _vm._v(
                                    _vm._s(
                                      _vm.formatPrice(_vm.quotationGrandTotal)
                                    )
                                  )
                                ])
                              ],
                              1
                            )
                          ])
                        ])
                      ]
                    },
                    proxy: true
                  }
                ])
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
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/quotation/QuotationOption.vue?vue&type=template&id=155c33c3&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--18-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/quotation/QuotationOption.vue?vue&type=template&id=155c33c3& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************/
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
      _c("v-card-title", [
        _c("span", { staticClass: "headline" }, [_vm._v("Setting")])
      ]),
      _vm._v(" "),
      _c(
        "v-card-text",
        { staticClass: "wrap-component-table" },
        [
          _c("v-simple-table", {
            staticClass: "ies-purchase-order-content-dialog-table",
            scopedSlots: _vm._u([
              {
                key: "default",
                fn: function() {
                  return [
                    _c("thead", [
                      _c("tr", [
                        _c("th", { staticClass: "text-center" }, [
                          _vm._v("OPTION")
                        ]),
                        _vm._v(" "),
                        _c("th", { staticClass: "text-center" }, [
                          _vm._v("SELECT")
                        ])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("tbody", [
                      _c("tr", [
                        _c("td", [_vm._v("Item List Title")]),
                        _vm._v(" "),
                        _c(
                          "td",
                          [
                            _c("v-text-field", {
                              model: {
                                value: _vm.quotationOption.title,
                                callback: function($$v) {
                                  _vm.$set(_vm.quotationOption, "title", $$v)
                                },
                                expression: "quotationOption.title"
                              }
                            })
                          ],
                          1
                        )
                      ]),
                      _vm._v(" "),
                      _c("tr", [
                        _c("td", [_vm._v("Use Tax")]),
                        _vm._v(" "),
                        _c(
                          "td",
                          [
                            _c("v-checkbox", {
                              model: {
                                value: _vm.quotationOption.is_use_tax,
                                callback: function($$v) {
                                  _vm.$set(
                                    _vm.quotationOption,
                                    "is_use_tax",
                                    $$v
                                  )
                                },
                                expression: "quotationOption.is_use_tax"
                              }
                            })
                          ],
                          1
                        )
                      ]),
                      _vm._v(" "),
                      _c("tr", [
                        _c("td", [_vm._v("Discount")]),
                        _vm._v(" "),
                        _c(
                          "td",
                          [
                            _c("v-currency-field", {
                              attrs: { type: "number" },
                              model: {
                                value: _vm.quotationOption.discount,
                                callback: function($$v) {
                                  _vm.$set(_vm.quotationOption, "discount", $$v)
                                },
                                expression: "quotationOption.discount"
                              }
                            })
                          ],
                          1
                        )
                      ]),
                      _vm._v(" "),
                      _c("tr", [
                        _c("td", [_vm._v("Shpping / Handling Fee")]),
                        _vm._v(" "),
                        _c(
                          "td",
                          [
                            _c("v-currency-field", {
                              attrs: { type: "number" },
                              model: {
                                value: _vm.quotationOption.shipping_fee,
                                callback: function($$v) {
                                  _vm.$set(
                                    _vm.quotationOption,
                                    "shipping_fee",
                                    $$v
                                  )
                                },
                                expression: "quotationOption.shipping_fee"
                              }
                            })
                          ],
                          1
                        )
                      ]),
                      _vm._v(" "),
                      _c("tr", [
                        _c("td", [_vm._v("Use Description")]),
                        _vm._v(" "),
                        _c(
                          "td",
                          [
                            _c("v-checkbox", {
                              model: {
                                value: _vm.quotationOption.is_use_description,
                                callback: function($$v) {
                                  _vm.$set(
                                    _vm.quotationOption,
                                    "is_use_description",
                                    $$v
                                  )
                                },
                                expression: "quotationOption.is_use_description"
                              }
                            })
                          ],
                          1
                        )
                      ]),
                      _vm._v(" "),
                      _c("tr", [
                        _c("td", [_vm._v("PDF Form Type")]),
                        _vm._v(" "),
                        _c(
                          "td",
                          [
                            _c("v-select", {
                              attrs: { items: _vm.formTypes },
                              model: {
                                value: _vm.quotationOption.pdf_form_type,
                                callback: function($$v) {
                                  _vm.$set(
                                    _vm.quotationOption,
                                    "pdf_form_type",
                                    $$v
                                  )
                                },
                                expression: "quotationOption.pdf_form_type"
                              }
                            })
                          ],
                          1
                        )
                      ])
                    ])
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
              on: {
                click: function($event) {
                  return _vm.closeOptionDialog()
                }
              }
            },
            [_vm._v("Cancel")]
          ),
          _vm._v(" "),
          _vm.quotationId
            ? _c(
                "v-btn",
                {
                  attrs: { color: "blue darken-1", text: "" },
                  on: {
                    click: function($event) {
                      return _vm.updateOption()
                    }
                  }
                },
                [_vm._v("Save")]
              )
            : _c(
                "v-btn",
                {
                  attrs: { color: "blue darken-1", text: "" },
                  on: {
                    click: function($event) {
                      return _vm.setOption()
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
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/quotation/QuotationPdfDocument.vue?vue&type=template&id=d7f60262&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--18-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/quotation/QuotationPdfDocument.vue?vue&type=template&id=d7f60262& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "mb-3", attrs: { outlined: "" } },
    [
      _c(
        "v-card-title",
        { staticClass: "section-title" },
        [
          _c("h4", [_vm._v("GENERATED PDF FILES")]),
          _vm._v(" "),
          _c("v-spacer"),
          _vm._v(" "),
          _vm.currentProcess === "Draft"
            ? _c(
                "v-btn",
                {
                  attrs: {
                    depressed: "",
                    color: "orange",
                    outlined: "",
                    dark: ""
                  },
                  on: {
                    click: function($event) {
                      return _vm.updatePdfDocument()
                    }
                  }
                },
                [
                  _c("v-icon", { attrs: { left: "" } }, [_vm._v("mdi-update")]),
                  _vm._v("Update PDF Document\n    ")
                ],
                1
              )
            : _vm.currentProcess === "CANCELED" ||
              _vm.currentProcess === "DENIED" ||
              _vm.currentProcess === "REJECTED" ||
              _vm.currentProcess === null
            ? _c(
                "v-btn",
                {
                  attrs: { depressed: "", color: "primary", outlined: "" },
                  on: {
                    click: function($event) {
                      return _vm.generatePdfDocument()
                    }
                  }
                },
                [
                  _c("v-icon", { attrs: { left: "" } }, [_vm._v("mdi-update")]),
                  _vm._v("Generate PDF Document\n    ")
                ],
                1
              )
            : _c("v-btn", { attrs: { depressed: "" } }, [_vm._v("Disabled")])
        ],
        1
      ),
      _vm._v(" "),
      _c("v-divider"),
      _vm._v(" "),
      _c(
        "v-card-text",
        { staticClass: "wrap-component-table" },
        [
          _c("v-simple-table", {
            staticClass: "qt-table",
            scopedSlots: _vm._u([
              {
                key: "default",
                fn: function() {
                  return [
                    _c("thead", [
                      _c("tr", [
                        _c("th", { staticClass: "text-center" }, [
                          _vm._v("VER.")
                        ]),
                        _vm._v(" "),
                        _c("th", { staticClass: "text-center" }, [
                          _vm._v("CREATED AT")
                        ]),
                        _vm._v(" "),
                        _c("th", { staticClass: "text-center" }, [
                          _vm._v("CREATED BY")
                        ]),
                        _vm._v(" "),
                        _c("th", { staticClass: "text-center" }, [
                          _vm._v("DOWNLOAD")
                        ]),
                        _vm._v(" "),
                        _c("th", { staticClass: "text-center" }, [
                          _vm._v("STATUS")
                        ]),
                        _vm._v(" "),
                        _c("th", { staticClass: "text-center" }, [
                          _vm._v("ACTION")
                        ])
                      ])
                    ]),
                    _vm._v(" "),
                    _c(
                      "tbody",
                      [
                        _vm.pdfDocuments && _vm.pdfDocuments.length === 0
                          ? _c("tr", [
                              _c(
                                "td",
                                {
                                  staticClass: "text-center",
                                  attrs: { colspan: "6" }
                                },
                                [_vm._v("No Pdf file created")]
                              )
                            ])
                          : _vm._l(_vm.pdfDocuments, function(
                              pdfDocument,
                              index
                            ) {
                              return _c("tr", { key: index }, [
                                _c("td", { staticClass: "text-center" }, [
                                  _vm._v(_vm._s(pdfDocument.version))
                                ]),
                                _vm._v(" "),
                                _c("td", { staticClass: "text-center" }, [
                                  _vm._v(
                                    _vm._s(
                                      _vm
                                        .$moment(pdfDocument.created_at)
                                        .format("YYYY-MM-DD hh:mm")
                                    )
                                  )
                                ]),
                                _vm._v(" "),
                                _c("td", { staticClass: "text-center" }, [
                                  _vm._v(_vm._s(pdfDocument.creator_name))
                                ]),
                                _vm._v(" "),
                                _c(
                                  "td",
                                  { staticClass: "text-center" },
                                  [
                                    _c(
                                      "v-btn",
                                      {
                                        attrs: {
                                          color: "red darken-1",
                                          dark: "",
                                          text: "",
                                          icon: ""
                                        },
                                        on: {
                                          click: function($event) {
                                            $event.preventDefault()
                                            return _vm.downloadPdfFile(
                                              pdfDocument.id
                                            )
                                          }
                                        }
                                      },
                                      [_c("v-icon", [_vm._v("mdi-printer")])],
                                      1
                                    )
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c("td", { staticClass: "text-center" }, [
                                  _vm._v(_vm._s(pdfDocument.process))
                                ]),
                                _vm._v(" "),
                                _c("td", { staticClass: "text-center" }, [
                                  pdfDocument.process === "Draft"
                                    ? _c("div", [
                                        _c(
                                          "span",
                                          { staticClass: "d-block" },
                                          [
                                            _c(
                                              "v-btn",
                                              {
                                                attrs: {
                                                  color: "primary",
                                                  dark: "",
                                                  small: "",
                                                  depressed: "",
                                                  disabled:
                                                    _vm.isSubmitButtonDisabled
                                                },
                                                on: {
                                                  click: function($event) {
                                                    return _vm.changeProcess(
                                                      pdfDocument,
                                                      "submit",
                                                      false,
                                                      "SUBMITTED",
                                                      "SUBMITTED"
                                                    )
                                                  }
                                                }
                                              },
                                              [_vm._v("Submit")]
                                            )
                                          ],
                                          1
                                        )
                                      ])
                                    : pdfDocument.process === "SUBMITTED"
                                    ? _c(
                                        "div",
                                        {
                                          staticClass: "d-flex justify-center"
                                        },
                                        [
                                          _c(
                                            "span",
                                            { staticClass: "d-block mr-2" },
                                            [
                                              _c(
                                                "v-btn",
                                                {
                                                  attrs: {
                                                    color: "primary",
                                                    dark: "",
                                                    small: "",
                                                    depressed: "",
                                                    disabled:
                                                      _vm.isApproveButtonDisabled
                                                  },
                                                  on: {
                                                    click: function($event) {
                                                      return _vm.changeProcess(
                                                        pdfDocument,
                                                        "approve",
                                                        true,
                                                        "APPROVED",
                                                        "APPROVED"
                                                      )
                                                    }
                                                  }
                                                },
                                                [_vm._v("Approve")]
                                              )
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "span",
                                            { staticClass: "d-block" },
                                            [
                                              _c(
                                                "v-btn",
                                                {
                                                  attrs: {
                                                    color: "red",
                                                    dark: "",
                                                    small: "",
                                                    depressed: "",
                                                    disabled:
                                                      _vm.isApproveButtonDisabled
                                                  },
                                                  on: {
                                                    click: function($event) {
                                                      return _vm.changeProcess(
                                                        pdfDocument,
                                                        "reject",
                                                        true,
                                                        "REJECTED",
                                                        "OPENED"
                                                      )
                                                    }
                                                  }
                                                },
                                                [_vm._v("Reject")]
                                              )
                                            ],
                                            1
                                          )
                                        ]
                                      )
                                    : pdfDocument.process === "APPROVED"
                                    ? _c(
                                        "div",
                                        {
                                          staticClass: "d-flex justify-center"
                                        },
                                        [
                                          _c(
                                            "span",
                                            { staticClass: "d-block mr-2" },
                                            [
                                              _c(
                                                "v-btn",
                                                {
                                                  attrs: {
                                                    color: "green",
                                                    dark: "",
                                                    small: "",
                                                    depressed: "",
                                                    disabled:
                                                      _vm.isSubmitButtonDisabled
                                                  },
                                                  on: {
                                                    click: function($event) {
                                                      return _vm.changeProcess(
                                                        pdfDocument,
                                                        "send",
                                                        false,
                                                        "SENT",
                                                        "SENT"
                                                      )
                                                    }
                                                  }
                                                },
                                                [_vm._v("Send")]
                                              )
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "span",
                                            { staticClass: "d-block" },
                                            [
                                              _c(
                                                "v-btn",
                                                {
                                                  attrs: {
                                                    color: "red",
                                                    dark: "",
                                                    small: "",
                                                    depressed: "",
                                                    disabled:
                                                      _vm.isSubmitButtonDisabled
                                                  },
                                                  on: {
                                                    click: function($event) {
                                                      return _vm.changeProcess(
                                                        pdfDocument,
                                                        "cancel",
                                                        true,
                                                        "CANCELED",
                                                        "OPENED"
                                                      )
                                                    }
                                                  }
                                                },
                                                [_vm._v("Cancel")]
                                              )
                                            ],
                                            1
                                          )
                                        ]
                                      )
                                    : pdfDocument.process === "SENT"
                                    ? _c(
                                        "div",
                                        {
                                          staticClass: "d-flex justify-center"
                                        },
                                        [
                                          _c(
                                            "span",
                                            { staticClass: "d-block mr-2" },
                                            [
                                              _c(
                                                "v-btn",
                                                {
                                                  attrs: {
                                                    color: "green",
                                                    dark: "",
                                                    small: "",
                                                    depressed: "",
                                                    disabled:
                                                      _vm.isSubmitButtonDisabled
                                                  },
                                                  on: {
                                                    click: function($event) {
                                                      return _vm.changeProcess(
                                                        pdfDocument,
                                                        "accept",
                                                        false,
                                                        "ACCEPTED",
                                                        "ACCEPTED"
                                                      )
                                                    }
                                                  }
                                                },
                                                [_vm._v("ACCEPTED")]
                                              )
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "span",
                                            { staticClass: "d-block mr-2" },
                                            [
                                              _c(
                                                "v-btn",
                                                {
                                                  attrs: {
                                                    color: "pink",
                                                    dark: "",
                                                    small: "",
                                                    depressed: "",
                                                    disabled:
                                                      _vm.isSubmitButtonDisabled
                                                  },
                                                  on: {
                                                    click: function($event) {
                                                      return _vm.changeProcess(
                                                        pdfDocument,
                                                        "deny",
                                                        true,
                                                        "DENIED",
                                                        "OPENED"
                                                      )
                                                    }
                                                  }
                                                },
                                                [_vm._v("DENIED")]
                                              )
                                            ],
                                            1
                                          )
                                        ]
                                      )
                                    : pdfDocument.process === "ACCEPTED"
                                    ? _c(
                                        "div",
                                        {
                                          staticClass: "d-flex justify-center"
                                        },
                                        [
                                          _c(
                                            "span",
                                            { staticClass: "d-block mr-2" },
                                            [
                                              _c(
                                                "v-btn",
                                                {
                                                  attrs: {
                                                    color: "green",
                                                    dark: "",
                                                    small: "",
                                                    depressed: "",
                                                    disabled:
                                                      _vm.isSubmitButtonDisabled
                                                  },
                                                  on: {
                                                    click: function($event) {
                                                      return _vm.changeProcess(
                                                        pdfDocument,
                                                        "complete",
                                                        false,
                                                        "COMPLETED",
                                                        "COMPLETED"
                                                      )
                                                    }
                                                  }
                                                },
                                                [_vm._v("COMPLETE")]
                                              )
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "span",
                                            { staticClass: "d-block mr-2" },
                                            [
                                              _c(
                                                "v-btn",
                                                {
                                                  attrs: {
                                                    color: "pink",
                                                    dark: "",
                                                    small: "",
                                                    depressed: "",
                                                    disabled:
                                                      _vm.isSubmitButtonDisabled
                                                  },
                                                  on: {
                                                    click: function($event) {
                                                      return _vm.changeProcess(
                                                        pdfDocument,
                                                        "cancel",
                                                        true,
                                                        "CANCELED",
                                                        "OPENED"
                                                      )
                                                    }
                                                  }
                                                },
                                                [_vm._v("CANCEL")]
                                              )
                                            ],
                                            1
                                          )
                                        ]
                                      )
                                    : _vm._e()
                                ])
                              ])
                            })
                      ],
                      2
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
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/quotation/QuotationStatusDescription.vue?vue&type=template&id=776a654c&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--18-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/quotation/QuotationStatusDescription.vue?vue&type=template&id=776a654c& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************/
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
      _c(
        "v-card-title",
        { staticClass: "headline", attrs: { "primary-title": "" } },
        [_vm._v("Quotation Status Description")]
      ),
      _vm._v(" "),
      _c(
        "v-card-text",
        [
          _c("v-simple-table", {
            scopedSlots: _vm._u([
              {
                key: "default",
                fn: function() {
                  return [
                    _c("thead", [
                      _c("tr", [
                        _c("th", [_vm._v("Status")]),
                        _vm._v(" "),
                        _c("th", [_vm._v("Description")])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("tbody", [
                      _c("tr", [
                        _c("td", [_c("v-chip", [_vm._v("OPENED")])], 1),
                        _vm._v(" "),
                        _c("td", [
                          _vm._v(
                            "사용자에 의해서 데이터가 입련된 초기 상태를 의미합니다."
                          )
                        ])
                      ]),
                      _vm._v(" "),
                      _c("tr", [
                        _c("td", [_c("v-chip", [_vm._v("SUBMITTED")])], 1),
                        _vm._v(" "),
                        _c("td", [
                          _vm._v(
                            "\n              사용자가 관리자에게 승인을 받기 위해서 생성한 Quote를 관리자에게 전송한 상태를 의미합니다.\n              관리자는 전송된 Quote를 확인 문제가 없을 경우 승인을 해야 하며 문제가 있을시 거부를 할 수 있습니다.\n            "
                          )
                        ])
                      ]),
                      _vm._v(" "),
                      _c("tr", [
                        _c("td", [_c("v-chip", [_vm._v("APPROVED")])], 1),
                        _vm._v(" "),
                        _c("td", [
                          _vm._v(
                            "전송된 Quote를 관리자가 승인한 경우를 의미하며 사용자는 관리자의 승인을 받은 Quote를 고객에게 즉시 전송해야 합니다."
                          )
                        ])
                      ]),
                      _vm._v(" "),
                      _c("tr", [
                        _c("td", [_c("v-chip", [_vm._v("REJECTED")])], 1),
                        _vm._v(" "),
                        _c("td", [
                          _vm._v(
                            "전송된 Quote를 관리자가 거부한 경우를 의미하며 사용자는 즉시 수정하여 다시 제출하여야 합니다."
                          )
                        ])
                      ]),
                      _vm._v(" "),
                      _c("tr", [
                        _c("td", [_c("v-chip", [_vm._v("SENT")])], 1),
                        _vm._v(" "),
                        _c("td", [
                          _vm._v(
                            "관라지로부터 승인 받은 Quote를 고객에게 전송한 상태를 의미합니다."
                          )
                        ])
                      ]),
                      _vm._v(" "),
                      _c("tr", [
                        _c("td", [_c("v-chip", [_vm._v("ACCEPTED")])], 1),
                        _vm._v(" "),
                        _c("td", [
                          _vm._v(
                            "고객에게 전송된 Quote를 고객으로부터 승인 됐음을 의미합니다. 사용자는 즉시 고객이 요청한 Quote의 내용을 수행하여야 합니다."
                          )
                        ])
                      ]),
                      _vm._v(" "),
                      _c("tr", [
                        _c("td", [_c("v-chip", [_vm._v("DENIED")])], 1),
                        _vm._v(" "),
                        _c("td", [
                          _vm._v(
                            "\n              고객에게 전송한 Quote가 고객이 거부 하였음을 의미합니다.사용자는 즉시 새로운 견적서를 수정하여 제출 하여야 합니다.\n              다시 수정하는 견적서는 리비전이 됩니다.\n            "
                          )
                        ])
                      ]),
                      _vm._v(" "),
                      _c("tr", [
                        _c("td", [_c("v-chip", [_vm._v("HOLDING")])], 1),
                        _vm._v(" "),
                        _c("td", [
                          _vm._v(
                            "어떠한 이유로 절차가 중단된 것을 의미합니다. 문제가 해결되는 즉시 사용자는 절차를 재개 하여야 합니다."
                          )
                        ])
                      ]),
                      _vm._v(" "),
                      _c("tr", [
                        _c("td", [_c("v-chip", [_vm._v("COMPLETE")])], 1),
                        _vm._v(" "),
                        _c("td", [
                          _vm._v(
                            "모든 절차가 종료되었음을 의미합니다. 구체적으로 고객으로 부터 PO를 접수한 시점을 의미합니다."
                          )
                        ])
                      ]),
                      _vm._v(" "),
                      _c("tr", [
                        _c("td", [_c("v-chip", [_vm._v("CANCELED")])], 1),
                        _vm._v(" "),
                        _c("td", [
                          _vm._v(
                            "고객 또는 자체 사정으로 인하여 더이상 Quote가 의미가 없을 경우를 의미합니다."
                          )
                        ])
                      ])
                    ])
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
      _c("v-divider"),
      _vm._v(" "),
      _c(
        "v-card-actions",
        [
          _c("v-spacer"),
          _vm._v(" "),
          _c(
            "v-btn",
            {
              attrs: { color: "primary", text: "" },
              on: {
                click: function($event) {
                  _vm.quotationDescriptionDialog = false
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
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Quotation.vue?vue&type=template&id=4728fd06&":
/*!**************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--18-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Quotation.vue?vue&type=template&id=4728fd06& ***!
  \**************************************************************************************************************************************************************************************************************************************************************/
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
          items: _vm.quotations.data,
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
                  {
                    attrs: { flat: "", height: "85", color: "blue", dark: "" }
                  },
                  [
                    _c(
                      "v-toolbar-title",
                      { staticClass: "font-weight-black" },
                      [_vm._v("QUOTATION LIST")]
                    ),
                    _vm._v(" "),
                    _c("v-divider", {
                      staticClass: "mx-4",
                      attrs: { inset: "", vertical: "" }
                    }),
                    _vm._v(" "),
                    _c(
                      "v-tooltip",
                      {
                        attrs: { bottom: "" },
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
                                      staticClass: "mr-1",
                                      attrs: {
                                        color: "primary",
                                        fab: "",
                                        depressed: "",
                                        dark: "",
                                        icon: ""
                                      }
                                    },
                                    on
                                  ),
                                  [
                                    _c(
                                      "v-icon",
                                      { attrs: { color: "white" } },
                                      [_vm._v("mdi-filter-menu-outline")]
                                    )
                                  ],
                                  1
                                )
                              ]
                            }
                          }
                        ])
                      },
                      [_vm._v(" "), _c("span", [_vm._v("Filter")])]
                    ),
                    _vm._v(" "),
                    _c(
                      "v-tooltip",
                      {
                        attrs: { bottom: "" },
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
                                      staticClass: "mr-1",
                                      attrs: {
                                        color: "primary",
                                        fab: "",
                                        depressed: "",
                                        dark: "",
                                        icon: ""
                                      }
                                    },
                                    on
                                  ),
                                  [
                                    _c(
                                      "v-icon",
                                      { attrs: { color: "white" } },
                                      [_vm._v("mdi-microsoft-excel")]
                                    )
                                  ],
                                  1
                                )
                              ]
                            }
                          }
                        ])
                      },
                      [_vm._v(" "), _c("span", [_vm._v("Convert To Excel")])]
                    ),
                    _vm._v(" "),
                    _c(
                      "v-tooltip",
                      {
                        attrs: { bottom: "" },
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
                                        color: "primary",
                                        disabled: _vm.isCreateButtonDisabled,
                                        fab: "",
                                        depressed: "",
                                        dark: "",
                                        icon: ""
                                      },
                                      on: {
                                        click: function($event) {
                                          return _vm.openCreateQuotationDialog()
                                        }
                                      }
                                    },
                                    on
                                  ),
                                  [
                                    _c(
                                      "v-icon",
                                      { attrs: { color: "white" } },
                                      [_vm._v("mdi-plus")]
                                    )
                                  ],
                                  1
                                )
                              ]
                            }
                          }
                        ])
                      },
                      [_vm._v(" "), _c("span", [_vm._v("Add Quotation")])]
                    ),
                    _vm._v(" "),
                    _c("v-spacer"),
                    _vm._v(" "),
                    _c("v-chip", { attrs: { small: "" } }, [
                      _vm._v(
                        _vm._s(_vm.quotations.to) +
                          " of " +
                          _vm._s(_vm.totalRecords)
                      )
                    ]),
                    _vm._v(" "),
                    _c(
                      "v-tooltip",
                      {
                        attrs: { bottom: "" },
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
                                        icon: "",
                                        disabled: _vm.isPrevBtnDisabled
                                      },
                                      on: {
                                        click: function($event) {
                                          return _vm.prevPage()
                                        }
                                      }
                                    },
                                    on
                                  ),
                                  [_c("v-icon", [_vm._v("mdi-arrow-left")])],
                                  1
                                )
                              ]
                            }
                          }
                        ])
                      },
                      [_vm._v(" "), _c("span", [_vm._v("Prev 500 Records")])]
                    ),
                    _vm._v(" "),
                    _c(
                      "v-btn",
                      {
                        attrs: { icon: "" },
                        on: {
                          click: function($event) {
                            return _vm.initialize()
                          }
                        }
                      },
                      [_c("v-icon", [_vm._v("mdi-square-medium")])],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "v-tooltip",
                      {
                        attrs: { bottom: "" },
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
                                        icon: "",
                                        disabled: _vm.isNextBtnDisabled
                                      },
                                      on: {
                                        click: function($event) {
                                          return _vm.nextPage()
                                        }
                                      }
                                    },
                                    on
                                  ),
                                  [_c("v-icon", [_vm._v("mdi-arrow-right")])],
                                  1
                                )
                              ]
                            }
                          }
                        ])
                      },
                      [_vm._v(" "), _c("span", [_vm._v("Next 500 Records")])]
                    ),
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
                    _c(
                      "v-dialog",
                      {
                        attrs: {
                          fullscreen: "",
                          "hide-overlay": "",
                          transition: "dialog-bottom-transition",
                          persistent: "",
                          "no-click-animation": true
                        },
                        model: {
                          value: _vm.dialog,
                          callback: function($$v) {
                            _vm.dialog = $$v
                          },
                          expression: "dialog"
                        }
                      },
                      [
                        _c("QuotationDialog", {
                          ref: "quotationComponent",
                          attrs: {
                            companies: _vm.companies,
                            projects: _vm.projects,
                            branches: _vm.branches,
                            categories: _vm.categories,
                            currencies: _vm.currencies,
                            users: _vm.users,
                            units: _vm.units
                          },
                          on: {
                            "signal-closeQuotationDialog":
                              _vm.closeQuotationDialog,
                            "signal-addItemToList": _vm.addItemToList,
                            "signal-changeQuotationStatusToList":
                              _vm.changeQuotationStatusToList
                          }
                        })
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
            key: "item.number",
            fn: function(ref) {
              var item = ref.item
              return [
                _c(
                  "span",
                  {
                    staticClass: "font-weight-black",
                    on: {
                      click: function($event) {
                        return _vm.oepnEditQuotationDialog(item)
                      }
                    }
                  },
                  [_vm._v(_vm._s(item.number))]
                )
              ]
            }
          },
          {
            key: "item.total_price",
            fn: function(ref) {
              var item = ref.item
              return [
                _c("div", { staticClass: "d-flex justify-space-between" }, [
                  _c("span", { staticClass: "d-block" }, [
                    _vm._v(_vm._s(item.currency))
                  ]),
                  _vm._v(" "),
                  _c("span", { staticClass: "d-block" }, [
                    _vm._v(" " + _vm._s(_vm.formatPrice(item.total_price)))
                  ])
                ])
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

/***/ "./resources/js/components/quotation/QuotationDialog.vue":
/*!***************************************************************!*\
  !*** ./resources/js/components/quotation/QuotationDialog.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _QuotationDialog_vue_vue_type_template_id_70ef0716___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./QuotationDialog.vue?vue&type=template&id=70ef0716& */ "./resources/js/components/quotation/QuotationDialog.vue?vue&type=template&id=70ef0716&");
/* harmony import */ var _QuotationDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./QuotationDialog.vue?vue&type=script&lang=js& */ "./resources/js/components/quotation/QuotationDialog.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VBtn */ "./node_modules/vuetify/lib/components/VBtn/index.js");
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/index.js");
/* harmony import */ var vuetify_lib_components_VCheckbox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VCheckbox */ "./node_modules/vuetify/lib/components/VCheckbox/index.js");
/* harmony import */ var vuetify_lib_components_VChip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuetify/lib/components/VChip */ "./node_modules/vuetify/lib/components/VChip/index.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/index.js");
/* harmony import */ var vuetify_lib_components_VDatePicker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vuetify/lib/components/VDatePicker */ "./node_modules/vuetify/lib/components/VDatePicker/index.js");
/* harmony import */ var vuetify_lib_components_VDialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vuetify/lib/components/VDialog */ "./node_modules/vuetify/lib/components/VDialog/index.js");
/* harmony import */ var vuetify_lib_components_VDivider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! vuetify/lib/components/VDivider */ "./node_modules/vuetify/lib/components/VDivider/index.js");
/* harmony import */ var vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! vuetify/lib/components/VIcon */ "./node_modules/vuetify/lib/components/VIcon/index.js");
/* harmony import */ var vuetify_lib_components_VLazy__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! vuetify/lib/components/VLazy */ "./node_modules/vuetify/lib/components/VLazy/index.js");
/* harmony import */ var vuetify_lib_components_VMenu__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! vuetify/lib/components/VMenu */ "./node_modules/vuetify/lib/components/VMenu/index.js");
/* harmony import */ var vuetify_lib_components_VSelect__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! vuetify/lib/components/VSelect */ "./node_modules/vuetify/lib/components/VSelect/index.js");
/* harmony import */ var vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! vuetify/lib/components/VTextField */ "./node_modules/vuetify/lib/components/VTextField/index.js");
/* harmony import */ var vuetify_lib_components_VTextarea__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! vuetify/lib/components/VTextarea */ "./node_modules/vuetify/lib/components/VTextarea/index.js");
/* harmony import */ var vuetify_lib_components_VToolbar__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! vuetify/lib/components/VToolbar */ "./node_modules/vuetify/lib/components/VToolbar/index.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _QuotationDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _QuotationDialog_vue_vue_type_template_id_70ef0716___WEBPACK_IMPORTED_MODULE_0__["render"],
  _QuotationDialog_vue_vue_type_template_id_70ef0716___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */






















_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VBtn: vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__["VBtn"],VCard: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCard"],VCardText: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardText"],VCardTitle: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardTitle"],VCheckbox: vuetify_lib_components_VCheckbox__WEBPACK_IMPORTED_MODULE_6__["VCheckbox"],VChip: vuetify_lib_components_VChip__WEBPACK_IMPORTED_MODULE_7__["VChip"],VCol: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_8__["VCol"],VContainer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_8__["VContainer"],VDatePicker: vuetify_lib_components_VDatePicker__WEBPACK_IMPORTED_MODULE_9__["VDatePicker"],VDialog: vuetify_lib_components_VDialog__WEBPACK_IMPORTED_MODULE_10__["VDialog"],VDivider: vuetify_lib_components_VDivider__WEBPACK_IMPORTED_MODULE_11__["VDivider"],VIcon: vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_12__["VIcon"],VLazy: vuetify_lib_components_VLazy__WEBPACK_IMPORTED_MODULE_13__["VLazy"],VMenu: vuetify_lib_components_VMenu__WEBPACK_IMPORTED_MODULE_14__["VMenu"],VRow: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_8__["VRow"],VSelect: vuetify_lib_components_VSelect__WEBPACK_IMPORTED_MODULE_15__["VSelect"],VSpacer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_8__["VSpacer"],VTextField: vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_16__["VTextField"],VTextarea: vuetify_lib_components_VTextarea__WEBPACK_IMPORTED_MODULE_17__["VTextarea"],VToolbar: vuetify_lib_components_VToolbar__WEBPACK_IMPORTED_MODULE_18__["VToolbar"],VToolbarTitle: vuetify_lib_components_VToolbar__WEBPACK_IMPORTED_MODULE_18__["VToolbarTitle"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/quotation/QuotationDialog.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/quotation/QuotationDialog.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/quotation/QuotationDialog.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_vue_loader_lib_index_js_vue_loader_options_QuotationDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vuetify-loader/lib/loader.js??ref--18-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./QuotationDialog.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/quotation/QuotationDialog.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_vue_loader_lib_index_js_vue_loader_options_QuotationDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/quotation/QuotationDialog.vue?vue&type=template&id=70ef0716&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/quotation/QuotationDialog.vue?vue&type=template&id=70ef0716& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_vue_loader_lib_index_js_vue_loader_options_QuotationDialog_vue_vue_type_template_id_70ef0716___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vuetify-loader/lib/loader.js??ref--18-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./QuotationDialog.vue?vue&type=template&id=70ef0716& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/quotation/QuotationDialog.vue?vue&type=template&id=70ef0716&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_vue_loader_lib_index_js_vue_loader_options_QuotationDialog_vue_vue_type_template_id_70ef0716___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_vue_loader_lib_index_js_vue_loader_options_QuotationDialog_vue_vue_type_template_id_70ef0716___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/quotation/QuotationLine.vue":
/*!*************************************************************!*\
  !*** ./resources/js/components/quotation/QuotationLine.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _QuotationLine_vue_vue_type_template_id_d0104d7c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./QuotationLine.vue?vue&type=template&id=d0104d7c& */ "./resources/js/components/quotation/QuotationLine.vue?vue&type=template&id=d0104d7c&");
/* harmony import */ var _QuotationLine_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./QuotationLine.vue?vue&type=script&lang=js& */ "./resources/js/components/quotation/QuotationLine.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VBtn */ "./node_modules/vuetify/lib/components/VBtn/index.js");
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/index.js");
/* harmony import */ var vuetify_lib_components_VChip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VChip */ "./node_modules/vuetify/lib/components/VChip/index.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/index.js");
/* harmony import */ var vuetify_lib_components_VDialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuetify/lib/components/VDialog */ "./node_modules/vuetify/lib/components/VDialog/index.js");
/* harmony import */ var vuetify_lib_components_VDivider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vuetify/lib/components/VDivider */ "./node_modules/vuetify/lib/components/VDivider/index.js");
/* harmony import */ var vuetify_lib_components_VForm__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vuetify/lib/components/VForm */ "./node_modules/vuetify/lib/components/VForm/index.js");
/* harmony import */ var vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! vuetify/lib/components/VIcon */ "./node_modules/vuetify/lib/components/VIcon/index.js");
/* harmony import */ var vuetify_lib_components_VSelect__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! vuetify/lib/components/VSelect */ "./node_modules/vuetify/lib/components/VSelect/index.js");
/* harmony import */ var vuetify_lib_components_VDataTable__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! vuetify/lib/components/VDataTable */ "./node_modules/vuetify/lib/components/VDataTable/index.js");
/* harmony import */ var vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! vuetify/lib/components/VTextField */ "./node_modules/vuetify/lib/components/VTextField/index.js");
/* harmony import */ var vuetify_lib_components_VTextarea__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! vuetify/lib/components/VTextarea */ "./node_modules/vuetify/lib/components/VTextarea/index.js");
/* harmony import */ var vuetify_lib_components_VToolbar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! vuetify/lib/components/VToolbar */ "./node_modules/vuetify/lib/components/VToolbar/index.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _QuotationLine_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _QuotationLine_vue_vue_type_template_id_d0104d7c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _QuotationLine_vue_vue_type_template_id_d0104d7c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */






















_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VBtn: vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__["VBtn"],VCard: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCard"],VCardActions: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardActions"],VCardText: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardText"],VCardTitle: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardTitle"],VChip: vuetify_lib_components_VChip__WEBPACK_IMPORTED_MODULE_6__["VChip"],VCol: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_7__["VCol"],VContainer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_7__["VContainer"],VDialog: vuetify_lib_components_VDialog__WEBPACK_IMPORTED_MODULE_8__["VDialog"],VDivider: vuetify_lib_components_VDivider__WEBPACK_IMPORTED_MODULE_9__["VDivider"],VForm: vuetify_lib_components_VForm__WEBPACK_IMPORTED_MODULE_10__["VForm"],VIcon: vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_11__["VIcon"],VRow: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_7__["VRow"],VSelect: vuetify_lib_components_VSelect__WEBPACK_IMPORTED_MODULE_12__["VSelect"],VSimpleTable: vuetify_lib_components_VDataTable__WEBPACK_IMPORTED_MODULE_13__["VSimpleTable"],VSpacer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_7__["VSpacer"],VTextField: vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_14__["VTextField"],VTextarea: vuetify_lib_components_VTextarea__WEBPACK_IMPORTED_MODULE_15__["VTextarea"],VToolbar: vuetify_lib_components_VToolbar__WEBPACK_IMPORTED_MODULE_16__["VToolbar"],VToolbarItems: vuetify_lib_components_VToolbar__WEBPACK_IMPORTED_MODULE_16__["VToolbarItems"],VToolbarTitle: vuetify_lib_components_VToolbar__WEBPACK_IMPORTED_MODULE_16__["VToolbarTitle"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/quotation/QuotationLine.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/quotation/QuotationLine.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/quotation/QuotationLine.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_vue_loader_lib_index_js_vue_loader_options_QuotationLine_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vuetify-loader/lib/loader.js??ref--18-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./QuotationLine.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/quotation/QuotationLine.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_vue_loader_lib_index_js_vue_loader_options_QuotationLine_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/quotation/QuotationLine.vue?vue&type=template&id=d0104d7c&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/quotation/QuotationLine.vue?vue&type=template&id=d0104d7c& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_vue_loader_lib_index_js_vue_loader_options_QuotationLine_vue_vue_type_template_id_d0104d7c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vuetify-loader/lib/loader.js??ref--18-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./QuotationLine.vue?vue&type=template&id=d0104d7c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/quotation/QuotationLine.vue?vue&type=template&id=d0104d7c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_vue_loader_lib_index_js_vue_loader_options_QuotationLine_vue_vue_type_template_id_d0104d7c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_vue_loader_lib_index_js_vue_loader_options_QuotationLine_vue_vue_type_template_id_d0104d7c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/quotation/QuotationOption.vue":
/*!***************************************************************!*\
  !*** ./resources/js/components/quotation/QuotationOption.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _QuotationOption_vue_vue_type_template_id_155c33c3___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./QuotationOption.vue?vue&type=template&id=155c33c3& */ "./resources/js/components/quotation/QuotationOption.vue?vue&type=template&id=155c33c3&");
/* harmony import */ var _QuotationOption_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./QuotationOption.vue?vue&type=script&lang=js& */ "./resources/js/components/quotation/QuotationOption.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VBtn */ "./node_modules/vuetify/lib/components/VBtn/index.js");
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/index.js");
/* harmony import */ var vuetify_lib_components_VCheckbox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VCheckbox */ "./node_modules/vuetify/lib/components/VCheckbox/index.js");
/* harmony import */ var vuetify_lib_components_VSelect__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuetify/lib/components/VSelect */ "./node_modules/vuetify/lib/components/VSelect/index.js");
/* harmony import */ var vuetify_lib_components_VDataTable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuetify/lib/components/VDataTable */ "./node_modules/vuetify/lib/components/VDataTable/index.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/index.js");
/* harmony import */ var vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vuetify/lib/components/VTextField */ "./node_modules/vuetify/lib/components/VTextField/index.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _QuotationOption_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _QuotationOption_vue_vue_type_template_id_155c33c3___WEBPACK_IMPORTED_MODULE_0__["render"],
  _QuotationOption_vue_vue_type_template_id_155c33c3___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */











_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VBtn: vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__["VBtn"],VCard: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCard"],VCardActions: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardActions"],VCardText: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardText"],VCardTitle: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardTitle"],VCheckbox: vuetify_lib_components_VCheckbox__WEBPACK_IMPORTED_MODULE_6__["VCheckbox"],VSelect: vuetify_lib_components_VSelect__WEBPACK_IMPORTED_MODULE_7__["VSelect"],VSimpleTable: vuetify_lib_components_VDataTable__WEBPACK_IMPORTED_MODULE_8__["VSimpleTable"],VSpacer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_9__["VSpacer"],VTextField: vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_10__["VTextField"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/quotation/QuotationOption.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/quotation/QuotationOption.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/quotation/QuotationOption.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_vue_loader_lib_index_js_vue_loader_options_QuotationOption_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vuetify-loader/lib/loader.js??ref--18-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./QuotationOption.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/quotation/QuotationOption.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_vue_loader_lib_index_js_vue_loader_options_QuotationOption_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/quotation/QuotationOption.vue?vue&type=template&id=155c33c3&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/quotation/QuotationOption.vue?vue&type=template&id=155c33c3& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_vue_loader_lib_index_js_vue_loader_options_QuotationOption_vue_vue_type_template_id_155c33c3___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vuetify-loader/lib/loader.js??ref--18-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./QuotationOption.vue?vue&type=template&id=155c33c3& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/quotation/QuotationOption.vue?vue&type=template&id=155c33c3&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_vue_loader_lib_index_js_vue_loader_options_QuotationOption_vue_vue_type_template_id_155c33c3___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_vue_loader_lib_index_js_vue_loader_options_QuotationOption_vue_vue_type_template_id_155c33c3___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/quotation/QuotationPdfDocument.vue":
/*!********************************************************************!*\
  !*** ./resources/js/components/quotation/QuotationPdfDocument.vue ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _QuotationPdfDocument_vue_vue_type_template_id_d7f60262___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./QuotationPdfDocument.vue?vue&type=template&id=d7f60262& */ "./resources/js/components/quotation/QuotationPdfDocument.vue?vue&type=template&id=d7f60262&");
/* harmony import */ var _QuotationPdfDocument_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./QuotationPdfDocument.vue?vue&type=script&lang=js& */ "./resources/js/components/quotation/QuotationPdfDocument.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VBtn */ "./node_modules/vuetify/lib/components/VBtn/index.js");
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/index.js");
/* harmony import */ var vuetify_lib_components_VDivider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VDivider */ "./node_modules/vuetify/lib/components/VDivider/index.js");
/* harmony import */ var vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuetify/lib/components/VIcon */ "./node_modules/vuetify/lib/components/VIcon/index.js");
/* harmony import */ var vuetify_lib_components_VDataTable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuetify/lib/components/VDataTable */ "./node_modules/vuetify/lib/components/VDataTable/index.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/index.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _QuotationPdfDocument_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _QuotationPdfDocument_vue_vue_type_template_id_d7f60262___WEBPACK_IMPORTED_MODULE_0__["render"],
  _QuotationPdfDocument_vue_vue_type_template_id_d7f60262___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */









_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VBtn: vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__["VBtn"],VCard: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCard"],VCardText: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardText"],VCardTitle: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardTitle"],VDivider: vuetify_lib_components_VDivider__WEBPACK_IMPORTED_MODULE_6__["VDivider"],VIcon: vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_7__["VIcon"],VSimpleTable: vuetify_lib_components_VDataTable__WEBPACK_IMPORTED_MODULE_8__["VSimpleTable"],VSpacer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_9__["VSpacer"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/quotation/QuotationPdfDocument.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/quotation/QuotationPdfDocument.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/quotation/QuotationPdfDocument.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_vue_loader_lib_index_js_vue_loader_options_QuotationPdfDocument_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vuetify-loader/lib/loader.js??ref--18-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./QuotationPdfDocument.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/quotation/QuotationPdfDocument.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_vue_loader_lib_index_js_vue_loader_options_QuotationPdfDocument_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/quotation/QuotationPdfDocument.vue?vue&type=template&id=d7f60262&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/components/quotation/QuotationPdfDocument.vue?vue&type=template&id=d7f60262& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_vue_loader_lib_index_js_vue_loader_options_QuotationPdfDocument_vue_vue_type_template_id_d7f60262___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vuetify-loader/lib/loader.js??ref--18-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./QuotationPdfDocument.vue?vue&type=template&id=d7f60262& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/quotation/QuotationPdfDocument.vue?vue&type=template&id=d7f60262&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_vue_loader_lib_index_js_vue_loader_options_QuotationPdfDocument_vue_vue_type_template_id_d7f60262___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_vue_loader_lib_index_js_vue_loader_options_QuotationPdfDocument_vue_vue_type_template_id_d7f60262___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/quotation/QuotationStatusDescription.vue":
/*!**************************************************************************!*\
  !*** ./resources/js/components/quotation/QuotationStatusDescription.vue ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _QuotationStatusDescription_vue_vue_type_template_id_776a654c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./QuotationStatusDescription.vue?vue&type=template&id=776a654c& */ "./resources/js/components/quotation/QuotationStatusDescription.vue?vue&type=template&id=776a654c&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vuetify/lib/components/VBtn */ "./node_modules/vuetify/lib/components/VBtn/index.js");
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/index.js");
/* harmony import */ var vuetify_lib_components_VChip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VChip */ "./node_modules/vuetify/lib/components/VChip/index.js");
/* harmony import */ var vuetify_lib_components_VDivider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VDivider */ "./node_modules/vuetify/lib/components/VDivider/index.js");
/* harmony import */ var vuetify_lib_components_VDataTable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuetify/lib/components/VDataTable */ "./node_modules/vuetify/lib/components/VDataTable/index.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/index.js");

var script = {}


/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _QuotationStatusDescription_vue_vue_type_template_id_776a654c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _QuotationStatusDescription_vue_vue_type_template_id_776a654c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */










_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_2___default()(component, {VBtn: vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_3__["VBtn"],VCard: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_4__["VCard"],VCardActions: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_4__["VCardActions"],VCardText: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_4__["VCardText"],VCardTitle: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_4__["VCardTitle"],VChip: vuetify_lib_components_VChip__WEBPACK_IMPORTED_MODULE_5__["VChip"],VDivider: vuetify_lib_components_VDivider__WEBPACK_IMPORTED_MODULE_6__["VDivider"],VSimpleTable: vuetify_lib_components_VDataTable__WEBPACK_IMPORTED_MODULE_7__["VSimpleTable"],VSpacer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_8__["VSpacer"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/quotation/QuotationStatusDescription.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/quotation/QuotationStatusDescription.vue?vue&type=template&id=776a654c&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/components/quotation/QuotationStatusDescription.vue?vue&type=template&id=776a654c& ***!
  \*********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_vue_loader_lib_index_js_vue_loader_options_QuotationStatusDescription_vue_vue_type_template_id_776a654c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vuetify-loader/lib/loader.js??ref--18-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./QuotationStatusDescription.vue?vue&type=template&id=776a654c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/quotation/QuotationStatusDescription.vue?vue&type=template&id=776a654c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_vue_loader_lib_index_js_vue_loader_options_QuotationStatusDescription_vue_vue_type_template_id_776a654c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_vue_loader_lib_index_js_vue_loader_options_QuotationStatusDescription_vue_vue_type_template_id_776a654c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/Quotation.vue":
/*!******************************************!*\
  !*** ./resources/js/views/Quotation.vue ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Quotation_vue_vue_type_template_id_4728fd06___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Quotation.vue?vue&type=template&id=4728fd06& */ "./resources/js/views/Quotation.vue?vue&type=template&id=4728fd06&");
/* harmony import */ var _Quotation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Quotation.vue?vue&type=script&lang=js& */ "./resources/js/views/Quotation.vue?vue&type=script&lang=js&");
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
/* harmony import */ var vuetify_lib_components_VTooltip__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! vuetify/lib/components/VTooltip */ "./node_modules/vuetify/lib/components/VTooltip/index.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Quotation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Quotation_vue_vue_type_template_id_4728fd06___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Quotation_vue_vue_type_template_id_4728fd06___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */












_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VBtn: vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__["VBtn"],VChip: vuetify_lib_components_VChip__WEBPACK_IMPORTED_MODULE_5__["VChip"],VDataTable: vuetify_lib_components_VDataTable__WEBPACK_IMPORTED_MODULE_6__["VDataTable"],VDialog: vuetify_lib_components_VDialog__WEBPACK_IMPORTED_MODULE_7__["VDialog"],VDivider: vuetify_lib_components_VDivider__WEBPACK_IMPORTED_MODULE_8__["VDivider"],VIcon: vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_9__["VIcon"],VSpacer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_10__["VSpacer"],VTextField: vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_11__["VTextField"],VToolbar: vuetify_lib_components_VToolbar__WEBPACK_IMPORTED_MODULE_12__["VToolbar"],VToolbarTitle: vuetify_lib_components_VToolbar__WEBPACK_IMPORTED_MODULE_12__["VToolbarTitle"],VTooltip: vuetify_lib_components_VTooltip__WEBPACK_IMPORTED_MODULE_13__["VTooltip"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Quotation.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Quotation.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./resources/js/views/Quotation.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Quotation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vuetify-loader/lib/loader.js??ref--18-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Quotation.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Quotation.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Quotation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Quotation.vue?vue&type=template&id=4728fd06&":
/*!*************************************************************************!*\
  !*** ./resources/js/views/Quotation.vue?vue&type=template&id=4728fd06& ***!
  \*************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Quotation_vue_vue_type_template_id_4728fd06___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vuetify-loader/lib/loader.js??ref--18-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Quotation.vue?vue&type=template&id=4728fd06& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Quotation.vue?vue&type=template&id=4728fd06&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Quotation_vue_vue_type_template_id_4728fd06___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Quotation_vue_vue_type_template_id_4728fd06___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);