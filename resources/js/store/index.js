import Vue from 'vue'
import Vuex from 'vuex'
import auth from './auth'

import quotation from './modules/quotation'
import quotation_line from './modules/quotation_line'
import fields from './modules/fields'
import files from './modules/files'
import attachments from './modules/attachments'
import purchase_order from './modules/purchase_order'
import purchase_order_line from './modules/purchase_order_line'
import work from './modules/work'
import sale_order from './modules/sale_order'
import sale_order_line from './modules/sale_order_line'
import wcc from './modules/wcc'
import invoice from './modules/invoice'
import invoice_line from './modules/invoice_line'
import payment from './modules/payment'


Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    auth: auth,
    quotation: quotation,
    quotation_line: quotation_line,
    fields: fields,
    files: files,
    attachments: attachments,
    purchase_order: purchase_order,
    purchase_order_line: purchase_order_line,
    work: work,
    sale_order: sale_order,
    sale_order_line: sale_order_line,
    wcc: wcc,
    invoice: invoice,
    invoice_line: invoice_line,
    payment: payment,
  },

  state: {
    globalLoader: false,
    globalSnackBar: {},
  },

  mutations: {
    SET_GLOBAL_LOADER(state, payload) {
      state.globalLoader = payload
    },

    SET_GLOBAL_SNACKBAR(state, payload) {
      state.globalSnackBar = payload
    },

    // SET_GLOBAL_ALERT(state, payload) {
    //   state.globalAlert = payload
    // },
  },

  actions: {
    SHOW_GLOBAL_SNACKBAR({ commit }, snackbar) {
      snackbar.showing = true
      snackbar.color = snackbar.color || 'primary'
      commit('SET_GLOBAL_SNACKBAR', snackbar)
    },

    // SHOW_GLOBAL_ALERT({commit}, alert) {
    //   alert.showing = true
    //   alert.color = alert.color || 'primary'
    //   commit('SET_GLOBAL_ALERT', alert)
    // }
  },
})