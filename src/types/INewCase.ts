export interface IContact {
  typeOfContact: {
    nameOfType: string
  }
  email: string
  phones: {
    number: string
    typeOfPhone: string
  }[]
  addresses: {
    city: string
    state: string
    zip: string
    addressLine: string
    typeOfAddress: string
  }[]
}

export interface IVehicleInformation {
  vin: string
  year: number | null
  makeIn: string
  model: string
  licensePart: string
  licenseState: string
  licenseExpiration: string
  odometerValue: number | null
}

export interface IVehicleCondition {
  impactDirections: string[]
}

export interface INewCase {
  dialogVisible: boolean
  insuranceExpiryDate: Date
  incidentDate: Date
  licenseExpiration: Date
  user: {
    phoneNumber: string
    email: string
    insuranceCompany: string
    carMake: string
    carModel: string
    carYear: number | null
    VIN: string
    odometer: number | null
    licensePlate: string
    description: string
    address: string
    zip: string
    state: string
    city: string
    licenseState: string
    licenseExpiration: string
    impactDirections: string[]
    typeOfPhone: string
    typeOfAddress: string
    images: File[]
  }
}
