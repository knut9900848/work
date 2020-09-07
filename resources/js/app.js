require('./bootstrap');

window.Vue = require('vue');

import router from './router/index'
import store from "./store/index"
import Vuetify from "./plugins/vuetify"
import VCurrencyField from 'v-currency-field'
import { VTextField } from 'vuetify/lib'  //Globally import VTextField
import VueMoment from 'vue-moment'

Vue.use(require('vue-moment'));
Vue.use(VCurrencyField, {
  locale: 'en-US',
  decimalLength: 2,
  autoDecimalMode: true,
  min: null,
  max: null,
  defaultValue: 0
})

Vue.component('v-text-field', VTextField)
Vue.component('Home', require('./views/Home.vue').default)
axios.defaults.withCredentials = true

const app = new Vue({
  el: '#app',
  vuetify: Vuetify,
  router,
  store,

  created() {
    const storageUserInfo = localStorage.getItem('storageUserInfo')
    const storageUserPermissions = localStorage.getItem('storageUserPermissions')
    const storageUserRoles = localStorage.getItem('storageUserRoles')
    if (storageUserInfo) {
      const user = JSON.parse(storageUserInfo)
      const permissions = storageUserPermissions
      const roles = storageUserRoles
      this.$store.commit('auth/SET_USER_INFO', user)
      this.$store.commit('auth/SET_USER_ROLE_PERMISSION', { permissions: permissions, roles: roles })
    }
    axios.interceptors.response.use(
      response => response,
      error => {
        if (error.response.status === 401) {
          this.$store.dispatch('auth/LOGOUT')
        }
        return Promise.reject(error)
      }
    )
  }
}).$mount('#app')