(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Work"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Payment/RelatedTransaction.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js??ref--18-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Payment/RelatedTransaction.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
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


/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      transactionsDialog: false,
      relatedTransaction: {
        bank: null,
        created_at: null,
        currency: null,
        deposit_amount: 0,
        description: null,
        exchange_rate: 0,
        exchanged_amount: 0,
        id: null,
        received_date: null,
        sale_order_number: null,
        updated_at: null
      },
      transactions: [],
      selected: [],
      headers: [{
        text: "Date",
        value: "received_date"
      }, {
        text: "Deposit Amount",
        value: "deposit_amount",
        align: "center"
      }, {
        text: "bank",
        value: "bank",
        align: "center"
      }, {
        text: "currency",
        value: "currency",
        align: "center"
      }, {
        text: "Status",
        value: "status",
        align: "center"
      }]
    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapState"])("work", ["workId"])),
  methods: {
    initialize: function initialize() {
      var _this = this;

      axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/works/" + this.workId + "/related-transactions").then(function (response) {
        console.log(response.data);
        _this.relatedTransaction = response.data.relatedTransaction;
      });
    },
    openTransactionDialog: function openTransactionDialog() {
      var _this2 = this;

      this.transactionsDialog = true;
      axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/works/" + this.workId + "/search-transactions").then(function (response) {
        _this2.transactions = response.data.transactions;
      });
    },
    closeTransactionDialog: function closeTransactionDialog() {
      this.transactionsDialog = false;
      this.selected = [];
    },
    connectTransaction: function connectTransaction() {
      var _this3 = this;

      axios__WEBPACK_IMPORTED_MODULE_0___default.a.put("/api/works/" + this.workId + "/connect-transactions", {
        id: this.selected[0].id
      }).then(function (response) {
        console.log(response.data);
        _this3.relatedTransaction = Object.assign({}, response.data.transaction);

        _this3.$store.dispatch("SHOW_GLOBAL_SNACKBAR", {
          text: response.data.message
        });

        _this3.closeTransactionDialog();
      });
    },
    disconnectTransaction: function disconnectTransaction(relatedTransactionId) {
      var _this4 = this;

      axios__WEBPACK_IMPORTED_MODULE_0___default.a.put("/api/works/" + this.workId + "/disconnect-transactions", this.relatedTransactionId).then(function (response) {
        _this4.relatedTransaction = Object.assign({});

        _this4.$store.dispatch("SHOW_GLOBAL_SNACKBAR", {
          text: response.data.message
        });
      });
    },
    resetRelatedTransaction: function resetRelatedTransaction() {
      this.transactions = [];
      this.relatedTransaction = [];
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/work/InvoiceDialog.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js??ref--18-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/work/InvoiceDialog.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mixins_subProjects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../mixins/subProjects */ "./resources/js/mixins/subProjects.js");
/* harmony import */ var _mixins_getPeople__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../mixins/getPeople */ "./resources/js/mixins/getPeople.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _common_File__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/File */ "./resources/js/components/common/File.vue");
/* harmony import */ var _common_Comment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/Comment */ "./resources/js/components/common/Comment.vue");
/* harmony import */ var _common_Attachment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/Attachment */ "./resources/js/components/common/Attachment.vue");
/* harmony import */ var _components_work_InvoiceOption__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/work/InvoiceOption */ "./resources/js/components/work/InvoiceOption.vue");
/* harmony import */ var _components_work_InvoiceLine__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/work/InvoiceLine */ "./resources/js/components/work/InvoiceLine.vue");
/* harmony import */ var _components_work_InvoiceReminder__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/work/InvoiceReminder */ "./resources/js/components/work/InvoiceReminder.vue");
/* harmony import */ var _components_work_InvoicePdfDocument__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/work/InvoicePdfDocument */ "./resources/js/components/work/InvoicePdfDocument.vue");
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












/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    File: _common_File__WEBPACK_IMPORTED_MODULE_5__["default"],
    Comment: _common_Comment__WEBPACK_IMPORTED_MODULE_6__["default"],
    InvoiceOption: _components_work_InvoiceOption__WEBPACK_IMPORTED_MODULE_8__["default"],
    InvoiceLine: _components_work_InvoiceLine__WEBPACK_IMPORTED_MODULE_9__["default"],
    InvoiceReminder: _components_work_InvoiceReminder__WEBPACK_IMPORTED_MODULE_10__["default"],
    InvoicePdfDocument: _components_work_InvoicePdfDocument__WEBPACK_IMPORTED_MODULE_11__["default"]
  },
  props: ["companies", "currencies", "units", "banks", "users"],
  data: function data() {
    return {
      errors: [],
      dateCalendar: false,
      requestors: [],
      optionDialog: false,
      managers: [],
      manager: null,
      editPermission: "edit-invoice",
      approvePermission: "approve-invoice",
      exchangeRate: 0,
      invoice: {
        id: null,
        number: null,
        date: null,
        payment_due_date: null,
        payment_term: null,
        deliver_to: null,
        total_price: 0,
        tax: 0,
        discount: 0,
        grand_total: 0,
        shipping_fee: 0,
        requestor_id: null,
        originator_id: null,
        work_id: null,
        bank_id: null,
        project_number: null
      },
      defaultInvoice: {
        id: null,
        number: null,
        date: null,
        payment_due_date: null,
        payment_term: null,
        deliver_to: null,
        total_price: 0,
        tax: 0,
        discount: 0,
        grand_total: 0,
        shipping_fee: 0,
        requestor_id: null,
        originator_id: null,
        work_id: null,
        bank_id: null,
        project_number: null
      }
    };
  },
  computed: _objectSpread({
    isFieldDisabled: function isFieldDisabled() {
      if (this.invoiceMode === "view") return true;
      return false;
    },
    isEditButtonDisabled: function isEditButtonDisabled() {
      if (this.workStatus === "OPEN" && this.permissions.includes("edit-work")) return false;
      return true;
    },
    payment_due_date: function payment_due_date() {
      if (this.invoice.payment_term && this.invoice.date) {
        var invoicedDate = moment__WEBPACK_IMPORTED_MODULE_4___default()(this.invoice.date);
        var dueDate = invoicedDate.add(this.invoice.payment_term, "days").format("YYYY-MM-DD");
        this.invoice.payment_due_date = dueDate;
        return dueDate;
      }
    }
  }, Object(vuex__WEBPACK_IMPORTED_MODULE_3__["mapState"])("auth", ["permissions"]), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_3__["mapState"])("work", ["workId", "workIndex", "workStatus", "workMode", "workCompany"]), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_3__["mapState"])("invoice", ["invoiceId", "invoiceMode", "invoiceOption"]), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_3__["mapState"])("invoice_line", ["invoiceLines"])),
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_3__["mapMutations"])("work", ["SET_WORK_ID", "SET_WORK_STATUS", "SET_WORK_INDEX", "SET_WORK_MODE", "SET_WORK_PHASE"]), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_3__["mapMutations"])("invoice", ["SET_INVOICE_MODE", "SET_INVOICE_ID", "SET_INVOICE_OPTION", "RESET_INVOICE", "SET_LINE_TOTAL"]), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_3__["mapMutations"])("invoice_line", ["INIT_INVOICE_LINE_LIST", "RESET_INVOICE_LINE_LIST"]), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_3__["mapMutations"])("attachments", ["INIT_ATTACHMENT_FILE_LIST", "RESET_ATTACHMENT_FILE_LIST"]), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_3__["mapActions"])("invoice", ["SAVE_INVOICE_OPTION"]), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_3__["mapActions"])("invoice_line", ["SAVE_INVOICE_LINES"]), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_3__["mapActions"])("attachments", ["UPLOAD_ATTACHMENT_FILES"]), {
    initialize: function initialize() {
      var _this = this;

      if (this.invoiceId) {
        this.SET_INVOICE_MODE("view");
        axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/invoices/" + this.invoiceId).then(function (response) {
          console.log(response.data);
          _this.invoice = response.data.invoice;
          _this.manager = response.data.manager;
          _this.managers = response.data.managers;
          _this.requestors = response.data.requestors;

          _this.$refs.pdfDocumentComponent.initialize();

          _this.SET_INVOICE_OPTION(response.data.option);

          _this.INIT_INVOICE_LINE_LIST(response.data.invoiceLines);
        });
        setTimeout(function () {
          _this.$refs.filesComponent.initFile();

          _this.$refs.commentsComponent.initComment();

          _this.$refs.invoiceIesReminderComponent.initInvoiceReminderList();

          _this.$refs.invoiceClientReminderComponent.initInvoiceReminderList();
        }, 300);
      } else {
        this.SET_INVOICE_MODE("create");
        axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/invoices/company/" + this.workCompany).then(function (response) {
          console.log(response.data);
          _this.requestors = response.data.requestors;
          _this.managers = response.data.managers;
        });
      }
    },
    saveInvoice: function saveInvoice() {
      var _this2 = this;

      this.invoice.work_id = this.workId;
      this.invoice.total_price = this.$refs.invoiceLineComponent.invoiceTotalPrice;
      this.invoice.discount = this.invoiceOption.discount;
      this.invoice.shipping_fee = this.invoiceOption.shipping_fee;
      this.invoice.tax = this.$refs.invoiceLineComponent.invoiceTax;
      this.invoice.grand_total = this.$refs.invoiceLineComponent.invoiceGrandTotal;
      axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("/api/invoices", {
        invoice: this.invoice,
        manager: this.manager
      }).then(function (response) {
        console.log(response.data);
        _this2.invoice = response.data.invoice;
        _this2.manager = response.data.manager.id;

        _this2.SET_INVOICE_ID(response.data.invoice.id);

        _this2.SET_INVOICE_MODE("view");

        _this2.SAVE_INVOICE_OPTION(response.data.invoice.id);

        _this2.SAVE_INVOICE_LINES(response.data.invoice.id);

        _this2.SET_WORK_PHASE("SENT INV");

        _this2.$emit("signal-addItemToList", {
          addType: "updateItem",
          item: response.data.work
        });
      })["catch"](function (error) {
        console.log(error);
        _this2.errors = error.response.data.errors;
      });
    },
    updateInvoice: function updateInvoice() {
      var _this3 = this;

      this.invoice.total_price = this.$refs.invoiceLineComponent.invoiceTotalPrice;
      this.invoice.discount = this.invoiceOption.discount;
      this.invoice.shipping_fee = this.invoiceOption.shipping_fee;
      this.invoice.tax = this.$refs.invoiceLineComponent.invoiceTax;
      this.invoice.grand_total = this.$refs.invoiceLineComponent.invoiceGrandTotal;
      console.log("Manager =>", this.manager);
      axios__WEBPACK_IMPORTED_MODULE_0___default.a.put("/api/invoices/" + this.invoiceId, {
        invoice: this.invoice,
        manager: this.manager
      }).then(function (response) {
        console.log(response.data);
        _this3.invoice = response.data.invoice;

        _this3.SET_INVOICE_MODE("view");

        _this3.SAVE_INVOICE_LINES(response.data.invoice.id);

        _this3.$emit("signal-addItemToList", {
          addType: "updateItem",
          item: response.data.work
        });
      })["catch"](function (error) {
        console.log(error);
        _this3.errors = error.response.data.errors;
      });
    },
    editInvoice: function editInvoice() {
      this.SET_INVOICE_MODE("edit");
    },
    cancelInvoice: function cancelInvoice() {
      this.initialize();
      this.SET_INVOICE_MODE("view");
    },
    getReceivers: function getReceivers(model, model_id) {
      var _this4 = this;

      this.getEmployees(model, model_id).then(function (e) {
        return _this4.requestors = e;
      });
    },
    selectProject: function selectProject(project_id) {
      var _this5 = this;

      this.getSubProjects(project_id).then(function (e) {
        return _this5.subProjects = e;
      });
    },
    openOptionDialog: function openOptionDialog() {
      this.optionDialog = true;
    },
    closeOptionDialog: function closeOptionDialog() {
      this.optionDialog = false;
    },
    resetInvoice: function resetInvoice() {
      this.invoice = Object.assign({}, this.defaultInvoice);
      this.errors = [];
      this.requestors = [];
      this.RESET_INVOICE();
      this.RESET_INVOICE_LINE_LIST();
      this.RESET_ATTACHMENT_FILE_LIST();
      this.$refs.commentsComponent.resetComment();
      this.$refs.filesComponent.resetFile();
    }
  }),
  mixins: [_mixins_getPeople__WEBPACK_IMPORTED_MODULE_2__["getPeople"], _mixins_subProjects__WEBPACK_IMPORTED_MODULE_1__["getSubProjects"]]
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/work/InvoiceLine.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js??ref--18-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/work/InvoiceLine.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: ["units", "permissions", "editPermission", "approvePermission", "workId"],
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
      if ( // this.workStatus === "OPENED" &&
      this.permissions.includes("edit-work") && (this.invoiceMode === "edit" || this.invoiceMode === "create")) {
        return false;
      } else {
        return true;
      }
    },
    invoiceTotalPrice: function invoiceTotalPrice() {
      return this.invoiceLines.reduce(function (acc, item) {
        return acc + parseFloat(item.price * item.quantity);
      }, 0);
    },
    invoiceTax: function invoiceTax() {
      if (this.invoiceOption.is_use_tax) {
        return parseFloat((this.invoiceTotalPrice + this.invoiceOption.shipping_fee - this.invoiceOption.discount) * 0.1);
      } else {
        return 0;
      }
    },
    invoiceGrandTotal: function invoiceGrandTotal() {
      return parseFloat(this.invoiceTotalPrice + this.invoiceOption.shipping_fee - this.invoiceOption.discount + this.invoiceTax);
    }
  }, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])("work", ["workStatus"]), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])("invoice", ["invoice", "invoiceMode", "invoiceOption"]), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])("invoice_line", ["invoiceLines", "invoiceLine"])),
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapMutations"])("invoice_line", ["INIT_INVOICE_LINE_LIST", "ADD_INVOICE_LINE", "EDIT_INVOICE_LINE", "UPDATE_INVOICE_LINE", "RESET_INVOICE_LINE", "REMOVE_INVOICE_LINE"]), {
    closeItemDialog: function closeItemDialog() {
      var _this = this;

      this.itemDialog = false;
      setTimeout(function () {
        _this.RESET_INVOICE_LINE();
      }, 300);
      this.editedItemIndex = -1;
    },
    addItem: function addItem() {
      if (this.editedItemIndex > -1) {
        this.UPDATE_INVOICE_LINE(this.editedItemIndex);
      } else {
        this.ADD_INVOICE_LINE();
      }

      this.closeItemDialog();
    },
    editItem: function editItem(item) {
      this.editedItemIndex = this.invoiceLines.indexOf(item);
      this.EDIT_INVOICE_LINE(item);
      this.itemDialog = true;
    },
    removeItem: function removeItem(item) {
      this.REMOVE_INVOICE_LINE(item);
    },
    loadSaleOrderLines: function loadSaleOrderLines() {
      var _this2 = this;

      axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("/api/invoices/work/" + this.workId + "/sale-order-lines").then(function (response) {
        var message = confirm("Would you like to enter PO Lines?");

        if (message) {
          _this2.RESET_INVOICE_LINE();

          _this2.INIT_INVOICE_LINE_LIST(response.data.saleOrderLines);
        }
      });
    },
    formatPrice: function formatPrice(value) {
      var val = (value / 1).toFixed(2).replace(",", ".");
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
  })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/work/InvoiceOption.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js??ref--18-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/work/InvoiceOption.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************/
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


/* harmony default export */ __webpack_exports__["default"] = ({
  props: [],
  data: function data() {
    return {
      formTypes: [{
        name: "Default Form",
        type: "default"
      }, {
        name: "Baker Hughes Form",
        type: "baker-hughes"
      }, {
        name: "lisa",
        type: "lisa"
      }]
    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])("invoice", ["invoiceOption", "invoiceId"])),
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapMutations"])("invoice", ["SET_INVOICE_OPTION"]), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])("invoice", ["SAVE_INVOICE_OPTION", "UPDATE_INVOICE_OPTION"]), {
    setOption: function setOption() {
      this.SET_INVOICE_OPTION(this.invoiceOption);
      this.closeOptionDialog();
    },
    saveInvoiceOption: function saveInvoiceOption() {
      this.SAVE_INVOICE_OPTION(this.invoiceId);
    },
    updateInvoiceOption: function updateInvoiceOption() {
      this.UPDATE_INVOICE_OPTION(this.invoiceId);
      this.closeOptionDialog();
    },
    closeOptionDialog: function closeOptionDialog() {
      this.$emit("signal-closeOptionDialog");
    }
  })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/work/InvoicePdfDocument.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js??ref--18-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/work/InvoicePdfDocument.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************************/
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
//


