<script lang="ts" setup>
import { computed } from 'vue'
import { useLoginStore } from '@/store/loginStore'

const loginStore = useLoginStore()

const loginRules = computed(() => [
  ( v: String ) => !!v || 'Login is required',
])
const passwordRules = computed(() => [
  ( v: String ) => !!v || 'Password is required',
])
</script>

<template>
  <div class="loader-container" v-if="loginStore.isLoading">
    <v-progress-circular
        indeterminate
        color="primary"
        size="64"
    ></v-progress-circular>
  </div>
  <v-sheet width="300" class="pt-0 pt-md-16 mt-16 mx-auto">
    <h1 class="pb-6 text-center">Sign in</h1>
    <v-form @submit.prevent="loginStore.submitForm">
      <v-text-field
        v-model="loginStore.login"
        label="Login"
        required
        :rules="loginRules"
      ></v-text-field>
      <v-text-field
        v-model="loginStore.password"
        label="Password"
        required
        :rules="passwordRules"
      ></v-text-field>
      <p v-if="loginStore.errorMessage" class="pb-2 text-error">{{ loginStore.errorMessage }}</p>
      <div class="d-flex justify-center align-center">
        <v-btn rounded size="large" type="submit" class="mt-2 w-100" color="secondary">Sign in</v-btn>
      </div>
    </v-form>
  </v-sheet>
  <div class="pt-16 d-flex justify-center align-center">
    <img class="d-block mx-auto" :class="['w-50', { 'w-75': $vuetify.display.xs}]" src="../assets/images/car-insurance.svg" alt="car-insurance-img"/>
  </div>
</template>

<style>
.loader-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.8);
  z-index: 1;
}
</style>
