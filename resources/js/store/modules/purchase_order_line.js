import Axios from 'axios'

const state = {
  purchaseOrderLines: [],
  purchaseOrderLine: {
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
    purchase_order_id: null,
  },
  resetPurchaseOrderLine: {
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
    purchase_order_id: null,
  },
}

const getters = {

}

const mutations = {
  INIT_PURCHASE_ORDER_LINE_LIST: (state, items) => {
    state.purchaseOrderLines = Object.assign([], items)
  },

  ADD_PURCHASE_ORDER_LINE: (state) => {
    state.purchaseOrderLines.push({ ...state.purchaseOrderLine })
    // state.purchaseOrderLines.push(state.purchaseOrderLine)

  },

  REMOVE_PURCHASE_ORDER_LINE: (state, item) => {
    const index = state.purchaseOrderLines.indexOf(item)
    state.purchaseOrderLines.splice(index, 1)
  },

  EDIT_PURCHASE_ORDER_LINE: (state, item) => {
    Object.assign(state.purchaseOrderLine, item)
  },

  UPDATE_PURCHASE_ORDER_LINE: (state, index) => {
    Object.assign(state.purchaseOrderLines[index], state.purchaseOrderLine)
  },

  RESET_PURCHASE_ORDER_LINE: (state) => {
    state.purchaseOrderLine = Object.assign({}, state.resetPurchaseOrderLine)
  },

  RESET_PURCHASE_ORDER_LINE_LIST: (state) => {
    state.purchaseOrderLines = []
  },
}

const actions = {

  SAVE_PURCHASE_ORDER_LINES: ({ state, commit }, payload) => {
    console.log("PO ID=>", payload)
    Axios.post('/api/purchase-orders/' + payload + '/items', state.purchaseOrderLines)
      .then(response => {
        console.log(response.data)
      })
      .catch(error => {
        console.log(error)
      })
  },

  RESET_LINE_LIST: ({ commit }) => {
    commit('RESET_PURCHASE_ORDER_LINE_LIST')
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
}