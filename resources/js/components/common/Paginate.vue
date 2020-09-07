<template>
  <div class="text-center">
    <v-pagination v-model="currentPage" :length="lastPage" :total-visible="5"></v-pagination>
  </div>
</template>

<script>
export default {
  props: ["serverCurrentPage", "serverLastPage"],
  computed: {
    currentPage: {
      get() {
        return this.serverCurrentPage;
      }
    },

    lastPage: {
      get() {
        return this.serverLastPage;
      }
    }
  }
};
</script>