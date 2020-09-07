import Axios from 'axios'

const state = {
  fields: [],
  field: {
    id: '',
    title: '',
    content: '',
    position: '',
    filedable_id: '',
    filedable_type: '',
  },
  resetfield: {
    id: '',
    title: '',
    content: '',
    position: '',
    filedable_id: '',
    filedable_type: '',
  },
}

const getters = {}

const mutations = {
  ADD_FIELD: (state) => {
    state.fields.push({ ...state.field })
  },

  RESET_FIELD: (state) => {
    Object.assign(state.field, state.resetfield)
  },

  REMOVE_FIELD: (state, item) => {
    const index = state.fields.indexOf(item)
    state.fields.splice(index, 1)
  },

  EDIT_FIELD: (state, item) => {
    Object.assign(state.field, item)
  },

  UPDATE_FIELD: (state, index) => {
    Object.assign(state.fields[index], state.field)
  },

  INIT_FIELD_LIST: (state, payload) => {
    state.fields = Object.assign([], payload)
  },

  RESET_FIELD_LIST: (state) => {
    state.fields = []
  },
}

const actions = {
  SAVE_FIELDS: ({ commit }, payload) => {
    Axios.post('/api/fields', { 'fields': payload.fields, 'model': payload.model, model_id: payload.model_id })
  },

  RESET_FIELD_LIST: ({ commit }) => {
    commit('RESET_FIELD_LIST')
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
}