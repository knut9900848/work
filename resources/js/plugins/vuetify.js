// You still need to register Vuetify itself
// src/plugins/vuetify.js

import Vue from 'vue'
import Vuetify from 'vuetify/lib'
// import 'vuetify/dist/vuetify.min.css'
import '@mdi/font/css/materialdesignicons.css'

Vue.use(Vuetify)

const opts = {
  icons: {
    iconfont: 'mdi',
  },
  theme: {
    light: {

    },
    dakr: {

    },
    // dark: false,
  },
}

export default new Vuetify(opts)