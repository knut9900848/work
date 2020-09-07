import Axios from 'axios'

const state = {
  quotationLines: [],
  quotationLine: {
    id: null,
    title: null,
    name: null,
    size: null,
    price: 0,
    discount: 0,
    tax: 0,
    quantity: 0,
    unit: null,
    description: null,
    created_at: null,
    updated_at: null,
    delivery_status: null,
    item_category_id: null,
    item_sub_category_id: null,
    product_id: null,
    quotation_id: null,
  },
  resetQuotationLine: {
    id: null,
    title: null,
    name: null,
    size: null,
    price: 0,
    discount: 0,
    tax: 0,
    quantity: 0,
    unit: null,
    description: null,
    created_at: null,
    updated_at: null,
    delivery_status: null,
    item_category_id: null,
    item_sub_category_id: null,
    product_id: null,
    quotation_id: null,
  },
}

const getters = {

}

const mutations = {
  INIT_QUOTATION_LINE_LIST: (state, items) => {
    state.quotationLines = Object.assign([], items)
  },

  ADD_QUOTATION_LINE: (state) => {
    state.quotationLines.push({ ...state.quotationLine })
    // state.quotationLines.push(state.quotationLine)

  },

  REMOVE_QUOTATION_LINE: (state, item) => {
    const index = state.quotationLines.indexOf(item)
    state.quotationLines.splice(index, 1)
  },

  EDIT_QUOTATION_LINE: (state, item) => {
    Object.assign(state.quotationLine, item)
  },

  UPDATE_QUOTATION_LINE: (state, index) => {
    Object.assign(state.quotationLines[index], state.quotationLine)
  },

  RESET_QUOTATION_LINE: (state) => {
    state.quotationLine = Object.assign({}, state.resetQuotationLine)
  },

  RESET_QUOTATION_LINE_LIST: (state) => {
    state.quotationLines = []
  },
}

const actions = {

  SAVE_QUOTATION_LINES: ({ state, commit }, payload) => {
    console.log("QT Lines=>", state.quotationLines)
    Axios.post('/api/quotations/' + payload + '/items', state.quotationLines)
      .then(response => {
        console.log("result QT Lines=>", response.data)
      })
      .catch(error => {
        console.log(error)
      })
  },

  RESET_LINE_LIST: ({ commit }) => {
    commit('RESET_QUOTATION_LINE_LIST')
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
}