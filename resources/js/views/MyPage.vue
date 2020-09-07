<template>
  <v-card>
    <v-card-title>
      <span class="headline"></span>
    </v-card-title>

    <v-card-text>
      <div>
        <v-row>
          <v-col cols="12" sm="4">
            <v-select
              v-model="editedItem.title"
              :items="titles"
              label="Title"
              :error-messages="errors.title"
            ></v-select>
          </v-col>
          <v-col cols="12" sm="8">
            <v-text-field
              v-model="editedItem.first_name"
              label="Name"
              :error-messages="errors.first_name"
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="8">
            <v-text-field
              v-model="editedItem.last_name"
              label="Name"
              :error-messages="errors.last_name"
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="8">
            <v-text-field
              v-model="editedItem.korean_name"
              label="Name"
              :error-messages="errors.korean_name"
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-text-field v-model="editedItem.email" label="Email"></v-text-field>
          </v-col>
          <v-col cols="12" sm="6">
            <v-text-field v-model="editedItem.password" type="password" label="Password"></v-text-field>
          </v-col>
          <v-col cols="12" sm="6">
            <v-text-field
              v-model="editedItem.password_confirmation"
              type="password"
              label="Password Confirm"
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="6">
            <v-text-field v-model="editedItem.position" label="Position"></v-text-field>
          </v-col>
          <v-col cols="12" sm="6">
            <v-text-field v-model="editedItem.mobile" label="Mobile"></v-text-field>
          </v-col>
          <v-col cols="12" sm="6">
            <v-text-field v-model="editedItem.phone" label="Phone"></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-switch
              v-model="editedItem.active"
              inset
              label="Active"
              true-value="1"
              false-value="0"
            ></v-switch>
          </v-col>
          <v-col cols="12">
            <v-file-input
              placeholder="Pick an avatar"
              prepend-icon="mdi-camera"
              label="Avatar"
              v-model="avatar"
            ></v-file-input>
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
</template>

<script>
export default {};
</script>