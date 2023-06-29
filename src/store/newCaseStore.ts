import { defineStore } from 'pinia'
import { INewCase } from '@/types/INewCase'
import { apiService } from '@/apis/apiService'

export const useNewCaseStore = defineStore('newCase', {
  state: (): INewCase => ({
    dialogVisible: false,
    insuranceExpiryDate: new Date(),
    incidentDate: new Date(),
    licenseExpiration: new Date(),
    user: {
      phoneNumber: '',
      email: '',
      insuranceCompany: '',
      carMake: '',
      carModel: '',
      carYear: null,
      VIN: '',
      odometer: null,
      licensePlate: '',
      description: '',
      address: '',
      zip: '',
      state: '',
      city: '',
      licenseState: '',
      licenseExpiration: '',
      impactDirections: [],
      typeOfPhone: '',
      typeOfAddress: '',
      images: [],
    },
  }),


  actions: {
    closeDialog() {
      this.dialogVisible = false
    },

    async submitForm() {
      const tokenCookie = document.cookie
        .split('; ')
        .find(row => row.startsWith('token='))

      const token = tokenCookie ? tokenCookie.split('=')[1] : undefined
      console.log(`Bearer ${token}`)

      if (token) {
        const formData = new FormData()
        formData.append('vehicleInformation', JSON.stringify({
          vin: this.user.VIN,
          year: this.user.carYear,
          makeIn: this.user.carMake,
          model: this.user.carModel,
          licensePart: this.user.licensePlate,
          licenseState: this.user.licenseState,
          licenseExpiration: this.licenseExpiration,
          odometerValue: this.user.odometer,
        }))
        formData.append('vehicleCondition', JSON.stringify({
          impactDirections: this.user.impactDirections,
        }))

        for (const file of this.user.images) {
          formData.append('photos', file)
        }

        formData.append('contacts', JSON.stringify([
          {
            typeOfContact: {
              nameOfType: 'Vehicle_owner',
            },
            email: this.user.email,
            phones: [
              {
                number: this.user.phoneNumber,
                typeOfPhone: this.user.typeOfPhone,
              },
            ],
            addresses: [
              {
                city: this.user.city,
                state: this.user.state,
                zip: this.user.zip,
                addressLine: this.user.address,
                typeOfAddress: this.user.typeOfAddress,
              },
            ],
          },
        ]))
        formData.append('assignmentNote', this.user.description)
        formData.append('dateOfIncident', this.incidentDate.toISOString().split('T')[0])

        try {
          const response = await apiService.postCase(formData, token)

          if (response.ok) {
            const data = await response.json()
            console.log(data)
            this.closeDialog()
          } else {
            throw new Error('Error occurred during the request')
          }
        } catch (error) {
          console.error(error)
        }
      } else {
        console.error('Куки "token" не найдены или не содержат значение.')
      }
    },
    clearForm() {
      this.dialogVisible = false
      this.insuranceExpiryDate = new Date()
      this.incidentDate = new Date()
      this.licenseExpiration = new Date()
      this.user = {
        phoneNumber: '',
        email: '',
        insuranceCompany: '',
        carMake: '',
        carModel: '',
        carYear: null,
        VIN: '',
        odometer: null,
        licensePlate: '',
        description: '',
        address: '',
        zip: '',
        state: '',
        city: '',
        licenseState: '',
        licenseExpiration: '',
        impactDirections: [],
        typeOfPhone: '',
        typeOfAddress: '',
        images: [],
      }
    }
  },
})
