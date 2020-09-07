<template>
  <v-card class="mb-3" flat outlined>
    <v-card-title>
      <h4>EXTRA FIELDS</h4>
      <v-spacer></v-spacer>
      <!-- Items Dialog -->
      <v-dialog v-model="fieldDialog" max-width="980">
        <template v-slot:activator="{ on }">
          <v-btn color="pink" outlined text v-on="on" :disabled="isButtonDisabled">ADD EXTRA FILED</v-btn>
        </template>
        <v-card>
          <v-toolbar flat dark color="primary" class="mb-3">
            <v-toolbar-title>ADD EXTRA FILED</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items>
              <v-icon @click="closeFieldDialog">mdi-close</v-icon>
            </v-toolbar-items>
          </v-toolbar>
          <v-card-text>
            <v-form v-model="valid">
              <v-container>
                <v-row>
                  <!-- Item Name -->
                  <v-col cols="12" sm="6">
                    <v-text-field
                      v-model="field.title"
                      label="Extra Field Title"
                      required
                      :rules="[required('Title'), maxLength('Title', 50)]"
                    ></v-text-field>
                  </v-col>

                  <!-- Item Size -->
                  <v-col cols="12" sm="6">
                    <v-text-field
                      v-model="field.content"
                      label="Extra Field Content"
                      required
                      :rules="[required('Content'), maxLength('Content', 255)]"
                    ></v-text-field>
                  </v-col>
                  <!-- Item Unit -->
                  <v-col cols="12" sm="6">
                    <v-select
                      v-model="field.position"
                      item-text="name"
                      item-value="name"
                      :items="positions"
                      label="Extra Field Position"
                      required
                      :rules="[required('Position')]"
                    ></v-select>
                  </v-col>
                </v-row>
              </v-container>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" text @click="saveField()" :disabled="!valid">Save</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-card-title>
    <v-divider></v-divider>
    <v-card-text class="wrap-component-table">
      <v-simple-table class="ies-purchase-order-content-dialog-table">
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-center">No.</th>
              <th class="text-center">Title</th>
              <th class="text-center">Content</th>
              <th class="text-center">Position</th>
              <th class="text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(fields, index) in fields" :key="index">
              <td class="text-center">{{ index+1 }}</td>
              <td>{{ fields.title }}</td>
              <td>{{ fields.content }}</td>
              <td class="text-center">{{ fields.position }}</td>
              <td class="d-flex justify-center align-center text-center">
                <span class="d-block mr-1">
                  <v-btn
                    fab
                    depressed
                    x-small
                    color="blue-grey"
                    elevation
                    @click.prevent="removeField(field)"
                    :disabled="isButtonDisabled"
                  >
                    <v-icon dark color="white">mdi-minus</v-icon>
                  </v-btn>
                </span>
                <span class="d-block">
                  <v-btn
                    fab
                    depressed
                    x-small
                    color="primary"
                    elevation
                    @click.prevent="editField(field)"
                    :disabled="isButtonDisabled"
                  >
                    <v-icon dark color="white">mdi-pencil</v-icon>
                  </v-btn>
                </span>
              </td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-card-text>
  </v-card>
</template>


<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
export default {
  props: [
    "model",
    "currentMode",
    "currentStatus",
    "permissions",
    "editPermission"
  ],
  data: () => ({
    fieldDialog: false,
    editedFieldIndex: -1,
    positions: ["Attention Info Table", "Originator Info Table", "New Table"],
    valid: false,
    required(propertyType) {
      return v => !!v || `You must input a ${propertyType}`;
    },
    maxLength(propertyType, maxLength) {
      return v =>
        (v && v.length <= maxLength) ||
        `${propertyType} must be less than ${maxLength} characters`;
    },
    minLength(propertyType, minLength) {
      return v =>
        (v && v.length >= minLength) ||
        `${propertyType} must be at least ${minLength} characters`;
    }
  }),

  computed: {
    isButtonDisabled() {
      if (
        this.currentStatus === "OPENED" &&
        this.permissions.includes(this.editPermission) &&
        (this.currentMode === "edit" || this.currentMode === "create")
      ) {
        return false;
      } else {
        return true;
      }
    },

    ...mapState("fields", ["fields", "field"])
  },

  methods: {
    ...mapMutations("fields", [
      "ADD_FIELD",
      "RESET_FIELD",
      "REMOVE_FIELD",
      "EDIT_FIELD",
      "UPDATE_FIELD"
    ]),

    closeFieldDialog() {
      this.fieldDialog = false;
      setTimeout(() => {
        this.RESET_FIELD();
      }, 300);
      this.editedFieldIndex = -1;
    },

    saveField() {
      if (this.editedFieldIndex > -1) {
        this.UPDATE_FIELD(this.editedFieldIndex);
      } else {
        this.ADD_FIELD();
      }
      this.closeFieldDialog();
    },

    editField(field) {
      this.editedFieldIndex = this.fields.indexOf(field);
      this.EDIT_FIELD(field);
      this.fieldDialog = true;
    },

    removeField(field) {
      this.REMOVE_FIELD(field);
    }
  }
};
</script>
