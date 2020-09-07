<template>
  <div class="wrap-component-table">
    <v-data-table
      :headers="headers"
      :items="desserts"
      class="elevation-1"
      :search="search"
      :items-per-page="30"
    >
      <template v-slot:top>
        <v-toolbar flat dark height="85" color="blue accent-2">
          <v-toolbar-title>IES MEMBERS</v-toolbar-title>
          <v-divider class="mx-4" inset vertical></v-divider>
          <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="Search"
            single-line
            hide-details
            solo-inverted
          ></v-text-field>
          <v-spacer></v-spacer>
          <v-dialog v-model="dialog" max-width="800px">
            <template v-slot:activator="{ on }">
              <v-btn color="primary" dark class="mb-2" v-on="on">
                <v-icon left dark>mdi-account-plus</v-icon>Member
              </v-btn>
            </template>
            <v-card>
              <v-card-title>
                <span class="headline">{{ formTitle }}</span>
              </v-card-title>
              <v-card-text>
                <div>
                  <v-row>
                    <v-col cols="12" md="6">
                      <v-text-field
                        v-model="editedItem.name"
                        label="Full Name"
                        :error-messages="errors.name"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="6">
                      <v-text-field
                        v-model="editedItem.kor_name"
                        label="Name(Korean)"
                        :error-messages="errors.kor_name"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="6">
                      <v-select
                        v-model="editedItem.gender"
                        :items="genders"
                        label="Gender"
                        :error-messages="errors.gender"
                      ></v-select>
                    </v-col>
                    <v-col cols="12" md="6">
                      <v-text-field
                        v-model="editedItem.email"
                        label="Email"
                        :error-messages="errors.email"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="6">
                      <v-text-field
                        v-model="editedItem.position"
                        label="Position"
                        :error-messages="errors.position"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="6">
                      <v-text-field
                        v-model="editedItem.kor_position"
                        label="Position(Korean)"
                        :error-messages="errors.kor_position"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="6">
                      <v-text-field
                        v-model="editedItem.password"
                        type="password"
                        label="Password"
                        :error-messages="errors.password"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="6">
                      <v-text-field
                        v-model="editedItem.password_confirmation"
                        type="password"
                        label="Password Confirm"
                        :error-messages="errors.password_confirmation"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="6">
                      <v-text-field v-model="editedItem.mobile" label="Mobile"></v-text-field>
                    </v-col>
                    <v-col cols="12" md="6">
                      <v-text-field v-model="editedItem.phone" label="Phone"></v-text-field>
                    </v-col>
                    <v-col cols="12" md="6">
                      <v-checkbox v-model="editedItem.is_active" label="Activate"></v-checkbox>
                    </v-col>
                  </v-row>
                </div>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="close">Cancel</v-btn>
                <v-btn color="blue darken-1" text @click="save">Save</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>

          <v-dialog v-model="roleDialog" max-width="400px">
            <v-card class="wrap-component-table">
              <v-toolbar flat>
                <v-toolbar-title>Roles</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-btn fab small text color="primary" @click="closeRoleDialog">
                  <v-icon>mdi-window-close</v-icon>
                </v-btn>
              </v-toolbar>
              <v-divider></v-divider>
              <v-card-text>
                <v-simple-table class="mt-3">
                  <template v-slot:default>
                    <thead>
                      <tr>
                        <th class="text-center">ID</th>
                        <th class="text-center">Role</th>
                        <th class="text-center">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="(role, index) in allRoles" :key="role.id">
                        <td class="text-center">{{ index+1 }}</td>
                        <td class="text-center">{{ role.name }}</td>
                        <td class="text-center">
                          <v-checkbox v-model="memberRoles" :value="role.name"></v-checkbox>
                        </td>
                      </tr>
                    </tbody>
                  </template>
                </v-simple-table>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="closeRoleDialog()">Cancel</v-btn>
                <v-btn color="blue darken-1" text @click="updateRole(memberRoles)">Save</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>

          <v-dialog v-model="permissionDialog" max-width="600px">
            <v-card class="wrap-component-table">
              <v-toolbar flat>
                <v-toolbar-title>Permissions</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-btn fab small text color="primary" @click="closePermissionDialog">
                  <v-icon>mdi-window-close</v-icon>
                </v-btn>
              </v-toolbar>
              <v-divider></v-divider>
              <v-card-text>
                <v-simple-table class="mt-3">
                  <template v-slot:default>
                    <thead>
                      <tr>
                        <th class="text-center">ID</th>
                        <th class="text-center">Permission</th>
                        <th class="text-center">Description</th>
                        <th class="text-center">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="(permission, index) in allPermissions" :key="permission.id">
                        <td class="text-center">{{ index+1 }}</td>
                        <td class="text-center">{{ permission.name }}</td>
                        <td class="text-left"></td>
                        <td class="text-center">
                          <v-checkbox v-model="memberPermissions" :value="permission.name"></v-checkbox>
                        </td>
                      </tr>
                    </tbody>
                  </template>
                </v-simple-table>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="closePermissionDialog()">Cancel</v-btn>
                <v-btn color="blue darken-1" text @click="updatePermission(memberPermissions)">Save</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>

          <v-dialog v-model="avatarDialog" max-width="400px">
            <v-card>
              <v-toolbar flat>
                <v-toolbar-title>Avatar</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-btn fab small text color="primary" @click="closeAvatarDialog()">
                  <v-icon>mdi-window-close</v-icon>
                </v-btn>
              </v-toolbar>
              <v-divider></v-divider>
              <v-card-text>
                <v-file-input v-model="avatar" accept="image/*" placeholder="Select Image"></v-file-input>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="closeAvatarDialog()">Cancel</v-btn>
                <v-btn color="blue darken-1" text @click="uploadAvatar()">Save</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>

          <v-dialog v-model="approvalAmountDialog" max-width="1024px">
            <v-card>
              <v-toolbar flat>
                <v-toolbar-title>Minimum Approval Amount</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-btn fab small text color="primary" @click="closeApprovalAmountDialog()">
                  <v-icon>mdi-window-close</v-icon>
                </v-btn>
              </v-toolbar>
              <v-divider></v-divider>
              <v-card-text>
                <MemberApprovalAmount ref="memberApprovalAmount"></MemberApprovalAmount>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="closeApprovalAmountDialog()">Cancel</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-toolbar>
      </template>

      <template v-slot:item.name="{ item }">
        <div class="d-flex justify-space-first align-center">
          <v-avatar class="mr-3 d-block" size="36px" v-if="item.avatar">
            <img :src="'../img/avatars/'+item.avatar" @click="openAvatarDialog(item)" />
          </v-avatar>
          <v-avatar class="mr-3 d-block" size="36px" v-else>
            <img
              :src="'../img/default-avatars/'+item.gender+'-avatar.png'"
              @click="openAvatarDialog(item)"
            />
          </v-avatar>
          <span class="d-block font-weight-black">{{ item.name }}</span>
        </div>
      </template>

      <template v-slot:item.action="{ item }">
        <div class="d-flex justify-space-between">
          <span class="d-block">
            <v-icon class="mr-2" @click="editItem(item)">mdi-pencil-circle</v-icon>
          </span>
          <span class="d-block">
            <v-icon @click="openRoleDialog(item)">mdi-human-greeting</v-icon>
          </span>
          <span class="d-block">
            <v-icon @click="openPermissionDialog(item)">mdi-account-settings</v-icon>
          </span>
          <span class="d-block">
            <v-icon @click="openApprovalAmountDialog(item)">mdi-currency-usd-circle</v-icon>
          </span>
        </div>
      </template>

      <template v-slot:item.is_active="{ item }">
        <v-chip color="primary" v-if="item.is_active === 1 || item.is_active === true">Active</v-chip>
        <v-chip v-else>Active</v-chip>
      </template>

      <template v-slot:no-data>
        <v-btn color="primary" @click="initialize">Reset</v-btn>
      </template>
    </v-data-table>
  </div>
