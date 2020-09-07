import Axios from "axios";

const state = {
  workIndex: null,
  workId: null,
  workStatus: null,
  workMode: null,
  workPhase: null,
  workCompany: null,
  workProject: null,
  workSubProject: null,
  workCategory: null,
  workCurrency: null,

  workFilterQuery: ''
}

const getters = {

}

const mutations = {
  SET_WORK_ID: (state, payload) => {
    state.workId = payload
  },

  SET_WORK_INDEX: (state, payload) => {
    state.workIndex = payload
  },

  SET_WORK_STATUS: (state, payload) => {
    state.workStatus = payload
  },

  SET_WORK_MODE: (state, payload) => {
    state.workMode = payload
  },

  SET_WORK_PHASE: (state, payload) => {
    state.workPhase = payload
  },

  SET_WORK_COMPANY: (state, payload) => {
    state.workCompany = payload
  },

  SET_WORK_PROJECT: (state, payload) => {
    state.workProject = payload
  },

  SET_WORK_SUB_PROJECT: (state, payload) => {
    state.workSubProject = payload
  },

  SET_WORK_CATEGORY: (state, payload) => {
    state.workCategory = payload
  },

  SET_WORK_CURRENCY: (state, payload) => {
    state.workCurrency = payload
  },

  SET_WORK_FILTER_QUERY: (state, payload) => {
    state.workFilterQuery = payload
  },

  RESET_WORK: (state) => {
    state.workIndex = null
    state.workId = null
    state.workStatus = null
    state.workMode = null
    state.workPhase = null
    state.workCompany = null
    state.workProject = null
    state.workSubProject = null
    state.workCategory = null
    state.workCurrency = null
  },
}

const actions = {

}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
}