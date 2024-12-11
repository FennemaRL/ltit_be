import { PatientDTO } from "../domain/patient-dto";
import { PatientRepositoryInterface } from "../domain/patient-repository";
import PatientModel from "./patient-model";

export class PatientRepository implements PatientRepositoryInterface{
  public async create(patient: PatientDTO): Promise<PatientDTO> {
    const {phoneNumber, ...patientPatialBody} = patient;
    const concatNumber = `${phoneNumber.countryCharacteristic}-${phoneNumber.number}`;
    await PatientModel.create({...patientPatialBody, phone:concatNumber });
    return patient;
  }
}