/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["permissions", "editPermission", "approvePermission", "currentMode", "formType", "formFolder", "exchangeRate", "totalPrice"],
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
        invoice_id: null,
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
        invoice_id: null,
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
      if (this.currentMode === "view" && this.permissions.includes(this.approvePermission) || this.exchangeRate * this.totalPrice < 500000) {
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
  }, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])("invoice", ["invoiceId"])),
  methods: {
    initialize: function initialize() {
      var _this = this;

      axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("/api/invoices/" + this.invoiceId + "/pdf-documents").then(function (response) {
        console.log(response.data);
        _this.pdfDocuments = response.data.pdfDocuments;
      });
    },
    generatePdfDocument: function generatePdfDocument() {
      var _this2 = this;

      axios__WEBPACK_IMPORTED_MODULE_1___default.a.post("/api/invoices/" + this.invoiceId + "/pdf-documents").then(function (response) {
        _this2.pdfDocuments.push(response.data.pdfDocument);

        _this2.$store.dispatch("SHOW_GLOBAL_SNACKBAR", {
          text: response.data.message
        });

        console.log("PDF Items =>", _this2.pdfDocuments);
      })["catch"](function (error) {
        console.log(error);
      });
    },
    updatePdfDocument: function updatePdfDocument(item) {
      var _this3 = this;

      var index = this.pdfDocuments.indexOf(item);
      axios__WEBPACK_IMPORTED_MODULE_1___default.a.put("/api/invoices/" + this.invoiceId + "/pdf-documents/").then(function (response) {
        _this3.$store.dispatch("SHOW_GLOBAL_SNACKBAR", {
          text: response.data.message
        });
      })["catch"](function (error) {});
    },
    changeProcess: function changeProcess(item, action, overwrite, process, status) {
      var _this4 = this;

      var index = this.pdfDocuments.indexOf(item);
      axios__WEBPACK_IMPORTED_MODULE_1___default.a.put("/api/invoices/" + this.invoiceId + "/pdf-documents/" + item.id + "/change-status", {
        action: action,
        overwrite: overwrite,
        process: process,
        status: status
      }).then(function (response) {
        console.log(response.data);
        _this4.pdfDocuments[index].process = response.data.process;

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
    downloadDocumentFile: function downloadDocumentFile(pdfDocumentId) {
      var _this5 = this;

      axios__WEBPACK_IMPORTED_MODULE_1___default()({
        method: "get",
        url: "/api/invoices/" + this.invoiceId + "/pdf-documents/" + pdfDocumentId + "/download",
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
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/work/InvoiceReminder.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js??ref--18-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/work/InvoiceReminder.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
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


/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["people", "title", "updateUrl", "initUrl", "number"],
  data: function data() {
    return {
      reminders: []
    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapState"])("invoice", ["invoiceId"])),
  methods: {
    initInvoiceReminderList: function initInvoiceReminderList() {
      var _this = this;

      axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/invoices/" + this.invoiceId + "/" + this.initUrl).then(function (response) {
        _this.reminders = response.data.reminders;
      });
    },
    update: function update() {
      var _this2 = this;

      axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("/api/invoices/" + this.invoiceId + "/" + this.updateUrl, {
        reminders: this.reminders,
        invoice_number: this.number
      }).then(function (response) {
        _this2.$store.dispatch("SHOW_GLOBAL_SNACKBAR", {
          text: response.data.message
        });
      });
    },
    remove: function remove(item) {
      var index = this.reminders.indexOf(item);
      if (index >= 0) this.reminders.splice(index, 1);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/work/PaymentDialog.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js??ref--18-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/work/PaymentDialog.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _common_File__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/File */ "./resources/js/components/common/File.vue");
/* harmony import */ var _common_Comment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/Comment */ "./resources/js/components/common/Comment.vue");
/* harmony import */ var _common_Attachment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/Attachment */ "./resources/js/components/common/Attachment.vue");
/* harmony import */ var _components_Payment_RelatedTransaction__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Payment/RelatedTransaction */ "./resources/js/components/Payment/RelatedTransaction.vue");
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






/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    File: _common_File__WEBPACK_IMPORTED_MODULE_2__["default"],
    Comment: _common_Comment__WEBPACK_IMPORTED_MODULE_3__["default"],
    Attachment: _common_Attachment__WEBPACK_IMPORTED_MODULE_4__["default"],
    RelatedTransaction: _components_Payment_RelatedTransaction__WEBPACK_IMPORTED_MODULE_5__["default"]
  },
  props: ["companies", "currencies", "paymentMethods", "banks"],
  data: function data() {
    return {
      errors: [],
      dateCalendar: false,
      optionDialog: false,
      payment: {
        id: null,
        work_id: null,
        date: null,
        company_id: null,
        payment_method: null,
        bank: null,
        currency: null,
        total_price: 0,
        discount: 0,
        shipping_fee: 0,
        tax: 0,
        grand_total: 0,
        exchange_rate: 1,
        exchanged_total_price: 0
      },
      defaultpayment: {
        id: null,
        work_id: null,
        date: null,
        company_id: null,
        payment_method: null,
        bank: null,
        currency: null,
        total_price: 0,
        discount: 0,
        shipping_fee: 0,
        tax: 0,
        grand_total: 0,
        exchange_rate: 1,
        exchanged_total_price: 0
      }
    };
  },
  computed: _objectSpread({
    isFieldDisabled: function isFieldDisabled() {
      if (this.paymentMode === "view") return true;
      return false;
    },
    isEditButtonDisabled: function isEditButtonDisabled() {
      if (this.workStatus === "OPEN" && this.permissions.includes("edit-work")) return false;
      return true;
    },
    grand_total: {
      get: function get() {
        this.payment.grand_total = this.payment.total_price + this.payment.shipping_fee + this.payment.tax - this.payment.discount;
        return this.payment.grand_total;
      },
      set: function set(value) {}
    },
    exchanged_total_price: {
      get: function get() {
        this.payment.exchanged_total_price = this.payment.grand_total * this.payment.exchange_rate;
        return this.payment.exchanged_total_price;
      },
      set: function set(value) {}
    }
  }, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapState"])("auth", ["permissions"]), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapState"])("work", ["workId", "workIndex", "workStatus", "workMode", "workPhase", "workCompany", "workProject", "workSubProject", "workCategory", "workCurrency"]), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapState"])("invoice", ["invoiceId"]), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapState"])("payment", ["paymentId", "paymentMode"])),
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapMutations"])("work", ["SET_WORK_ID", "SET_WORK_STATUS", "SET_WORK_INDEX", "SET_WORK_MODE", "SET_WORK_PHASE"]), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapMutations"])("payment", ["SET_PAYMENT_MODE", "SET_PAYMENT_ID", "RESET_PAYMENT"]), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapMutations"])("attachments", ["INIT_ATTACHMENT_FILE_LIST", "RESET_ATTACHMENT_FILE_LIST"]), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapActions"])("attachments", ["UPLOAD_ATTACHMENT_FILES"]), {
    initialize: function initialize() {
      var _this = this;

      this.SET_PAYMENT_MODE("view");

      if (this.paymentId) {
        axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/payments/" + this.paymentId).then(function (response) {
          _this.payment = response.data.payment;
        });
        setTimeout(function () {
          _this.$refs.filesComponent.initFile();

          _this.$refs.commentsComponent.initComment();

          _this.$refs.transactionComponent.initialize();
        }, 300);
      } else {
        this.SET_PAYMENT_MODE("create");

        if (this.invoiceId) {
          axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/payments/work/" + this.workId).then(function (response) {
            _this.payment = Object.assign({}, response.data.payment);
          });
        }
      }
    },
    savePayment: function savePayment() {
      var _this2 = this;

      this.payment.work_id = this.workId;
      axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("/api/payments", this.payment).then(function (response) {
        _this2.payment = response.data.payment;

        _this2.SET_PAYMENT_ID(response.data.payment.id);

        _this2.SET_PAYMENT_MODE("view");

        _this2.SET_WORK_PHASE("PAYMENT");

        _this2.$emit("signal-addItemToList", {
          addType: "updateItem",
          item: response.data.work
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
    updatePayment: function updatePayment() {
      var _this3 = this;

      axios__WEBPACK_IMPORTED_MODULE_0___default.a.put("/api/payments/" + this.paymentId, this.payment).then(function (response) {
        console.log(response.data);
        _this3.payment = response.data.payment;

        _this3.SET_PAYMENT_MODE("view");

        _this3.$emit("signal-addItemToList", {
          addType: "updateItem",
          item: response.data.work
        });
      })["catch"](function (error) {
        console.log(error);
        _this3.errors = error.response.data.errors;

        _this3.$store.dispatch("SHOW_GLOBAL_SNACKBAR", {
          text: error.response.data.message,
          color: "red"
        });
      });
    },
    editPayment: function editPayment() {
      this.SET_PAYMENT_MODE("edit");
    },
    cancelPayment: function cancelPayment() {
      this.initialize();
      this.SET_PAYMENT_MODE("view");
    },
    resetPayment: function resetPayment() {
      this.payment = Object.assign({}, this.defaultPayment);
      this.errors = [];
      this.RESET_PAYMENT(); // this.RESET_ATTACHMENT_FILE_LIST()

      this.$refs.commentsComponent.resetComment();
      this.$refs.filesComponent.resetFile();
    }
  })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/work/RelatedQuotation.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js??ref--18-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/work/RelatedQuotation.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
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


/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["company_id", "sub_project_id"],
  data: function data() {
    return {
      quotationsDialog: false,
      relatedQuotations: [],
      quotations: [],
      selected: [],
      headers: [{
        text: "QT Number",
        value: "number"
      }, {
        text: "Client",
        value: "company",
        align: "center"
      }, {
        text: "Project",
        value: "project",
        align: "center"
      }, {
        text: "Sub Project",
        value: "sub_project",
        align: "center"
      }, {
        text: "Status",
        value: "status",
        align: "center"
      }]
    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapState"])("work", ["workId"])),
  methods: {
    initialize: function initialize() {
      var _this = this;

      axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/works/" + this.workId + "/related-quotations").then(function (response) {
        _this.relatedQuotations = response.data.relatedQuotations;
      });
    },
    openQuotationsDialog: function openQuotationsDialog() {
      var _this2 = this;

      this.quotationsDialog = true;
      axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/works/" + this.workId + "/company/" + this.company_id + "/sub-project/" + this.sub_project_id + "/search-quotations").then(function (response) {
        console.log(response.data);
        _this2.quotations = response.data.quotations;
      });
    },
    closeQuotationsDialog: function closeQuotationsDialog() {
      this.quotationsDialog = false;
      this.selected = [];
    },
    connectQuotations: function connectQuotations() {
      var _this3 = this;

      axios__WEBPACK_IMPORTED_MODULE_0___default.a.put("/api/works/" + this.workId + "/connect-quotations", this.selected).then(function (response) {
        _this3.selected.forEach(function (element) {
          _this3.relatedQuotations.push(element);

          _this3.$store.dispatch("SHOW_GLOBAL_SNACKBAR", {
            text: response.data.message
          });

          _this3.closeQuotationsDialog();
        });
      });
    },
    disconnectQuotations: function disconnectQuotations(quotation) {
      var _this4 = this;

      axios__WEBPACK_IMPORTED_MODULE_0___default.a.put("/api/works/" + this.workId + "/disconnect-quotations", quotation).then(function (response) {
        var index = _this4.relatedQuotations.indexOf(quotation);

        _this4.relatedQuotations.splice(index, 1);

        _this4.$store.dispatch("SHOW_GLOBAL_SNACKBAR", {
          text: response.data.message
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
    downloadPdfFile: function downloadPdfFile(quotationId, pdfId) {
      var _this5 = this;

      axios__WEBPACK_IMPORTED_MODULE_0___default()({
        method: "get",
        url: "/api/quotations/" + quotationId + "/pdfs/" + pdfId + "/download",
        responseType: "arraybuffer"
      }).then(function (response) {
        _this5.forceFileDownload(response);
      })["catch"](function (error) {});
    },
    resetRelatedQuotation: function resetRelatedQuotation() {
      this.quotations = [];
      this.relatedQuotations = [];
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/work/SaleOrderDialog.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js??ref--18-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/work/SaleOrderDialog.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _common_File__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/File */ "./resources/js/components/common/File.vue");
/* harmony import */ var _common_Comment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/Comment */ "./resources/js/components/common/Comment.vue");
/* harmony import */ var _common_Attachment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/Attachment */ "./resources/js/components/common/Attachment.vue");
/* harmony import */ var _components_work_SaleOrderOption__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/work/SaleOrderOption */ "./resources/js/components/work/SaleOrderOption.vue");
/* harmony import */ var _components_work_SaleOrderLine__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/work/SaleOrderLine */ "./resources/js/components/work/SaleOrderLine.vue");
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







/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    File: _common_File__WEBPACK_IMPORTED_MODULE_2__["default"],
    Comment: _common_Comment__WEBPACK_IMPORTED_MODULE_3__["default"],
    SaleOrderOption: _components_work_SaleOrderOption__WEBPACK_IMPORTED_MODULE_5__["default"],
    SaleOrderLine: _components_work_SaleOrderLine__WEBPACK_IMPORTED_MODULE_6__["default"],
    Attachment: _common_Attachment__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  props: ["units"],
  data: function data() {
    return {
      errors: [],
      dateCalendar: false,
      requestors: [],
      optionDialog: false,
      saleOrder: {
        id: null,
        work_id: null,
        number: null,
        date: null,
        requestor_id: null,
        deliver_to: null,
        total_price: 0
      },
      defaultSaleOrder: {
        id: null,
        work_id: null,
        number: null,
        date: null,
        requestor_id: null,
        deliver_to: null,
        total_price: 0
      }
    };
  },
  computed: _objectSpread({
    isFieldDisabled: function isFieldDisabled() {
      if (this.saleOrderMode === "view") return true;
      return false;
    },
    isEditButtonDisabled: function isEditButtonDisabled() {
      if (this.workStatus === "OPEN" && this.permissions.includes("edit-work")) return false;
      return true;
    }
  }, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapState"])("auth", ["permissions"]), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapState"])("work", ["workId", "workIndex", "workStatus", "workMode", "workPhase", "workCompany", "workProject", "workSubProject", "workCategory", "workCurrency"]), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapState"])("sale_order", ["saleOrderId", "saleOrderMode", "saleOrderOption"]), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapState"])("sale_order_line", ["saleOrderLines"]), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])("sale_order_line", ["saleOrderTotalPrice"])),
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapMutations"])("work", ["SET_WORK_ID", "SET_WORK_STATUS", "SET_WORK_INDEX", "SET_WORK_MODE", "SET_WORK_PHASE"]), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapMutations"])("sale_order", ["SET_SALE_ORDER_MODE", "SET_SALE_ORDER_ID", "SET_SALE_ORDER_OPTION", "RESET_SALE_ORDER"]), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapMutations"])("sale_order_line", ["INIT_SALE_ORDER_LINE_LIST", "RESET_SALE_ORDER_LINE_LIST"]), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapMutations"])("attachments", ["INIT_ATTACHMENT_FILE_LIST", "RESET_ATTACHMENT_FILE_LIST"]), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapActions"])("sale_order", ["SAVE_SALE_ORDER_OPTION"]), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapActions"])("sale_order_line", ["SAVE_SALE_ORDER_LINES"]), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapActions"])("attachments", ["UPLOAD_ATTACHMENT_FILES"]), {
    initialize: function initialize() {
      var _this = this;

      console.log(this.workCompany);

      if (this.saleOrderId) {
        this.SET_SALE_ORDER_MODE("view");
        axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/sale-orders/" + this.saleOrderId).then(function (response) {
          console.log(response.data);
          _this.saleOrder = response.data.saleOrder;
          _this.requestors = response.data.requestors;

          _this.SET_SALE_ORDER_OPTION(response.data.option);

          _this.INIT_SALE_ORDER_LINE_LIST(response.data.saleOrderLines);

          _this.INIT_ATTACHMENT_FILE_LIST(response.data.attachments);
        });
        setTimeout(function () {
          _this.$refs.filesComponent.initFile();

          _this.$refs.commentsComponent.initComment();
        }, 300);
      } else {
        this.SET_SALE_ORDER_MODE("create");

        if (this.workId) {
          setTimeout(function () {
            _this.getEmployees();
          }, 300);
        }
      }
    },
    getEmployees: function getEmployees() {
      var _this2 = this;

      axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/employees/Company/" + this.workCompany).then(function (response) {
        _this2.requestors = response.data.employees;
      });
    },
    saveSaleOrder: function saveSaleOrder() {
      var _this3 = this;

      this.saleOrder.work_id = this.workId;
      this.saleOrder.total_price = this.$refs.saleOrderLineComponent.saleOrderTotalPrice;
      axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("/api/sale-orders", this.saleOrder).then(function (response) {
        _this3.saleOrder = response.data.saleOrder;

        _this3.SET_SALE_ORDER_ID(response.data.saleOrder.id);

        _this3.SET_SALE_ORDER_MODE("view");

        _this3.SAVE_SALE_ORDER_OPTION(response.data.saleOrder.id);

        _this3.SAVE_SALE_ORDER_LINES(response.data.saleOrder.id);

        _this3.UPLOAD_ATTACHMENT_FILES(response.data.saleOrder.id);

        _this3.SET_WORK_PHASE("RECPT PO");

        _this3.$emit("signal-addItemToList", {
          addType: "updateItem",
          item: response.data.work
        });
      })["catch"](function (error) {
        console.log(error);
        _this3.errors = error.response.data.errors;
      });
    },
    updateSaleOrder: function updateSaleOrder() {
      var _this4 = this;

      this.saleOrder.total_price = this.$refs.saleOrderLineComponent.saleOrderTotalPrice;
      axios__WEBPACK_IMPORTED_MODULE_0___default.a.put("/api/sale-orders/" + this.saleOrderId, this.saleOrder).then(function (response) {
        _this4.saleOrder = response.data.saleOrder;

        _this4.SET_SALE_ORDER_MODE("view");

        _this4.SAVE_SALE_ORDER_LINES(response.data.saleOrder.id);

        _this4.UPLOAD_ATTACHMENT_FILES(response.data.saleOrder.id);

        _this4.$emit("signal-addItemToList", {
          addType: "updateItem",
          item: response.data.work
        });
      })["catch"](function (error) {
        console.log(error);
        _this4.errors = error.response.data.errors;
      });
    },
    editSaleOrder: function editSaleOrder() {
      this.SET_SALE_ORDER_MODE("edit");
    },
    cancelSaleOrder: function cancelSaleOrder() {
      this.initialize();
      this.SET_SALE_ORDER_MODE("view");
    },
    openOptionDialog: function openOptionDialog() {
      this.optionDialog = true;
    },
    closeOptionDialog: function closeOptionDialog() {
      this.optionDialog = false;
    },
    resetSaleOrder: function resetSaleOrder() {
      console.log("reset");
      this.saleOrder = Object.assign({}, this.defaultSaleOrder);
      this.errors = [];
      this.requestors = [];
      this.RESET_SALE_ORDER();
      this.RESET_SALE_ORDER_LINE_LIST();
      this.RESET_ATTACHMENT_FILE_LIST();
      this.$refs.commentsComponent.resetComment();
      this.$refs.filesComponent.resetFile();
    }
  })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/work/SaleOrderLine.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js??ref--18-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/work/SaleOrderLine.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************/
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
      if ( // this.saleOrderStatus === "OPENED" &&
      // this.permissions.includes("edit-sale-order") &&
      this.saleOrderMode === "edit" || this.saleOrderMode === "create") {
        return false;
      } else {
        return true;
      }
    },
    saleOrderTotalPrice: function saleOrderTotalPrice() {
      return this.saleOrderLines.reduce(function (acc, item) {
        return acc + parseFloat(item.price * item.quantity);
      }, 0);
    },
    saleOrderTax: function saleOrderTax() {
      if (this.saleOrderOption.is_use_tax) {
        return parseFloat((this.saleOrderTotalPrice + this.saleOrderOption.shipping_fee - this.saleOrderOption.discount) * 0.1);
      } else {
        return 0;
      }
    },
    saleOrderGrandTotal: function saleOrderGrandTotal() {
      return parseFloat(this.saleOrderTotalPrice + this.saleOrderOption.shipping_fee - this.saleOrderOption.discount + this.saleOrderTax);
    }
  }, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])("sale_order", ["saleOrderStatus"]), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])("sale_order", ["saleOrderOption", "saleOrderMode"]), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])("sale_order_line", ["saleOrderLines", "saleOrderLine"])),
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapMutations"])("sale_order_line", ["ADD_SALE_ORDER_LINE", "EDIT_SALE_ORDER_LINE", "UPDATE_SALE_ORDER_LINE", "RESET_SALE_ORDER_LINE", "REMOVE_SALE_ORDER_LINE"]), {
    closeItemDialog: function closeItemDialog() {
      var _this = this;

      this.itemDialog = false;
      this.$nextTick(function () {
        _this.RESET_SALE_ORDER_LINE();

        _this.editedItemIndex = -1;
      });
    },
    addItem: function addItem() {
      if (this.editedItemIndex > -1) {
        this.UPDATE_SALE_ORDER_LINE(this.editedItemIndex);
      } else {
        this.ADD_SALE_ORDER_LINE();
      }

      this.closeItemDialog();
    },
    editItem: function editItem(item) {
      this.editedItemIndex = this.saleOrderLines.indexOf(item);
      this.EDIT_SALE_ORDER_LINE(item);
      this.itemDialog = true;
    },
    removeItem: function removeItem(item) {
      this.REMOVE_SALE_ORDER_LINE(item);
    },
    formatPrice: function formatPrice(value) {
      var val = (value / 1).toFixed(2).replace(",", ".");
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
  })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/work/SaleOrderOption.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js??ref--18-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/work/SaleOrderOption.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************/
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


/* harmony default export */ __webpack_exports__["default"] = ({
  props: [],
  data: function data() {
    return {
      formTypes: ["default"]
    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])("sale_order", ["saleOrderOption", "saleOrderId"])),
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapMutations"])("sale_order", ["SET_SALE_ORDER_OPTION"]), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])("sale_order", ["UPDATE_SALE_ORDER_OPTION"]), {
    setOption: function setOption() {
      this.SET_SALE_ORDER_OPTION(this.saleOrderOption);
      this.closeOptionDialog();
    },
    updateOption: function updateOption() {
      var _this = this;

      axios__WEBPACK_IMPORTED_MODULE_1___default.a.put("/api/sale-orders/" + this.saleOrderId + "/option/" + this.saleOrderOption.id, this.saleOrderOption).then(function (response) {
        _this.SET_SALE_ORDER_OPTION(response.data.option);
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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/work/WccDialog.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js??ref--18-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/work/WccDialog.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mixins_getPeople__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../mixins/getPeople */ "./resources/js/mixins/getPeople.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _common_File__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/File */ "./resources/js/components/common/File.vue");
/* harmony import */ var _common_Comment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/Comment */ "./resources/js/components/common/Comment.vue");
/* harmony import */ var _common_Attachment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/Attachment */ "./resources/js/components/common/Attachment.vue");
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






/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    File: _common_File__WEBPACK_IMPORTED_MODULE_3__["default"],
    Comment: _common_Comment__WEBPACK_IMPORTED_MODULE_4__["default"],
    Attachment: _common_Attachment__WEBPACK_IMPORTED_MODULE_5__["default"]
  },
  props: ["companies"],
  data: function data() {
    return {
      errors: [],
      dateCalendar: false,
      subProjects: [],
      approvers: [],
      optionDialog: false,
      wcc: {
        id: null,
        work_id: null,
        approver_id: null,
        date: null
      },
      defaultWcc: {
        id: null,
        work_id: null,
        approver_id: null,
        date: null
      }
    };
  },
  computed: _objectSpread({
    isFieldDisabled: function isFieldDisabled() {
      if (this.wccMode === "view") return true;
      return false;
    },
    isEditButtonDisabled: function isEditButtonDisabled() {
      if (this.workStatus === "OPEN" && this.permissions.includes("edit-work")) return false;
      return true;
    }
  }, Object(vuex__WEBPACK_IMPORTED_MODULE_2__["mapState"])("auth", ["permissions"]), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_2__["mapState"])("work", ["workId", "workIndex", "workStatus", "workMode", "workPhase", "workCompany", "workProject", "workSubProject", "workCategory", "workCurrency"]), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_2__["mapState"])("wcc", ["wccId", "wccMode"])),
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_2__["mapMutations"])("work", ["SET_WORK_ID", "SET_WORK_STATUS", "SET_WORK_INDEX", "SET_WORK_MODE", "SET_WORK_PHASE"]), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_2__["mapMutations"])("wcc", ["SET_WCC_MODE", "SET_WCC_ID", "RESET_WCC"]), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_2__["mapMutations"])("attachments", ["INIT_ATTACHMENT_FILE_LIST", "RESET_ATTACHMENT_FILE_LIST"]), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_2__["mapActions"])("attachments", ["UPLOAD_ATTACHMENT_FILES"]), {
    initialize: function initialize() {
      var _this = this;

      if (this.wccId) {
        this.SET_WCC_MODE("view");
        axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/wccs/" + this.wccId).then(function (response) {
          _this.wcc = response.data.wcc;
          _this.approvers = response.data.approvers;

          _this.INIT_ATTACHMENT_FILE_LIST(response.data.attachments);
        });
        setTimeout(function () {
          _this.$refs.filesComponent.initFile();

          _this.$refs.commentsComponent.initComment();
        }, 300);
      } else {
        this.SET_WCC_MODE("create");

        if (this.workId) {
          setTimeout(function () {
            _this.getEmployees();
          }, 300);
        }
      }
    },
    getEmployees: function getEmployees() {
      var _this2 = this;

      axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/employees/Company/" + this.workCompany).then(function (response) {
        _this2.approvers = response.data.employees;
      });
    },
    saveWcc: function saveWcc() {
      var _this3 = this;

      this.wcc.work_id = this.workId;
      axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("/api/wccs", this.wcc).then(function (response) {
        _this3.wcc = response.data.wcc;

        _this3.SET_WCC_ID(response.data.wcc.id);

        _this3.SET_WCC_MODE("view");

        _this3.UPLOAD_ATTACHMENT_FILES(response.data.wcc.id);

        _this3.SET_WORK_PHASE("APPRVD WCC");

        _this3.$emit("signal-addItemToList", {
          addType: "updateItem",
          item: response.data.work
        });

        _this3.$store.dispatch("SHOW_GLOBAL_SNACKBAR", {
          text: response.data.message
        });
      })["catch"](function (error) {
        console.log(error);
        _this3.errors = error.response.data.errors;

        _this3.$store.dispatch("SHOW_GLOBAL_SNACKBAR", {
          text: error.response.data.message,
          color: "red"
        });
      });
    },
    updateWcc: function updateWcc() {
      var _this4 = this;

      axios__WEBPACK_IMPORTED_MODULE_0___default.a.put("/api/wccs/" + this.wccId, this.wcc).then(function (response) {
        _this4.wcc = response.data.wcc;

        _this4.SET_WCC_MODE("view");

        _this4.UPLOAD_ATTACHMENT_FILES(response.data.wcc.id);

        _this4.$emit("signal-addItemToList", {
          addType: "updateItem",
          item: response.data.work
        });

        _this4.$store.dispatch("SHOW_GLOBAL_SNACKBAR", {
          text: response.data.message
        });
      })["catch"](function (error) {
        console.log(error);
        _this4.errors = error.response.data.errors;

        _this4.$store.dispatch("SHOW_GLOBAL_SNACKBAR", {
          text: error.response.data.message,
          color: "red"
        });
      });
    },
    editWcc: function editWcc() {
      this.SET_WCC_MODE("edit");
    },
    cancelWcc: function cancelWcc() {
      this.initialize();
      this.SET_WCC_MODE("view");
    },
    getReceivers: function getReceivers(model, model_id) {
      var _this5 = this;

      this.getEmployees(model, model_id).then(function (e) {
        return _this5.approvers = e;
      });
    },
    selectProject: function selectProject(project_id) {
      var _this6 = this;

      this.getSubProjects(project_id).then(function (e) {
        return _this6.subProjects = e;
      });
    },
    resetWcc: function resetWcc() {
      this.wcc = Object.assign({}, this.defaultWcc);
      this.errors = [];
      this.subProjects = [];
      this.requestors = [];
      this.RESET_WCC();
      this.RESET_ATTACHMENT_FILE_LIST();
      this.$refs.commentsComponent.resetComment();
      this.$refs.filesComponent.resetFile();
    }
  }),
  mixins: [_mixins_getPeople__WEBPACK_IMPORTED_MODULE_1__["getPeople"]]
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/work/WorkDialog.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js??ref--18-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/work/WorkDialog.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mixins_subProjects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../mixins/subProjects */ "./resources/js/mixins/subProjects.js");
/* harmony import */ var _RelatedQuotation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RelatedQuotation */ "./resources/js/components/work/RelatedQuotation.vue");
/* harmony import */ var _WorkStatus__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./WorkStatus */ "./resources/js/components/work/WorkStatus.vue");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
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





/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    RelatedQuotation: _RelatedQuotation__WEBPACK_IMPORTED_MODULE_2__["default"],
    WorkStatus: _WorkStatus__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  props: ["companies", "projects", "categories", "currencies"],
  data: function data() {
    return {
      errors: [],
      subProjects: [],
      editedItem: {
        id: null,
        number: null,
        status: null,
        company_id: null,
        project_id: null,
        sub_project_id: null,
        category_id: null,
        currency_id: null,
        description: null
      },
      defaultItem: {
        id: null,
        number: null,
        status: null,
        company_id: null,
        project_id: null,
        sub_project_id: null,
        category_id: null,
        currency_id: null,
        description: null
      }
    };
  },
  computed: _objectSpread({
    isFieldDisabled: function isFieldDisabled() {
      if (this.workId) return true;
      return false;
    },
    isEditButtonDisabled: function isEditButtonDisabled() {
      if (this.workStatus === "OPEN" && this.permissions.includes("edit-work")) return false;
      return true;
    }
  }, Object(vuex__WEBPACK_IMPORTED_MODULE_4__["mapState"])("auth", ["permissions"]), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_4__["mapState"])("work", ["workId", "workIndex", "workStatus", "workMode"])),
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_4__["mapMutations"])("work", ["SET_WORK_ID", "SET_WORK_STATUS", "SET_WORK_INDEX", "SET_WORK_MODE", "SET_WORK_PHASE", "SET_WORK_COMPANY", "SET_WORK_PROJECT", "SET_WORK_SUB_PROJECT", "SET_WORK_CATEGORY", "SET_WORK_CURRENCY", "RESET_WORK"]), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_4__["mapMutations"])("sale_order", ["SET_SALE_ORDER_ID", "SET_SALE_ORDER_DELIVER_TO", "SET_SALE_ORDER_PAYMENT_TERM"]), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_4__["mapMutations"])("wcc", ["SET_WCC_ID"]), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_4__["mapMutations"])("invoice", ["SET_INVOICE_ID"]), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_4__["mapMutations"])("payment", ["SET_PAYMENT_ID"]), {
    initialize: function initialize() {
      var _this = this;

      if (this.workId) {
        this.SET_WORK_MODE("view");
        axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/works/" + this.workId).then(function (response) {
          _this.editedItem = response.data.work;
          _this.subProjects = response.data.subProjects;

          _this.SET_SALE_ORDER_ID(response.data.saleOrderId);

          _this.SET_WCC_ID(response.data.wccId);

          _this.SET_INVOICE_ID(response.data.invoiceId);

          _this.SET_PAYMENT_ID(response.data.paymentId);

          _this.SET_WORK_STATUS(response.data.work.status);

          _this.SET_WORK_CURRENCY(response.data.work.currency_id);

          _this.SET_WORK_COMPANY(response.data.work.company_id);

          _this.SET_WORK_PROJECT(response.data.work.project_id);

          _this.SET_WORK_SUB_PROJECT(response.data.work.sub_project_id);

          _this.SET_WORK_CATEGORY(response.data.work.category_id);

          _this.$nextTick(function () {
            _this.$refs.relatedQuotationComponent.initialize();
          });
        });
      } else {
        this.SET_WORK_MODE("create");
      }
    },
    saveWork: function saveWork() {
      var _this2 = this;

      axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("/api/works", this.editedItem).then(function (response) {
        _this2.SET_WORK_ID(response.data.work.id);

        _this2.$emit("signal-addItemToList", {
          addType: "newItem",
          item: response.data.work
        });

        _this2.SET_WORK_MODE("view");

        _this2.SET_WORK_STATUS("OPEN");

        _this2.SET_WORK_PHASE("OPENED");

        _this2.SET_WORK_CURRENCY(response.data.work.currency_id);

        _this2.SET_WORK_COMPANY(response.data.work.company_id);

        _this2.SET_WORK_PROJECT(response.data.work.project_id);

        _this2.SET_WORK_SUB_PROJECT(response.data.work.sub_project_id);

        _this2.SET_WORK_CATEGORY(response.data.work.category_id);

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
    },
    updateWork: function updateWork() {
      var _this3 = this;

      axios__WEBPACK_IMPORTED_MODULE_0___default.a.put("/api/works/" + this.editedItem.id, this.editedItem).then(function (response) {
        _this3.editedItem = response.data.work;

        _this3.SET_WORK_MODE("view");

        _this3.$emit("signal-addItemToList", {
          addType: "updateItem",
          item: response.data.work
        });
      })["catch"](function (error) {
        _this3.errors = error.response.data.errors;
      });
    },
    editWork: function editWork() {
      this.SET_WORK_MODE("edit");
    },
    cancelWork: function cancelWork() {
      this.initialize();
      this.SET_WORK_MODE("view");
    },
    resetWork: function resetWork() {
      this.editedItem = Object.assign({}, this.defaultItem);
      this.$refs.relatedQuotationComponent.resetRelatedQuotation();
      this.errors = [];
      this.RESET_WORK();
    },
    selectProject: function selectProject(project_id) {
      var _this4 = this;

      this.getSubProjects(project_id).then(function (e) {
        return _this4.subProjects = e;
      });
    },
    changeWorkStatus: function changeWorkStatus(workStatus) {
      this.$emit("signal-changeWorkStatus", workStatus);
    }
  }),
  mixins: [_mixins_subProjects__WEBPACK_IMPORTED_MODULE_1__["getSubProjects"]]
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/work/WorkFilter.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js??ref--18-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/work/WorkFilter.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _mixins_subProjects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../mixins/subProjects */ "./resources/js/mixins/subProjects.js");
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



