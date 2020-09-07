import Axios from "axios";

const state = {
  invoiceMode: null,
  invoiceId: null,

  invoiceOption: {
    id: null,
    discount: 0,
    shipping_fee: 0,
    is_use_tax: false,
    pdf_form_type: 'default',
    invoice_id: null,
  },

  defaultInvoiceOption: {
    id: null,
    discount: 0,
    shipping_fee: 0,
    is_use_tax: false,
    pdf_form_type: 'default',
    invoice_id: null,
  },
}

const getters = {

}

const mutations = {
  SET_INVOICE_ID: (state, payload) => {
    state.invoiceId = payload
  },

  SET_INVOICE_MODE: (state, payload) => {
    state.invoiceMode = payload
  },

  SET_INVOICE_OPTION: (state, payload) => {
    state.invoiceOption = payload
  },

  RESET_INVOICE: (state, payload) => {
    state.invoiceId = null
    state.invoiceMode = null
    state.invoiceOption = Object.assign({}, state.defaultInvoiceOption)
  },
}

const actions = {
  SAVE_INVOICE_OPTION: ({ state, commit }, payload) => {
    Axios.post('/api/invoices/' + payload + '/option', state.invoiceOption)
      .then(response => {
        commit('SET_INVOICE_OPTION', response.data.option)
      })
      .catch(error => {
        console.log(error)
      })
  },

  UPDATE_INVOICE_OPTION: ({ state, commit }, payload) => {
    Axios.put('/api/invoices/' + payload + '/option/' + state.invoiceOption.id, state.invoiceOption)
      .then(response => {
        commit('SET_INVOICE_OPTION', response.data.option)
      })
      .catch(error => {
        console.log(error)
      })
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
}