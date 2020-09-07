import Axios from "axios";

const state = {
  wccMode: null,
  wccId: null,
}

const getters = {

}

const mutations = {
  SET_WCC_ID: (state, payload) => {
    state.wccId = payload
  },

  SET_WCC_MODE: (state, payload) => {
    state.wccMode = payload
  },

  RESET_WCC: (state, payload) => {
    state.wccId = null
    state.wccMode = null
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