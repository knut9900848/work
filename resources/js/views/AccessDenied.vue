<template>
  <v-card>
    <v-card-title>Access Denied</v-card-title>
    <v-card-text>
      You do not have permission to access this page, Please refer to IES system administrator.
    </v-card-text>
    <v-card-actions>
      <v-btn color="primary" router :to="{ name: 'welcome' }">Home</v-btn>
    </v-card-actions>
  </v-card>
</template>