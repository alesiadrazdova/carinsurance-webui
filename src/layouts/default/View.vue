<template>
  <v-main fill-height class="page-wrapper">
    <router-view />
  </v-main>
</template>

<script lang="ts" setup>
  //
</script>

<style scoped>
.page-wrapper {
  min-height: calc(100vh - 40px);
}
</style>