/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    companies: Array,
    categories: Array,
    projects: Array
  },
  data: function data() {
    return {
      statuses: ["OPEN", "HOLDING", "CANCELED", "COMPLETED", "DISUSED"],
      phases: ["OPENED", "RECPT PO", "APPRVD WCC", "SENT INV", "PYMT"],
      errors: [],
      subProjects: [],
      poStartDateCalendar: false,
      poEndDateCalendar: false,
      invoiceStartDateCalendar: false,
      invoiceEndDateCalendar: false,
      paymentDueDateStartDateCalendar: false,
      paymentDueDateEndDateCalendar: false,
      paymentStartDateCalendar: false,
      paymentEndDateCalendar: false,
      filter: {
        workFilterMode: false,
        status: "",
        phase: "",
        company: "",
        category: "",
        project: "",
        subProject: "",
        poStartDate: "",
        poEndDate: "",
        invoiceStartDate: "",
        invoiceEndDate: "",
        paymentDueDateStartDate: "",
        paymentDueDateEndDate: "",
        paymentStartDate: "",
        paymentEndDate: ""
      },
      resetFilter: {
        workFilterMode: false,
        status: "",
        phase: "",
        company: "",
        category: "",
        project: "",
        subProject: "",
        poStartDate: "",
        poEndDate: "",
        invoiceStartDate: "",
        invoiceEndDate: "",
        paymentDueDateStartDate: "",
        paymentDueDateEndDate: "",
        paymentStartDate: "",
        paymentEndDate: ""
      }
    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapState"])("work", ["workFilterQuery"])),
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapMutations"])("work", ["SET_WORK_FILTER_QUERY"]), {
    workFilter: function workFilter() {
      this.filter.workFilterMode = true;
      var filterQuery = "workFilterMode=" + this.filter.workFilterMode + "&status=" + this.filter.status + "&phase=" + this.filter.phase + "&company=" + this.filter.company + "&category=" + this.filter.category + "&project=" + this.filter.project + "&subProject=" + this.filter.subProject + "&poStartDate=" + this.filter.poStartDate + "&poEndDate=" + this.filter.poEndDate + "&invoiceStartDate=" + this.filter.invoiceStartDate + "&invoiceEndDate=" + this.filter.invoiceEndDate + "&paymentDueDateStartDate=" + this.filter.paymentDueDateStartDate + "&paymentDueDateEndDate=" + this.filter.paymentDueDateEndDate + "&paymentStartDate=" + this.filter.paymentStartDate + "&paymentEndDate=" + this.filter.paymentEndDate;
      this.SET_WORK_FILTER_QUERY(filterQuery);
      this.$emit("signal-workFilter");
      this.closeWorkFilterDialog();
    },
    resetWorkFilter: function resetWorkFilter() {
      this.filter = Object.assign({}, this.resetFilter);
      this.SET_WORK_FILTER_QUERY("");
      this.$emit("signal-resetWorkFilter");
      this.closeWorkFilterDialog();
    },
    closeWorkFilterDialog: function closeWorkFilterDialog() {
      this.$emit("signal-closeWorkFilterDialog");
    },
    clearStatusField: function clearStatusField() {
      this.filter.status = false;
    },
    clearPhaseField: function clearPhaseField() {
      this.filter.phase = false;
    },
    clearProjectField: function clearProjectField() {
      this.filter.project = false;
    },
    clearSubProjectField: function clearSubProjectField() {
      this.filter.subProject = false;
    },
    clearCategoryField: function clearCategoryField() {
      this.filter.category = false;
    },
    clearCompanyField: function clearCompanyField() {
      this.filter.company = false;
    },
    clearPoStartDateField: function clearPoStartDateField() {
      this.filter.poStartDate = null;
    },
    clearPoEndDateField: function clearPoEndDateField() {
      this.filter.poEndDate = null;
    },
    clearInvoiceStartDateField: function clearInvoiceStartDateField() {
      this.filter.invoiceStartDate = null;
    },
    clearInvoiceEndDateField: function clearInvoiceEndDateField() {
      this.filter.invoiceEndDate = null;
    },
    clearPaymentDueDateStartDateField: function clearPaymentDueDateStartDateField() {
      this.filter.invoiceEndDate = null;
    },
    clearPaymentDueDateEndDateField: function clearPaymentDueDateEndDateField() {
      this.filter.invoiceEndDate = null;
    },
    clearPaymentStartDateField: function clearPaymentStartDateField() {
      this.filter.paymentStartDate = null;
    },
    clearPaymentEndDateField: function clearPaymentEndDateField() {
      this.filter.paymentEndDate = null;
    },
    selectProject: function selectProject(project_id) {
      var _this = this;

      this.getSubProjects(project_id).then(function (e) {
        return _this.subProjects = e;
      });
    }
  }),
  mixins: [_mixins_subProjects__WEBPACK_IMPORTED_MODULE_2__["getSubProjects"]]
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/work/WorkStatus.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js??ref--18-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/work/WorkStatus.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
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


/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      dialog: false,
      workStatusHistoryDialog: false,
      workStatusHistories: [],
      statuses: ["OPEN", "HOLDING", "CANCELED", "COMPLETED", "DISUSED"],
      editedItem: {
        name: null,
        description: null
      },
      defaultItem: {
        name: null,
        description: null
      }
    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapState"])("work", ["workId", "workStatus"])),
  watch: {
    dialog: function dialog(val) {
      val || this.close();
    }
  },
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapMutations"])("work", ["SET_WORK_STATUS"]), {
    close: function close() {
      this.editedItem = Object.assign({}, this.defaultItem);
      this.dialog = false;
    },
    save: function save() {
      var _this = this;

      axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("/api/works/" + this.workId + "/work-status-histories", this.editedItem).then(function (response) {
        _this.$store.dispatch("SHOW_GLOBAL_SNACKBAR", {
          text: response.data.message,
          color: response.data.color
        });

        _this.SET_WORK_STATUS(response.data.name);

        _this.$emit("signal-changeWorkStatus", response.data.name);
      });
      this.close();
    },
    openStatusHistoryDialog: function openStatusHistoryDialog() {
      var _this2 = this;

      this.workStatusHistoryDialog = true;
      axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/works/" + this.workId + "/work-status-histories").then(function (response) {
        _this2.workStatusHistories = response.data.workStatusHistories;
      });
    },
    closeStatusHistoryDialog: function closeStatusHistoryDialog() {
      this.workStatusHistoryDialog = false;
    }
  })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Work.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vuetify-loader/lib/loader.js??ref--18-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Work.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_work_WorkDialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/work/WorkDialog */ "./resources/js/components/work/WorkDialog.vue");
/* harmony import */ var _components_work_SaleOrderDialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/work/SaleOrderDialog */ "./resources/js/components/work/SaleOrderDialog.vue");
/* harmony import */ var _components_work_WccDialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/work/WccDialog */ "./resources/js/components/work/WccDialog.vue");
/* harmony import */ var _components_work_InvoiceDialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/work/InvoiceDialog */ "./resources/js/components/work/InvoiceDialog.vue");
/* harmony import */ var _components_work_PaymentDialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/work/PaymentDialog */ "./resources/js/components/work/PaymentDialog.vue");
/* harmony import */ var _components_work_WorkFilter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/work/WorkFilter */ "./resources/js/components/work/WorkFilter.vue");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
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








