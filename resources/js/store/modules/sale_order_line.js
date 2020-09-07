import Axios from 'axios'

const state = {
  saleOrderLines: [],
  saleOrderLine: {
    id: null,
    title: null,
    name: null,
    size: null,
    price: 0,
    quantity: 0,
    unit: null,
    description: null,
    created_at: null,
    updated_at: null,
    delivery_status: null,
    item_category_id: null,
    item_sub_category_id: null,
    product_id: null,
    saleOrder_id: null,
  },
  resetSaleOrderLine: {
    id: null,
    title: null,
    name: null,
    size: null,
    price: 0,
    quantity: 0,
    unit: null,
    description: null,
    created_at: null,
    updated_at: null,
    delivery_status: null,
    item_category_id: null,
    item_sub_category_id: null,
    product_id: null,
    saleOrder_id: null,
  },
}

const getters = {

}

const mutations = {
  INIT_SALE_ORDER_LINE_LIST: (state, items) => {
    state.saleOrderLines = Object.assign([], items)
  },

  ADD_SALE_ORDER_LINE: (state) => {
    state.saleOrderLines.push({ ...state.saleOrderLine })
    // state.saleOrderLines.push(state.saleOrderLine)

  },

  REMOVE_SALE_ORDER_LINE: (state, item) => {
    const index = state.saleOrderLines.indexOf(item)
    state.saleOrderLines.splice(index, 1)
  },

  EDIT_SALE_ORDER_LINE: (state, item) => {
    Object.assign(state.saleOrderLine, item)
  },

  UPDATE_SALE_ORDER_LINE: (state, index) => {
    Object.assign(state.saleOrderLines[index], state.saleOrderLine)
  },

  RESET_SALE_ORDER_LINE: (state) => {
    state.saleOrderLine = Object.assign({}, state.resetsaleOrderLine)
  },

  RESET_SALE_ORDER_LINE_LIST: (state) => {
    state.saleOrderLines = []
  },
}

const actions = {

  SAVE_SALE_ORDER_LINES: ({ state, commit }, payload) => {
    console.log("QT Lines=>", state.saleOrderLines)
    Axios.post('/api/sale-orders/' + payload + '/items', state.saleOrderLines)
      .then(response => {
        console.log("result Sale Order Lines=>", response.data)
      })
      .catch(error => {
        console.log(error)
      })
  },

  RESET_LINE_LIST: ({ commit }) => {
    commit('RESET_SALE_ORDER_LINE_LIST')
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
}