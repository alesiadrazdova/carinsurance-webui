<script lang="ts">
import { defineComponent, ref } from 'vue'
import InsuranceCase from '@/types/InsuranceCase'
import VueDatePicker from '@vuepic/vue-datepicker'
import '@vuepic/vue-datepicker/dist/main.css'

export default defineComponent({
  components: {
    VueDatePicker
  },
  props: {
    cases: {
      type: Array as () => InsuranceCase[],
      required: true
    }
  },
  setup() {
    const dialogVisible = ref(false)
    const date = ref(new Date())
    const user = ref({
      firstName: '',
      lastName: '',
      phoneNumber: '',
      email: '',
      policyNumber: '',
      endDatePolicy: '',
      carMake: '',
      carModel: '',
      carYear: null,
      VIN: '',
      registrationNumber: '',
      description: '',
      accidentLocation: '',
      dateAndTimeAccident: '',
      firstNameThirdParty: '',
      lastNameThirdParty: '',
      phoneNumberThirdParty: '',
      images: [],
    })

    const closeDialog = () => {
      dialogVisible.value = false
    }

    const submitForm = () => {
      // handing form data
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
      date
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
    <v-card class="pb-2">
      <v-card-title class="mt-6 text-center">
        <span class="text-h4 font-weight-bold text-indigo-darken-2">Insurance claim form</span>
      </v-card-title>
      <v-card-text>
        <v-container class="py-0">
          <v-row>
            <v-col cols="12">
              <span class="text-h6 font-weight-medium">Information about the insured</span>
            </v-col>
            <v-col
              cols="12"
              sm="6"
              md="4"
            >
              <v-text-field
                label="First name*"
                required
                v-model="user.firstName"
                prepend-inner-icon="mdi-account"
              ></v-text-field>
            </v-col>
            <v-col
              cols="12"
              sm="6"
              md="4"
            >
              <v-text-field
                label="Last name*"
                required
                v-model="user.lastName"
                prepend-inner-icon="mdi-account"
              ></v-text-field>
            </v-col>
            <v-col
              cols="12"
              sm="6"
              md="4"
            >
              <v-text-field
                label="Phone number"
                required
                v-model="user.phoneNumber"
                prepend-inner-icon="mdi-phone"
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
                prepend-inner-icon="mdi-email"
              ></v-text-field>
            </v-col>
            <v-col
              cols="12"
              sm="6"
              md="4"
            >
              <v-text-field
                label="Insurance policy number*"
                required
                v-model="user.policyNumber"
              ></v-text-field>
            </v-col>
            <v-col
              cols="12"
              sm="6"
              md="4"
            >
              <v-text-field
                label="Policy expiration date*"
                required
                v-model="user.endDatePolicy"
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <span class="text-h6 font-weight-medium">Vehicle Information</span>
            </v-col>
            <v-col
              cols="12"
              sm="6"
            >
              <v-text-field
                label="Car make*"
                required
                v-model="user.carMake"
                prepend-inner-icon="mdi-car"
              ></v-text-field>
            </v-col>
            <v-col
              cols="12"
              sm="6"
            >
              <v-text-field
                label="Car model*"
                required
                v-model="user.carModel"
                prepend-inner-icon="mdi-car"
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
                label="Registration number*"
                persistent-hint
                required
                v-model="user.registrationNumber"
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <span class="text-h6 font-weight-medium">Incident Information</span>
            </v-col>
            <v-col
              cols="12"
              sm="6"
              md="8"
            >
              <v-text-field
                prepend-inner-icon="mdi-map-marker"
                required
                label="Accident location*"
                v-model="user.accidentLocation"
              ></v-text-field>
            </v-col>
            <v-col
              cols="12"
              sm="6"
              md="4"
            >
              <vue-date-picker
                v-model="date"
                :style="{ '--dp-input-padding' : '15px 0', '--dp-input-icon-padding' : '47px' }"
                class="date-picker"
                required
              >
                  <template #input-icon>
                    <v-icon class="px-4">mdi-clock-time-eight</v-icon>
                  </template>
              </vue-date-picker>
            </v-col>
            <v-col cols="12">
              <v-textarea
                label="Damage Information*"
                type="text"
                aria-required
                v-model="user.description"
                prepend-inner-icon="mdi-pencil"
              ></v-textarea>
            </v-col>
            <v-col cols="12">
              <v-file-input
                show-size
                counter
                multiple
                label="File input"
                variant="filled"
                prepend-inner-icon="mdi-camera"
                v-model="user.images"
              ></v-file-input>
            </v-col>
            <v-col cols="12">
              <span class="text-h6 font-weight-medium">Third Party Information</span>
            </v-col>
            <v-col
              cols="12"
              sm="6"
              md="4"
            >
              <v-text-field
                label="First name*"
                v-model="user.firstNameThirdParty"
                prepend-inner-icon="mdi-account"
              ></v-text-field>
            </v-col>
            <v-col
              cols="12"
              sm="6"
              md="4"
            >
              <v-text-field
                label="Last name*"
                v-model="user.lastNameThirdParty"
                prepend-inner-icon="mdi-account"
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
                v-model="user.phoneNumberThirdParty"
                prepend-inner-icon="mdi-phone"
              ></v-text-field>
            </v-col>
          </v-row>
        </v-container>
        <v-col cols="12">
          <small>*I hereby declare that the information I have provided in this claim form is true,
            complete, and correct to the best of my knowledge and belief. I understand that any misrepresentation,
            falsification, or omission of information may result in denial of my claim.
          </small>
        </v-col>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          color="blue-darken-1"
          variant="outlined"
          @click="closeDialog"
        >
          Close
        </v-btn>
        <v-btn
          color="primary"
          variant="flat"
          @click="submitForm"
        >
          Save
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<style scoped lang="scss">
.date-picker {
  border-bottom: 1px solid #A5A5A5;
}
.dp__theme_light {
  --dp-border-color: none;
  --dp-border-color-hover: none;
  --dp-background-color: #F6F6F6;
  --db-background-color-hover: #EDEDED;
}
</style>
