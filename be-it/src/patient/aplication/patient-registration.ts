import { PatientDTO } from "../domain/patient-dto";
import { PatientNotifierInterface } from "../domain/patient-notifier";
import { PatientRepositoryInterface } from "../domain/patient-repository";
import createError from "http-errors"
export class PatientRegistration {
    constructor(
      private notifier: PatientNotifierInterface,
      private patientRepository: PatientRepositoryInterface) {
    }
  
    async execute(patient: PatientDTO): Promise<PatientDTO> {
      this.validate(patient);
      const patientStored = await this.patientRepository.create(patient);
      await this.notifier.execute(patientStored)
      return patientStored
    }

    async validate(patient: PatientDTO) {
      this.validateEmail(patient);
      this.validateName(patient);
      this.validateNumber(patient);
    }

    private validateEmail(patient: PatientDTO) {
        const domain = patient.email.split('@')[1];
        if ('gmail.com' !== domain) {
            
          throw new createError.BadRequest(`the patient mail isn't a gmail :${patient.email}`)
        }
      }
  
      private validateName(patient: PatientDTO) {
        const containsNumber = Array.from(patient.name).some(char => !isNaN( Number(char)));
        if (containsNumber) {
            throw new createError.BadRequest (`the patient name contains at least with 1 number :${patient.name}`);
        }
      }
  
      private validateNumber(patient: PatientDTO) {
        if (!patient.phoneNumber) {
            throw new createError.BadRequest(`the patient doesn't contains phone number :${patient.name}`);
        }
        const isInvalidCharacteristic =isNaN(patient.phoneNumber.countryCharacteristic)
        const isInvalidNUmber = isNaN(patient.phoneNumber.number)
       
        if (isInvalidCharacteristic) {
            throw new createError.BadRequest( `the patient phone characteristic :${patient.phoneNumber.countryCharacteristic}`);
        }
        if (isInvalidNUmber) {
            throw new createError.BadRequest(`the patient phone number :${patient.phoneNumber.number}`);
        }
      }
  }