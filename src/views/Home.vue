<script lang="ts" setup>
import { API_URLS } from '@/apiUrls';
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'

const login = ref('')
const password = ref('')
const error = ref('')
const router = useRouter()

const submitForm = async () => {
  if (!login.value || !password.value) {
    return
  }

  const response = await fetch(API_URLS.LOGIN, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      login: login.value,
      password: password.value
    })
  })

  if (response.ok) {
    const data = await response.json()
    if(data.message) {
      error.value = 'Error logging in. Please try again.'
    } else {
      console.log(data)
      sessionStorage.setItem('token', data.token)
      error.value = login.value = password.value = ''
      router.push('/user')
    }
  }
}

const loginRules = computed(() => [
  ( v: String ) => !!v || 'Login is required',
])
const passwordRules = computed(() => [
  ( v: String ) => !!v || 'Password is required',
])
</script>

<template>
  <v-sheet width="300" class="pt-0 pt-md-16 mt-16 mx-auto">
    <h1 class="pb-6 text-center">Sign in</h1>
    <v-form @submit.prevent="submitForm">
      <v-text-field
        v-model="login"
        label="Login"
        required
        :rules="loginRules"
      ></v-text-field>
      <v-text-field
        v-model="password"
        label="Password"
        required
        :rules="passwordRules"
      ></v-text-field>
      <p v-if="error" class="pb-2 text-error">{{ error }}</p>
      <div class="d-flex justify-center align-center">
        <v-btn rounded type="submit" class="mt-2 w-100" color="secondary">Sign in</v-btn>
      </div>
    </v-form>
  </v-sheet>
  <div class="pt-16 d-flex justify-center align-center">
    <img class="d-block mx-auto" :class="['w-50', { 'w-75': $vuetify.display.xs}]" src="../assets/images/car-insurance.svg" alt="car-insurance-img"/>
  </div>
</template>
