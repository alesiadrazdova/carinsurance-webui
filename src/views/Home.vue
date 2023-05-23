<script lang="ts" setup>
import { computed, ref } from 'vue'

  const username = ref('')
  const password = ref('')

  const usernameRules = computed(() => [
    (    v: String) => !!v || 'Username is required',
  ])
  const passwordRules = computed(() => [
    (    v: Number) => !!v || 'Password is required',
  ])
</script>

<template>
  <v-sheet width="300" class="pt-0 pt-md-16 mt-16 mx-auto">
    <h1 class="pb-6 text-center">Sign in</h1>
    <v-form @submit.prevent>
      <v-text-field
        v-model="username"
        label="Name"
        required
        :rules="usernameRules"
      ></v-text-field>
      <v-text-field
        v-model="password"
        label="Password"
        required
        :rules="passwordRules"
      ></v-text-field>
      <div class="d-flex justify-center align-center">
        <v-btn rounded type="submit" class="mt-2 w-100" color="secondary">Sign in</v-btn>
      </div>
    </v-form>
  </v-sheet>
  <div class="pt-16 d-flex justify-center align-center">
    <img class="d-block mx-auto" :class="['w-50', { 'w-75': $vuetify.display.xs}]" src="../assets/images/car-insurance.svg" alt="car-insurance-img"/>
  </div>
</template>
