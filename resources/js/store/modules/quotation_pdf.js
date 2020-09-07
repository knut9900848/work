import Axios from 'axios'

const state = {

}

const getters = {}

const mutations = {
  ADD_QUOTATION_PDF: (state, payload) => {
    state.quotationPdfs.push(payload)
  },

  INIT_QUOTATION_PDF_LIST: (state, items) => {
    state.quotationPdfs = Object.assign([], items)
  },

  RESET_QUOTATION_PDF_LIST: (state) => {
    state.quotationPdfs = []
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