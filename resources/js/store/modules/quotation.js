import Axios from "axios";

const state = {
  quotationIndex: null,
  quotationMode: null,
  quotationId: null,
  quotationStatus: null,

  quotationOption: {
    id: null,
    title: null,
    discount: 0,
    is_use_tax: false,
    shipping_fee: 0,
    pdf_form_type: 'default',
    is_use_description: false,
    quotation_id: null,
  },
  resetQuotationOption: {
    id: null,
    title: null,
    discount: 0,
    is_use_tax: false,
    shipping_fee: 0,
    pdf_form_type: 'default',
    is_use_description: false,
    quotation_id: null,
  },
}

const getters = {
}

const mutations = {
  SET_QUOTATION_INDEX: (state, payload) => {
    state.quotationIndex = payload
  },

  SET_QUOTATION_MODE: (state, payload) => {
    state.quotationMode = payload
  },

  SET_QUOTATION_STATUS: (state, payload) => {
    state.quotationStatus = payload
  },

  SET_QUOTATION_ID: (state, payload) => {
    state.quotationId = payload
  },

  SET_QUOTATION_OPTION: (state, payload) => {
    state.quotationOption = Object.assign({}, payload)
  },

  RESET_QUOTATION: (state) => {
    state.quotationIndex = null
    state.quotationMode = null
    state.quotationStatus = null
    state.quotationId = null
    state.quotationOption = Object.assign({}, state.resetQuotationOption)
  },
}

const actions = {
  SAVE_QUOTATION_OPTION: ({ state, commit }) => {
    Axios.post('/api/quotations/' + state.quotationId + '/option', state.quotationOption)
      .then(response => {
        commit('SET_QUOTATION_OPTION', response.data.option)
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