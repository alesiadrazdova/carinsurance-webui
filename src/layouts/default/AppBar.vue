<script lang="ts" setup>
import { useRouter } from 'vue-router'

const router = useRouter()
const handleTitleClick = () => {
  router.push('/')
}
</script>

<template>
  <v-app-bar flat color="primary">
    <v-app-bar-title @click="handleTitleClick">
      <v-icon icon="mdi-shield-car" />
      <span class="text-uppercase">Car insurance</span>
    </v-app-bar-title>
  </v-app-bar>
</template>
