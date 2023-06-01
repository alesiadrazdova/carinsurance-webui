<script lang="ts" setup>
import { API_URLS } from '@/apiUrls';
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'

const login = ref('')
const password = ref('')
const errorMessage = ref('')
const router = useRouter()

const submitForm = async () => {
  if (!login.value || !password.value) {
    return
  }
  try {
    const response = await fetch(API_URLS.LOGIN, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        login: login.value,
        password: password.value
      }),
      // credentials: 'include'
    });

    if (response.status === 200) {
      const data = await response.json()
      localStorage.setItem('token', data.token)   // TODO: this awaits implementation on the server side. Should be rewritten to cookies.
      errorMessage.value = login.value = password.value = ''
      router.push('/user')
    } else if (response.status === 401) {
      const errorData = await response.json()
      errorMessage.value = 'Error logging in. Please try again.'
    } else {
      console.error(`Unexpected error, status: ${response.status}`)
    }
  } catch (error) {
    console.error('Network or request error', error)
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
      <p v-if="errorMessage" class="pb-2 text-error">{{ errorMessage }}</p>
      <div class="d-flex justify-center align-center">
        <v-btn rounded type="submit" class="mt-2 w-100" color="secondary">Sign in</v-btn>
      </div>
    </v-form>
  </v-sheet>
  <div class="pt-16 d-flex justify-center align-center">
    <img class="d-block mx-auto" :class="['w-50', { 'w-75': $vuetify.display.xs}]" src="../assets/images/car-insurance.svg" alt="car-insurance-img"/>
  </div>
</template>
