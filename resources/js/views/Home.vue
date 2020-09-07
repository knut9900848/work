<template>
  <v-app id="inspire" v-cloak>
    <v-navigation-drawer
      v-model="drawer"
      app
      hide-overlay
      drawer: true
      color="blue"
      dark
    >
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">
            IES Management
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-item router :to="{ name: 'dashboard' }">
          <v-list-item-icon>
            <v-icon>mdi-view-dashboard</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Dashboard</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item router :to="{name: 'works'}">
          <v-list-item-icon>
            <v-icon>mdi-file-document</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Works</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item router :to="{ name: 'quotations' }">
          <v-list-item-icon>
            <v-icon>mdi-file-document</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Quotations</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item router :to="{ name: 'purchase-orders' }">
          <v-list-item-icon>
            <v-icon>mdi-file-document</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Purchase Orders</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item router :to="{ name: 'delivery-notes' }">
          <v-list-item-icon>
            <v-icon>mdi-file-document</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Delivery Notes</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item router :to="{ name: 'account-transactions' }">
          <v-list-item-icon>
            <v-icon>mdi-file-document</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Account Transactions</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>

        <v-list-item router :to="{ name: 'companies' }">
          <v-list-item-icon>
            <v-icon>mdi-account-star</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Clients</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item router :to="{ name: 'projects' }">
          <v-list-item-icon>
            <v-icon>mdi-ferry</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Projects</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item router :to="{ name: 'suppliers' }">
          <v-list-item-icon>
            <v-icon>mdi-image</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Suppliers</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-van-utility</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Shipping</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-account-group</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Workers</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>

        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-airplane-takeoff</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Business</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-home</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Accommodation</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-comment-account-outline</v-icon>
          </v-list-item-icon>
          <v-list-item-content> 
            <v-list-item-title>CV</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-wrench</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Tools</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item router :to="{ name: 'ppes' }">
          <v-list-item-icon>
            <v-icon>mdi-account-hard-hat</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>PPE</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>

        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-email-alert</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Reminder</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-chart-pie</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Analysis</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>

        <v-list-group>
          <template v-slot:activator>
            <v-list-item-title>Report</v-list-item-title>
          </template>
          <v-list-item router :to="{ name: 'daily-reports' }">
            <v-list-item-icon>
              <v-icon>mdi-file-document-edit-outline</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Daily Report</v-list-item-title>
          </v-list-item>
          <v-list-item router :to="{name: 'weekly-reports'}">
            <v-list-item-icon>
              <v-icon>mdi-file-document-edit-outline</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Weekly Report</v-list-item-title>
          </v-list-item>
          <v-list-item router :to="{name: 'monthly-reports'}">
            <v-list-item-icon>
              <v-icon>mdi-file-document-edit-outline</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Monthly Report</v-list-item-title>
          </v-list-item>
        </v-list-group>

        <v-divider></v-divider>

        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-bell</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Notice</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-group>
          <template v-slot:activator>
            <v-list-item-title>Management</v-list-item-title>
          </template>
          <v-list-item router :to="{ name: 'admin-members' }">
            <v-list-item-icon>
              <v-icon>mdi-account-multiple</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Member</v-list-item-title>
          </v-list-item>
          <v-list-item router :to="{name: 'roles'}">
            <v-list-item-icon>
              <v-icon>mdi-account-network</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Role</v-list-item-title>
          </v-list-item>
          <v-list-item router :to="{name: 'permissions'}">
            <v-list-item-icon>
              <v-icon>mdi-account-settings</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Permission</v-list-item-title>
          </v-list-item>
          <v-list-item router :to="{name: 'default-data'}">
            <v-list-item-icon>
              <v-icon>mdi-database</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Defaut Data</v-list-item-title>
          </v-list-item>
        </v-list-group>

        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-help-box</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>About</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar color="blue-grey darken-3" dark app>
      <v-app-bar-nav-icon dark @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title><img :src="'/img/logos/logo_w.png'" width="45" /></v-toolbar-title>
      
      <v-spacer></v-spacer>
      <!-- 처음 세팅할때 퍼미션 생성 -->
      <v-btn icon @click="createPermission()">
        <v-icon>mdi-heart</v-icon>
      </v-btn>
      <v-switch class="mt-5" dark inset color="yellow" v-model="isDark" @change="changeTheme()"></v-switch>

      <v-menu left bottom v-if="user.id">
        <template v-slot:activator="{ on }">
          <div class="d-flex justify-space-first align-center mr-3" v-on="on">
            <v-btn icon class="d-block mr-2">
              <v-avatar size="36px" v-if="user.avatar">
                <img :src="'../img/avatars/'+user.avatar">
              </v-avatar>
              <v-avatar size="36px" v-else>
                <img :src="'../img/default-avatars/male-avatar.png'" v-show="user.gender === 'Male'">
                <img :src="'../img/default-avatars/female-avatar.png'" v-show="user.gender === 'Female'">
              </v-avatar>
            </v-btn>
            <span class="d-block font-weight-black">{{ user.name }}</span>
          </div>
        </template>
        <v-list>
          <v-list-item router :to="{ name: 'account-setting' }">
            <v-list-item-title>Account Setting</v-list-item-title>
          </v-list-item>
          <v-list-item @click="logout()">
            <v-list-item-title>Logout</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

      <div class="d-flex justify-space-first align-center mr-3" v-else>
        <v-btn icon class="d-block mr-2">
          <v-avatar size="36px">
            <img :src="'../img/default-avatars/male-avatar.png'">
          </v-avatar>
        </v-btn>
        <router-link class="d-block font-weight-black white--text" :to="{ name: 'login' }">Sign In</router-link>
      </div>
    </v-app-bar>

    <v-content>
      <router-view></router-view>
    </v-content>
    <!-- <TheGlobalAlert></TheGlobalAlert> -->
    <TheGlobalSnackBar></TheGlobalSnackBar>
    <TheGlobalLoader></TheGlobalLoader>
  </v-app>
