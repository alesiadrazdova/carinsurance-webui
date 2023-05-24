<template>
  <v-main fill-height class="wrapper">
    <router-view />
  </v-main>
</template>

<script lang="ts" setup>
  //
</script>

<style scoped>
.wrapper {
  min-height: calc(100dvh - 40px);
}
</style>
