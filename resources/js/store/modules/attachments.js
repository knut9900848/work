import Axios from 'axios'

const state = {
  attachmentFiles: [],
  selectedFiles: [],
}

const getters = {
}

const mutations = {

  INIT_ATTACHMENT_FILE_LIST: (state, payload) => {
    state.attachmentFiles = Object.assign([], payload)
  },

  SET_SELECTED_ATTACHMENT_FILES: (state, payload) => {
    state.selectedFiles = payload
  },

  RESET_SELECTED_ATTACHMENT_FILES: (state) => {
    state.selectedFiles = []
  },

  DELETE_ATTACHMENT_FILE: (state, payload) => {
    const index = state.attachmentFiles.indexOf(payload)
    state.attachmentFiles.splice(index, 1)
  },

  RESET_ATTACHMENT_FILE_LIST: (state) => {
    state.attachmentFiles = []
  },
}

const actions = {
  UPLOAD_ATTACHMENT_FILES: ({ commit, state }, payload) => {
    Axios.post('/api/attachments/' + payload, state.selectedFiles, { headers: { 'Content-Type': 'multipart/form-data' } })
      .then(response => {
        console.log(response.data)
        commit('INIT_ATTACHMENT_FILE_LIST', response.data.attachments)
        commit('RESET_SELECTED_ATTACHMENT_FILES')
      })
  },

  DOWNLOAD_ATTACHMENT_FILE: ({ commit }, payload) => {
    Axios.get('/api/attachments/' + payload.id + '/storage/' + payload.storage + '/download', { responseType: 'arraybuffer' })
      .then(response => {
        const url = window.URL.createObjectURL(new Blob([response.data]))
        const link = document.createElement('a')
        link.href = url
        link.setAttribute('download', response.headers.filename) //or any other extension
        document.body.appendChild(link)
        link.click()
      })
  },

  DELETE_ATTACHMENT_FILE: ({ commit }, payload) => {
    Axios.delete('/api/attachments/' + payload.attachmentFile.id + '/storage/' + payload.storage)
      .then(response => {
        commit('DELETE_ATTACHMENT_FILE', payload.attachmentFile)
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