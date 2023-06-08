interface InsuranceCase {
  id: number,
  clientFirstName: string,
  clientLastName: string,
  agent: string,
  status: string,
  caseLocation: string,
  phoneNumber: string,
  caseDate: string,
  carMake: string,
  carModel: string,
  year: number,
  description: string,
  imgs: string[],
  amount: number

}

export default InsuranceCase