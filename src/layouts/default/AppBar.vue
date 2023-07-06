<script lang="ts" setup>
import { useLoginStore } from '@/store/loginStore'

const loginStore = useLoginStore()
const initials = () => `${loginStore.firstName[0]}${loginStore.lastName[0]}`
</script>

<template>
  <v-app-bar flat color="primary">
    <v-app-bar-title>
      <v-icon icon="mdi-shield-car" />
      <span class="text-uppercase">Car insurance</span>
    </v-app-bar-title>
    <div v-if="loginStore.isAuthenticated" class="pr-6">
      <v-avatar color="white"  class="mr-4">
        <span class="text-subtitle-1 font-weight-bold text-indigo-darken-4">{{ initials() }}</span>
      </v-avatar>
        <span  class="mr-4">{{ loginStore.firstName }} {{ loginStore.lastName }}</span>
      <v-btn
        @click="loginStore.logout()"
        variant="outlined"
        rounded
      >Logout</v-btn>
    </div>
  </v-app-bar>
</template>
