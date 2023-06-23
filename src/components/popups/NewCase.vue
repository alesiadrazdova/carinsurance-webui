<script lang="ts" setup>
import { ref } from 'vue'
import VueDatePicker from '@vuepic/vue-datepicker'
import '@vuepic/vue-datepicker/dist/main.css'

const dialogVisible = ref(false)
// temporary mock data
const insuranceExpiryDate = ref(new Date())
const incidentDate = ref(new Date())
const licenseExpiration = ref(new Date())
const user = ref({
  phoneNumber: '',
  email: '',
  insuranceCompany: '',
  carMake: '',
  carModel: '',
  carYear: null,
  VIN: '',
  odometer: '',
  licensePlate: '',
  description: '',
  address: '',
  zip: '',
  state: '',
  city: '',
  licenseState: '',
  licenseExpiration: '',
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
        Create new case
      </v-btn>
    </template>
    <v-card class="pb-2">
      <v-card-title class="mt-6 text-center">
        <h2 class="text-indigo-darken-2">Insurance case form</h2>
      </v-card-title>
      <v-card-text>
        <v-container class="py-0">
          <v-row>
            <v-col cols="12">
              <span class="text-h6 font-weight-medium">Contacts</span>
            </v-col>
            <v-col cols="12" sm="6" md="4">
              <v-text-field
                label="Email"
                v-model="user.email"
                prepend-inner-icon="mdi-email"
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="4">
              <v-select
                label="Select type of phone"
                :items="['Home', 'Business', 'Mobile', 'Fax', 'Other']"
              ></v-select>
            </v-col>
            <v-col cols="12" sm="6" md="4">
              <v-text-field
                required
                v-model="user.phoneNumber"
                prepend-inner-icon="mdi-phone"
              >
                <template v-slot:label>
                  <span class="required">Phone number</span>
                </template>
              </v-text-field>
            </v-col>
            <v-col cols="12" sm="8">
              <v-select
                label="Select Insurance company"
                prepend-inner-icon="mdi-shield-car"
                :items="['Company1', 'Company2', 'Company3']"
              ></v-select>
            </v-col>
            <v-col cols="12" sm="4">
              <vue-date-picker
              v-model="insuranceExpiryDate"
              :style="{ '--dp-input-padding' : '15px 0', '--dp-input-icon-padding' : '47px' }"
              class="date-picker"
              required
              :enable-time-picker="false"
              >
              <template #input-icon>
                <v-icon class="px-4">mdi-clock-time-eight</v-icon>
              </template>
            </vue-date-picker>
            <p class="text-caption text-grey-darken-1">Select insurance expiry date</p>
            </v-col>
            <v-col cols="12" sm="6" md="4">
              <v-select
                label="Select type of address"
                prepend-inner-icon="mdi-home"
                :items="['Home', 'Work', 'Mailing', 'Other']"
              ></v-select>
            </v-col>
            <v-col cols="12" sm="6" md="4">
              <v-text-field
                required
                v-model="user.zip"
              >
                <template v-slot:label>
                  <span class="required">Zip</span>
                </template>
              </v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="4">
              <v-text-field
                prepend-inner-icon="mdi-map-marker"
                required
                v-model="user.state"
              >
                <template v-slot:label>
                  <span class="required">State</span>
                </template>
              </v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="4">
              <v-text-field
                prepend-inner-icon="mdi-map-marker"
                required
                v-model="user.city"
              >
                <template v-slot:label>
                  <span class="required">City</span>
                </template>
              </v-text-field>
            </v-col>
            <v-col cols="12" sm="8">
              <v-text-field
                prepend-inner-icon="mdi-map-marker"
                required
                v-model="user.address"
              >
                <template v-slot:label>
                  <span class="required">Address</span>
                </template>
              </v-text-field>
            </v-col>
            <v-col cols="12">
              <v-textarea
                label="Incident Information"
                type="text"
                aria-required
                v-model="user.description"
                prepend-inner-icon="mdi-pencil"
              >
                <template v-slot:label>
                  <span class="required">Incident information</span>
                </template>
              </v-textarea>
            </v-col>
            <v-col cols="12">
              <span class="text-h6 font-weight-medium">Vehicle information</span>
            </v-col>
            <v-col cols="12" sm="6">
              <v-text-field
                required
                v-model="user.carMake"
                prepend-inner-icon="mdi-car-info"
              >
                <template v-slot:label>
                  <span class="required">Car make</span>
                </template>
              </v-text-field>
            </v-col>
            <v-col cols="12" sm="6">
              <v-text-field
                required
                v-model="user.carModel"
                prepend-inner-icon="mdi-car-info"
              >
                <template v-slot:label>
                  <span class="required">Car model</span>
                </template>
              </v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="4">
              <v-text-field
                persistent-hint
                required
                v-model="user.carYear"
              >
                <template v-slot:label>
                  <span class="required">Car year</span>
                </template>
              </v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="4">
              <v-text-field
                persistent-hint
                required
                v-model="user.VIN"
              >
                <template v-slot:label>
                  <span class="required">VIN</span>
                </template>
              </v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="4">
              <v-text-field
                persistent-hint
                required
                v-model="user.odometer"
              >
                <template v-slot:label>
                  <span class="required">Odometer Value</span>
                </template>
              </v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="4">
              <v-text-field
                persistent-hint
                required
                v-model="user.licensePlate"
              >
                <template v-slot:label>
                  <span class="required">License Plate</span>
                </template>
              </v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="4">
              <v-text-field
                persistent-hint
                required
                v-model="user.licenseState"
              >
                <template v-slot:label>
                  <span class="required">License State</span>
                </template>
              </v-text-field>
            </v-col>
            <v-col cols="12" sm="4">
              <vue-date-picker
                v-model="licenseExpiration"
                :style="{ '--dp-input-padding' : '15px 0', '--dp-input-icon-padding' : '47px' }"
                class="date-picker"
                required
                :enable-time-picker="false"
              >
              <template #input-icon>
                <v-icon class="px-4">mdi-clock-time-eight</v-icon>
              </template>
            </vue-date-picker>
            <p class="text-caption text-grey-darken-1">License expiration</p>
            </v-col>
            <v-col cols="12">
              <span class="text-h6 font-weight-medium">Vehicle condition</span>
            </v-col>
            <v-col cols="12" sm="6">
              <vue-date-picker
                v-model="incidentDate"
                :style="{ '--dp-input-padding' : '15px 0', '--dp-input-icon-padding' : '47px' }"
                class="date-picker"
                required
              >
                  <template #input-icon>
                    <v-icon class="px-4">mdi-clock-time-eight</v-icon>
                  </template>
              </vue-date-picker>
              <p class="text-caption text-grey-darken-1">Select incident date</p>
            </v-col>
            <v-col cols="12" sm="6">
              <v-select
                label="Select direction of an impact"
                prepend-inner-icon="mdi-car-wrench"
                :items="['Front', 'Front right', 'Right side', 'Right quarter panel', 'Right rear', 'Rear', 'Front left', 'Left side', 'Left quarter panel', 'Left rear']"
              ></v-select>
            </v-col>
            <v-col  cols="12">
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
.required::after {
  content: "*";
  color: red;
  margin-left: 5px;
}
</style>
