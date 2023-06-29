<script lang="ts" setup>
import { ref } from 'vue'
import { useLoginStore } from '@/store/loginStore'

const visible = ref(false)
const rules = ref({
  required: ( value: String ) => !!value || 'Required.',
  min: ( v: String ) => v.length >= 5 || 'Min 5 characters'
})

const loginStore = useLoginStore()

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
        name="login"
        hint="At least 5 characters"
        required
        :rules="[rules.required, rules.min]"
      ></v-text-field>
      <v-text-field
        v-model="loginStore.password"
        :append-inner-icon="visible ? 'mdi-eye' : 'mdi-eye-off'"
        :rules="[rules.required, rules.min]"
        :type="visible ? 'text' : 'password'"
        prepend-inner-icon="mdi-lock-outline"
        name="password"
        label="Password"
        hint="At least 5 characters"
        required
        counter
        @click:append-inner="visible = !visible"
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
  <v-snackbar
    v-model="loginStore.snackbar"
    color="red-lighten-1"
    :timeout="3000"
  >
    Error logging in. Please try again.
    <template v-slot:actions>
      <v-btn
        color="white"
        variant="text"
        @click="loginStore.snackbar = false"
      >
        Close
      </v-btn>
    </template>
  </v-snackbar>
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
