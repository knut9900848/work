import Axios from 'axios'

const state = {
  attachedFiles: [],
  selectedFiles: [],
}

const getters = {
}

const mutations = {
  INIT_FILE_LIST: (state, payload) => {
    state.attachedFiles = Object.assign([], payload)
  },

  SET_SELECTED_FILES: (state, payload) => {
    state.selectedFiles = payload
  },

  RESET_SELECTED_FILES: (state) => {
    state.selectedFiles = []
  },

  DELETE_FILE: (state, payload) => {
    const index = state.attachedFiles.indexOf(payload)
    state.attachedFiles.splice(index, 1)
  },

  RESET_FILE_LIST: (state) => {
    state.attachedFiles = []
  },

  SET_FILE_ERRORS: (state, payload) => {
    state.errors = payload
  }
}

const actions = {
  // INIT_FILE_LIST: ({commit}, payload) => {
  //   Axios.get('/api/files/' + payload.model + '/' + payload.id)
  //   .then(response => {
  //     commit('INIT_FILE_LIST', response.data.data)
  //   })
  // },

  UPLOAD_FILES: ({ commit, state }) => {
    Axios.post('/api/files', state.selectedFiles, { headers: { 'Content-Type': 'multipart/form-data' } })
      .then(response => {
        commit('INIT_FILE_LIST', response.data.data)
        commit('RESET_SELECTED_FILES')
      })
      .catch(error => {
        console.log(error)
      })
  },

  DOWNLOAD_FILE: ({ commit }, payload) => {
    Axios.get('/api/files/' + payload.file_id + '/storage/' + payload.storage + '/download', { responseType: 'arraybuffer' })
      .then(response => {
        const url = window.URL.createObjectURL(new Blob([response.data]))
        const link = document.createElement('a')
        link.href = url
        link.setAttribute('download', response.headers.filename) //or any other extension
        document.body.appendChild(link)
        link.click()
      })
  },

  DELETE_FILE: ({ commit }, payload) => {
    Axios.delete('/api/files/' + payload.file.id + '/storage/' + payload.storage)
      .then(response => {
        commit('DELETE_FILE', payload.file)
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