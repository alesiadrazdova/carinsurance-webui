<script lang="ts">
import { defineComponent, ref } from 'vue'
import CaseInsurance from '@/types/CaseInsurance'

export default defineComponent({
  props: {
    cases: {
      type: Array as () => CaseInsurance[],
      required: true
    }
  },
  setup(props) {
    // const date = ref((new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10))
    // const menu = ref(false)
    const dialogVisible = ref(false)
    const user = ref({
      firstName: '',
      lastName: '',
      carMake: '',
      carModel: '',
      carYear: null,
      description: '',
      phoneNumber: '',
      email: '',
      accidentLocation: '',
      interests: [],
    })

    const closeDialog = () => {
      dialogVisible.value = false
    }

    const submitForm = () => {
      // обработка данных формы
      closeDialog()
    }

    const openCreateCaseDialog = () => {
      dialogVisible.value = true
    }

    return {
      dialogVisible,
      user,
      closeDialog,
      submitForm,
      openCreateCaseDialog,
    }
  }
})
</script>

<template>
  <v-dialog
    v-model="dialogVisible"
    persistent
    width="1024"
  >
    <template v-slot:activator="{ props }">
      <v-btn
        color="secondary"
        v-bind="props"
        rounded
        size="large"
      >
      Create new claim
      </v-btn>
    </template>
    <v-card>
      <v-card-title>
        <span class="text-h5">User Profile</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col
              cols="12"
              sm="6"
              md="4"
            >
              <v-text-field
                label="First name*"
                required
                v-model="user.firstName"
              ></v-text-field>
            </v-col>
            <v-col
              cols="12"
              sm="6"
              md="4"
            >
              <v-text-field
                label="Last name*"
                persistent-hint
                required
                v-model="user.lastName"
              ></v-text-field>
            </v-col>
            <v-col
              cols="12"
              sm="6"
              md="4"
            >
              <v-text-field
                label="VIN*"
                persistent-hint
                required
                v-model="user.VIN"
              ></v-text-field>
            </v-col>
            <v-col
              cols="12"
              sm="6"
              md="4"
            >
              <v-text-field
                label="Car make*"
                hint="example of helper text only on focus"
                v-model="user.carMake"
              ></v-text-field>
            </v-col>
            <v-col
              cols="12"
              sm="6"
              md="4"
            >
              <v-text-field
                label="Car model*"
                required
                v-model="user.carModel"
              ></v-text-field>
            </v-col>
            <v-col
              cols="12"
              sm="6"
              md="4"
            >
              <v-text-field
                label="Car year*"
                persistent-hint
                required
                v-model="user.carYear"
              ></v-text-field>
            </v-col>
            <v-col
              cols="12"
              sm="6"
              md="4"
            >
              <v-text-field
                label="Accident location*"
                hint="example of helper text only on focus"
                v-model="user.accidentLocation"
              ></v-text-field>
            </v-col>
            <v-col
              cols="12"
              sm="6"
              md="4"
            >
              <v-text-field
                label="Phone number"
                hint="example of helper text only on focus"
                v-model="user.phoneNumber"
              ></v-text-field>
            </v-col>
            <v-col
              cols="12"
              sm="6"
              md="4"
            >
              <v-text-field
                label="Email*"
                required
                v-model="user.email"
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-textarea
                label="Description*"
                type="text"
                aria-required
                v-model="user.description"
              ></v-textarea>
            </v-col>
            <v-col
              cols="12"
              sm="6"
            >
              <v-select
                :items="['0-17', '18-29', '30-54', '54+']"
                label="Age*"
                required
                v-model="user.age"
              ></v-select>
            </v-col>
            <v-col cols="6">
              <v-file-input
                label="File input"
                variant="filled"
                prepend-inner-icon="mdi-camera"
              ></v-file-input>
            </v-col>
            <v-col
              cols="12"
              sm="6"
            >
              <v-autocomplete
                :items="['Skiing', 'Ice hockey', 'Soccer', 'Basketball', 'Hockey', 'Reading', 'Writing', 'Coding', 'Basejump']"
                label="Interests"
                multiple
                v-model="user.interests"
              ></v-autocomplete>
            </v-col>
          </v-row>
        </v-container>
        <small>*indicates required field</small>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          color="blue-darken-1"
          variant="text"
          @click="closeDialog"
        >
          Close
        </v-btn>
        <v-btn
          color="blue-darken-1"
          variant="text"
          @click="submitForm"
        >
          Save
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