/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    WorkDialog: _components_work_WorkDialog__WEBPACK_IMPORTED_MODULE_0__["default"],
    SaleOrderDialog: _components_work_SaleOrderDialog__WEBPACK_IMPORTED_MODULE_1__["default"],
    WccDialog: _components_work_WccDialog__WEBPACK_IMPORTED_MODULE_2__["default"],
    InvoiceDialog: _components_work_InvoiceDialog__WEBPACK_IMPORTED_MODULE_3__["default"],
    PaymentDialog: _components_work_PaymentDialog__WEBPACK_IMPORTED_MODULE_4__["default"],
    WorkFilter: _components_work_WorkFilter__WEBPACK_IMPORTED_MODULE_5__["default"]
  },
  data: function data() {
    return {
      workDialog: false,
      workFilterDialog: false,
      search: null,
      activeTab: 0,
      tabHistory: [],
      tabs: [{
        id: 0,
        name: "Work"
      }, {
        id: 1,
        name: "Purchase Order"
      }, {
        id: 2,
        name: "WCC Apprived"
      }, {
        id: 3,
        name: "Invoice"
      }, {
        id: 4,
        name: "Payment"
      }],
      headers: [{
        text: "Number",
        value: "number",
        divider: true
      }, {
        text: "Status",
        value: "status",
        divider: true
      }, {
        text: "Phase",
        value: "phase",
        divider: true
      }, {
        text: "PO Number",
        value: "sale_order_number",
        divider: true,
        align: "center"
      }, {
        text: "PO RECV",
        value: "sale_order_date",
        divider: true,
        align: "center"
      }, {
        text: "WCC APPRVD",
        value: "wcc_date",
        divider: true,
        align: "center"
      }, {
        text: "INV Number",
        value: "invoice_number",
        divider: true,
        align: "center"
      }, {
        text: "INV Date",
        value: "invoice_date",
        divider: true,
        align: "center"
      }, {
        text: "PYMT Due Date",
        value: "payment_due_date",
        divider: true,
        align: "center"
      }, {
        text: "PYMT Date",
        value: "payment_date",
        divider: true,
        align: "center"
      }, {
        text: "PO TOT",
        value: "sale_order_total_price",
        divider: true
      }, {
        text: "INV TOT",
        value: "invoice_total_price",
        divider: true
      }, {
        text: "PYMT TOT",
        value: "payment_total_price",
        divider: true
      }, {
        text: "EXR",
        value: "payment_exchange_rate",
        divider: true,
        align: "right"
      }, {
        text: "Exchanged TOT",
        value: "payment_exchanged_total_price",
        divider: true
      }],
      works: [],
      companies: [],
      projects: [],
      categories: [],
      currencies: [],
      units: [],
      banks: [],
      paymentMethods: [],
      users: [],
      totalRecords: null,
      editedIndex: -1,
      editedItem: {
        id: null,
        status: null,
        phase: null,
        sale_order_number: null,
        invoice_number: null,
        sale_order_date: null,
        wcc_date: null,
        invoice_date: null,
        payment_date: null,
        payment_term: null,
        sale_order_total_price: 0,
        invoice_total_price: 0,
        payment_total_price: 0,
        payment_due_date: null,
        currency_name: null,
        payment_currency: null
      },
      defaultItem: {
        id: null,
        status: null,
        phase: null,
        sale_order_number: null,
        invoice_number: null,
        po_date: null,
        inv_date: null,
        payment_date: null,
        payment_term: null,
        sale_order_total_price: 0,
        invoice_total_price: 0,
        payment_total_price: 0,
        payment_due_date: null,
        currency_name: null,
        payment_currency: null
      }
    };
  },
  computed: _objectSpread({
    isPrevBtnDisabled: function isPrevBtnDisabled() {
      if (this.works.prev_page_url === null) return true;
      return false;
    },
    isNextBtnDisabled: function isNextBtnDisabled() {
      if (this.works.next_page_url === null) return true;
      return false;
    }
  }, Object(vuex__WEBPACK_IMPORTED_MODULE_7__["mapState"])("work", ["workId", "workIndex", "workStatus", "workMode", "workFilterQuery"]), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_7__["mapState"])("sale_order", ["saleOrderMode", "saleOrderId"]), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_7__["mapState"])("wcc", ["wccId", "wccMode"]), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_7__["mapState"])("invoice", ["invoiceId", "invoiceMode"]), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_7__["mapState"])("payment", ["paymentId", "paymentMode"])),
  watch: _defineProperty({
    workDialog: function workDialog(val) {
      val || this.close();
    }
  }, "workDialog", function workDialog(val) {
    document.querySelector("html").style.overflow = val ? "hidden" : null;
  }),
  created: function created() {
    this.initialize();
  },
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_7__["mapMutations"])("work", ["SET_WORK_ID", "SET_WORK_INDEX", "SET_WORK_STATUS", "SET_WORK_MODE"]), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_7__["mapMutations"])("sale_order", ["SET_SALE_ORDER_ID", "SET_SALE_ORDER_MODE"]), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_7__["mapMutations"])("wcc", ["SET_WCC_MODE", "SET_WCC_ID"]), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_7__["mapMutations"])("invoice", ["SET_INVOICE_MODE", "SET_INVOICE_ID"]), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_7__["mapMutations"])("payment", ["SET_PAYMENT_MODE", "SET_PAYMENT_ID"]), {
    initialize: function initialize() {
      var _this = this;

      axios__WEBPACK_IMPORTED_MODULE_6___default.a.get("/api/works").then(function (response) {
        console.log(response.data);
        _this.works = response.data.works;
        _this.totalRecords = response.data.totalRecords;
        _this.companies = Object.freeze(response.data.companies);
        _this.projects = Object.freeze(response.data.projects);
        _this.categories = Object.freeze(response.data.categories);
        _this.currencies = Object.freeze(response.data.currencies);
        _this.units = Object.freeze(response.data.units);
        _this.banks = Object.freeze(response.data.banks);
        _this.paymentMethods = Object.freeze(response.data.paymentMethods);
        _this.users = Object.freeze(response.data.users);
      })["catch"](function (error) {
        console.log(error);
      });
    },
    workFilter: function workFilter() {
      var _this2 = this;

      axios__WEBPACK_IMPORTED_MODULE_6___default.a.get("/api/works?" + this.workFilterQuery).then(function (response) {
        _this2.works = response.data.works;
        _this2.totalRecords = response.data.totalRecords;
        console.log(_this2.$route);
      })["catch"](function (error) {
        console.log(error);
      });
    },
    nextPage: function nextPage() {
      var _this3 = this;

      axios__WEBPACK_IMPORTED_MODULE_6___default.a.get(this.works.next_page_url + "&" + this.workFilterQuery).then(function (response) {
        _this3.works = response.data.works;
      });
    },
    prevPage: function prevPage() {
      var _this4 = this;

      axios__WEBPACK_IMPORTED_MODULE_6___default.a.get(this.works.prev_page_url + "&" + this.workFilterQuery).then(function (response) {
        _this4.works = response.data.works;
      });
    },
    openCreateWorkDialog: function openCreateWorkDialog() {
      this.workDialog = true;
      this.SET_WORK_INDEX(-1);
      this.SET_WORK_MODE("create");
    },
    openUpdateWorkDialog: function openUpdateWorkDialog(item) {
      this.workDialog = true;
      this.SET_WORK_ID(item.id);
      this.SET_WORK_INDEX(this.works.data.indexOf(item));
      this.SET_WORK_STATUS(item.status);
      this.SET_WORK_MODE("view");
      this.$nextTick(function () {
        this.$refs.workComponent.initialize();
      });
    },
    closeWorkDialog: function closeWorkDialog() {
      console.log("Reset", this.tabHistory);
      this.workDialog = false;
      this.activeTab = "0";
      this.$refs.workComponent.resetWork();
      this.tabHistory.includes(1) && this.$refs.saleOrderComponent.resetSaleOrder();
      this.tabHistory.includes(2) && this.$refs.wccComponent.resetWcc();
      this.tabHistory.includes(3) && this.$refs.invoiceComponent.resetInvoice();
      this.tabHistory.includes(4) && this.$refs.paymentComponent.resetPayment();
      this.tabHistory = [];
      this.SET_SALE_ORDER_ID(null);
      this.SET_SALE_ORDER_MODE(null);
      this.SET_WCC_MODE(null);
      this.SET_WCC_ID(null);
      this.SET_INVOICE_MODE(null);
      this.SET_INVOICE_ID(null);
      this.SET_PAYMENT_MODE(null);
      this.SET_PAYMENT_ID(null);
    },
    addItemToList: function addItemToList(work) {
      var _this5 = this;

      if (work.addType === "newItem") {
        this.works.data.unshift(work.item);
      } else {
        var item = this.works.data.find(function (element) {
          return element.id === _this5.workId;
        });
        Object.assign(item, work.item);
      }
    },
    changeWorkStatus: function changeWorkStatus(workStatus) {
      var _this6 = this;

      var item = this.works.data.find(function (element) {
        return element.id === _this6.workId;
      });
      item.status = workStatus;
    },
    changeTab: function changeTab(tabId) {
      var _this7 = this;

      this.tabHistory.push(tabId);

      switch (tabId) {
        case 0:
          this.$refs.workComponent.initialize();
          break;

        case 1:
          setTimeout(function () {
            _this7.$refs.saleOrderComponent.initialize();
          }, 300);
          break;

        case 2:
          setTimeout(function () {
            _this7.$refs.wccComponent.initialize();
          }, 300);
          break;

        case 3:
          setTimeout(function () {
            _this7.$refs.invoiceComponent.initialize();
          }, 300);
          break;

        case 4:
          setTimeout(function () {
            _this7.$refs.paymentComponent.initialize();
          }, 300);
          break;

        default:
          break;
      }
    },
    openSaleOrderOptionDialog: function openSaleOrderOptionDialog() {
      var _this8 = this;

      this.$nextTick(function () {
        _this8.$refs.saleOrderComponent.openOptionDialog();
      });
    },
    openInvoiceOptionDialog: function openInvoiceOptionDialog() {
      var _this9 = this;

      this.$nextTick(function () {
        _this9.$refs.invoiceComponent.openOptionDialog();
      });
    },
    openWorkFilterDialog: function openWorkFilterDialog() {
      this.workFilterDialog = true;
    },
    closeWorkFilterDialog: function closeWorkFilterDialog() {
      this.workFilterDialog = false;
    },
    formatPrice: function formatPrice(value) {
      var val = (value / 1).toFixed(2).replace(",", ".");
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
    generateDailyReport: function generateDailyReport() {
      axios__WEBPACK_IMPORTED_MODULE_6___default.a.post("/api/daily-reports", "daily")["catch"](function (error) {
        console.log(error);
      });
    },
    generateWeeklyReport: function generateWeeklyReport() {
      axios__WEBPACK_IMPORTED_MODULE_6___default.a.post("/api/weekly-reports", "daily")["catch"](function (error) {
        console.log(error);
      });
    },
    convertExcel: function convertExcel() {
      console.log(this.workFilterQuery);
      axios__WEBPACK_IMPORTED_MODULE_6___default.a.get("/api/convert-excel/works?" + this.workFilterQuery).then(function (response) {
        console.log(response.data);
        axios__WEBPACK_IMPORTED_MODULE_6___default.a.get("/api/convert-excel/download", {
          responseType: "arraybuffer"
        }).then(function (response) {
          var url = window.URL.createObjectURL(new Blob([response.data]));
          var link = document.createElement("a");
          link.href = url;
          link.setAttribute("download", response.headers.filename); //or any other extension

          document.body.appendChild(link);
          link.click();
        });
      });
    }
  })
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Payment/RelatedTransaction.vue?vue&type=template&id=1271f127&":
/*!************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--18-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Payment/RelatedTransaction.vue?vue&type=template&id=1271f127& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "wrap-related-quotations wrap-component-table" },
    [
      _c(
        "v-card",
        { staticClass: "mb-3", attrs: { outlined: "" } },
        [
          _c(
            "v-card-title",
            [
              _c("h4", [_vm._v("Connect Transaction")]),
              _vm._v(" "),
              _c("v-spacer"),
              _vm._v(" "),
              _c(
                "v-btn",
                {
                  attrs: { color: "primary", small: "" },
                  on: {
                    click: function($event) {
                      return _vm.openTransactionDialog()
                    }
                  }
                },
                [_c("v-icon", [_vm._v("mdi-magnify")])],
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
              _c("v-simple-table", {
                scopedSlots: _vm._u([
                  {
                    key: "default",
                    fn: function() {
                      return [
                        _c("thead", [
                          _c("tr", [
                            _c("th", { staticClass: "text-left" }, [
                              _vm._v("Number")
                            ]),
                            _vm._v(" "),
                            _c("th", { staticClass: "text-center" }, [
                              _vm._v("Date")
                            ]),
                            _vm._v(" "),
                            _c("th", { staticClass: "text-center" }, [
                              _vm._v("Bank")
                            ]),
                            _vm._v(" "),
                            _c("th", { staticClass: "text-center" }, [
                              _vm._v("Deposit Amount")
                            ]),
                            _vm._v(" "),
                            _c("th", { staticClass: "text-center" }, [
                              _vm._v("Currency")
                            ]),
                            _vm._v(" "),
                            _c("th", { staticClass: "text-center" }, [
                              _vm._v("Action")
                            ])
                          ])
                        ]),
                        _vm._v(" "),
                        _c("tbody", [
                          _vm.relatedTransaction
                            ? _c("tr", [
                                _c("td", { staticClass: "text-center" }, [
                                  _vm._v(_vm._s(_vm.relatedTransaction.id))
                                ]),
                                _vm._v(" "),
                                _c("td", { staticClass: "text-center" }, [
                                  _vm._v(
                                    _vm._s(_vm.relatedTransaction.received_date)
                                  )
                                ]),
                                _vm._v(" "),
                                _c("td", { staticClass: "text-center" }, [
                                  _vm._v(_vm._s(_vm.relatedTransaction.bank))
                                ]),
                                _vm._v(" "),
                                _c("td", { staticClass: "text-center" }, [
                                  _vm._v(
                                    _vm._s(
                                      _vm.relatedTransaction.deposit_amount
                                    )
                                  )
                                ]),
                                _vm._v(" "),
                                _c("td", { staticClass: "text-center" }, [
                                  _vm._v(
                                    _vm._s(_vm.relatedTransaction.currency)
                                  )
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
                                          small: "",
                                          fab: "",
                                          icon: "",
                                          color: "red"
                                        },
                                        on: {
                                          click: function($event) {
                                            return _vm.disconnectTransaction(
                                              _vm.relatedTransaction.id
                                            )
                                          }
                                        }
                                      },
                                      [_c("v-icon", [_vm._v("mdi-close")])],
                                      1
                                    )
                                  ],
                                  1
                                )
                              ])
                            : _vm._e()
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
      ),
      _vm._v(" "),
      _c(
        "v-dialog",
        {
          attrs: { "max-width": "1024px" },
          model: {
            value: _vm.transactionsDialog,
            callback: function($$v) {
              _vm.transactionsDialog = $$v
            },
            expression: "transactionsDialog"
          }
        },
        [
          _c(
            "v-card",
            [
              _c(
                "v-card-title",
                [
                  _c("h4", [_vm._v("SELECT RELATED TRANSACTION")]),
                  _vm._v(" "),
                  _c("v-spacer"),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      attrs: { icon: "", fab: "" },
                      on: {
                        click: function($event) {
                          return _vm.closeTransactionDialog()
                        }
                      }
                    },
                    [_c("v-icon", [_vm._v("mdi-close")])],
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
                  _c("v-data-table", {
                    attrs: {
                      headers: _vm.headers,
                      items: _vm.transactions,
                      "item-key": "id",
                      "show-select": "",
                      "disable-sort": true,
                      "single-select": true
                    },
                    model: {
                      value: _vm.selected,
                      callback: function($$v) {
                        _vm.selected = $$v
                      },
                      expression: "selected"
                    }
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
                      attrs: { color: "primary" },
                      on: {
                        click: function($event) {
                          return _vm.connectTransaction()
                        }
                      }
                    },
                    [_vm._v("Connect")]
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/work/InvoiceDialog.vue?vue&type=template&id=ee8b2b7c&":
/*!****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--18-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/work/InvoiceDialog.vue?vue&type=template&id=ee8b2b7c& ***!
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
  return _c(
    "div",
    { staticClass: "wrap-invoice" },
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
                          _c("h4", [_vm._v("INFORMATION")]),
                          _vm._v(" "),
                          _c("v-spacer"),
                          _vm._v(" "),
                          _vm.invoiceMode === "create"
                            ? _c(
                                "v-btn",
                                {
                                  attrs: {
                                    color: "primary",
                                    disabled: _vm.isEditButtonDisabled
                                  },
                                  on: {
                                    click: function($event) {
                                      return _vm.saveInvoice()
                                    }
                                  }
                                },
                                [_vm._v("Save")]
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.invoiceMode === "view"
                            ? _c(
                                "v-btn",
                                {
                                  attrs: {
                                    color: "primary",
                                    disabled: _vm.isEditButtonDisabled
                                  },
                                  on: {
                                    click: function($event) {
                                      return _vm.editInvoice()
                                    }
                                  }
                                },
                                [_vm._v("Edit")]
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.invoiceMode === "edit"
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
                                      return _vm.updateInvoice()
                                    }
                                  }
                                },
                                [_vm._v("Update")]
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.invoiceMode === "edit"
                            ? _c(
                                "v-btn",
                                {
                                  attrs: {
                                    color: "primary",
                                    disabled: _vm.isEditButtonDisabled
                                  },
                                  on: {
                                    click: function($event) {
                                      return _vm.cancelInvoice()
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
                            { attrs: { fluid: "" } },
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
                                          label: "Number",
                                          filled: "",
                                          rounded: "",
                                          "prepend-inner-icon":
                                            "mdi-format-list-numbered",
                                          disabled: _vm.isFieldDisabled,
                                          "error-messages":
                                            _vm.errors["invoice.number"]
                                        },
                                        model: {
                                          value: _vm.invoice.number,
                                          callback: function($$v) {
                                            _vm.$set(_vm.invoice, "number", $$v)
                                          },
                                          expression: "invoice.number"
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
                                            transition: "scale-transition",
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
                                                            "Invoiced Date",
                                                          readonly: "",
                                                          filled: "",
                                                          rounded: "",
                                                          "prepend-inner-icon":
                                                            "mdi-calendar-check",
                                                          "error-messages":
                                                            _vm.errors[
                                                              "invoice.date"
                                                            ],
                                                          disabled:
                                                            _vm.isFieldDisabled
                                                        },
                                                        model: {
                                                          value:
                                                            _vm.invoice.date,
                                                          callback: function(
                                                            $$v
                                                          ) {
                                                            _vm.$set(
                                                              _vm.invoice,
                                                              "date",
                                                              $$v
                                                            )
                                                          },
                                                          expression:
                                                            "invoice.date"
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
                                            value: _vm.dateCalendar,
                                            callback: function($$v) {
                                              _vm.dateCalendar = $$v
                                            },
                                            expression: "dateCalendar"
                                          }
                                        },
                                        [
                                          _vm._v(" "),
                                          _c("v-date-picker", {
                                            on: {
                                              input: function($event) {
                                                _vm.dateCalendar = false
                                              }
                                            },
                                            model: {
                                              value: _vm.invoice.date,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  _vm.invoice,
                                                  "date",
                                                  $$v
                                                )
                                              },
                                              expression: "invoice.date"
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
                                    {
                                      staticClass: "d-flex",
                                      attrs: { cols: "12", md: "6" }
                                    },
                                    [
                                      _c("v-select", {
                                        attrs: {
                                          "item-text": "name",
                                          "item-value": "id",
                                          items: _vm.requestors,
                                          label: "Requestor",
                                          filled: "",
                                          rounded: "",
                                          "prepend-inner-icon":
                                            "mdi-account-star",
                                          disabled: _vm.isFieldDisabled,
                                          "error-messages":
                                            _vm.errors["invoice.requestor_id"],
                                          clearable: ""
                                        },
                                        scopedSlots: _vm._u([
                                          {
                                            key: "selection",
                                            fn: function(requestor) {
                                              return [
                                                _vm._v(
                                                  _vm._s(requestor.item.name) +
                                                    " - " +
                                                    _vm._s(requestor.item.email)
                                                )
                                              ]
                                            }
                                          },
                                          {
                                            key: "item",
                                            fn: function(requestor) {
                                              return [
                                                _vm._v(
                                                  _vm._s(requestor.item.name) +
                                                    " - " +
                                                    _vm._s(requestor.item.email)
                                                )
                                              ]
                                            }
                                          }
                                        ]),
                                        model: {
                                          value: _vm.invoice.requestor_id,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.invoice,
                                              "requestor_id",
                                              $$v
                                            )
                                          },
                                          expression: "invoice.requestor_id"
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
                                          items: _vm.users,
                                          label: "Originator",
                                          filled: "",
                                          rounded: "",
                                          "prepend-inner-icon":
                                            "mdi-account-edit",
                                          disabled: _vm.isFieldDisabled,
                                          "error-messages":
                                            _vm.errors["invoice.originator_id"],
                                          clearable: ""
                                        },
                                        model: {
                                          value: _vm.invoice.originator_id,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.invoice,
                                              "originator_id",
                                              $$v
                                            )
                                          },
                                          expression: "invoice.originator_id"
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
                                          label: "Deliver To",
                                          filled: "",
                                          rounded: "",
                                          "prepend-inner-icon":
                                            "mdi-map-marker",
                                          "error-messages":
                                            _vm.errors["invoice.deliver_to"],
                                          disabled: _vm.isFieldDisabled
                                        },
                                        model: {
                                          value: _vm.invoice.deliver_to,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.invoice,
                                              "deliver_to",
                                              $$v
                                            )
                                          },
                                          expression: "invoice.deliver_to"
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
                                          label: "Payment Term",
                                          filled: "",
                                          rounded: "",
                                          "prepend-inner-icon":
                                            "mdi-timer-sand",
                                          "error-messages":
                                            _vm.errors["invoice.payment_term"],
                                          disabled: _vm.isFieldDisabled,
                                          type: "number"
                                        },
                                        model: {
                                          value: _vm.invoice.payment_term,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.invoice,
                                              "payment_term",
                                              $$v
                                            )
                                          },
                                          expression: "invoice.payment_term"
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
                                          label: "Payment Due Date",
                                          filled: "",
                                          rounded: "",
                                          "prepend-inner-icon":
                                            "mdi-timer-off-outline",
                                          "error-messages":
                                            _vm.errors[
                                              "invoice.payment_due_date"
                                            ],
                                          disabled: ""
                                        },
                                        model: {
                                          value: _vm.payment_due_date,
                                          callback: function($$v) {
                                            _vm.payment_due_date = $$v
                                          },
                                          expression: "payment_due_date"
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
                                          items: _vm.banks,
                                          "item-value": "id",
                                          "item-text": "name",
                                          label: "Bank Account",
                                          filled: "",
                                          rounded: "",
                                          "prepend-inner-icon": "mdi-bank",
                                          "error-messages":
                                            _vm.errors["invoice.bank_id"],
                                          disabled: _vm.isFieldDisabled
                                        },
                                        model: {
                                          value: _vm.invoice.bank_id,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.invoice,
                                              "bank_id",
                                              $$v
                                            )
                                          },
                                          expression: "invoice.bank_id"
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
                                          items: _vm.managers,
                                          label: "Manager",
                                          filled: "",
                                          rounded: "",
                                          "prepend-inner-icon":
                                            "mdi-account-cowboy-hat",
                                          clearable: "",
                                          disabled: _vm.isFieldDisabled,
                                          "error-messages": _vm.errors.manager,
                                          "return-object": ""
                                        },
                                        model: {
                                          value: _vm.manager,
                                          callback: function($$v) {
                                            _vm.manager = $$v
                                          },
                                          expression: "manager"
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
                                          label: "Project Number",
                                          filled: "",
                                          rounded: "",
                                          "prepend-inner-icon": "mdi-numeric",
                                          "error-messages":
                                            _vm.errors[
                                              "invoice.project_number"
                                            ],
                                          disabled: _vm.isFieldDisabled
                                        },
                                        model: {
                                          value: _vm.invoice.project_number,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.invoice,
                                              "project_number",
                                              $$v
                                            )
                                          },
                                          expression: "invoice.project_number"
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
                  _c("InvoiceLine", {
                    ref: "invoiceLineComponent",
                    attrs: {
                      units: _vm.units,
                      currentStatus: _vm.workStatus,
                      currentMode: _vm.invoiceMode,
                      permissions: _vm.permissions,
                      workId: _vm.workId,
                      editPermission: "edit-work",
                      approvePermission: "approve-work",
                      shipping_fee: _vm.invoice.shipping_fee
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-col",
                { attrs: { cols: "12", md: "5" } },
                [
                  _c("InvoicePdfDocument", {
                    ref: "pdfDocumentComponent",
                    attrs: {
                      permissions: _vm.permissions,
                      editPermission: _vm.editPermission,
                      approvePermission: _vm.approvePermission,
                      currentMode: _vm.invoiceMode,
                      exchangeRate: _vm.exchangeRate,
                      emergency: _vm.invoice.is_emergency,
                      totalPrice: _vm.invoice.total_price
                    }
                  }),
                  _vm._v(" "),
                  _c("InvoiceReminder", {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: _vm.invoiceId,
                        expression: "invoiceId"
                      }
                    ],
                    ref: "invoiceIesReminderComponent",
                    attrs: {
                      people: _vm.users,
                      title: "IES STAFF REMINDERS",
                      initUrl: "init-ies-reminder",
                      updateUrl: "update-ies-reminder",
                      number: _vm.invoice.number
                    }
                  }),
                  _vm._v(" "),
                  _c("InvoiceReminder", {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: _vm.invoiceId,
                        expression: "invoiceId"
                      }
                    ],
                    ref: "invoiceClientReminderComponent",
                    attrs: {
                      people: _vm.requestors,
                      title: "CLIENT REMINDERS",
                      initUrl: "init-client-reminder",
                      updateUrl: "update-client-reminder",
                      number: _vm.invoice.number
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "keep-alive",
                    [
                      _c("File", {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: _vm.invoiceId,
                            expression: "invoiceId"
                          }
                        ],
                        ref: "filesComponent",
                        attrs: {
                          model_id: _vm.invoiceId,
                          model: "Invoice",
                          storage: "invoice_files",
                          title: "FILE UPLOAD",
                          currentStatus: _vm.workStatus,
                          currentMode: _vm.invoiceMode,
                          permissions: _vm.permissions
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "keep-alive",
                    [
                      _c("Comment", {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: _vm.invoiceId,
                            expression: "invoiceId"
                          }
                        ],
                        ref: "commentsComponent",
                        attrs: { model: "Invoice", model_id: _vm.invoiceId }
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
        "v-dialog",
        {
          attrs: { "max-width": "500px" },
          model: {
            value: _vm.optionDialog,
            callback: function($$v) {
              _vm.optionDialog = $$v
            },
            expression: "optionDialog"
          }
        },
        [
          _c("InvoiceOption", {
            ref: "invoiceOptionComponent",
            on: { "signal-closeOptionDialog": _vm.closeOptionDialog }
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/work/InvoiceLine.vue?vue&type=template&id=014bd124&":
/*!**************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--18-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/work/InvoiceLine.vue?vue&type=template&id=014bd124& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************/
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
                          ),
                          _vm._v(" "),
                          _c(
                            "v-btn",
                            {
                              attrs: {
                                color: "pink",
                                outlined: "",
                                text: "",
                                disabled: _vm.isButtonDisabled
                              },
                              on: {
                                click: function($event) {
                                  return _vm.loadSaleOrderLines()
                                }
                              }
                            },
                            [_vm._v("Load client PO items")]
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
                                                _vm.invoiceLine.description,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  _vm.invoiceLine,
                                                  "description",
                                                  $$v
                                                )
                                              },
                                              expression:
                                                "invoiceLine.description"
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
                                              value: _vm.invoiceLine.name,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  _vm.invoiceLine,
                                                  "name",
                                                  $$v
                                                )
                                              },
                                              expression: "invoiceLine.name"
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
                                              value: _vm.invoiceLine.size,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  _vm.invoiceLine,
                                                  "size",
                                                  $$v
                                                )
                                              },
                                              expression: "invoiceLine.size"
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
                                              value: _vm.invoiceLine.price,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  _vm.invoiceLine,
                                                  "price",
                                                  $$v
                                                )
                                              },
                                              expression: "invoiceLine.price"
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
                                                _vm.maxLength("Quantity", 30)
                                              ]
                                            },
                                            model: {
                                              value: _vm.invoiceLine.quantity,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  _vm.invoiceLine,
                                                  "quantity",
                                                  $$v
                                                )
                                              },
                                              expression: "invoiceLine.quantity"
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
                                              value: _vm.invoiceLine.unit,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  _vm.invoiceLine,
                                                  "unit",
                                                  $$v
                                                )
                                              },
                                              expression: "invoiceLine.unit"
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
                                              value: _vm.invoiceLine.title,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  _vm.invoiceLine,
                                                  "title",
                                                  $$v
                                                )
                                              },
                                              expression: "invoiceLine.title"
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
                              _vm._v("Line Tittle")
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
                          _vm._l(_vm.invoiceLines, function(item, index) {
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
                              [_vm._v("TOTAL BEFORE TAX")]
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
                                      _vm.formatPrice(_vm.invoiceTotalPrice)
                                    )
                                  )
                                ])
                              ],
                              1
                            )
                          ]),
                          _vm._v(" "),
                          _vm.invoiceOption.shipping_fee > 0
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
                                            _vm.invoiceOption.shipping_fee
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
                          _vm.invoiceOption.discount > 0
                            ? _c("tr", [
                                _c(
                                  "td",
                                  {
                                    staticClass: "text-right",
                                    attrs: { colspan: "7" }
                                  },
                                  [_vm._v("TOTAL DISCOUNT")]
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
                                            _vm.invoiceOption.discount
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
                          _vm.invoiceOption.is_use_tax
                            ? _c("tr", [
                                _c(
                                  "td",
                                  {
                                    staticClass: "text-right",
                                    attrs: { colspan: "7" }
                                  },
                                  [_vm._v("TOTAL TAX")]
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
                                        _vm._s(_vm.formatPrice(_vm.invoiceTax))
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
                                      _vm.formatPrice(_vm.invoiceGrandTotal)
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/work/InvoiceOption.vue?vue&type=template&id=2d2796ef&":
/*!****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--18-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/work/InvoiceOption.vue?vue&type=template&id=2d2796ef& ***!
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
  return _c(
    "v-card",
    [
      _c("v-card-title", [
        _c("span", { staticClass: "headline" }, [_vm._v("Setting")])
      ]),
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
                        _c("td", [_vm._v("Use Tax")]),
                        _vm._v(" "),
                        _c(
                          "td",
                          [
                            _c("v-checkbox", {
                              model: {
                                value: _vm.invoiceOption.is_use_tax,
                                callback: function($$v) {
                                  _vm.$set(_vm.invoiceOption, "is_use_tax", $$v)
                                },
                                expression: "invoiceOption.is_use_tax"
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
                              model: {
                                value: _vm.invoiceOption.discount,
                                callback: function($$v) {
                                  _vm.$set(_vm.invoiceOption, "discount", $$v)
                                },
                                expression: "invoiceOption.discount"
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
                              model: {
                                value: _vm.invoiceOption.shipping_fee,
                                callback: function($$v) {
                                  _vm.$set(
                                    _vm.invoiceOption,
                                    "shipping_fee",
                                    $$v
                                  )
                                },
                                expression: "invoiceOption.shipping_fee"
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
                              attrs: {
                                items: _vm.formTypes,
                                "item-text": "name",
                                "item-value": "type"
                              },
                              model: {
                                value: _vm.invoiceOption.pdf_form_type,
                                callback: function($$v) {
                                  _vm.$set(
                                    _vm.invoiceOption,
                                    "pdf_form_type",
                                    $$v
                                  )
                                },
                                expression: "invoiceOption.pdf_form_type"
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
          _vm.invoiceId
            ? _c(
                "v-btn",
                {
                  attrs: { color: "blue darken-1", text: "" },
                  on: {
                    click: function($event) {
                      return _vm.updateInvoiceOption()
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/work/InvoicePdfDocument.vue?vue&type=template&id=441691ba&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--18-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/work/InvoicePdfDocument.vue?vue&type=template&id=441691ba& ***!
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
    "v-card",
    { staticClass: "mb-3", attrs: { outlined: "" } },
    [
      _c(
        "v-card-title",
        { staticClass: "section-title" },
        [
          _c("h4", [_vm._v("GENERATED PDF DOCUMENTS")]),
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
                                [_vm._v("No Pdf Document file created")]
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
                                            return _vm.downloadDocumentFile(
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
          }),
          _vm._v(
            "\n    " +
              _vm._s(_vm.exchangeRate) +
              " " +
              _vm._s(_vm.totalPrice) +
              "\n  "
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/work/InvoiceReminder.vue?vue&type=template&id=697f77ec&":
/*!******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--18-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/work/InvoiceReminder.vue?vue&type=template&id=697f77ec& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************/
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
        [
          _c("h4", [_vm._v(_vm._s(_vm.title))]),
          _vm._v(" "),
          _c("v-spacer"),
          _vm._v(" "),
          _c(
            "v-btn",
            { attrs: { depressed: "" }, on: { click: _vm.update } },
            [
              _c("v-icon", { attrs: { left: "" } }, [_vm._v("mdi-update")]),
              _vm._v("Update Now\n    ")
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
            "v-form",
            [
              _c("v-autocomplete", {
                attrs: {
                  items: _vm.people,
                  filled: "",
                  chips: "",
                  label: "Select Reminder Email Receivers",
                  "item-text": "name",
                  "item-value": "id",
                  multiple: "",
                  "return-object": ""
                },
                scopedSlots: _vm._u([
                  {
                    key: "selection",
                    fn: function(data) {
                      return [
                        _c(
                          "v-chip",
                          _vm._b(
                            {
                              attrs: {
                                "input-value": data.selected,
                                close: ""
                              },
                              on: {
                                click: data.select,
                                "click:close": function($event) {
                                  return _vm.remove(data.item)
                                }
                              }
                            },
                            "v-chip",
                            data.attrs,
                            false
                          ),
                          [
                            _c("v-avatar", { attrs: { left: "" } }, [
                              data.item.avatar
                                ? _c(
                                    "span",
                                    [
                                      _c("v-img", {
                                        attrs: {
                                          src:
                                            "img/avatars/" + data.item.avatar,
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
                                            "img/default-avatars/" +
                                            data.item.gender +
                                            "-avatar.png",
                                          width: "30"
                                        }
                                      })
                                    ],
                                    1
                                  )
                            ]),
                            _vm._v(
                              "\n            " +
                                _vm._s(data.item.name) +
                                "\n          "
                            )
                          ],
                          1
                        )
                      ]
                    }
                  },
                  {
                    key: "item",
                    fn: function(data) {
                      return [
                        typeof data.item !== "object"
                          ? [
                              _c("v-list-item-content", {
                                domProps: { textContent: _vm._s(data.item) }
                              })
                            ]
                          : [
                              _c("v-list-item-avatar", [
                                data.item.avatar
                                  ? _c("span", [
                                      _c("img", {
                                        attrs: {
                                          src:
                                            "img/avatars/" + data.item.avatar,
                                          width: "30"
                                        }
                                      })
                                    ])
                                  : _c("span", [
                                      _c("img", {
                                        attrs: {
                                          src:
                                            "img/default-avatars/" +
                                            data.item.gender +
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
                                  _c("v-list-item-title", {
                                    domProps: {
                                      innerHTML: _vm._s(data.item.name)
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("v-list-item-subtitle", {
                                    domProps: {
                                      innerHTML: _vm._s(data.item.position)
                                    }
                                  })
                                ],
                                1
                              )
                            ]
                      ]
                    }
                  }
                ]),
                model: {
                  value: _vm.reminders,
                  callback: function($$v) {
                    _vm.reminders = $$v
                  },
                  expression: "reminders"
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
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/work/PaymentDialog.vue?vue&type=template&id=326b444a&":
/*!****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--18-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/work/PaymentDialog.vue?vue&type=template&id=326b444a& ***!
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
  return _c(
    "div",
    { staticClass: "wrap-payment" },
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
                          _c("h4", [_vm._v("INFORMATION")]),
                          _vm._v(" "),
                          _c("v-spacer"),
                          _vm._v(" "),
                          _vm.paymentMode === "create"
                            ? _c(
                                "v-btn",
                                {
                                  attrs: {
                                    color: "primary",
                                    disabled: _vm.isEditButtonDisabled
                                  },
                                  on: {
                                    click: function($event) {
                                      return _vm.savePayment()
                                    }
                                  }
                                },
                                [_vm._v("Save")]
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.paymentMode === "view"
                            ? _c(
                                "v-btn",
                                {
                                  attrs: {
                                    color: "primary",
                                    disabled: _vm.isEditButtonDisabled
                                  },
                                  on: {
                                    click: function($event) {
                                      return _vm.editPayment()
                                    }
                                  }
                                },
                                [_vm._v("Edit")]
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.paymentMode === "edit"
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
                                      return _vm.updatePayment()
                                    }
                                  }
                                },
                                [_vm._v("Update")]
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.paymentMode === "edit"
                            ? _c(
                                "v-btn",
                                {
                                  attrs: {
                                    color: "primary",
                                    disabled: _vm.isEditButtonDisabled
                                  },
                                  on: {
                                    click: function($event) {
                                      return _vm.cancelPayment()
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
                                        "v-menu",
                                        {
                                          attrs: {
                                            "close-on-content-click": false,
                                            "nudge-right": 40,
                                            transition: "scale-transition",
                                            "offset-y": "",
                                            "min-width": "290px",
                                            "error-messages": _vm.errors.date
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
                                                          label: "Payment Date",
                                                          readonly: "",
                                                          filled: "",
                                                          rounded: "",
                                                          "prepend-inner-icon":
                                                            "mdi-calendar-check",
                                                          "error-messages":
                                                            _vm.errors.date,
                                                          disabled:
                                                            _vm.isFieldDisabled
                                                        },
                                                        model: {
                                                          value:
                                                            _vm.payment.date,
                                                          callback: function(
                                                            $$v
                                                          ) {
                                                            _vm.$set(
                                                              _vm.payment,
                                                              "date",
                                                              $$v
                                                            )
                                                          },
                                                          expression:
                                                            "payment.date"
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
                                            value: _vm.dateCalendar,
                                            callback: function($$v) {
                                              _vm.dateCalendar = $$v
                                            },
                                            expression: "dateCalendar"
                                          }
                                        },
                                        [
                                          _vm._v(" "),
                                          _c("v-date-picker", {
                                            on: {
                                              input: function($event) {
                                                _vm.dateCalendar = false
                                              }
                                            },
                                            model: {
                                              value: _vm.payment.date,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  _vm.payment,
                                                  "date",
                                                  $$v
                                                )
                                              },
                                              expression: "payment.date"
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
                                      _c("v-select", {
                                        attrs: {
                                          items: _vm.companies,
                                          "item-value": "id",
                                          "item-text": "name",
                                          label: "Payment Client",
                                          filled: "",
                                          rounded: "",
                                          "prepend-inner-icon":
                                            "mdi-account-tie",
                                          "error-messages":
                                            _vm.errors.company_id,
                                          disabled: _vm.isFieldDisabled
                                        },
                                        model: {
                                          value: _vm.payment.company_id,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.payment,
                                              "company_id",
                                              $$v
                                            )
                                          },
                                          expression: "payment.company_id"
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
                                          items: _vm.paymentMethods,
                                          "item-value": "name",
                                          "item-text": "name",
                                          label: "Payment Method",
                                          filled: "",
                                          rounded: "",
                                          "prepend-inner-icon":
                                            "mdi-credit-card-multiple",
                                          "error-messages":
                                            _vm.errors.payment_method,
                                          disabled: _vm.isFieldDisabled
                                        },
                                        model: {
                                          value: _vm.payment.payment_method,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.payment,
                                              "payment_method",
                                              $$v
                                            )
                                          },
                                          expression: "payment.payment_method"
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _vm.payment.payment_method ===
                                  "Bank Transfers"
                                    ? _c(
                                        "v-col",
                                        { attrs: { cols: "12", md: "6" } },
                                        [
                                          _c("v-select", {
                                            attrs: {
                                              items: _vm.banks,
                                              "item-value": "name",
                                              "item-text": "name",
                                              label: "Bank",
                                              filled: "",
                                              rounded: "",
                                              "prepend-inner-icon": "mdi-bank",
                                              "error-messages": _vm.errors.bank,
                                              disabled: _vm.isFieldDisabled
                                            },
                                            model: {
                                              value: _vm.payment.bank,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  _vm.payment,
                                                  "bank",
                                                  $$v
                                                )
                                              },
                                              expression: "payment.bank"
                                            }
                                          })
                                        ],
                                        1
                                      )
                                    : _vm._e(),
                                  _vm._v(" "),
                                  _c(
                                    "v-col",
                                    { attrs: { cols: "12", md: "6" } },
                                    [
                                      _c("v-select", {
                                        attrs: {
                                          items: _vm.currencies,
                                          "item-value": "id",
                                          "item-text": "name",
                                          label: "Currency",
                                          filled: "",
                                          rounded: "",
                                          "prepend-inner-icon":
                                            "mdi-currency-usd",
                                          "error-messages":
                                            _vm.errors.currency_id,
                                          disabled: _vm.isFieldDisabled
                                        },
                                        model: {
                                          value: _vm.payment.currency_id,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.payment,
                                              "currency_id",
                                              $$v
                                            )
                                          },
                                          expression: "payment.currency_id"
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
                                          label: "Total Price",
                                          filled: "",
                                          rounded: "",
                                          "prepend-inner-icon": "mdi-equal",
                                          disabled: "",
                                          type: "number",
                                          "error-messages":
                                            _vm.errors.total_price
                                        },
                                        model: {
                                          value: _vm.payment.total_price,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.payment,
                                              "total_price",
                                              $$v
                                            )
                                          },
                                          expression: "payment.total_price"
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
                                          label: "Discount",
                                          filled: "",
                                          rounded: "",
                                          "prepend-inner-icon": "mdi-minus",
                                          disabled: "",
                                          type: "number",
                                          "error-messages": _vm.errors.discount
                                        },
                                        model: {
                                          value: _vm.payment.discount,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.payment,
                                              "discount",
                                              $$v
                                            )
                                          },
                                          expression: "payment.discount"
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
                                          label: "Shipping Handling Fee",
                                          filled: "",
                                          rounded: "",
                                          "prepend-inner-icon":
                                            "mdi-truck-check",
                                          disabled: "",
                                          type: "number",
                                          "error-messages":
                                            _vm.errors.shipping_fee
                                        },
                                        model: {
                                          value: _vm.payment.shipping_fee,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.payment,
                                              "shipping_fee",
                                              $$v
                                            )
                                          },
                                          expression: "payment.shipping_fee"
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
                                          label: "Tax",
                                          filled: "",
                                          rounded: "",
                                          "prepend-inner-icon":
                                            "mdi-alpha-t-circle",
                                          disabled: "",
                                          type: "number",
                                          "error-messages": _vm.errors.tax
                                        },
                                        model: {
                                          value: _vm.payment.tax,
                                          callback: function($$v) {
                                            _vm.$set(_vm.payment, "tax", $$v)
                                          },
                                          expression: "payment.tax"
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
                                          label: "Grand Total",
                                          filled: "",
                                          rounded: "",
                                          "prepend-inner-icon": "mdi-equal",
                                          type: "number",
                                          disabled: "",
                                          "error-messages":
                                            _vm.errors.grand_total
                                        },
                                        model: {
                                          value: _vm.grand_total,
                                          callback: function($$v) {
                                            _vm.grand_total = $$v
                                          },
                                          expression: "grand_total"
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
                                          label: "Exchange Rate",
                                          filled: "",
                                          rounded: "",
                                          "prepend-inner-icon":
                                            "mdi-alpha-e-circle",
                                          disabled: _vm.isFieldDisabled,
                                          type: "number",
                                          "error-messages":
                                            _vm.errors.exchange_rate
                                        },
                                        model: {
                                          value: _vm.payment.exchange_rate,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.payment,
                                              "exchange_rate",
                                              $$v
                                            )
                                          },
                                          expression: "payment.exchange_rate"
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
                                          label: "Exchanged Total",
                                          filled: "",
                                          rounded: "",
                                          "prepend-inner-icon":
                                            "mdi-currency-krw",
                                          type: "number",
                                          disabled: "",
                                          "error-messages":
                                            _vm.errors.total_price
                                        },
                                        model: {
                                          value: _vm.exchanged_total_price,
                                          callback: function($$v) {
                                            _vm.exchanged_total_price = $$v
                                          },
                                          expression: "exchanged_total_price"
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
              ),
              _vm._v(" "),
              _c(
                "v-col",
                { attrs: { cols: "12", md: "5" } },
                [
                  _c("RelatedTransaction", {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: _vm.paymentId,
                        expression: "paymentId"
                      }
                    ],
                    ref: "transactionComponent"
                  }),
                  _vm._v(" "),
                  _c("File", {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: _vm.paymentId,
                        expression: "paymentId"
                      }
                    ],
                    ref: "filesComponent",
                    attrs: {
                      model_id: _vm.paymentId,
                      model: "Payment",
                      storage: "payment_files",
                      title: "FILE UPLOAD",
                      currentStatus: _vm.workStatus,
                      currentMode: _vm.paymentMode,
                      permissions: _vm.permissions
                    }
                  }),
                  _vm._v(" "),
                  _c("Comment", {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: _vm.paymentId,
                        expression: "paymentId"
                      }
                    ],
                    ref: "commentsComponent",
                    attrs: { model: "Payment", model_id: _vm.paymentId }
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
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/work/RelatedQuotation.vue?vue&type=template&id=1a448444&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--18-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/work/RelatedQuotation.vue?vue&type=template&id=1a448444& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "wrap-related-quotations wrap-component-table" },
    [
      _c(
        "v-card",
        { staticClass: "mb-3", attrs: { outlined: "" } },
        [
          _c(
            "v-card-title",
            [
              _c("h4", [_vm._v("RELATED QUOTATION")]),
              _vm._v(" "),
              _c("v-spacer"),
              _vm._v(" "),
              _c(
                "v-btn",
                {
                  attrs: { color: "primary", small: "" },
                  on: {
                    click: function($event) {
                      return _vm.openQuotationsDialog()
                    }
                  }
                },
                [_c("v-icon", [_vm._v("mdi-magnify")])],
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
              _c("v-simple-table", {
                scopedSlots: _vm._u([
                  {
                    key: "default",
                    fn: function() {
                      return [
                        _c("thead", [
                          _c("tr", [
                            _c("th", { staticClass: "text-left" }, [
                              _vm._v("Number")
                            ]),
                            _vm._v(" "),
                            _c("th", { staticClass: "text-center" }, [
                              _vm._v("Client")
                            ]),
                            _vm._v(" "),
                            _c("th", { staticClass: "text-center" }, [
                              _vm._v("Project")
                            ]),
                            _vm._v(" "),
                            _c("th", { staticClass: "text-center" }, [
                              _vm._v("Sub Project")
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
                          _vm._l(_vm.relatedQuotations, function(quotation) {
                            return _c("tr", { key: quotation.id }, [
                              _c("td", [_vm._v(_vm._s(quotation.number))]),
                              _vm._v(" "),
                              _c("td", { staticClass: "text-center" }, [
                                _vm._v(_vm._s(quotation.company))
                              ]),
                              _vm._v(" "),
                              _c("td", { staticClass: "text-center" }, [
                                _vm._v(_vm._s(quotation.project))
                              ]),
                              _vm._v(" "),
                              _c("td", { staticClass: "text-center" }, [
                                _vm._v(_vm._s(quotation.sub_project))
                              ]),
                              _vm._v(" "),
                              _c(
                                "td",
                                { staticClass: "d-flex justify-center" },
                                [
                                  _c(
                                    "span",
                                    { staticClass: "d-block mr-1" },
                                    [
                                      quotation.pdf !== null
                                        ? _c(
                                            "v-btn",
                                            {
                                              attrs: {
                                                small: "",
                                                fab: "",
                                                icon: "",
                                                color: "blue"
                                              },
                                              on: {
                                                click: function($event) {
                                                  return _vm.downloadPdfFile(
                                                    quotation.id,
                                                    quotation.pdf.id
                                                  )
                                                }
                                              }
                                            },
                                            [
                                              _c("v-icon", [
                                                _vm._v("mdi-pdf-box")
                                              ])
                                            ],
                                            1
                                          )
                                        : _c(
                                            "v-btn",
                                            {
                                              attrs: {
                                                small: "",
                                                fab: "",
                                                icon: "",
                                                color: "gray"
                                              }
                                            },
                                            [
                                              _c("v-icon", [
                                                _vm._v("mdi-pdf-box")
                                              ])
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
                                            small: "",
                                            fab: "",
                                            icon: "",
                                            color: "red"
                                          },
                                          on: {
                                            click: function($event) {
                                              return _vm.disconnectQuotations(
                                                quotation
                                              )
                                            }
                                          }
                                        },
                                        [_c("v-icon", [_vm._v("mdi-close")])],
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
      ),
      _vm._v(" "),
      _c(
        "v-dialog",
        {
          attrs: { "max-width": "1024px" },
          model: {
            value: _vm.quotationsDialog,
            callback: function($$v) {
              _vm.quotationsDialog = $$v
            },
            expression: "quotationsDialog"
          }
        },
        [
          _c(
            "v-card",
            [
              _c(
                "v-card-title",
                [
                  _c("h4", [_vm._v("SELECT RELATED QUOTATION")]),
                  _vm._v(" "),
                  _c("v-spacer"),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      attrs: { icon: "", fab: "" },
                      on: {
                        click: function($event) {
                          return _vm.closeQuotationsDialog()
                        }
                      }
                    },
                    [_c("v-icon", [_vm._v("mdi-close")])],
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
                  _c("v-data-table", {
                    attrs: {
                      headers: _vm.headers,
                      items: _vm.quotations,
                      "item-key": "id",
                      "show-select": "",
                      "disable-sort": true
                    },
                    model: {
                      value: _vm.selected,
                      callback: function($$v) {
                        _vm.selected = $$v
                      },
                      expression: "selected"
                    }
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
                      attrs: { color: "primary" },
                      on: {
                        click: function($event) {
                          return _vm.connectQuotations()
                        }
                      }
                    },
                    [_vm._v("Connect")]
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/work/SaleOrderDialog.vue?vue&type=template&id=20ddb89c&":
/*!******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--18-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/work/SaleOrderDialog.vue?vue&type=template&id=20ddb89c& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "wrap-sale-order" },
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
                          _c("h4", [_vm._v("INFORMATION")]),
                          _vm._v(" "),
                          _c("v-spacer"),
                          _vm._v(" "),
                          _vm.saleOrderMode === "create"
                            ? _c(
                                "v-btn",
                                {
                                  attrs: {
                                    color: "primary",
                                    disabled: _vm.isEditButtonDisabled
                                  },
                                  on: {
                                    click: function($event) {
                                      return _vm.saveSaleOrder()
                                    }
                                  }
                                },
                                [_vm._v("Save")]
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.saleOrderMode === "view"
                            ? _c(
                                "v-btn",
                                {
                                  attrs: {
                                    color: "primary",
                                    disabled: _vm.isEditButtonDisabled
                                  },
                                  on: {
                                    click: function($event) {
                                      return _vm.editSaleOrder()
                                    }
                                  }
                                },
                                [_vm._v("Edit")]
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.saleOrderMode === "edit"
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
                                      return _vm.updateSaleOrder()
                                    }
                                  }
                                },
                                [_vm._v("Update")]
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.saleOrderMode === "edit"
                            ? _c(
                                "v-btn",
                                {
                                  attrs: {
                                    color: "primary",
                                    disabled: _vm.isEditButtonDisabled
                                  },
                                  on: {
                                    click: function($event) {
                                      return _vm.cancelSaleOrder()
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
                            { attrs: { fluid: "" } },
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
                                          label: "Number",
                                          filled: "",
                                          rounded: "",
                                          "prepend-inner-icon":
                                            "mdi-format-list-numbered",
                                          disabled: _vm.isFieldDisabled,
                                          "error-messages": _vm.errors.number
                                        },
                                        model: {
                                          value: _vm.saleOrder.number,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.saleOrder,
                                              "number",
                                              $$v
                                            )
                                          },
                                          expression: "saleOrder.number"
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
                                            transition: "scale-transition",
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
                                                            "PO Received On",
                                                          readonly: "",
                                                          filled: "",
                                                          rounded: "",
                                                          "prepend-inner-icon":
                                                            "mdi-calendar-check",
                                                          "error-messages":
                                                            _vm.errors.date,
                                                          disabled:
                                                            _vm.isFieldDisabled
                                                        },
                                                        model: {
                                                          value:
                                                            _vm.saleOrder.date,
                                                          callback: function(
                                                            $$v
                                                          ) {
                                                            _vm.$set(
                                                              _vm.saleOrder,
                                                              "date",
                                                              $$v
                                                            )
                                                          },
                                                          expression:
                                                            "saleOrder.date"
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
                                            value: _vm.dateCalendar,
                                            callback: function($$v) {
                                              _vm.dateCalendar = $$v
                                            },
                                            expression: "dateCalendar"
                                          }
                                        },
                                        [
                                          _vm._v(" "),
                                          _c("v-date-picker", {
                                            on: {
                                              input: function($event) {
                                                _vm.dateCalendar = false
                                              }
                                            },
                                            model: {
                                              value: _vm.saleOrder.date,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  _vm.saleOrder,
                                                  "date",
                                                  $$v
                                                )
                                              },
                                              expression: "saleOrder.date"
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
                                    {
                                      staticClass: "d-flex",
                                      attrs: { cols: "12", md: "6" }
                                    },
                                    [
                                      _c("v-select", {
                                        attrs: {
                                          "item-text": "name",
                                          "item-value": "id",
                                          items: _vm.requestors,
                                          label: "Requestor",
                                          filled: "",
                                          rounded: "",
                                          "prepend-inner-icon":
                                            "mdi-account-star",
                                          disabled: _vm.isFieldDisabled,
                                          "error-messages":
                                            _vm.errors.requestor_id
                                        },
                                        scopedSlots: _vm._u([
                                          {
                                            key: "selection",
                                            fn: function(requestor) {
                                              return [
                                                _vm._v(
                                                  _vm._s(requestor.item.name) +
                                                    " - " +
                                                    _vm._s(requestor.item.email)
                                                )
                                              ]
                                            }
                                          },
                                          {
                                            key: "item",
                                            fn: function(requestor) {
                                              return [
                                                _vm._v(
                                                  _vm._s(requestor.item.name) +
                                                    " - " +
                                                    _vm._s(requestor.item.email)
                                                )
                                              ]
                                            }
                                          }
                                        ]),
                                        model: {
                                          value: _vm.saleOrder.requestor_id,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.saleOrder,
                                              "requestor_id",
                                              $$v
                                            )
                                          },
                                          expression: "saleOrder.requestor_id"
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
                                          label: "Deliver To",
                                          filled: "",
                                          rounded: "",
                                          "prepend-inner-icon":
                                            "mdi-map-marker",
                                          "error-messages":
                                            _vm.errors.deliver_to,
                                          disabled: _vm.isFieldDisabled
                                        },
                                        model: {
                                          value: _vm.saleOrder.deliver_to,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.saleOrder,
                                              "deliver_to",
                                              $$v
                                            )
                                          },
                                          expression: "saleOrder.deliver_to"
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
                  _c("SaleOrderLine", {
                    ref: "saleOrderLineComponent",
                    attrs: {
                      units: _vm.units,
                      currentStatus: _vm.workStatus,
                      currentMode: _vm.saleOrderMode,
                      permissions: _vm.permissions,
                      editPermission: "edit-work",
                      approvePermission: "approve-work",
                      option: _vm.saleOrderOption
                    }
                  }),
                  _vm._v(" "),
                  _c("Attachment", {
                    ref: "attachmentComponent",
                    attrs: {
                      model: "SaleOrder",
                      storage: "sale_order_attachments",
                      model_id: _vm.saleOrderId,
                      currentStatus: _vm.workStatus,
                      currentMode: _vm.saleOrderMode,
                      permissions: _vm.permissions,
                      editPermission: "edit-work",
                      approvePermission: "approve-work",
                      title: "Attach PO received from client"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-col",
                { attrs: { cols: "12", md: "5" } },
                [
                  _c(
                    "keep-alive",
                    [
                      _c("File", {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: _vm.saleOrderId,
                            expression: "saleOrderId"
                          }
                        ],
                        ref: "filesComponent",
                        attrs: {
                          model_id: _vm.saleOrderId,
                          model: "SaleOrder",
                          storage: "sale_order_files",
                          title: "FILE UPLOAD",
                          currentStatus: _vm.workStatus,
                          currentMode: _vm.saleOrderMode,
                          permissions: _vm.permissions
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "keep-alive",
                    [
                      _c("Comment", {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: _vm.saleOrderId,
                            expression: "saleOrderId"
                          }
                        ],
                        ref: "commentsComponent",
                        attrs: { model: "SaleOrder", model_id: _vm.saleOrderId }
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
        "v-dialog",
        {
          attrs: { "max-width": "500px" },
          model: {
            value: _vm.optionDialog,
            callback: function($$v) {
              _vm.optionDialog = $$v
            },
            expression: "optionDialog"
          }
        },
        [
          _c("SaleOrderOption", {
            ref: "saleOrderOptionComponent",
            on: { "signal-closeOptionDialog": _vm.closeOptionDialog }
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/work/SaleOrderLine.vue?vue&type=template&id=18d13448&":
/*!****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--18-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/work/SaleOrderLine.vue?vue&type=template&id=18d13448& ***!
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
                                                _vm.saleOrderLine.description,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  _vm.saleOrderLine,
                                                  "description",
                                                  $$v
                                                )
                                              },
                                              expression:
                                                "saleOrderLine.description"
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
                                              value: _vm.saleOrderLine.name,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  _vm.saleOrderLine,
                                                  "name",
                                                  $$v
                                                )
                                              },
                                              expression: "saleOrderLine.name"
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
                                              value: _vm.saleOrderLine.size,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  _vm.saleOrderLine,
                                                  "size",
                                                  $$v
                                                )
                                              },
                                              expression: "saleOrderLine.size"
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
                                              value: _vm.saleOrderLine.price,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  _vm.saleOrderLine,
                                                  "price",
                                                  $$v
                                                )
                                              },
                                              expression: "saleOrderLine.price"
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
                                              value: _vm.saleOrderLine.quantity,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  _vm.saleOrderLine,
                                                  "quantity",
                                                  $$v
                                                )
                                              },
                                              expression:
                                                "saleOrderLine.quantity"
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
                                              value: _vm.saleOrderLine.unit,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  _vm.saleOrderLine,
                                                  "unit",
                                                  $$v
                                                )
                                              },
                                              expression: "saleOrderLine.unit"
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
                                              value: _vm.saleOrderLine.title,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  _vm.saleOrderLine,
                                                  "title",
                                                  $$v
                                                )
                                              },
                                              expression: "saleOrderLine.title"
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
                          _vm._l(_vm.saleOrderLines, function(item, index) {
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
                                      _vm.formatPrice(_vm.saleOrderTotalPrice)
                                    )
                                  )
                                ])
                              ],
                              1
                            )
                          ]),
                          _vm._v(" "),
                          _vm.saleOrderOption.discount > 0
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
                                            _vm.saleOrderOption.discount
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
                          _vm.saleOrderOption.shipping_fee > 0
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
                                            _vm.saleOrderOption.shipping_fee
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
                          _vm.saleOrderOption.is_use_tax
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
                                          _vm.formatPrice(_vm.saleOrderTax)
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
                                      _vm.formatPrice(_vm.saleOrderGrandTotal)
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/work/SaleOrderOption.vue?vue&type=template&id=756a356e&":
/*!******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--18-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/work/SaleOrderOption.vue?vue&type=template&id=756a356e& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************/
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
                                value: _vm.saleOrderOption.title,
                                callback: function($$v) {
                                  _vm.$set(_vm.saleOrderOption, "title", $$v)
                                },
                                expression: "saleOrderOption.title"
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
                                value: _vm.saleOrderOption.is_use_tax,
                                callback: function($$v) {
                                  _vm.$set(
                                    _vm.saleOrderOption,
                                    "is_use_tax",
                                    $$v
                                  )
                                },
                                expression: "saleOrderOption.is_use_tax"
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
                                value: _vm.saleOrderOption.discount,
                                callback: function($$v) {
                                  _vm.$set(_vm.saleOrderOption, "discount", $$v)
                                },
                                expression: "saleOrderOption.discount"
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
                                value: _vm.saleOrderOption.shipping_fee,
                                callback: function($$v) {
                                  _vm.$set(
                                    _vm.saleOrderOption,
                                    "shipping_fee",
                                    $$v
                                  )
                                },
                                expression: "saleOrderOption.shipping_fee"
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
                                value: _vm.saleOrderOption.pdf_form_type,
                                callback: function($$v) {
                                  _vm.$set(
                                    _vm.saleOrderOption,
                                    "pdf_form_type",
                                    $$v
                                  )
                                },
                                expression: "saleOrderOption.pdf_form_type"
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
          _vm.saleOrderId
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/work/WccDialog.vue?vue&type=template&id=4ca5882c&":
/*!************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--18-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/work/WccDialog.vue?vue&type=template&id=4ca5882c& ***!
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
    "div",
    { staticClass: "wrap-wcc" },
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
                          _c("h4", [
                            _vm._v("INFORMATION " + _vm._s(_vm.wccId))
                          ]),
                          _vm._v(" "),
                          _c("v-spacer"),
                          _vm._v(" "),
                          _vm.wccMode === "create"
                            ? _c(
                                "v-btn",
                                {
                                  attrs: {
                                    color: "primary",
                                    disabled: _vm.isEditButtonDisabled
                                  },
                                  on: {
                                    click: function($event) {
                                      return _vm.saveWcc()
                                    }
                                  }
                                },
                                [_vm._v("Save")]
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.wccMode === "view"
                            ? _c(
                                "v-btn",
                                {
                                  attrs: {
                                    color: "primary",
                                    disabled: _vm.isEditButtonDisabled
                                  },
                                  on: {
                                    click: function($event) {
                                      return _vm.editWcc()
                                    }
                                  }
                                },
                                [_vm._v("Edit")]
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.wccMode === "edit"
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
                                      return _vm.updateWcc()
                                    }
                                  }
                                },
                                [_vm._v("Update")]
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.wccMode === "edit"
                            ? _c(
                                "v-btn",
                                {
                                  attrs: {
                                    color: "primary",
                                    disabled: _vm.isEditButtonDisabled
                                  },
                                  on: {
                                    click: function($event) {
                                      return _vm.cancelWcc()
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
                            { attrs: { fluid: "" } },
                            [
                              _c(
                                "v-row",
                                [
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
                                          items: _vm.approvers,
                                          label: "Approved by",
                                          filled: "",
                                          rounded: "",
                                          "prepend-inner-icon":
                                            "mdi-account-star",
                                          disabled: _vm.isFieldDisabled,
                                          "error-messages":
                                            _vm.errors.approver_id
                                        },
                                        model: {
                                          value: _vm.wcc.approver_id,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.wcc,
                                              "approver_id",
                                              $$v
                                            )
                                          },
                                          expression: "wcc.approver_id"
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
                                            transition: "scale-transition",
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
                                                          label: "Approved on",
                                                          readonly: "",
                                                          filled: "",
                                                          rounded: "",
                                                          "prepend-inner-icon":
                                                            "mdi-calendar-check",
                                                          "error-messages":
                                                            _vm.errors.date,
                                                          disabled:
                                                            _vm.isFieldDisabled
                                                        },
                                                        model: {
                                                          value: _vm.wcc.date,
                                                          callback: function(
                                                            $$v
                                                          ) {
                                                            _vm.$set(
                                                              _vm.wcc,
                                                              "date",
                                                              $$v
                                                            )
                                                          },
                                                          expression: "wcc.date"
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
                                            value: _vm.dateCalendar,
                                            callback: function($$v) {
                                              _vm.dateCalendar = $$v
                                            },
                                            expression: "dateCalendar"
                                          }
                                        },
                                        [
                                          _vm._v(" "),
                                          _c("v-date-picker", {
                                            on: {
                                              input: function($event) {
                                                _vm.dateCalendar = false
                                              }
                                            },
                                            model: {
                                              value: _vm.wcc.date,
                                              callback: function($$v) {
                                                _vm.$set(_vm.wcc, "date", $$v)
                                              },
                                              expression: "wcc.date"
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
                  ),
                  _vm._v(" "),
                  _c("Attachment", {
                    ref: "attachmentComponent",
                    attrs: {
                      model: "Wcc",
                      storage: "wcc_attachments",
                      model_id: _vm.wccId,
                      currentStatus: _vm.workStatus,
                      currentMode: _vm.wccMode,
                      permissions: _vm.permissions,
                      editPermission: "edit-work",
                      approvePermission: "approve-work",
                      title: "Attach WCC approved from client"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-col",
                { attrs: { cols: "12", md: "5" } },
                [
                  _c("File", {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: _vm.wccId,
                        expression: "wccId"
                      }
                    ],
                    ref: "filesComponent",
                    attrs: {
                      model_id: _vm.wccId,
                      model: "Wcc",
                      storage: "wcc_files",
                      title: "FILE UPLOAD",
                      currentStatus: _vm.workStatus,
                      currentMode: _vm.wccMode,
                      permissions: _vm.permissions
                    }
                  }),
                  _vm._v(" "),
                  _c("Comment", {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: _vm.wccId,
                        expression: "wccId"
                      }
                    ],
                    ref: "commentsComponent",
                    attrs: { model: "Wcc", model_id: _vm.wccId }
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
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/work/WorkDialog.vue?vue&type=template&id=3180fac8&":
/*!*************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--18-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/work/WorkDialog.vue?vue&type=template&id=3180fac8& ***!
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
  return _c(
    "div",
    { staticClass: "wrap-work" },
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
                          _c("h4", [_vm._v("INFORMATION")]),
                          _vm._v(" "),
                          _c("v-spacer"),
                          _vm._v(" "),
                          _vm.workMode === "create"
                            ? _c(
                                "v-btn",
                                {
                                  attrs: { color: "primary" },
                                  on: {
                                    click: function($event) {
                                      return _vm.saveWork()
                                    }
                                  }
                                },
                                [_vm._v("Save")]
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.workMode === "view"
                            ? _c(
                                "v-btn",
                                {
                                  attrs: {
                                    color: "primary",
                                    disabled: _vm.isEditButtonDisabled
                                  },
                                  on: {
                                    click: function($event) {
                                      return _vm.editWork()
                                    }
                                  }
                                },
                                [_vm._v("Edit")]
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.workMode === "edit"
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
                                      return _vm.updateWork()
                                    }
                                  }
                                },
                                [_vm._v("Update")]
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.workMode === "edit"
                            ? _c(
                                "v-btn",
                                {
                                  attrs: {
                                    color: "primary",
                                    disabled: _vm.isEditButtonDisabled
                                  },
                                  on: {
                                    click: function($event) {
                                      return _vm.cancelWork()
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
                            { attrs: { fluid: "" } },
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
                                          label: "Number",
                                          filled: "",
                                          rounded: "",
                                          "prepend-inner-icon":
                                            "mdi-format-list-numbered",
                                          disabled: ""
                                        },
                                        model: {
                                          value: _vm.editedItem.number,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.editedItem,
                                              "number",
                                              $$v
                                            )
                                          },
                                          expression: "editedItem.number"
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
                                          items: _vm.companies,
                                          "item-value": "id",
                                          "item-text": "name",
                                          label: "Client",
                                          filled: "",
                                          rounded: "",
                                          "prepend-inner-icon":
                                            "mdi-account-tie",
                                          "error-messages":
                                            _vm.errors.company_id,
                                          disabled: _vm.isFieldDisabled
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
                                    { attrs: { cols: "12", md: "6" } },
                                    [
                                      _c("v-select", {
                                        attrs: {
                                          items: _vm.projects,
                                          "item-value": "id",
                                          "item-text": "name",
                                          label: "Project",
                                          filled: "",
                                          rounded: "",
                                          "prepend-inner-icon": "mdi-ferry",
                                          "error-messages":
                                            _vm.errors.project_id,
                                          disabled: _vm.isFieldDisabled
                                        },
                                        on: {
                                          change: function($event) {
                                            return _vm.selectProject(
                                              _vm.editedItem.project_id
                                            )
                                          }
                                        },
                                        model: {
                                          value: _vm.editedItem.project_id,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.editedItem,
                                              "project_id",
                                              $$v
                                            )
                                          },
                                          expression: "editedItem.project_id"
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
                                          items: _vm.subProjects,
                                          "item-value": "id",
                                          "item-text": "name",
                                          label: "Sub Project",
                                          filled: "",
                                          rounded: "",
                                          "prepend-inner-icon": "mdi-sail-boat",
                                          "error-messages":
                                            _vm.errors.sub_project_id,
                                          disabled: _vm.isFieldDisabled
                                        },
                                        model: {
                                          value: _vm.editedItem.sub_project_id,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.editedItem,
                                              "sub_project_id",
                                              $$v
                                            )
                                          },
                                          expression:
                                            "editedItem.sub_project_id"
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
                                          items: _vm.categories,
                                          "item-value": "id",
                                          "item-text": "name",
                                          label: "Category",
                                          filled: "",
                                          rounded: "",
                                          "prepend-inner-icon": "mdi-database",
                                          "error-messages":
                                            _vm.errors.category_id,
                                          disabled: _vm.isFieldDisabled
                                        },
                                        model: {
                                          value: _vm.editedItem.category_id,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.editedItem,
                                              "category_id",
                                              $$v
                                            )
                                          },
                                          expression: "editedItem.category_id"
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
                                          items: _vm.currencies,
                                          "item-value": "id",
                                          "item-text": "name",
                                          label: "Currency",
                                          filled: "",
                                          rounded: "",
                                          "prepend-inner-icon":
                                            "mdi-currency-usd",
                                          "error-messages":
                                            _vm.errors.currency_id,
                                          disabled: _vm.isFieldDisabled
                                        },
                                        model: {
                                          value: _vm.editedItem.currency_id,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.editedItem,
                                              "currency_id",
                                              $$v
                                            )
                                          },
                                          expression: "editedItem.currency_id"
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
                                          filled: "",
                                          rounded: ""
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
              ),
              _vm._v(" "),
              _c(
                "v-col",
                { attrs: { cols: "12", md: "5" } },
                [
                  _c("WorkStatus", {
                    ref: "workStatus",
                    on: { "signal-changeWorkStatus": _vm.changeWorkStatus }
                  }),
                  _vm._v(" "),
                  _c("RelatedQuotation", {
                    ref: "relatedQuotationComponent",
                    attrs: {
                      company_id: _vm.editedItem.company_id,
                      project_id: _vm.editedItem.project_id,
                      sub_project_id: _vm.editedItem.sub_project_id
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
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/work/WorkFilter.vue?vue&type=template&id=45888e68&":
/*!*************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--18-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/work/WorkFilter.vue?vue&type=template&id=45888e68& ***!
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
  return _c(
    "v-card",
    [
      _c(
        "v-card-title",
        [
          _c("span", { staticClass: "headline" }, [_vm._v("FILTER")]),
          _vm._v(" "),
          _c("v-spacer"),
          _vm._v(" "),
          _c(
            "v-btn",
            {
              attrs: { icon: "" },
              on: {
                click: function($event) {
                  return _vm.closeWorkFilterDialog()
                }
              }
            },
            [_c("v-icon", [_vm._v("mdi-close")])],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-card-text",
        [
          _c("v-container"),
          _vm._v(" "),
          _c(
            "v-row",
            [
              _c(
                "v-col",
                { attrs: { cols: "12", md: "6" } },
                [
                  _c("v-select", {
                    attrs: {
                      label: "Work Status",
                      items: _vm.statuses,
                      clearable: ""
                    },
                    on: { "click:clear": _vm.clearStatusField },
                    model: {
                      value: _vm.filter.status,
                      callback: function($$v) {
                        _vm.$set(_vm.filter, "status", $$v)
                      },
                      expression: "filter.status"
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
                      label: "Work Phase",
                      items: _vm.phases,
                      clearable: ""
                    },
                    on: { "click:clear": _vm.clearPhaseField },
                    model: {
                      value: _vm.filter.phase,
                      callback: function($$v) {
                        _vm.$set(_vm.filter, "phase", $$v)
                      },
                      expression: "filter.phase"
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
                      label: "Project",
                      items: _vm.projects,
                      "item-value": "id",
                      "item-text": "name",
                      clearable: ""
                    },
                    on: {
                      "click:clear": _vm.clearProjectField,
                      change: function($event) {
                        return _vm.selectProject(_vm.filter.project)
                      }
                    },
                    model: {
                      value: _vm.filter.project,
                      callback: function($$v) {
                        _vm.$set(_vm.filter, "project", $$v)
                      },
                      expression: "filter.project"
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
                      label: "Sub Project",
                      items: _vm.subProjects,
                      "item-value": "id",
                      "item-text": "name",
                      clearable: ""
                    },
                    on: { "click:clear": _vm.clearSubProjectField },
                    model: {
                      value: _vm.filter.subProject,
                      callback: function($$v) {
                        _vm.$set(_vm.filter, "subProject", $$v)
                      },
                      expression: "filter.subProject"
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
                      label: "Client",
                      items: _vm.companies,
                      "item-value": "id",
                      "item-text": "name",
                      clearable: ""
                    },
                    on: { "click:clear": _vm.clearCompanyField },
                    model: {
                      value: _vm.filter.company,
                      callback: function($$v) {
                        _vm.$set(_vm.filter, "company", $$v)
                      },
                      expression: "filter.company"
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
                      label: "Category",
                      items: _vm.categories,
                      "item-value": "id",
                      "item-text": "name",
                      clearable: ""
                    },
                    on: { "click:clear": _vm.clearCategoryField },
                    model: {
                      value: _vm.filter.category,
                      callback: function($$v) {
                        _vm.$set(_vm.filter, "category", $$v)
                      },
                      expression: "filter.category"
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
                        transition: "scale-transition",
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
                                      label: "PO date from",
                                      readonly: "",
                                      filled: "",
                                      rounded: "",
                                      "prepend-inner-icon":
                                        "mdi-calendar-check",
                                      "error-messages":
                                        _vm.errors.filter.poStartDate,
                                      clearable: ""
                                    },
                                    on: {
                                      "click:clear": _vm.clearPoStartDateField
                                    },
                                    model: {
                                      value: _vm.filter.poStartDate,
                                      callback: function($$v) {
                                        _vm.$set(_vm.filter, "poStartDate", $$v)
                                      },
                                      expression: "filter.poStartDate"
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
                        value: _vm.poStartDateCalendar,
                        callback: function($$v) {
                          _vm.poStartDateCalendar = $$v
                        },
                        expression: "poStartDateCalendar"
                      }
                    },
                    [
                      _vm._v(" "),
                      _c("v-date-picker", {
                        on: {
                          input: function($event) {
                            _vm.poStartDateCalendar = false
                          }
                        },
                        model: {
                          value: _vm.filter.poStartDate,
                          callback: function($$v) {
                            _vm.$set(_vm.filter, "poStartDate", $$v)
                          },
                          expression: "filter.poStartDate"
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
                  _c(
                    "v-menu",
                    {
                      attrs: {
                        "close-on-content-click": false,
                        "nudge-right": 40,
                        transition: "scale-transition",
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
                                      label: "PO date to",
                                      readonly: "",
                                      filled: "",
                                      rounded: "",
                                      "prepend-inner-icon":
                                        "mdi-calendar-check",
                                      "error-messages":
                                        _vm.errors.filter.poEndDate,
                                      clearable: ""
                                    },
                                    on: {
                                      "click:clear": _vm.clearPoEndDateField
                                    },
                                    model: {
                                      value: _vm.filter.poEndDate,
                                      callback: function($$v) {
                                        _vm.$set(_vm.filter, "poEndDate", $$v)
                                      },
                                      expression: "filter.poEndDate"
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
                        value: _vm.poEndDateCalendar,
                        callback: function($$v) {
                          _vm.poEndDateCalendar = $$v
                        },
                        expression: "poEndDateCalendar"
                      }
                    },
                    [
                      _vm._v(" "),
                      _c("v-date-picker", {
                        on: {
                          input: function($event) {
                            _vm.poEndDateCalendar = false
                          }
                        },
                        model: {
                          value: _vm.filter.poEndDate,
                          callback: function($$v) {
                            _vm.$set(_vm.filter, "poEndDate", $$v)
                          },
                          expression: "filter.poEndDate"
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
                  _c(
                    "v-menu",
                    {
                      attrs: {
                        "close-on-content-click": false,
                        "nudge-right": 40,
                        transition: "scale-transition",
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
                                      label: "Invoice date from",
                                      readonly: "",
                                      filled: "",
                                      rounded: "",
                                      "prepend-inner-icon":
                                        "mdi-calendar-check",
                                      "error-messages":
                                        _vm.errors.filter.invoiceStartDate,
                                      clearable: ""
                                    },
                                    on: {
                                      "click:clear":
                                        _vm.clearInvoiceStartDateField
                                    },
                                    model: {
                                      value: _vm.filter.invoiceStartDate,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.filter,
                                          "invoiceStartDate",
                                          $$v
                                        )
                                      },
                                      expression: "filter.invoiceStartDate"
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
                        value: _vm.invoiceStartDateCalendar,
                        callback: function($$v) {
                          _vm.invoiceStartDateCalendar = $$v
                        },
                        expression: "invoiceStartDateCalendar"
                      }
                    },
                    [
                      _vm._v(" "),
                      _c("v-date-picker", {
                        on: {
                          input: function($event) {
                            _vm.invoiceStartDateCalendar = false
                          }
                        },
                        model: {
                          value: _vm.filter.invoiceStartDate,
                          callback: function($$v) {
                            _vm.$set(_vm.filter, "invoiceStartDate", $$v)
                          },
                          expression: "filter.invoiceStartDate"
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
                  _c(
                    "v-menu",
                    {
                      attrs: {
                        "close-on-content-click": false,
                        "nudge-right": 40,
                        transition: "scale-transition",
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
                                      label: "Invoice date to",
                                      readonly: "",
                                      filled: "",
                                      rounded: "",
                                      "prepend-inner-icon":
                                        "mdi-calendar-check",
                                      "error-messages":
                                        _vm.errors.filter.invoiceEndDate,
                                      clearable: ""
                                    },
                                    on: {
                                      "click:clear":
                                        _vm.clearInvoiceEndDateField
                                    },
                                    model: {
                                      value: _vm.filter.invoiceEndDate,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.filter,
                                          "invoiceEndDate",
                                          $$v
                                        )
                                      },
                                      expression: "filter.invoiceEndDate"
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
                        value: _vm.invoiceEndDateCalendar,
                        callback: function($$v) {
                          _vm.invoiceEndDateCalendar = $$v
                        },
                        expression: "invoiceEndDateCalendar"
                      }
                    },
                    [
                      _vm._v(" "),
                      _c("v-date-picker", {
                        on: {
                          input: function($event) {
                            _vm.invoiceEndDateCalendar = false
                          }
                        },
                        model: {
                          value: _vm.filter.invoiceEndDate,
                          callback: function($$v) {
                            _vm.$set(_vm.filter, "invoiceEndDate", $$v)
                          },
                          expression: "filter.invoiceEndDate"
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
                  _c(
                    "v-menu",
                    {
                      attrs: {
                        "close-on-content-click": false,
                        "nudge-right": 40,
                        transition: "scale-transition",
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
                                      label: "Payment due date from",
                                      readonly: "",
                                      filled: "",
                                      rounded: "",
                                      "prepend-inner-icon":
                                        "mdi-calendar-check",
                                      "error-messages":
                                        _vm.errors.filter
                                          .paymentDueDateStartDate,
                                      clearable: ""
                                    },
                                    on: {
                                      "click:clear":
                                        _vm.clearPaymentDueDateStartDateField
                                    },
                                    model: {
                                      value: _vm.filter.paymentDueDateStartDate,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.filter,
                                          "paymentDueDateStartDate",
                                          $$v
                                        )
                                      },
                                      expression:
                                        "filter.paymentDueDateStartDate"
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
                        value: _vm.paymentDueDateStartDateCalendar,
                        callback: function($$v) {
                          _vm.paymentDueDateStartDateCalendar = $$v
                        },
                        expression: "paymentDueDateStartDateCalendar"
                      }
                    },
                    [
                      _vm._v(" "),
                      _c("v-date-picker", {
                        on: {
                          input: function($event) {
                            _vm.paymentDueDateStartDateCalendar = false
                          }
                        },
                        model: {
                          value: _vm.filter.paymentDueDateStartDate,
                          callback: function($$v) {
                            _vm.$set(_vm.filter, "paymentDueDateStartDate", $$v)
                          },
                          expression: "filter.paymentDueDateStartDate"
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
                  _c(
                    "v-menu",
                    {
                      attrs: {
                        "close-on-content-click": false,
                        "nudge-right": 40,
                        transition: "scale-transition",
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
                                      label: "Payment due date to",
                                      readonly: "",
                                      filled: "",
                                      rounded: "",
                                      "prepend-inner-icon":
                                        "mdi-calendar-check",
                                      "error-messages":
                                        _vm.errors.filter.paymentDueDateEndDate,
                                      clearable: ""
                                    },
                                    on: {
                                      "click:clear":
                                        _vm.clearPaymentDueDateEndDateField
                                    },
                                    model: {
                                      value: _vm.filter.paymentDueDateEndDate,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.filter,
                                          "paymentDueDateEndDate",
                                          $$v
                                        )
                                      },
                                      expression: "filter.paymentDueDateEndDate"
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
                        value: _vm.paymentDueDateEndDateCalendar,
                        callback: function($$v) {
                          _vm.paymentDueDateEndDateCalendar = $$v
                        },
                        expression: "paymentDueDateEndDateCalendar"
                      }
                    },
                    [
                      _vm._v(" "),
                      _c("v-date-picker", {
                        on: {
                          input: function($event) {
                            _vm.paymentDueDateEndDateCalendar = false
                          }
                        },
                        model: {
                          value: _vm.filter.paymentDueDateEndDate,
                          callback: function($$v) {
                            _vm.$set(_vm.filter, "paymentDueDateEndDate", $$v)
                          },
                          expression: "filter.paymentDueDateEndDate"
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
                  _c(
                    "v-menu",
                    {
                      attrs: {
                        "close-on-content-click": false,
                        "nudge-right": 40,
                        transition: "scale-transition",
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
                                      label: "Payment date from",
                                      readonly: "",
                                      filled: "",
                                      rounded: "",
                                      "prepend-inner-icon":
                                        "mdi-calendar-check",
                                      "error-messages":
                                        _vm.errors.filter.paymentStartDate,
                                      clearable: ""
                                    },
                                    on: {
                                      "click:clear":
                                        _vm.clearPaymentStartDateField
                                    },
                                    model: {
                                      value: _vm.filter.paymentStartDate,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.filter,
                                          "paymentStartDate",
                                          $$v
                                        )
                                      },
                                      expression: "filter.paymentStartDate"
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
                        value: _vm.paymentStartDateCalendar,
                        callback: function($$v) {
                          _vm.paymentStartDateCalendar = $$v
                        },
                        expression: "paymentStartDateCalendar"
                      }
                    },
                    [
                      _vm._v(" "),
                      _c("v-date-picker", {
                        on: {
                          input: function($event) {
                            _vm.paymentStartDateCalendar = false
                          }
                        },
                        model: {
                          value: _vm.filter.paymentStartDate,
                          callback: function($$v) {
                            _vm.$set(_vm.filter, "paymentStartDate", $$v)
                          },
                          expression: "filter.paymentStartDate"
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
                  _c(
                    "v-menu",
                    {
                      attrs: {
                        "close-on-content-click": false,
                        "nudge-right": 40,
                        transition: "scale-transition",
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
                                      label: "Payment date to",
                                      readonly: "",
                                      filled: "",
                                      rounded: "",
                                      "prepend-inner-icon":
                                        "mdi-calendar-check",
                                      "error-messages":
                                        _vm.errors.filter.paymentEndDate,
                                      clearable: ""
                                    },
                                    on: {
                                      "click:clear":
                                        _vm.clearPaymentEndDateField
                                    },
                                    model: {
                                      value: _vm.filter.paymentEndDate,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.filter,
                                          "paymentEndDate",
                                          $$v
                                        )
                                      },
                                      expression: "filter.paymentEndDate"
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
                        value: _vm.paymentEndDateCalendar,
                        callback: function($$v) {
                          _vm.paymentEndDateCalendar = $$v
                        },
                        expression: "paymentEndDateCalendar"
                      }
                    },
                    [
                      _vm._v(" "),
                      _c("v-date-picker", {
                        on: {
                          input: function($event) {
                            _vm.paymentEndDateCalendar = false
                          }
                        },
                        model: {
                          value: _vm.filter.paymentEndDate,
                          callback: function($$v) {
                            _vm.$set(_vm.filter, "paymentEndDate", $$v)
                          },
                          expression: "filter.paymentEndDate"
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
          _c(
            "v-btn",
            {
              on: {
                click: function($event) {
                  return _vm.workFilter()
                }
              }
            },
            [_vm._v("Search")]
          ),
          _vm._v(" "),
          _c(
            "v-btn",
            {
              on: {
                click: function($event) {
                  return _vm.resetWorkFilter()
                }
              }
            },
            [_vm._v("Reset")]
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/work/WorkStatus.vue?vue&type=template&id=4895f046&":
/*!*************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--18-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/work/WorkStatus.vue?vue&type=template&id=4895f046& ***!
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
  return _c(
    "div",
    { staticClass: "wrap-work-status" },
    [
      _c(
        "v-card",
        { staticClass: "mb-3", attrs: { outlined: "" } },
        [
          _c(
            "v-toolbar",
            { attrs: { flat: "" } },
            [
              _c("v-toolbar-title", [_c("h4", [_vm._v("WORK STATUS")])]),
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
                                attrs: { color: "primary", dark: "", small: "" }
                              },
                              on
                            ),
                            [_c("v-icon", [_vm._v("mdi-gesture-double-tap")])],
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
                        "v-card-title",
                        [
                          _c("span", { staticClass: "headline" }, [
                            _vm._v("CHANGE WORK STATUS")
                          ]),
                          _vm._v(" "),
                          _c("v-spacer"),
                          _vm._v(" "),
                          _c(
                            "v-btn",
                            {
                              attrs: { icon: "" },
                              on: {
                                click: function($event) {
                                  return _vm.close()
                                }
                              }
                            },
                            [_c("v-icon", [_vm._v("mdi-close")])],
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
                          _c("v-select", {
                            attrs: {
                              items: _vm.statuses,
                              label: "Select Status"
                            },
                            model: {
                              value: _vm.editedItem.name,
                              callback: function($$v) {
                                _vm.$set(_vm.editedItem, "name", $$v)
                              },
                              expression: "editedItem.name"
                            }
                          }),
                          _vm._v(" "),
                          _c("v-text-field", {
                            attrs: { filled: "", label: "Note" },
                            model: {
                              value: _vm.editedItem.description,
                              callback: function($$v) {
                                _vm.$set(_vm.editedItem, "description", $$v)
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
          ),
          _vm._v(" "),
          _c("v-divider"),
          _vm._v(" "),
          _c(
            "v-card-text",
            [
              _c(
                "v-chip",
                {
                  on: {
                    click: function($event) {
                      return _vm.openStatusHistoryDialog()
                    }
                  }
                },
                [_vm._v(_vm._s(_vm.workStatus))]
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
          attrs: { "max-width": "640" },
          model: {
            value: _vm.workStatusHistoryDialog,
            callback: function($$v) {
              _vm.workStatusHistoryDialog = $$v
            },
            expression: "workStatusHistoryDialog"
          }
        },
        [
          _c(
            "v-card",
            [
              _c(
                "v-card-title",
                [
                  _c("h4", [_vm._v("STATUS HOSTORY")]),
                  _vm._v(" "),
                  _c("v-spacer"),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    { attrs: { icon: "" } },
                    [
                      _c(
                        "v-icon",
                        { on: { click: _vm.closeStatusHistoryDialog } },
                        [_vm._v("mdi-close")]
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
                [
                  _c(
                    "v-timeline",
                    _vm._l(_vm.workStatusHistories, function(history, index) {
                      return _c(
                        "v-timeline-item",
                        {
                          key: index,
                          scopedSlots: _vm._u(
                            [
                              {
                                key: "icon",
                                fn: function() {
                                  return [
                                    history.user_avatar
                                      ? _c(
                                          "v-avatar",
                                          { attrs: { size: "36px" } },
                                          [
                                            _c("img", {
                                              attrs: {
                                                src:
                                                  "../img/avatars/" +
                                                  history.user_avatar
                                              }
                                            })
                                          ]
                                        )
                                      : _c(
                                          "v-avatar",
                                          { attrs: { size: "36px" } },
                                          [
                                            _c("img", {
                                              attrs: {
                                                src: "/img/man-avatar.png"
                                              }
                                            })
                                          ]
                                        )
                                  ]
                                },
                                proxy: true
                              },
                              {
                                key: "opposite",
                                fn: function() {
                                  return [
                                    _c(
                                      "v-chip",
                                      { attrs: { color: "primary" } },
                                      [_vm._v(_vm._s(history.name))]
                                    )
                                  ]
                                },
                                proxy: true
                              }
                            ],
                            null,
                            true
                          )
                        },
                        [
                          _vm._v(" "),
                          _vm._v(" "),
                          _c(
                            "v-card",
                            { staticClass: "elevation-2" },
                            [
                              _c("v-card-title", [
                                _vm._v(_vm._s(history.user_name))
                              ]),
                              _vm._v(" "),
                              _c("v-card-text", [
                                _vm._v(
                                  "\n                " +
                                    _vm._s(
                                      _vm
                                        .$moment(history.updated_at)
                                        .format("YYYY-MM-DD hh:mm")
                                    ) +
                                    "\n                "
                                ),
                                _c("br"),
                                _vm._v(
                                  "\n                " +
                                    _vm._s(history.description) +
                                    "\n              "
                                )
                              ])
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Work.vue?vue&type=template&id=25b093a0&":
/*!*********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--18-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Work.vue?vue&type=template&id=25b093a0& ***!
  \*********************************************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "wrap-component-table work-table" },
    [
      _vm._v("\n  " + _vm._s(_vm.workFilterQuery) + "\n  "),
      _c("v-data-table", {
        attrs: {
          headers: _vm.headers,
          items: _vm.works.data,
          "sort-by": "calories",
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
                      [_vm._v("WORK LIST")]
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
                                      },
                                      on: {
                                        click: function($event) {
                                          return _vm.openWorkFilterDialog()
                                        }
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
                                      },
                                      on: {
                                        click: function($event) {
                                          return _vm.convertExcel()
                                        }
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
                                        fab: "",
                                        depressed: "",
                                        dark: "",
                                        icon: ""
                                      },
                                      on: {
                                        click: function($event) {
                                          return _vm.openCreateWorkDialog()
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
                      [_vm._v(" "), _c("span", [_vm._v("Add Work")])]
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
                                        fab: "",
                                        depressed: "",
                                        dark: "",
                                        icon: ""
                                      },
                                      on: {
                                        click: function($event) {
                                          return _vm.generateDailyReport()
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
                      [_vm._v(" "), _c("span", [_vm._v("Daily Report")])]
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
                                        fab: "",
                                        depressed: "",
                                        dark: "",
                                        icon: ""
                                      },
                                      on: {
                                        click: function($event) {
                                          return _vm.generateWeeklyReport()
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
                      [_vm._v(" "), _c("span", [_vm._v("Weekly Report")])]
                    ),
                    _vm._v(" "),
                    _c("v-spacer"),
                    _vm._v(" "),
                    _c("v-chip", { attrs: { small: "" } }, [
                      _vm._v(
                        _vm._s(_vm.works.to) + " of " + _vm._s(_vm.totalRecords)
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
                          value: _vm.workDialog,
                          callback: function($$v) {
                            _vm.workDialog = $$v
                          },
                          expression: "workDialog"
                        }
                      },
                      [
                        _c(
                          "v-card",
                          { staticClass: "wrap-work-content" },
                          [
                            _c(
                              "v-toolbar",
                              {
                                attrs: {
                                  dark: "",
                                  color: "blue-grey darken-1",
                                  flat: ""
                                },
                                scopedSlots: _vm._u([
                                  {
                                    key: "extension",
                                    fn: function() {
                                      return [
                                        _c(
                                          "v-tabs",
                                          {
                                            attrs: {
                                              "align-with-title": "",
                                              "fixed-tabs": "",
                                              dark: "",
                                              "background-color": "primary",
                                              "show-arrows": ""
                                            },
                                            model: {
                                              value: _vm.activeTab,
                                              callback: function($$v) {
                                                _vm.activeTab = $$v
                                              },
                                              expression: "activeTab"
                                            }
                                          },
                                          [
                                            _c("v-tabs-slider", {
                                              attrs: { color: "yellow" }
                                            }),
                                            _vm._v(" "),
                                            _vm._l(_vm.tabs, function(tab) {
                                              return _c(
                                                "v-tab",
                                                {
                                                  key: tab.id,
                                                  on: {
                                                    click: function($event) {
                                                      return _vm.changeTab(
                                                        tab.id
                                                      )
                                                    }
                                                  }
                                                },
                                                [_vm._v(_vm._s(tab.name))]
                                              )
                                            })
                                          ],
                                          2
                                        )
                                      ]
                                    },
                                    proxy: true
                                  }
                                ])
                              },
                              [
                                _c(
                                  "v-btn",
                                  {
                                    attrs: { icon: "", dark: "" },
                                    on: {
                                      click: function($event) {
                                        return _vm.closeWorkDialog()
                                      }
                                    }
                                  },
                                  [_c("v-icon", [_vm._v("mdi-close")])],
                                  1
                                ),
                                _vm._v(" "),
                                _c("v-toolbar-title", [
                                  _vm._v(
                                    "\n                work id:[" +
                                      _vm._s(_vm.workId) +
                                      "] /\n                work index:[" +
                                      _vm._s(_vm.workIndex) +
                                      "] /\n                work mode:[" +
                                      _vm._s(_vm.workMode) +
                                      "] /\n                work status:[" +
                                      _vm._s(_vm.workStatus) +
                                      "] /\n                SaleOrder Id:[" +
                                      _vm._s(_vm.saleOrderId) +
                                      "] /\n                Wcc Id:[" +
                                      _vm._s(_vm.wccId) +
                                      "]\n                Invoice Id:[" +
                                      _vm._s(_vm.invoiceId) +
                                      "]\n                Wcc Id:[" +
                                      _vm._s(_vm.wccId) +
                                      "]\n                Payment Id:[" +
                                      _vm._s(_vm.paymentId) +
                                      "]\n              "
                                  )
                                ]),
                                _vm._v(" "),
                                _c("v-spacer"),
                                _vm._v(" "),
                                _c(
                                  "v-btn",
                                  {
                                    directives: [
                                      {
                                        name: "show",
                                        rawName: "v-show",
                                        value: _vm.activeTab === 1,
                                        expression: "activeTab === 1"
                                      }
                                    ],
                                    attrs: { icon: "" },
                                    on: {
                                      click: function($event) {
                                        return _vm.openSaleOrderOptionDialog()
                                      }
                                    }
                                  },
                                  [_c("v-icon", [_vm._v("mdi-cog")])],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "v-btn",
                                  {
                                    directives: [
                                      {
                                        name: "show",
                                        rawName: "v-show",
                                        value: _vm.activeTab === 3,
                                        expression: "activeTab === 3"
                                      }
                                    ],
                                    attrs: { icon: "" },
                                    on: {
                                      click: function($event) {
                                        return _vm.openInvoiceOptionDialog()
                                      }
                                    }
                                  },
                                  [_c("v-icon", [_vm._v("mdi-cog")])],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "v-btn",
                                  { attrs: { icon: "" } },
                                  [_c("v-icon", [_vm._v("mdi-dots-vertical")])],
                                  1
                                )
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "v-tabs-items",
                              {
                                model: {
                                  value: _vm.activeTab,
                                  callback: function($$v) {
                                    _vm.activeTab = $$v
                                  },
                                  expression: "activeTab"
                                }
                              },
                              [
                                _c(
                                  "v-tab-item",
                                  {
                                    attrs: {
                                      transition: "no-transition",
                                      "reverse-transition": "no-transition"
                                    }
                                  },
                                  [
                                    _c("WorkDialog", {
                                      ref: "workComponent",
                                      attrs: {
                                        companies: _vm.companies,
                                        projects: _vm.projects,
                                        categories: _vm.categories,
                                        currencies: _vm.currencies
                                      },
                                      on: {
                                        "signal-addItemToList":
                                          _vm.addItemToList,
                                        "signal-changeWorkStatus":
                                          _vm.changeWorkStatus
                                      }
                                    })
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "v-tab-item",
                                  {
                                    attrs: {
                                      transition: "no-transition",
                                      "reverse-transition": "no-transition"
                                    }
                                  },
                                  [
                                    _c("SaleOrderDialog", {
                                      ref: "saleOrderComponent",
                                      attrs: { units: _vm.units },
                                      on: {
                                        "signal-addItemToList":
                                          _vm.addItemToList
                                      }
                                    })
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "v-tab-item",
                                  {
                                    attrs: {
                                      transition: "no-transition",
                                      "reverse-transition": "no-transition"
                                    }
                                  },
                                  [
                                    _c("WccDialog", {
                                      ref: "wccComponent",
                                      attrs: { companies: _vm.companies },
                                      on: {
                                        "signal-addItemToList":
                                          _vm.addItemToList
                                      }
                                    })
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "v-tab-item",
                                  {
                                    attrs: {
                                      transition: "no-transition",
                                      "reverse-transition": "no-transition"
                                    }
                                  },
                                  [
                                    _c("InvoiceDialog", {
                                      ref: "invoiceComponent",
                                      attrs: {
                                        companies: _vm.companies,
                                        currencies: _vm.currencies,
                                        units: _vm.units,
                                        banks: _vm.banks,
                                        users: _vm.users
                                      },
                                      on: {
                                        "signal-addItemToList":
                                          _vm.addItemToList
                                      }
                                    })
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "v-tab-item",
                                  {
                                    attrs: {
                                      transition: "no-transition",
                                      "reverse-transition": "no-transition"
                                    }
                                  },
                                  [
                                    _c("PaymentDialog", {
                                      ref: "paymentComponent",
                                      attrs: {
                                        companies: _vm.companies,
                                        currencies: _vm.currencies,
                                        banks: _vm.banks,
                                        paymentMethods: _vm.paymentMethods
                                      },
                                      on: {
                                        "signal-addItemToList":
                                          _vm.addItemToList
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
                  "v-chip",
                  {
                    attrs: { color: "light-blue darken-3" },
                    on: {
                      click: function($event) {
                        return _vm.openUpdateWorkDialog(item)
                      }
                    }
                  },
                  [
                    _c(
                      "span",
                      { staticClass: "font-weight-black white--text" },
                      [_vm._v(_vm._s(item.number))]
                    )
                  ]
                )
              ]
            }
          },
          {
            key: "item.sale_order_number",
            fn: function(ref) {
              var item = ref.item
              return [
                item.sale_order_number
                  ? _c("span", [_vm._v(_vm._s(item.sale_order_number))])
                  : _c("span", { staticClass: "grey--text" }, [_vm._v("N/A")])
              ]
            }
          },
          {
            key: "item.sale_order_date",
            fn: function(ref) {
              var item = ref.item
              return [
                item.sale_order_date
                  ? _c("span", [_vm._v(_vm._s(item.sale_order_date))])
                  : _c("span", { staticClass: "grey--text" }, [_vm._v("N/A")])
              ]
            }
          },
          {
            key: "item.wcc_date",
            fn: function(ref) {
              var item = ref.item
              return [
                item.wcc_date
                  ? _c("span", [_vm._v(_vm._s(item.wcc_date))])
                  : _c("span", { staticClass: "grey--text" }, [_vm._v("N/A")])
              ]
            }
          },
          {
            key: "item.invoice_number",
            fn: function(ref) {
              var item = ref.item
              return [
                item.invoice_number
                  ? _c("span", [_vm._v(_vm._s(item.invoice_number))])
                  : _c("span", { staticClass: "grey--text" }, [_vm._v("N/A")])
              ]
            }
          },
          {
            key: "item.invoice_date",
            fn: function(ref) {
              var item = ref.item
              return [
                item.invoice_date
                  ? _c("span", [_vm._v(_vm._s(item.invoice_date))])
                  : _c("span", { staticClass: "grey--text" }, [_vm._v("N/A")])
              ]
            }
          },
          {
            key: "item.payment_due_date",
            fn: function(ref) {
              var item = ref.item
              return [
                item.payment_due_date
                  ? _c("span", [_vm._v(_vm._s(item.payment_due_date))])
                  : _c("span", { staticClass: "grey--text" }, [_vm._v("N/A")])
              ]
            }
          },
          {
            key: "item.payment_date",
            fn: function(ref) {
              var item = ref.item
              return [
                item.payment_date
                  ? _c("span", [_vm._v(_vm._s(item.payment_date))])
                  : _c("span", { staticClass: "grey--text" }, [_vm._v("N/A")])
              ]
            }
          },
          {
            key: "item.sale_order_total_price",
            fn: function(ref) {
              var item = ref.item
              return [
                _c("div", { staticClass: "d-flex justify-space-between" }, [
                  _c("span", { staticClass: "d-block" }, [
                    _vm._v(_vm._s(item.currency_name))
                  ]),
                  _vm._v(" "),
                  _c("span", { staticClass: "d-block" }, [
                    _vm._v(_vm._s(_vm.formatPrice(item.sale_order_total_price)))
                  ])
                ])
              ]
            }
          },
          {
            key: "item.invoice_total_price",
            fn: function(ref) {
              var item = ref.item
              return [
                _c("div", { staticClass: "d-flex justify-space-between" }, [
                  _c("span", { staticClass: "d-block" }, [
                    _vm._v(_vm._s(item.currency_name))
                  ]),
                  _vm._v(" "),
                  _c("span", { staticClass: "d-block" }, [
                    _vm._v(_vm._s(_vm.formatPrice(item.invoice_total_price)))
                  ])
                ])
              ]
            }
          },
          {
            key: "item.payment_exchanged_total_price",
            fn: function(ref) {
              var item = ref.item
              return [
                _c("div", { staticClass: "d-flex justify-space-between" }, [
                  _c("span", { staticClass: "d-block" }, [_vm._v("KRW")]),
                  _vm._v(" "),
                  _c("span", { staticClass: "d-block" }, [
                    _vm._v(
                      _vm._s(
                        _vm.formatPrice(item.payment_exchanged_total_price)
                      )
                    )
                  ])
                ])
              ]
            }
          },
          {
            key: "item.payment_total_price",
            fn: function(ref) {
              var item = ref.item
              return [
                _c("div", { staticClass: "d-flex justify-space-between" }, [
                  _c("span", { staticClass: "d-block" }, [
                    _vm._v(_vm._s(item.payment_currency))
                  ]),
                  _vm._v(" "),
                  _c("span", { staticClass: "d-block" }, [
                    _vm._v(_vm._s(_vm.formatPrice(item.payment_total_price)))
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
      }),
      _vm._v(" "),
      _c(
        "v-dialog",
        {
          attrs: { "max-width": "1024" },
          model: {
            value: _vm.workFilterDialog,
            callback: function($$v) {
              _vm.workFilterDialog = $$v
            },
            expression: "workFilterDialog"
          }
        },
        [
          _c("WorkFilter", {
            attrs: {
              companies: _vm.companies,
              projects: _vm.projects,
              categories: _vm.categories
            },
            on: {
              "signal-workFilter": _vm.workFilter,
              "signal-resetWorkFilter": _vm.initialize,
              "signal-closeWorkFilterDialog": _vm.closeWorkFilterDialog
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

/***/ "./resources/js/components/Payment/RelatedTransaction.vue":
/*!****************************************************************!*\
  !*** ./resources/js/components/Payment/RelatedTransaction.vue ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _RelatedTransaction_vue_vue_type_template_id_1271f127___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RelatedTransaction.vue?vue&type=template&id=1271f127& */ "./resources/js/components/Payment/RelatedTransaction.vue?vue&type=template&id=1271f127&");
/* harmony import */ var _RelatedTransaction_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RelatedTransaction.vue?vue&type=script&lang=js& */ "./resources/js/components/Payment/RelatedTransaction.vue?vue&type=script&lang=js&");
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





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _RelatedTransaction_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _RelatedTransaction_vue_vue_type_template_id_1271f127___WEBPACK_IMPORTED_MODULE_0__["render"],
  _RelatedTransaction_vue_vue_type_template_id_1271f127___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */












_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VBtn: vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__["VBtn"],VCard: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCard"],VCardActions: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardActions"],VCardText: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardText"],VCardTitle: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardTitle"],VDataTable: vuetify_lib_components_VDataTable__WEBPACK_IMPORTED_MODULE_6__["VDataTable"],VDialog: vuetify_lib_components_VDialog__WEBPACK_IMPORTED_MODULE_7__["VDialog"],VDivider: vuetify_lib_components_VDivider__WEBPACK_IMPORTED_MODULE_8__["VDivider"],VIcon: vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_9__["VIcon"],VSimpleTable: vuetify_lib_components_VDataTable__WEBPACK_IMPORTED_MODULE_6__["VSimpleTable"],VSpacer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_10__["VSpacer"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Payment/RelatedTransaction.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Payment/RelatedTransaction.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/Payment/RelatedTransaction.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RelatedTransaction_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vuetify-loader/lib/loader.js??ref--18-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./RelatedTransaction.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Payment/RelatedTransaction.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RelatedTransaction_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Payment/RelatedTransaction.vue?vue&type=template&id=1271f127&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/Payment/RelatedTransaction.vue?vue&type=template&id=1271f127& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RelatedTransaction_vue_vue_type_template_id_1271f127___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vuetify-loader/lib/loader.js??ref--18-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./RelatedTransaction.vue?vue&type=template&id=1271f127& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Payment/RelatedTransaction.vue?vue&type=template&id=1271f127&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RelatedTransaction_vue_vue_type_template_id_1271f127___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RelatedTransaction_vue_vue_type_template_id_1271f127___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/work/InvoiceDialog.vue":
/*!********************************************************!*\
  !*** ./resources/js/components/work/InvoiceDialog.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _InvoiceDialog_vue_vue_type_template_id_ee8b2b7c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InvoiceDialog.vue?vue&type=template&id=ee8b2b7c& */ "./resources/js/components/work/InvoiceDialog.vue?vue&type=template&id=ee8b2b7c&");
/* harmony import */ var _InvoiceDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./InvoiceDialog.vue?vue&type=script&lang=js& */ "./resources/js/components/work/InvoiceDialog.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VBtn */ "./node_modules/vuetify/lib/components/VBtn/index.js");
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/index.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/index.js");
/* harmony import */ var vuetify_lib_components_VDatePicker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuetify/lib/components/VDatePicker */ "./node_modules/vuetify/lib/components/VDatePicker/index.js");
/* harmony import */ var vuetify_lib_components_VDialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuetify/lib/components/VDialog */ "./node_modules/vuetify/lib/components/VDialog/index.js");
/* harmony import */ var vuetify_lib_components_VDivider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vuetify/lib/components/VDivider */ "./node_modules/vuetify/lib/components/VDivider/index.js");
/* harmony import */ var vuetify_lib_components_VMenu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vuetify/lib/components/VMenu */ "./node_modules/vuetify/lib/components/VMenu/index.js");
/* harmony import */ var vuetify_lib_components_VSelect__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! vuetify/lib/components/VSelect */ "./node_modules/vuetify/lib/components/VSelect/index.js");
/* harmony import */ var vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! vuetify/lib/components/VTextField */ "./node_modules/vuetify/lib/components/VTextField/index.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _InvoiceDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _InvoiceDialog_vue_vue_type_template_id_ee8b2b7c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _InvoiceDialog_vue_vue_type_template_id_ee8b2b7c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */















_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VBtn: vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__["VBtn"],VCard: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCard"],VCardText: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardText"],VCardTitle: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardTitle"],VCol: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__["VCol"],VContainer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__["VContainer"],VDatePicker: vuetify_lib_components_VDatePicker__WEBPACK_IMPORTED_MODULE_7__["VDatePicker"],VDialog: vuetify_lib_components_VDialog__WEBPACK_IMPORTED_MODULE_8__["VDialog"],VDivider: vuetify_lib_components_VDivider__WEBPACK_IMPORTED_MODULE_9__["VDivider"],VMenu: vuetify_lib_components_VMenu__WEBPACK_IMPORTED_MODULE_10__["VMenu"],VRow: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__["VRow"],VSelect: vuetify_lib_components_VSelect__WEBPACK_IMPORTED_MODULE_11__["VSelect"],VSpacer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__["VSpacer"],VTextField: vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_12__["VTextField"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/work/InvoiceDialog.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/work/InvoiceDialog.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/work/InvoiceDialog.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InvoiceDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vuetify-loader/lib/loader.js??ref--18-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./InvoiceDialog.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/work/InvoiceDialog.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InvoiceDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/work/InvoiceDialog.vue?vue&type=template&id=ee8b2b7c&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/work/InvoiceDialog.vue?vue&type=template&id=ee8b2b7c& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InvoiceDialog_vue_vue_type_template_id_ee8b2b7c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vuetify-loader/lib/loader.js??ref--18-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./InvoiceDialog.vue?vue&type=template&id=ee8b2b7c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/work/InvoiceDialog.vue?vue&type=template&id=ee8b2b7c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InvoiceDialog_vue_vue_type_template_id_ee8b2b7c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InvoiceDialog_vue_vue_type_template_id_ee8b2b7c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/work/InvoiceLine.vue":
/*!******************************************************!*\
  !*** ./resources/js/components/work/InvoiceLine.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _InvoiceLine_vue_vue_type_template_id_014bd124___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InvoiceLine.vue?vue&type=template&id=014bd124& */ "./resources/js/components/work/InvoiceLine.vue?vue&type=template&id=014bd124&");
/* harmony import */ var _InvoiceLine_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./InvoiceLine.vue?vue&type=script&lang=js& */ "./resources/js/components/work/InvoiceLine.vue?vue&type=script&lang=js&");
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
  _InvoiceLine_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _InvoiceLine_vue_vue_type_template_id_014bd124___WEBPACK_IMPORTED_MODULE_0__["render"],
  _InvoiceLine_vue_vue_type_template_id_014bd124___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */






















_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VBtn: vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__["VBtn"],VCard: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCard"],VCardActions: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardActions"],VCardText: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardText"],VCardTitle: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardTitle"],VChip: vuetify_lib_components_VChip__WEBPACK_IMPORTED_MODULE_6__["VChip"],VCol: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_7__["VCol"],VContainer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_7__["VContainer"],VDialog: vuetify_lib_components_VDialog__WEBPACK_IMPORTED_MODULE_8__["VDialog"],VDivider: vuetify_lib_components_VDivider__WEBPACK_IMPORTED_MODULE_9__["VDivider"],VForm: vuetify_lib_components_VForm__WEBPACK_IMPORTED_MODULE_10__["VForm"],VIcon: vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_11__["VIcon"],VRow: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_7__["VRow"],VSelect: vuetify_lib_components_VSelect__WEBPACK_IMPORTED_MODULE_12__["VSelect"],VSimpleTable: vuetify_lib_components_VDataTable__WEBPACK_IMPORTED_MODULE_13__["VSimpleTable"],VSpacer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_7__["VSpacer"],VTextField: vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_14__["VTextField"],VTextarea: vuetify_lib_components_VTextarea__WEBPACK_IMPORTED_MODULE_15__["VTextarea"],VToolbar: vuetify_lib_components_VToolbar__WEBPACK_IMPORTED_MODULE_16__["VToolbar"],VToolbarItems: vuetify_lib_components_VToolbar__WEBPACK_IMPORTED_MODULE_16__["VToolbarItems"],VToolbarTitle: vuetify_lib_components_VToolbar__WEBPACK_IMPORTED_MODULE_16__["VToolbarTitle"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/work/InvoiceLine.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/work/InvoiceLine.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/work/InvoiceLine.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InvoiceLine_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vuetify-loader/lib/loader.js??ref--18-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./InvoiceLine.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/work/InvoiceLine.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InvoiceLine_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/work/InvoiceLine.vue?vue&type=template&id=014bd124&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/work/InvoiceLine.vue?vue&type=template&id=014bd124& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InvoiceLine_vue_vue_type_template_id_014bd124___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vuetify-loader/lib/loader.js??ref--18-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./InvoiceLine.vue?vue&type=template&id=014bd124& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/work/InvoiceLine.vue?vue&type=template&id=014bd124&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InvoiceLine_vue_vue_type_template_id_014bd124___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InvoiceLine_vue_vue_type_template_id_014bd124___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/work/InvoiceOption.vue":
/*!********************************************************!*\
  !*** ./resources/js/components/work/InvoiceOption.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _InvoiceOption_vue_vue_type_template_id_2d2796ef___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InvoiceOption.vue?vue&type=template&id=2d2796ef& */ "./resources/js/components/work/InvoiceOption.vue?vue&type=template&id=2d2796ef&");
/* harmony import */ var _InvoiceOption_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./InvoiceOption.vue?vue&type=script&lang=js& */ "./resources/js/components/work/InvoiceOption.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VBtn */ "./node_modules/vuetify/lib/components/VBtn/index.js");
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/index.js");
/* harmony import */ var vuetify_lib_components_VCheckbox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VCheckbox */ "./node_modules/vuetify/lib/components/VCheckbox/index.js");
/* harmony import */ var vuetify_lib_components_VSelect__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuetify/lib/components/VSelect */ "./node_modules/vuetify/lib/components/VSelect/index.js");
/* harmony import */ var vuetify_lib_components_VDataTable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuetify/lib/components/VDataTable */ "./node_modules/vuetify/lib/components/VDataTable/index.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/index.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _InvoiceOption_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _InvoiceOption_vue_vue_type_template_id_2d2796ef___WEBPACK_IMPORTED_MODULE_0__["render"],
  _InvoiceOption_vue_vue_type_template_id_2d2796ef___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */










_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VBtn: vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__["VBtn"],VCard: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCard"],VCardActions: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardActions"],VCardText: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardText"],VCardTitle: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardTitle"],VCheckbox: vuetify_lib_components_VCheckbox__WEBPACK_IMPORTED_MODULE_6__["VCheckbox"],VSelect: vuetify_lib_components_VSelect__WEBPACK_IMPORTED_MODULE_7__["VSelect"],VSimpleTable: vuetify_lib_components_VDataTable__WEBPACK_IMPORTED_MODULE_8__["VSimpleTable"],VSpacer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_9__["VSpacer"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/work/InvoiceOption.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/work/InvoiceOption.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/work/InvoiceOption.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InvoiceOption_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vuetify-loader/lib/loader.js??ref--18-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./InvoiceOption.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/work/InvoiceOption.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InvoiceOption_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/work/InvoiceOption.vue?vue&type=template&id=2d2796ef&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/work/InvoiceOption.vue?vue&type=template&id=2d2796ef& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InvoiceOption_vue_vue_type_template_id_2d2796ef___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vuetify-loader/lib/loader.js??ref--18-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./InvoiceOption.vue?vue&type=template&id=2d2796ef& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/work/InvoiceOption.vue?vue&type=template&id=2d2796ef&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InvoiceOption_vue_vue_type_template_id_2d2796ef___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InvoiceOption_vue_vue_type_template_id_2d2796ef___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/work/InvoicePdfDocument.vue":
/*!*************************************************************!*\
  !*** ./resources/js/components/work/InvoicePdfDocument.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _InvoicePdfDocument_vue_vue_type_template_id_441691ba___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InvoicePdfDocument.vue?vue&type=template&id=441691ba& */ "./resources/js/components/work/InvoicePdfDocument.vue?vue&type=template&id=441691ba&");
/* harmony import */ var _InvoicePdfDocument_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./InvoicePdfDocument.vue?vue&type=script&lang=js& */ "./resources/js/components/work/InvoicePdfDocument.vue?vue&type=script&lang=js&");
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
  _InvoicePdfDocument_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _InvoicePdfDocument_vue_vue_type_template_id_441691ba___WEBPACK_IMPORTED_MODULE_0__["render"],
  _InvoicePdfDocument_vue_vue_type_template_id_441691ba___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */









_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VBtn: vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__["VBtn"],VCard: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCard"],VCardText: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardText"],VCardTitle: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardTitle"],VDivider: vuetify_lib_components_VDivider__WEBPACK_IMPORTED_MODULE_6__["VDivider"],VIcon: vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_7__["VIcon"],VSimpleTable: vuetify_lib_components_VDataTable__WEBPACK_IMPORTED_MODULE_8__["VSimpleTable"],VSpacer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_9__["VSpacer"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/work/InvoicePdfDocument.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/work/InvoicePdfDocument.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/work/InvoicePdfDocument.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InvoicePdfDocument_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vuetify-loader/lib/loader.js??ref--18-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./InvoicePdfDocument.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/work/InvoicePdfDocument.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InvoicePdfDocument_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/work/InvoicePdfDocument.vue?vue&type=template&id=441691ba&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/work/InvoicePdfDocument.vue?vue&type=template&id=441691ba& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InvoicePdfDocument_vue_vue_type_template_id_441691ba___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vuetify-loader/lib/loader.js??ref--18-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./InvoicePdfDocument.vue?vue&type=template&id=441691ba& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/work/InvoicePdfDocument.vue?vue&type=template&id=441691ba&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InvoicePdfDocument_vue_vue_type_template_id_441691ba___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InvoicePdfDocument_vue_vue_type_template_id_441691ba___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/work/InvoiceReminder.vue":
/*!**********************************************************!*\
  !*** ./resources/js/components/work/InvoiceReminder.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _InvoiceReminder_vue_vue_type_template_id_697f77ec___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InvoiceReminder.vue?vue&type=template&id=697f77ec& */ "./resources/js/components/work/InvoiceReminder.vue?vue&type=template&id=697f77ec&");
