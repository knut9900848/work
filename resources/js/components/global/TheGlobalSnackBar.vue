<template>
  <v-snackbar
    v-model="$store.state.globalSnackBar.showing"
    :timeout="8000"
    :color="$store.state.globalSnackBar.color"
    class="text-center"
  >
    {{ $store.state.globalSnackBar.text }}
    <v-btn text @click="$store.state.globalSnackBar.showing = false">
      <v-icon>mdi-window-close</v-icon>
    </v-btn>
  </v-snackbar>
</template>