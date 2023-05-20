<script lang="ts" setup>
import { ref } from 'vue'

  const username = ref('');
  const password = ref('');

  const submitForm = () => {
    console.log(username.value, password.value);
  }
</script>


<template>
  <v-sheet width="300" class="pt-16 mt-16 mx-auto">
    <h1 class="pb-6 text-center">Sign in</h1>
    <v-form @submit.prevent="submitForm()" >
      <v-text-field
        v-model="username"
        label="Name"
      ></v-text-field>
      <v-text-field
        v-model="password"
        label="Password"
      ></v-text-field>
      <div class="d-flex justify-center align-center">
        <v-btn rounded type="submit" class="mt-2 w-100" color="secondary">Sign in</v-btn>
      </div>
    </v-form>
  </v-sheet>
  <div class="pt-16 d-flex justify-center align-center">
    <img class="d-block mt-16 mx-auto w-50" src="../assets/images/car-insurance.jpg" alt="car-insurance-img"/>
  </div>
</template>