/* harmony import */ var _InvoiceReminder_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./InvoiceReminder.vue?vue&type=script&lang=js& */ "./resources/js/components/work/InvoiceReminder.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib_components_VAutocomplete__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VAutocomplete */ "./node_modules/vuetify/lib/components/VAutocomplete/index.js");
/* harmony import */ var vuetify_lib_components_VAvatar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VAvatar */ "./node_modules/vuetify/lib/components/VAvatar/index.js");
/* harmony import */ var vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VBtn */ "./node_modules/vuetify/lib/components/VBtn/index.js");
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/index.js");
/* harmony import */ var vuetify_lib_components_VChip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuetify/lib/components/VChip */ "./node_modules/vuetify/lib/components/VChip/index.js");
/* harmony import */ var vuetify_lib_components_VDivider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vuetify/lib/components/VDivider */ "./node_modules/vuetify/lib/components/VDivider/index.js");
/* harmony import */ var vuetify_lib_components_VForm__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vuetify/lib/components/VForm */ "./node_modules/vuetify/lib/components/VForm/index.js");
/* harmony import */ var vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! vuetify/lib/components/VIcon */ "./node_modules/vuetify/lib/components/VIcon/index.js");
/* harmony import */ var vuetify_lib_components_VImg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! vuetify/lib/components/VImg */ "./node_modules/vuetify/lib/components/VImg/index.js");
/* harmony import */ var vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! vuetify/lib/components/VList */ "./node_modules/vuetify/lib/components/VList/index.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/index.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _InvoiceReminder_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _InvoiceReminder_vue_vue_type_template_id_697f77ec___WEBPACK_IMPORTED_MODULE_0__["render"],
  _InvoiceReminder_vue_vue_type_template_id_697f77ec___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */

















