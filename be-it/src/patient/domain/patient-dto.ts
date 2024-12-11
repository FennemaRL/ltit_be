export interface PatientDTO {
    name: string,
    email:string,
    address:string,
    phoneNumber:  {
        countryCharacteristic: number,
        number: number
    },
    photoIdentityDocument: string
}