</template>
<script>
import axios from 'axios'
import { mapState, mapActions } from 'vuex'

// import TheGlobalAlert from '../components/global/TheGlobalAlert'
import TheGlobalSnackBar from '../components/global/TheGlobalSnackBar'
import TheGlobalLoader from '../components/global/TheGlobalLoader'

export default {
  components: {
    TheGlobalSnackBar,
    TheGlobalLoader
  },
  data: () => ({
    name: '',
    drawer: false,
    isDark: false,
  }),

  computed: {
    ...mapState('auth', [
      'user',
    ]),
  },

  mounted() {
    const theme = localStorage.getItem("isDark")
    if (theme) {
      if (theme == "true") {
        this.$vuetify.theme.dark = true
        this.isDark = true
      } else {
        this.$vuetify.theme.dark = false
        this.isDark = false
      }
    }
  },

  created() {
    axios.interceptors.request.use((config)=> {
      // Do something before request is sent
      this.$store.commit('SET_GLOBAL_LOADER', true)
      return config;
    }, (error)=> {
      this.$store.commit('SET_GLOBAL_LOADER', false)  
      return Promise.reject(error);
    });

    // Add a response interceptor
    axios.interceptors.response.use( (response)=> {
      // Any status code that lie within the range of 2xx cause this function to trigger
      // Do something with response data
      this.$store.commit('SET_GLOBAL_LOADER', false)
      return response;
    }, (error)=> {
      // Any status codes that falls outside the range of 2xx cause this function to trigger
      // Do something with response error
      this.$store.commit('SET_GLOBAL_LOADER', false)
      return Promise.reject(error);
    });
  },

  methods: {
    ...mapActions('auth', [
      'LOGOUT'
    ]),

    logout() {
      this.LOGOUT()
    },

    changeTheme() {
      localStorage.setItem('isDark', this.isDark)
      this.$vuetify.theme.dark = this.isDark
    },

    createPermission() {
      axios.get('/api/set-default-permission')
    }
  },
}
</script>
<style scoped>
.v-window {
  height: calc(100vh - 48px)
}
</style>