_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VAutocomplete: vuetify_lib_components_VAutocomplete__WEBPACK_IMPORTED_MODULE_4__["VAutocomplete"],VAvatar: vuetify_lib_components_VAvatar__WEBPACK_IMPORTED_MODULE_5__["VAvatar"],VBtn: vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_6__["VBtn"],VCard: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_7__["VCard"],VCardText: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_7__["VCardText"],VCardTitle: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_7__["VCardTitle"],VChip: vuetify_lib_components_VChip__WEBPACK_IMPORTED_MODULE_8__["VChip"],VDivider: vuetify_lib_components_VDivider__WEBPACK_IMPORTED_MODULE_9__["VDivider"],VForm: vuetify_lib_components_VForm__WEBPACK_IMPORTED_MODULE_10__["VForm"],VIcon: vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_11__["VIcon"],VImg: vuetify_lib_components_VImg__WEBPACK_IMPORTED_MODULE_12__["VImg"],VListItemAvatar: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_13__["VListItemAvatar"],VListItemContent: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_13__["VListItemContent"],VListItemSubtitle: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_13__["VListItemSubtitle"],VListItemTitle: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_13__["VListItemTitle"],VSpacer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_14__["VSpacer"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/work/InvoiceReminder.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/work/InvoiceReminder.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/work/InvoiceReminder.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InvoiceReminder_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vuetify-loader/lib/loader.js??ref--18-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./InvoiceReminder.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/work/InvoiceReminder.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InvoiceReminder_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/work/InvoiceReminder.vue?vue&type=template&id=697f77ec&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/work/InvoiceReminder.vue?vue&type=template&id=697f77ec& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InvoiceReminder_vue_vue_type_template_id_697f77ec___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vuetify-loader/lib/loader.js??ref--18-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./InvoiceReminder.vue?vue&type=template&id=697f77ec& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/work/InvoiceReminder.vue?vue&type=template&id=697f77ec&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InvoiceReminder_vue_vue_type_template_id_697f77ec___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InvoiceReminder_vue_vue_type_template_id_697f77ec___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/work/PaymentDialog.vue":
/*!********************************************************!*\
  !*** ./resources/js/components/work/PaymentDialog.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PaymentDialog_vue_vue_type_template_id_326b444a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PaymentDialog.vue?vue&type=template&id=326b444a& */ "./resources/js/components/work/PaymentDialog.vue?vue&type=template&id=326b444a&");
