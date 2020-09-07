import Axios from 'axios'

const state = {
  pdfs: [],
  pdf: {
    id: '',
    name: '',
    origin_name: '',
    version: '',
    status: '',
    extension: '',
    user_id: '',
    quotation_id: '',
    created_at: ''
  },
}

const getters = {}

const mutations = {
  ADD_QUOTATION_PDF: (state, payload) => {
    state.pdfs.push(payload)
  },

  INIT_QUOTATION_PDF_LIST: (state, items) => {
    state.pdfs = Object.assign([], items)
  },

  RESET_QUOTATION_PDF_LIST: (state) => {
    state.pdfs = []
  },
}

const actions = {
  CREATE_QUOTATION_PDF: ({ commit, rootState }, payload) => {
    Axios.post('/api/quotation-pdfs/' + payload.quotation_id + '/generate-pdf', payload.pdfs)
      .then(response => {
        commit('ADD_QUOTATION_PDF', response.data.data)
      })
  },

  RESET_QUOTATION_PDF_LIST: ({ commit }) => {
    commit('RESET_QUOTATION_PDF_LIST')
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
}