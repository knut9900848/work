import Axios from "axios";

const state = {
  purchaseOrderIndex: null,
  purchaseOrderMode: null,
  purchaseOrderId: null,
  purchaseOrderStatus: null,

  purchaseOrderOption: {
    id: null,
    title: null,
    discount: 0,
    is_use_tax: false,
    shipping_fee: 0,
    pdf_form_type: 'default',
    purchase_order_terms_and_conditions_id: null,
    purchase_order_id: null,
  },
  resetPurchaseOrderOption: {
    id: null,
    title: null,
    discount: 0,
    is_use_tax: false,
    shipping_fee: 0,
    pdf_form_type: 'default',
    purchase_order_terms_and_conditions_id: null,
    purchase_order_id: null,
  },
}

const getters = {
}

const mutations = {
  SET_PURCHASE_ORDER_INDEX: (state, payload) => {
    state.purchaseOrderIndex = payload
  },

  SET_PURCHASE_ORDER_MODE: (state, payload) => {
    state.purchaseOrderMode = payload
  },

  SET_PURCHASE_ORDER_STATUS: (state, payload) => {
    state.purchaseOrderStatus = payload
  },

  SET_PURCHASE_ORDER_ID: (state, payload) => {
    state.purchaseOrderId = payload
  },

  SET_PURCHASE_ORDER_OPTION: (state, payload) => {
    state.purchaseOrderOption = payload
  },

  RESET_PURCHASE_ORDER: (state) => {
    state.purchaseOrderIndex = null
    state.purchaseOrderMode = null
    state.purchaseOrderStatus = null
    state.purchaseOrderId = null
    state.purchaseOrderOption = Object.assign({}, state.resetPurchaseOrderOption)
  },
}

const actions = {
  SAVE_PURCHASE_ORDER_OPTION: ({ state, commit }, payload) => {
    Axios.post('/api/purchase-orders/' + state.purchaseOrderId + '/option', payload)
      .then(response => {
        commit('SET_PURCHASE_ORDER_OPTION', response.data.option)
      })
  },
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
}