/* harmony import */ var _PaymentDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PaymentDialog.vue?vue&type=script&lang=js& */ "./resources/js/components/work/PaymentDialog.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VBtn */ "./node_modules/vuetify/lib/components/VBtn/index.js");
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/index.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/index.js");
/* harmony import */ var vuetify_lib_components_VDatePicker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuetify/lib/components/VDatePicker */ "./node_modules/vuetify/lib/components/VDatePicker/index.js");
/* harmony import */ var vuetify_lib_components_VDivider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuetify/lib/components/VDivider */ "./node_modules/vuetify/lib/components/VDivider/index.js");
/* harmony import */ var vuetify_lib_components_VMenu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vuetify/lib/components/VMenu */ "./node_modules/vuetify/lib/components/VMenu/index.js");
/* harmony import */ var vuetify_lib_components_VSelect__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vuetify/lib/components/VSelect */ "./node_modules/vuetify/lib/components/VSelect/index.js");
/* harmony import */ var vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! vuetify/lib/components/VTextField */ "./node_modules/vuetify/lib/components/VTextField/index.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PaymentDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PaymentDialog_vue_vue_type_template_id_326b444a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PaymentDialog_vue_vue_type_template_id_326b444a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */














_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VBtn: vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__["VBtn"],VCard: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCard"],VCardText: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardText"],VCardTitle: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardTitle"],VCol: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__["VCol"],VContainer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__["VContainer"],VDatePicker: vuetify_lib_components_VDatePicker__WEBPACK_IMPORTED_MODULE_7__["VDatePicker"],VDivider: vuetify_lib_components_VDivider__WEBPACK_IMPORTED_MODULE_8__["VDivider"],VMenu: vuetify_lib_components_VMenu__WEBPACK_IMPORTED_MODULE_9__["VMenu"],VRow: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__["VRow"],VSelect: vuetify_lib_components_VSelect__WEBPACK_IMPORTED_MODULE_10__["VSelect"],VSpacer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__["VSpacer"],VTextField: vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_11__["VTextField"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/work/PaymentDialog.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/work/PaymentDialog.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/work/PaymentDialog.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PaymentDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vuetify-loader/lib/loader.js??ref--18-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./PaymentDialog.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/work/PaymentDialog.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PaymentDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/work/PaymentDialog.vue?vue&type=template&id=326b444a&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/work/PaymentDialog.vue?vue&type=template&id=326b444a& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PaymentDialog_vue_vue_type_template_id_326b444a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vuetify-loader/lib/loader.js??ref--18-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./PaymentDialog.vue?vue&type=template&id=326b444a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/work/PaymentDialog.vue?vue&type=template&id=326b444a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PaymentDialog_vue_vue_type_template_id_326b444a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PaymentDialog_vue_vue_type_template_id_326b444a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/work/RelatedQuotation.vue":
/*!***********************************************************!*\
  !*** ./resources/js/components/work/RelatedQuotation.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _RelatedQuotation_vue_vue_type_template_id_1a448444___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RelatedQuotation.vue?vue&type=template&id=1a448444& */ "./resources/js/components/work/RelatedQuotation.vue?vue&type=template&id=1a448444&");
/* harmony import */ var _RelatedQuotation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RelatedQuotation.vue?vue&type=script&lang=js& */ "./resources/js/components/work/RelatedQuotation.vue?vue&type=script&lang=js&");
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





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _RelatedQuotation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _RelatedQuotation_vue_vue_type_template_id_1a448444___WEBPACK_IMPORTED_MODULE_0__["render"],
  _RelatedQuotation_vue_vue_type_template_id_1a448444___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */












_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VBtn: vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__["VBtn"],VCard: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCard"],VCardActions: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardActions"],VCardText: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardText"],VCardTitle: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardTitle"],VDataTable: vuetify_lib_components_VDataTable__WEBPACK_IMPORTED_MODULE_6__["VDataTable"],VDialog: vuetify_lib_components_VDialog__WEBPACK_IMPORTED_MODULE_7__["VDialog"],VDivider: vuetify_lib_components_VDivider__WEBPACK_IMPORTED_MODULE_8__["VDivider"],VIcon: vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_9__["VIcon"],VSimpleTable: vuetify_lib_components_VDataTable__WEBPACK_IMPORTED_MODULE_6__["VSimpleTable"],VSpacer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_10__["VSpacer"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/work/RelatedQuotation.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/work/RelatedQuotation.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/work/RelatedQuotation.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RelatedQuotation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vuetify-loader/lib/loader.js??ref--18-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./RelatedQuotation.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/work/RelatedQuotation.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RelatedQuotation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/work/RelatedQuotation.vue?vue&type=template&id=1a448444&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/work/RelatedQuotation.vue?vue&type=template&id=1a448444& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RelatedQuotation_vue_vue_type_template_id_1a448444___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vuetify-loader/lib/loader.js??ref--18-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./RelatedQuotation.vue?vue&type=template&id=1a448444& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/work/RelatedQuotation.vue?vue&type=template&id=1a448444&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RelatedQuotation_vue_vue_type_template_id_1a448444___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RelatedQuotation_vue_vue_type_template_id_1a448444___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/work/SaleOrderDialog.vue":
/*!**********************************************************!*\
  !*** ./resources/js/components/work/SaleOrderDialog.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SaleOrderDialog_vue_vue_type_template_id_20ddb89c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SaleOrderDialog.vue?vue&type=template&id=20ddb89c& */ "./resources/js/components/work/SaleOrderDialog.vue?vue&type=template&id=20ddb89c&");
