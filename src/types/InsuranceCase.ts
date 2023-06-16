interface InsuranceCase {
  id: number,
  firstName: string,
  lastName: string,
  agent: string,
  status: string,
  phoneNumber: string,
  caseDate: string,
  carMake: string,
  carModel: string,
  carYear: number,
  accidentLocation: string,
  description: string,
  imgs: string[],
  amount: number

}

export default InsuranceCase