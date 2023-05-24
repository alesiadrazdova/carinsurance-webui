<template>
  <v-app>
    <bar />

      <app-view />

    <app-footer />
  </v-app>
</template>

<script lang="ts" setup>
  import Bar from './AppBar.vue'
  import AppView from './View.vue'
  import AppFooter from './AppFooter.vue'
</script>