/* harmony import */ var _SaleOrderDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SaleOrderDialog.vue?vue&type=script&lang=js& */ "./resources/js/components/work/SaleOrderDialog.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VBtn */ "./node_modules/vuetify/lib/components/VBtn/index.js");
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/index.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/index.js");
/* harmony import */ var vuetify_lib_components_VDatePicker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuetify/lib/components/VDatePicker */ "./node_modules/vuetify/lib/components/VDatePicker/index.js");
/* harmony import */ var vuetify_lib_components_VDialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuetify/lib/components/VDialog */ "./node_modules/vuetify/lib/components/VDialog/index.js");
/* harmony import */ var vuetify_lib_components_VDivider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vuetify/lib/components/VDivider */ "./node_modules/vuetify/lib/components/VDivider/index.js");
/* harmony import */ var vuetify_lib_components_VMenu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vuetify/lib/components/VMenu */ "./node_modules/vuetify/lib/components/VMenu/index.js");
/* harmony import */ var vuetify_lib_components_VSelect__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! vuetify/lib/components/VSelect */ "./node_modules/vuetify/lib/components/VSelect/index.js");
/* harmony import */ var vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! vuetify/lib/components/VTextField */ "./node_modules/vuetify/lib/components/VTextField/index.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SaleOrderDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SaleOrderDialog_vue_vue_type_template_id_20ddb89c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SaleOrderDialog_vue_vue_type_template_id_20ddb89c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */















_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VBtn: vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__["VBtn"],VCard: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCard"],VCardText: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardText"],VCardTitle: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardTitle"],VCol: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__["VCol"],VContainer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__["VContainer"],VDatePicker: vuetify_lib_components_VDatePicker__WEBPACK_IMPORTED_MODULE_7__["VDatePicker"],VDialog: vuetify_lib_components_VDialog__WEBPACK_IMPORTED_MODULE_8__["VDialog"],VDivider: vuetify_lib_components_VDivider__WEBPACK_IMPORTED_MODULE_9__["VDivider"],VMenu: vuetify_lib_components_VMenu__WEBPACK_IMPORTED_MODULE_10__["VMenu"],VRow: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__["VRow"],VSelect: vuetify_lib_components_VSelect__WEBPACK_IMPORTED_MODULE_11__["VSelect"],VSpacer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__["VSpacer"],VTextField: vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_12__["VTextField"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/work/SaleOrderDialog.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/work/SaleOrderDialog.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/work/SaleOrderDialog.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SaleOrderDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vuetify-loader/lib/loader.js??ref--18-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./SaleOrderDialog.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/work/SaleOrderDialog.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SaleOrderDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/work/SaleOrderDialog.vue?vue&type=template&id=20ddb89c&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/work/SaleOrderDialog.vue?vue&type=template&id=20ddb89c& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SaleOrderDialog_vue_vue_type_template_id_20ddb89c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vuetify-loader/lib/loader.js??ref--18-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./SaleOrderDialog.vue?vue&type=template&id=20ddb89c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/work/SaleOrderDialog.vue?vue&type=template&id=20ddb89c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SaleOrderDialog_vue_vue_type_template_id_20ddb89c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SaleOrderDialog_vue_vue_type_template_id_20ddb89c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/work/SaleOrderLine.vue":
/*!********************************************************!*\
  !*** ./resources/js/components/work/SaleOrderLine.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SaleOrderLine_vue_vue_type_template_id_18d13448___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SaleOrderLine.vue?vue&type=template&id=18d13448& */ "./resources/js/components/work/SaleOrderLine.vue?vue&type=template&id=18d13448&");
/* harmony import */ var _SaleOrderLine_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SaleOrderLine.vue?vue&type=script&lang=js& */ "./resources/js/components/work/SaleOrderLine.vue?vue&type=script&lang=js&");
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
  _SaleOrderLine_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SaleOrderLine_vue_vue_type_template_id_18d13448___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SaleOrderLine_vue_vue_type_template_id_18d13448___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */






















_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VBtn: vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__["VBtn"],VCard: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCard"],VCardActions: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardActions"],VCardText: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardText"],VCardTitle: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardTitle"],VChip: vuetify_lib_components_VChip__WEBPACK_IMPORTED_MODULE_6__["VChip"],VCol: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_7__["VCol"],VContainer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_7__["VContainer"],VDialog: vuetify_lib_components_VDialog__WEBPACK_IMPORTED_MODULE_8__["VDialog"],VDivider: vuetify_lib_components_VDivider__WEBPACK_IMPORTED_MODULE_9__["VDivider"],VForm: vuetify_lib_components_VForm__WEBPACK_IMPORTED_MODULE_10__["VForm"],VIcon: vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_11__["VIcon"],VRow: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_7__["VRow"],VSelect: vuetify_lib_components_VSelect__WEBPACK_IMPORTED_MODULE_12__["VSelect"],VSimpleTable: vuetify_lib_components_VDataTable__WEBPACK_IMPORTED_MODULE_13__["VSimpleTable"],VSpacer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_7__["VSpacer"],VTextField: vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_14__["VTextField"],VTextarea: vuetify_lib_components_VTextarea__WEBPACK_IMPORTED_MODULE_15__["VTextarea"],VToolbar: vuetify_lib_components_VToolbar__WEBPACK_IMPORTED_MODULE_16__["VToolbar"],VToolbarItems: vuetify_lib_components_VToolbar__WEBPACK_IMPORTED_MODULE_16__["VToolbarItems"],VToolbarTitle: vuetify_lib_components_VToolbar__WEBPACK_IMPORTED_MODULE_16__["VToolbarTitle"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/work/SaleOrderLine.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/work/SaleOrderLine.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/work/SaleOrderLine.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SaleOrderLine_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vuetify-loader/lib/loader.js??ref--18-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./SaleOrderLine.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/work/SaleOrderLine.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SaleOrderLine_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/work/SaleOrderLine.vue?vue&type=template&id=18d13448&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/work/SaleOrderLine.vue?vue&type=template&id=18d13448& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SaleOrderLine_vue_vue_type_template_id_18d13448___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vuetify-loader/lib/loader.js??ref--18-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./SaleOrderLine.vue?vue&type=template&id=18d13448& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/work/SaleOrderLine.vue?vue&type=template&id=18d13448&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SaleOrderLine_vue_vue_type_template_id_18d13448___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SaleOrderLine_vue_vue_type_template_id_18d13448___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/work/SaleOrderOption.vue":
/*!**********************************************************!*\
  !*** ./resources/js/components/work/SaleOrderOption.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SaleOrderOption_vue_vue_type_template_id_756a356e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SaleOrderOption.vue?vue&type=template&id=756a356e& */ "./resources/js/components/work/SaleOrderOption.vue?vue&type=template&id=756a356e&");
/* harmony import */ var _SaleOrderOption_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SaleOrderOption.vue?vue&type=script&lang=js& */ "./resources/js/components/work/SaleOrderOption.vue?vue&type=script&lang=js&");
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
  _SaleOrderOption_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SaleOrderOption_vue_vue_type_template_id_756a356e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SaleOrderOption_vue_vue_type_template_id_756a356e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */











_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VBtn: vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__["VBtn"],VCard: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCard"],VCardActions: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardActions"],VCardText: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardText"],VCardTitle: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardTitle"],VCheckbox: vuetify_lib_components_VCheckbox__WEBPACK_IMPORTED_MODULE_6__["VCheckbox"],VSelect: vuetify_lib_components_VSelect__WEBPACK_IMPORTED_MODULE_7__["VSelect"],VSimpleTable: vuetify_lib_components_VDataTable__WEBPACK_IMPORTED_MODULE_8__["VSimpleTable"],VSpacer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_9__["VSpacer"],VTextField: vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_10__["VTextField"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/work/SaleOrderOption.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/work/SaleOrderOption.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/work/SaleOrderOption.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SaleOrderOption_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vuetify-loader/lib/loader.js??ref--18-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./SaleOrderOption.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/work/SaleOrderOption.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SaleOrderOption_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/work/SaleOrderOption.vue?vue&type=template&id=756a356e&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/work/SaleOrderOption.vue?vue&type=template&id=756a356e& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SaleOrderOption_vue_vue_type_template_id_756a356e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vuetify-loader/lib/loader.js??ref--18-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./SaleOrderOption.vue?vue&type=template&id=756a356e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/work/SaleOrderOption.vue?vue&type=template&id=756a356e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SaleOrderOption_vue_vue_type_template_id_756a356e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SaleOrderOption_vue_vue_type_template_id_756a356e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/work/WccDialog.vue":
/*!****************************************************!*\
  !*** ./resources/js/components/work/WccDialog.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _WccDialog_vue_vue_type_template_id_4ca5882c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./WccDialog.vue?vue&type=template&id=4ca5882c& */ "./resources/js/components/work/WccDialog.vue?vue&type=template&id=4ca5882c&");
/* harmony import */ var _WccDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./WccDialog.vue?vue&type=script&lang=js& */ "./resources/js/components/work/WccDialog.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VBtn */ "./node_modules/vuetify/lib/components/VBtn/index.js");
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/index.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/index.js");
/* harmony import */ var vuetify_lib_components_VDatePicker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuetify/lib/components/VDatePicker */ "./node_modules/vuetify/lib/components/VDatePicker/index.js");
/* harmony import */ var vuetify_lib_components_VDivider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuetify/lib/components/VDivider */ "./node_modules/vuetify/lib/components/VDivider/index.js");
/* harmony import */ var vuetify_lib_components_VMenu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vuetify/lib/components/VMenu */ "./node_modules/vuetify/lib/components/VMenu/index.js");
/* harmony import */ var vuetify_lib_components_VSelect__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vuetify/lib/components/VSelect */ "./node_modules/vuetify/lib/components/VSelect/index.js");
/* harmony import */ var vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! vuetify/lib/components/VTextField */ "./node_modules/vuetify/lib/components/VTextField/index.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _WccDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _WccDialog_vue_vue_type_template_id_4ca5882c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _WccDialog_vue_vue_type_template_id_4ca5882c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */














_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VBtn: vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__["VBtn"],VCard: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCard"],VCardText: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardText"],VCardTitle: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardTitle"],VCol: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__["VCol"],VContainer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__["VContainer"],VDatePicker: vuetify_lib_components_VDatePicker__WEBPACK_IMPORTED_MODULE_7__["VDatePicker"],VDivider: vuetify_lib_components_VDivider__WEBPACK_IMPORTED_MODULE_8__["VDivider"],VMenu: vuetify_lib_components_VMenu__WEBPACK_IMPORTED_MODULE_9__["VMenu"],VRow: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__["VRow"],VSelect: vuetify_lib_components_VSelect__WEBPACK_IMPORTED_MODULE_10__["VSelect"],VSpacer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__["VSpacer"],VTextField: vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_11__["VTextField"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/work/WccDialog.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/work/WccDialog.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/work/WccDialog.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WccDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vuetify-loader/lib/loader.js??ref--18-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./WccDialog.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/work/WccDialog.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WccDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/work/WccDialog.vue?vue&type=template&id=4ca5882c&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/work/WccDialog.vue?vue&type=template&id=4ca5882c& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WccDialog_vue_vue_type_template_id_4ca5882c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vuetify-loader/lib/loader.js??ref--18-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./WccDialog.vue?vue&type=template&id=4ca5882c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/work/WccDialog.vue?vue&type=template&id=4ca5882c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WccDialog_vue_vue_type_template_id_4ca5882c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WccDialog_vue_vue_type_template_id_4ca5882c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/work/WorkDialog.vue":
/*!*****************************************************!*\
  !*** ./resources/js/components/work/WorkDialog.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _WorkDialog_vue_vue_type_template_id_3180fac8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./WorkDialog.vue?vue&type=template&id=3180fac8& */ "./resources/js/components/work/WorkDialog.vue?vue&type=template&id=3180fac8&");
/* harmony import */ var _WorkDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./WorkDialog.vue?vue&type=script&lang=js& */ "./resources/js/components/work/WorkDialog.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VBtn */ "./node_modules/vuetify/lib/components/VBtn/index.js");
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/index.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/index.js");
/* harmony import */ var vuetify_lib_components_VDivider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuetify/lib/components/VDivider */ "./node_modules/vuetify/lib/components/VDivider/index.js");
/* harmony import */ var vuetify_lib_components_VSelect__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuetify/lib/components/VSelect */ "./node_modules/vuetify/lib/components/VSelect/index.js");
/* harmony import */ var vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vuetify/lib/components/VTextField */ "./node_modules/vuetify/lib/components/VTextField/index.js");
/* harmony import */ var vuetify_lib_components_VTextarea__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vuetify/lib/components/VTextarea */ "./node_modules/vuetify/lib/components/VTextarea/index.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _WorkDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _WorkDialog_vue_vue_type_template_id_3180fac8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _WorkDialog_vue_vue_type_template_id_3180fac8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */













_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VBtn: vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__["VBtn"],VCard: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCard"],VCardText: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardText"],VCardTitle: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardTitle"],VCol: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__["VCol"],VContainer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__["VContainer"],VDivider: vuetify_lib_components_VDivider__WEBPACK_IMPORTED_MODULE_7__["VDivider"],VRow: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__["VRow"],VSelect: vuetify_lib_components_VSelect__WEBPACK_IMPORTED_MODULE_8__["VSelect"],VSpacer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__["VSpacer"],VTextField: vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_9__["VTextField"],VTextarea: vuetify_lib_components_VTextarea__WEBPACK_IMPORTED_MODULE_10__["VTextarea"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/work/WorkDialog.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/work/WorkDialog.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/work/WorkDialog.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WorkDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vuetify-loader/lib/loader.js??ref--18-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./WorkDialog.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/work/WorkDialog.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WorkDialog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/work/WorkDialog.vue?vue&type=template&id=3180fac8&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/work/WorkDialog.vue?vue&type=template&id=3180fac8& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WorkDialog_vue_vue_type_template_id_3180fac8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vuetify-loader/lib/loader.js??ref--18-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./WorkDialog.vue?vue&type=template&id=3180fac8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/work/WorkDialog.vue?vue&type=template&id=3180fac8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WorkDialog_vue_vue_type_template_id_3180fac8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WorkDialog_vue_vue_type_template_id_3180fac8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/work/WorkFilter.vue":
/*!*****************************************************!*\
  !*** ./resources/js/components/work/WorkFilter.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _WorkFilter_vue_vue_type_template_id_45888e68___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./WorkFilter.vue?vue&type=template&id=45888e68& */ "./resources/js/components/work/WorkFilter.vue?vue&type=template&id=45888e68&");
/* harmony import */ var _WorkFilter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./WorkFilter.vue?vue&type=script&lang=js& */ "./resources/js/components/work/WorkFilter.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VBtn */ "./node_modules/vuetify/lib/components/VBtn/index.js");
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/index.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/index.js");
/* harmony import */ var vuetify_lib_components_VDatePicker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuetify/lib/components/VDatePicker */ "./node_modules/vuetify/lib/components/VDatePicker/index.js");
/* harmony import */ var vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuetify/lib/components/VIcon */ "./node_modules/vuetify/lib/components/VIcon/index.js");
/* harmony import */ var vuetify_lib_components_VMenu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vuetify/lib/components/VMenu */ "./node_modules/vuetify/lib/components/VMenu/index.js");
/* harmony import */ var vuetify_lib_components_VSelect__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vuetify/lib/components/VSelect */ "./node_modules/vuetify/lib/components/VSelect/index.js");
/* harmony import */ var vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! vuetify/lib/components/VTextField */ "./node_modules/vuetify/lib/components/VTextField/index.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _WorkFilter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _WorkFilter_vue_vue_type_template_id_45888e68___WEBPACK_IMPORTED_MODULE_0__["render"],
  _WorkFilter_vue_vue_type_template_id_45888e68___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */















_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VBtn: vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__["VBtn"],VCard: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCard"],VCardActions: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardActions"],VCardText: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardText"],VCardTitle: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardTitle"],VCol: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__["VCol"],VContainer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__["VContainer"],VDatePicker: vuetify_lib_components_VDatePicker__WEBPACK_IMPORTED_MODULE_7__["VDatePicker"],VIcon: vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_8__["VIcon"],VMenu: vuetify_lib_components_VMenu__WEBPACK_IMPORTED_MODULE_9__["VMenu"],VRow: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__["VRow"],VSelect: vuetify_lib_components_VSelect__WEBPACK_IMPORTED_MODULE_10__["VSelect"],VSpacer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__["VSpacer"],VTextField: vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_11__["VTextField"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/work/WorkFilter.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/work/WorkFilter.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/work/WorkFilter.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WorkFilter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vuetify-loader/lib/loader.js??ref--18-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./WorkFilter.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/work/WorkFilter.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WorkFilter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/work/WorkFilter.vue?vue&type=template&id=45888e68&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/work/WorkFilter.vue?vue&type=template&id=45888e68& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WorkFilter_vue_vue_type_template_id_45888e68___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vuetify-loader/lib/loader.js??ref--18-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./WorkFilter.vue?vue&type=template&id=45888e68& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/work/WorkFilter.vue?vue&type=template&id=45888e68&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WorkFilter_vue_vue_type_template_id_45888e68___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WorkFilter_vue_vue_type_template_id_45888e68___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/work/WorkStatus.vue":
/*!*****************************************************!*\
  !*** ./resources/js/components/work/WorkStatus.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _WorkStatus_vue_vue_type_template_id_4895f046___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./WorkStatus.vue?vue&type=template&id=4895f046& */ "./resources/js/components/work/WorkStatus.vue?vue&type=template&id=4895f046&");
/* harmony import */ var _WorkStatus_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./WorkStatus.vue?vue&type=script&lang=js& */ "./resources/js/components/work/WorkStatus.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib_components_VAvatar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VAvatar */ "./node_modules/vuetify/lib/components/VAvatar/index.js");
/* harmony import */ var vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VBtn */ "./node_modules/vuetify/lib/components/VBtn/index.js");
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/index.js");
/* harmony import */ var vuetify_lib_components_VChip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuetify/lib/components/VChip */ "./node_modules/vuetify/lib/components/VChip/index.js");
/* harmony import */ var vuetify_lib_components_VDialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuetify/lib/components/VDialog */ "./node_modules/vuetify/lib/components/VDialog/index.js");
/* harmony import */ var vuetify_lib_components_VDivider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vuetify/lib/components/VDivider */ "./node_modules/vuetify/lib/components/VDivider/index.js");
/* harmony import */ var vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vuetify/lib/components/VIcon */ "./node_modules/vuetify/lib/components/VIcon/index.js");
/* harmony import */ var vuetify_lib_components_VSelect__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! vuetify/lib/components/VSelect */ "./node_modules/vuetify/lib/components/VSelect/index.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/index.js");
/* harmony import */ var vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! vuetify/lib/components/VTextField */ "./node_modules/vuetify/lib/components/VTextField/index.js");
/* harmony import */ var vuetify_lib_components_VTimeline__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! vuetify/lib/components/VTimeline */ "./node_modules/vuetify/lib/components/VTimeline/index.js");
/* harmony import */ var vuetify_lib_components_VToolbar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! vuetify/lib/components/VToolbar */ "./node_modules/vuetify/lib/components/VToolbar/index.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _WorkStatus_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _WorkStatus_vue_vue_type_template_id_4895f046___WEBPACK_IMPORTED_MODULE_0__["render"],
  _WorkStatus_vue_vue_type_template_id_4895f046___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */


















_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VAvatar: vuetify_lib_components_VAvatar__WEBPACK_IMPORTED_MODULE_4__["VAvatar"],VBtn: vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_5__["VBtn"],VCard: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_6__["VCard"],VCardActions: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_6__["VCardActions"],VCardText: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_6__["VCardText"],VCardTitle: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_6__["VCardTitle"],VChip: vuetify_lib_components_VChip__WEBPACK_IMPORTED_MODULE_7__["VChip"],VDialog: vuetify_lib_components_VDialog__WEBPACK_IMPORTED_MODULE_8__["VDialog"],VDivider: vuetify_lib_components_VDivider__WEBPACK_IMPORTED_MODULE_9__["VDivider"],VIcon: vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_10__["VIcon"],VSelect: vuetify_lib_components_VSelect__WEBPACK_IMPORTED_MODULE_11__["VSelect"],VSpacer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_12__["VSpacer"],VTextField: vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_13__["VTextField"],VTimeline: vuetify_lib_components_VTimeline__WEBPACK_IMPORTED_MODULE_14__["VTimeline"],VTimelineItem: vuetify_lib_components_VTimeline__WEBPACK_IMPORTED_MODULE_14__["VTimelineItem"],VToolbar: vuetify_lib_components_VToolbar__WEBPACK_IMPORTED_MODULE_15__["VToolbar"],VToolbarTitle: vuetify_lib_components_VToolbar__WEBPACK_IMPORTED_MODULE_15__["VToolbarTitle"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/work/WorkStatus.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/work/WorkStatus.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/work/WorkStatus.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WorkStatus_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vuetify-loader/lib/loader.js??ref--18-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./WorkStatus.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/work/WorkStatus.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WorkStatus_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/work/WorkStatus.vue?vue&type=template&id=4895f046&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/work/WorkStatus.vue?vue&type=template&id=4895f046& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WorkStatus_vue_vue_type_template_id_4895f046___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vuetify-loader/lib/loader.js??ref--18-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./WorkStatus.vue?vue&type=template&id=4895f046& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/work/WorkStatus.vue?vue&type=template&id=4895f046&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WorkStatus_vue_vue_type_template_id_4895f046___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WorkStatus_vue_vue_type_template_id_4895f046___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/Work.vue":
/*!*************************************!*\
  !*** ./resources/js/views/Work.vue ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Work_vue_vue_type_template_id_25b093a0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Work.vue?vue&type=template&id=25b093a0& */ "./resources/js/views/Work.vue?vue&type=template&id=25b093a0&");
/* harmony import */ var _Work_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Work.vue?vue&type=script&lang=js& */ "./resources/js/views/Work.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VBtn */ "./node_modules/vuetify/lib/components/VBtn/index.js");
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/index.js");
/* harmony import */ var vuetify_lib_components_VChip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VChip */ "./node_modules/vuetify/lib/components/VChip/index.js");
/* harmony import */ var vuetify_lib_components_VDataTable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuetify/lib/components/VDataTable */ "./node_modules/vuetify/lib/components/VDataTable/index.js");
/* harmony import */ var vuetify_lib_components_VDialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuetify/lib/components/VDialog */ "./node_modules/vuetify/lib/components/VDialog/index.js");
/* harmony import */ var vuetify_lib_components_VDivider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vuetify/lib/components/VDivider */ "./node_modules/vuetify/lib/components/VDivider/index.js");
/* harmony import */ var vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vuetify/lib/components/VIcon */ "./node_modules/vuetify/lib/components/VIcon/index.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/index.js");
/* harmony import */ var vuetify_lib_components_VTabs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! vuetify/lib/components/VTabs */ "./node_modules/vuetify/lib/components/VTabs/index.js");
/* harmony import */ var vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! vuetify/lib/components/VTextField */ "./node_modules/vuetify/lib/components/VTextField/index.js");
/* harmony import */ var vuetify_lib_components_VToolbar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! vuetify/lib/components/VToolbar */ "./node_modules/vuetify/lib/components/VToolbar/index.js");
/* harmony import */ var vuetify_lib_components_VTooltip__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! vuetify/lib/components/VTooltip */ "./node_modules/vuetify/lib/components/VTooltip/index.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Work_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Work_vue_vue_type_template_id_25b093a0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Work_vue_vue_type_template_id_25b093a0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */


















_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VBtn: vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__["VBtn"],VCard: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCard"],VChip: vuetify_lib_components_VChip__WEBPACK_IMPORTED_MODULE_6__["VChip"],VDataTable: vuetify_lib_components_VDataTable__WEBPACK_IMPORTED_MODULE_7__["VDataTable"],VDialog: vuetify_lib_components_VDialog__WEBPACK_IMPORTED_MODULE_8__["VDialog"],VDivider: vuetify_lib_components_VDivider__WEBPACK_IMPORTED_MODULE_9__["VDivider"],VIcon: vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_10__["VIcon"],VSpacer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_11__["VSpacer"],VTab: vuetify_lib_components_VTabs__WEBPACK_IMPORTED_MODULE_12__["VTab"],VTabItem: vuetify_lib_components_VTabs__WEBPACK_IMPORTED_MODULE_12__["VTabItem"],VTabs: vuetify_lib_components_VTabs__WEBPACK_IMPORTED_MODULE_12__["VTabs"],VTabsItems: vuetify_lib_components_VTabs__WEBPACK_IMPORTED_MODULE_12__["VTabsItems"],VTabsSlider: vuetify_lib_components_VTabs__WEBPACK_IMPORTED_MODULE_12__["VTabsSlider"],VTextField: vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_13__["VTextField"],VToolbar: vuetify_lib_components_VToolbar__WEBPACK_IMPORTED_MODULE_14__["VToolbar"],VToolbarTitle: vuetify_lib_components_VToolbar__WEBPACK_IMPORTED_MODULE_14__["VToolbarTitle"],VTooltip: vuetify_lib_components_VTooltip__WEBPACK_IMPORTED_MODULE_15__["VTooltip"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Work.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Work.vue?vue&type=script&lang=js&":
/*!**************************************************************!*\
  !*** ./resources/js/views/Work.vue?vue&type=script&lang=js& ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Work_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vuetify-loader/lib/loader.js??ref--18-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Work.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Work.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Work_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Work.vue?vue&type=template&id=25b093a0&":
/*!********************************************************************!*\
  !*** ./resources/js/views/Work.vue?vue&type=template&id=25b093a0& ***!
  \********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Work_vue_vue_type_template_id_25b093a0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vuetify-loader/lib/loader.js??ref--18-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Work.vue?vue&type=template&id=25b093a0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Work.vue?vue&type=template&id=25b093a0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Work_vue_vue_type_template_id_25b093a0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Work_vue_vue_type_template_id_25b093a0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);