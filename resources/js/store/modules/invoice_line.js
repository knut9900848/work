import Axios from 'axios'

const state = {
  invoiceLines: [],
  invoiceLine: {
    id: null,
    title: null,
    description: null,
    name: null,
    size: null,
    price: 0,
    quantity: 0,
    unit: null,
  },
  resetInvoiceLine: {
    id: null,
    title: null,
    description: null,
    name: null,
    size: null,
    price: 0,
    quantity: 0,
    unit: null,
  },
}

const getters = {

}

const mutations = {
  INIT_INVOICE_LINE_LIST: (state, items) => {
    state.invoiceLines = Object.assign([], items)
  },

  ADD_INVOICE_LINE: (state) => {
    state.invoiceLines.push({ ...state.invoiceLine })
  },

  REMOVE_INVOICE_LINE: (state, item) => {
    const index = state.invoiceLines.indexOf(item)
    state.invoiceLines.splice(index, 1)
  },

  EDIT_INVOICE_LINE: (state, item) => {
    Object.assign(state.invoiceLine, item)
  },

  UPDATE_INVOICE_LINE: (state, index) => {
    Object.assign(state.invoiceLines[index], state.invoiceLine)
  },

  RESET_INVOICE_LINE: (state) => {
    state.invoiceLine = Object.assign({}, state.resetInvoiceLine)
  },

  RESET_INVOICE_LINE_LIST: (state) => {
    state.invoiceLines = []
  },
}

const actions = {

  SAVE_INVOICE_LINES: ({ state, commit }, payload) => {
    Axios.post('/api/invoices/' + payload + '/items', state.invoiceLines)
      .then(response => {
      })
      .catch(error => {
        console.log(error)
      })
  },

  RESET_LINE_LIST: ({ commit }) => {
    commit('RESET_INVOICE_LINE_LIST')
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
}