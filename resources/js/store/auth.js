import axios from 'axios'
import router from '../router/index'

const state = {
  // user: null,
  user: {
    'id': null,
    'title': null,
    'gender': null,
    'name': null,
    'kor_name': null,
    'email': null,
    'email_verified_at': null,
    'password': null,
    'position': null,
    'kor_position': null,
    'is_active': null,
    'mobile': null,
    'phone': null,
    'uuid': null,
    'avatar': null,
    'member_group_id': null,
    'branch_id': null,
    'department_id': null,
    'position_id': null,
  },
  reset_user: {
    'id': null,
    'title': null,
    'gender': null,
    'name': null,
    'kor_name': null,
    'email': null,
    'email_verified_at': null,
    'password': null,
    'position': null,
    'kor_position': null,
    'is_active': null,
    'mobile': null,
    'phone': null,
    'uuid': null,
    'avatar': null,
    'member_group_id': null,
    'branch_id': null,
    'department_id': null,
    'position_id': null,
  },
  permissions: [],
  roles: [],
}

const getters = {
  isLogged: state => !!state.user
}

const mutations = {
  SET_USER_INFO: (state, payload) => {
    state.user = payload
  },

  RESET_USER_INFO: (state) => {
    state.user = state.reset_user
  },

  SET_USER_ROLE_PERMISSION: (state, payload) => {
    state.permissions = payload.permissions
    state.roles = payload.roles
  },

  RESET_USER_ROLE_PERMISSION: (state, payload) => {
    state.permissions = []
    state.roles = []
  },
}

const actions = {
  LOGIN: ({ commit, dispatch, state }, payload) => {
    axios.get('/sanctum/csrf-cookie').then(response => {
      axios.post('/api/login', { email: payload.email, password: payload.password })
        .then(response => {
          if (response.data.result === "fail") {
            dispatch('SHOW_GLOBAL_SNACKBAR', { text: response.data.message, color: 'red' }, { root: true })
            return false
          }

          let storageUserInfo = JSON.stringify(response.data.user)
          let storageUserPermissions = response.data.permissions
          let storageUserRoles = response.data.roles

          localStorage.setItem('email', response.data.user.email)
          localStorage.setItem('storageUserInfo', storageUserInfo)
          localStorage.setItem('storageUserPermissions', storageUserPermissions)
          localStorage.setItem('storageUserRoles', storageUserRoles)

          commit('SET_USER_INFO', response.data.user)
          commit('SET_USER_ROLE_PERMISSION', { permissions: response.data.permissions, roles: response.data.roles })
          const path = router.history.current.query.redirect
          router.push(path || '/')
        })
    })
  },

  LOGOUT: ({ commit }) => {
    axios.post('/api/logout')
      .then(response => {
        commit('RESET_USER_INFO')
        localStorage.removeItem('storageUserInfo')
        localStorage.removeItem('storageUserRoles')
        localStorage.removeItem('storageUserPermissions')
        router.push({ name: 'login' })
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