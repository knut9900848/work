<template>
  <div class="wrap-login d-flex align-center">
    <v-container style="max-width:500px;">
      <v-row>
        <v-col xs12>
          <v-form v-model="valid">
            <v-card elevation="5">
              <v-toolbar elevation="0" color="primary" dark>
                <v-toolbar-title class="font-weight-black">LOGIN</v-toolbar-title>
                <v-spacer></v-spacer>
                <img :src="'../img/logos/logo_w.png'" width="55px" />
              </v-toolbar>
              <v-divider></v-divider>
              <v-card-text class="mt-5">
                <v-text-field
                  v-model="loginInfo.email"
                  label="Email Address"
                  :rules="[required('email'), emailFormat()]"
                ></v-text-field>
                <v-text-field
                  v-model="loginInfo.password"
                  label="Password"
                  :type="showPassword ? 'text' : 'password'"
                  :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                  @click:append="showPassword = !showPassword"
                  :rules="[required('password'), minLength('password', 6)]"
                ></v-text-field>
              </v-card-text>
              <v-card-actions>
                <v-btn
                  block
                  class="mb-3"
                  label="Login"
                  color="primary"
                  @click="login()"
                  :disabled="!valid"
                  depressed
                >Login</v-btn>
              </v-card-actions>
            </v-card>
          </v-form>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import axios from "axios";
import { mapActions, mapState } from "vuex";
import validations from "../../rules/login-rules";
export default {
  data: () => ({
    loginInfo: {
      email: "",
      password: ""
    },
    showPassword: false,
    ...validations,
    valid: true
  }),

  computed: {
    ...mapState("auth", ["user"])
  },

  mounted() {
    if (localStorage.email) {
      this.loginInfo.email = localStorage.email;
    }
  },

  methods: {
    ...mapActions("auth", ["LOGIN"]),

    login() {
      this.LOGIN({
        email: this.loginInfo.email,
        password: this.loginInfo.password,
        model: this.$route.params.model,
        id: this.$route.params.id
      });
    }
  }
};
</script>
<style scoped>
.wrap-login {
  background-image: url("../../../../public/img/bg//bg_login4.jpg");
  width: 100%;
  height: 100%;
}
.wrap-login {
  background-size: cover;
}
.wrap-login .v-card__actions {
  padding-top: 1.5rem;
}
.wrap-login .v-card {
  opacity: 0.85 !important;
}
</style>