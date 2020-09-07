<template>
<div class="wrap-component-table">
  <v-data-table
    :headers="headers"
    :items="desserts"
    class="elevation-0"
    :search="search"
    :items-per-page="30"
  >
    <template v-slot:top>
      <v-toolbar flat dark height="85" color="blue accent-2">
        <v-toolbar-title>ROLES</v-toolbar-title>
        <v-divider
          class="mx-4"
          inset
          vertical
        ></v-divider>
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
          solo-inverted
        ></v-text-field>
        <v-spacer></v-spacer>
        <v-dialog v-model="addRoleDialog" max-width="400px">
          <template v-slot:activator="{ on }">
            <v-btn color="primary" dark class="mb-2" v-on="on" @click="editRole()">
              <v-icon left dark>mdi-account-network</v-icon>
              Add Role
            </v-btn>
          </template>
          <v-card>
            <v-toolbar flat>
              <v-toolbar-title>
                Avatar
              </v-toolbar-title>
              <v-spacer></v-spacer>
              <v-btn fab small text color="primary" @click="closeAddRoleDialog()">
                <v-icon>mdi-window-close</v-icon>
              </v-btn>
            </v-toolbar>
            <v-divider></v-divider>
            <v-card-text>
              <v-text-field
                v-model="editedRole.name"
                placeholder="Role Name"
              ></v-text-field>
              <v-divider></v-divider>
              <v-text-field
                v-model="editedRole.guard_name"
                placeholder="Role Guard Name"
              ></v-text-field>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="closeAddRoleDialog()">Cancel</v-btn>
              <v-btn color="blue darken-1" text @click="saveRole()">Save</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>

        <v-dialog v-model="dialog" max-width="800px">
          <v-card>
            <v-card-title>
              <span class="headline">EDIT ROLE</span>
            </v-card-title>
            <v-card-text>
              <v-simple-table class="mt-3">
                <template v-slot:default> 
                  <thead>
                    <tr>
                      <th class="text-center">ID</th>
                      <th class="text-center">Permission</th>
                      <th class="text-center">Guard</th>
                      <th class="text-center">Action</th>
                    </tr>
                  </thead>
                <tbody>
                  <tr v-for="(permission, index) in permissions" :key="permission.id">
                    <td>{{ index + 1 }}</td>
                    <td>{{ permission.name }}</td>
                    <td>{{ permission.guard_name }}</td>
                    <td>
                      <v-checkbox
                        v-model="rolePermissions"
                        :value="permission.name"
                      ></v-checkbox>
                    </td>
                  </tr>
                </tbody>
                </template>
              </v-simple-table>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="close">Cancel</v-btn>
              <v-btn color="blue darken-1" text @click="save">Save</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>

    <template v-slot:item.name="{ item }">
      <v-chip color="primary">
        {{ item.name }}
      </v-chip>
    </template>

    <template v-slot:item.permissions="{ item }">
        <v-chip-group column mandatory>
          <v-chip samll v-for="permission in item.permissions" :key="permission.id">
            {{ permission.name }}
          </v-chip>
        </v-chip-group>
    </template>

    <template v-slot:item.action="{ item }">
      <v-btn color="primary" depressed dark small @click="editItem(item)">
        Edit
        <v-icon right small>
          mdi-pencil
        </v-icon>
      </v-btn>
    </template>

    <template v-slot:no-data>
      <v-btn color="primary" @click="initialize">Reset</v-btn>
    </template>
  </v-data-table>
</div>
</template>

<script>
import Axios from 'axios'
export default {
  data: () => ({
    dialog: false,
    addRoleDialog: false,
    search: '',
    headers: [
      { text: 'ID', align: 'center', sortable: false, value: 'id' },
      { text: 'Role', align: 'center', sortable: false, value: 'name' },
      { text: 'Permissions', align: 'center', sortable: false, value: 'permissions' },
      { text: 'Action', align: 'center', sortable: false, value: 'action'},
    ],
    desserts: [],
    editedIndex: -1,
    editedRoleIndex: -1,

    editedItem: {
      id: '',
      name: '',
      permissions: []
    },

    defaultItem: {
      id: '',
      name: '',
      permissions: []
    },

    editedRole: {
      id: '',
      name: '',
      guard_name: ''
    },

    defaultRole: {
      id: '',
      name: '',
      guard_name: ''
    },

    permissions: [],
    rolePermissions: []
   }),

  computed: {
    formTitle () {
      return this.editedIndex === -1 ? 'Add Role' : 'Edit Role'
    },
  },

  watch: {
    dialog (val) {
      val || this.close()
    },
  },

  created () {
    this.initialize()
  },

  methods: {
    initialize () {
      Axios.get('/api/admin/roles')
      .then(response => {
        this.desserts = response.data.roles
        this.permissions = response.data.permissions
      })
    },

    editItem (item) {
      this.editedIndex = this.desserts.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialog = true
      this.getPermissions()
    },

    getPermissions() {
      Axios.get('/api/admin/roles/' + this.editedItem.id + '/getPermissions')
      .then(response => {
        this.rolePermissions  = response.data.permissions
      })
    },

    close () {
      this.dialog = false
      setTimeout(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      }, 300)
    },

    save () {
      Axios.post('/api/admin/roles/' + this.editedItem.id + '/async-role', { permissions: this.rolePermissions })
      .then(response => {
        this.desserts[this.editedIndex].permissions = response.data.permissions
        this.$store.dispatch('SHOW_GLOBAL_SNACKBAR', { text: response.data.message })
        this.close()
      })
    },

    saveRole() {
      Axios.post('/api/admin/roles', this.editedRole)
      .then(response => {
        this.desserts.push(response.data.role)
        this.$store.dispatch('SHOW_GLOBAL_SNACKBAR', { text: response.data.message })
        // Object.assign({}, this.defaultRole)
      })
      this.closeAddRoleDialog()
    },

    editRole(role) {
      this.addRoleDialog = true
    },

    closeAddRoleDialog() {
      this.addRoleDialog = false
    }
  },
}
</script>