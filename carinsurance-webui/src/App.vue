<template>
  <v-sheet width="300" class="mt-16 mx-auto">
    <v-form @submit.prevent>
      <v-text-field
        v-model="firstName"
        :rules="rules"
        label="Name"
      ></v-text-field>
      <v-text-field
        v-model="firstName"
        :rules="rules"
        label="Password"
      ></v-text-field>
      <v-btn type="submit" block class="mt-2" color="secondary">Submit</v-btn>
    </v-form>
  </v-sheet>
</template>

<script setup>
</script>