</template>

<script>
import Axios from "axios";
import MemberApprovalAmount from "../../components/admin/MemberApprovalAmount";
import { getSelectedItemData } from "../../mixins/getSelectedItemData";
export default {
  components: {
    MemberApprovalAmount
  },
  data: () => ({
    dialog: false,
    roleDialog: false,
    permissionDialog: false,
    avatarDialog: false,
    approvalAmountDialog: false,
    search: null,
    headers: [
      { text: "ID", align: "center", sortable: false, value: "id" },
      { text: "Name", align: "center", sortable: false, value: "name" },
      { text: "Email", align: "center", sortable: false, value: "email" },
      { text: "Position", align: "center", sortable: false, value: "position" },
      { text: "Phone", align: "center", sortable: false, value: "phone" },
      { text: "Mobile", align: "center", sortable: false, value: "mobile" },
      { text: "Active", align: "center", sortable: false, value: "is_active" },
      {
        text: "Created at",
        align: "center",
        sortable: false,
        value: "created_at"
      },
      { text: "Actions", value: "action", sortable: false }
    ],
    desserts: [],
    editedIndex: -1,
    editedItem: {
      id: "",
      title: "",
      name: "",
      kor_name: "",
      gender: "",
      email: "",
      position: "",
      kor_position: "",
      password: "",
      password_confirmation: "",
      phone: "",
      mobile: "",
      is_active: "",
      updated_at: "",
      roles: [],
      avatar: ""
    },
    defaultItem: {
      id: "",
      title: "",
      name: "",
      kor_name: "",
      gender: "",
      email: "",
      position: "",
      kor_position: "",
      password: "",
      password_confirmation: "",
      phone: "",
      mobile: "",
      is_active: "",
      updated_at: "",
      roles: [],
      avatar: ""
    },
    genders: ["Male", "Female"],
    errors: [],
    avatar: [],
    allRoles: [],
    memberRoles: [],
    allPermissions: [],
    memberPermissions: []
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "Add Member" : "Edit Member";
    }
  },

  watch: {
    dialog(val) {
      val || this.close();
    }
  },

  created() {
    this.initialize();
  },

  methods: {
    initialize() {
      Axios.get("/api/admin/members").then(response => {
        this.desserts = response.data.users;
        this.allRoles = response.data.roles;
        this.allPermissions = response.data.permissions;
      });
    },

    editItem(item) {
      this.editedIndex = this.desserts.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      const index = this.desserts.indexOf(item);
      confirm("Are you sure you want to delete this item?") &&
        this.desserts.splice(index, 1);
    },

    close() {
      this.dialog = false;
      setTimeout(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      }, 300);
    },

    save() {
      if (this.editedIndex > -1) {
        Axios.put("/api/admin/members/" + this.editedItem.id, this.editedItem)
          .then(response => {
            Object.assign(this.desserts[this.editedIndex], response.data.user);
            this.$store.dispatch("SHOW_GLOBAL_SNACKBAR", {
              text: "User has been updated successfully"
            });
            this.close();
          })
          .catch(error => {
            this.errors = error.response.data.errors;
            this.$store.dispatch("SHOW_GLOBAL_SNACKBAR", {
              text: error.response.data.message,
              color: "red"
            });
          });
      } else {
        Axios.post("/api/admin/members", this.editedItem)
          .then(response => {
            this.desserts.unshift(response.data.user);
            this.$store.dispatch("SHOW_GLOBAL_SNACKBAR", {
              text: "New User has been created successfully"
            });
            this.close();
          })
          .catch(error => {
            this.errors = error.response.data.errors;
            this.$store.dispatch("SHOW_GLOBAL_SNACKBAR", {
              text: error.response.data.message,
              color: "red"
            });
          });
      }
    },

    openRoleDialog(item) {
      this.roleDialog = true;
      this.editedIndex = this.desserts.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.getMemberRoles(this.editedItem.id);
    },

    closeRoleDialog() {
      this.roleDialog = false;
      this.memberRoles = [];
    },

    getMemberRoles(member_id) {
      Axios.get("/api/admin/members/" + member_id + "/get-roles").then(
        response => {
          this.memberRoles = response.data.memberRoles;
        }
      );
    },

    updateRole(memberRoles) {
      Axios.post("/api/admin/members/" + this.editedItem.id + "/async-roles", {
        roles: memberRoles
      }).then(response => {
        this.$store.dispatch("SHOW_GLOBAL_SNACKBAR", {
          text: response.data.message
        });
        this.closeRoleDialog();
      });
    },

    // updatePermission(memberRoles) {
    //   Axios.post('/api/admin/members/' + this.editedItem.id + '/async-roles', { roles: memberRoles })
    //   .then(response => {
    //     this.$store.dispatch('SHOW_GLOBAL_SNACKBAR', {text: response.data.message })
    //     this.closeRoleDialog()
    //   })
    // },

    openPermissionDialog(item) {
      this.permissionDialog = true;
      this.editedIndex = this.desserts.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.getMemberPermissions(this.editedItem.id);
    },

    closePermissionDialog() {
      this.permissionDialog = false;
      this.memberPermissions = [];
    },

    openApprovalAmountDialog(item) {
      this.approvalAmountDialog = true;
      setTimeout(() => {
        this.$refs.memberApprovalAmount.initialize(item.id);
      }, 300);
    },

    closeApprovalAmountDialog() {
      this.approvalAmountDialog = false;
      this.memberPermissions = [];
    },

    getMemberPermissions(member_id) {
      Axios.get("/api/admin/members/" + member_id + "/get-permissions").then(
        response => {
          this.memberPermissions = response.data.memberPermissions;
        }
      );
    },

    updatePermission(memberPermissions) {
      Axios.post(
        "/api/admin/members/" + this.editedItem.id + "/async-permissions",
        { permissions: memberPermissions }
      ).then(response => {
        this.$store.dispatch("SHOW_GLOBAL_SNACKBAR", {
          text: response.data.message
        });
        this.closePermissionDialog();
      });
    },

    openAvatarDialog(item) {
      this.editedIndex = this.desserts.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.avatarDialog = true;
    },

    uploadAvatar() {
      const formData = new FormData();
      formData.append("avatar", this.avatar);
      formData.append("user_id", this.editedItem.id);
      formData.append("_method", "PATCH");
      Axios.post(
        "/api/admin/members/" + this.editedItem.id + "/upload-avatar",
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      ).then(response => {
        this.desserts[this.editedIndex].avatar = response.data.data;
        this.closeAvatarDialog();
      });
    },

    closeAvatarDialog() {
      this.avatarDialog = false;
      this.avatar = [];
    }
  },

  mixins: [getSelectedItemData]
};
</script>

<style scoped>
</style>