<script lang="ts" setup>
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'

  const username = ref('')
  const password = ref('')
  const router = useRouter()

  const submitForm = () => {
    console.log(username.value, password.value)
    username.value = ''
    password.value = ''
    router.push('/user')
  }

  const usernameRules = computed(() => [
    (    v: String) => !!v || 'Username is required',
  ])
  const passwordRules = computed(() => [
    (    v: Number) => !!v || 'Password is required',
  ])
</script>


<template>
  <v-sheet width="300" class="pt-16 mt-16 mx-auto">
    <h1 class="pb-6 text-center">Sign in</h1>
    <v-form @submit.prevent="submitForm()">
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
    <img class="d-block mt-16 mx-auto w-50" src="../assets/images/car-insurance.jpg" alt="car-insurance-img"/>
  </div>
</template>
