import Axios from "axios";

const state = {
  paymentMode: null,
  paymentId: null,
}

const getters = {

}

const mutations = {
  SET_PAYMENT_ID: (state, payload) => {
    state.paymentId = payload
  },

  SET_PAYMENT_MODE: (state, payload) => {
    state.paymentMode = payload
  },

  RESET_PAYMENT: (state, payload) => {
    state.paymentId = null
    state.paymentMode = null
  },
}

const actions = {}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
}