import Axios from "axios";

const state = {
  saleOrderIndex: null,
  saleOrderMode: null,
  saleOrderId: null,
  saleOrderStatus: null,

  saleOrderOption: {
    id: null,
    title: null,
    discount: 0,
    is_use_tax: false,
    shipping_fee: 0,
    pdf_form_type: 'default',
    is_use_description: false,
    saleOrder_id: null,
  },
  resetSaleOrderOption: {
    id: null,
    title: null,
    discount: 0,
    is_use_tax: false,
    shipping_fee: 0,
    pdf_form_type: 'default',
    is_use_description: false,
    sale_order_id: null,
  },
}

const getters = {
}

const mutations = {
  SET_SALE_ORDER_INDEX: (state, payload) => {
    state.saleOrderIndex = payload
  },

  SET_SALE_ORDER_MODE: (state, payload) => {
    state.saleOrderMode = payload
  },

  SET_SALE_ORDER_STATUS: (state, payload) => {
    state.saleOrderStatus = payload
  },

  SET_SALE_ORDER_ID: (state, payload) => {
    state.saleOrderId = payload
  },

  SET_SALE_ORDER_OPTION: (state, payload) => {
    state.saleOrderOption = Object.assign({}, payload)
  },

  RESET_SALE_ORDER: (state) => {
    state.saleOrderIndex = null
    state.saleOrderMode = null
    state.saleOrderStatus = null
    state.saleOrderId = null
    state.saleOrderOption = Object.assign({}, state.resetSaleOrderOption)
  },
}

const actions = {
  SAVE_SALE_ORDER_OPTION: ({ state, commit }) => {
    Axios.post('/api/sale-orders/' + state.saleOrderId + '/option', state.saleOrderOption)
      .then(response => {
        commit('SET_SALE_ORDER_OPTION', response.data.option)
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