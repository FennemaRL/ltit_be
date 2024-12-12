import { Model } from "sequelize";
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

  public async findAll(): Promise<Array<PatientDTO>> {
    const patientList = await PatientModel.findAll();
    return patientList.map(patient =>this.mapModelToPatientDTO(patient));
  }

  private mapModelToPatientDTO(model:any ): PatientDTO {
    const imageUrl = 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Biometric_Argentine_DNI_for_Citizens-Foreigners.png';

    const [ccharacteristic,number]= model.phone.split("-");
    return {
      name: model.name,
      email: model.email,
      address: model.address,
      phoneNumber: {
        countryCharacteristic:ccharacteristic,
        number:number
      },
      //@Techdebt retrive and store the correct image
      photoIdentityDocument: imageUrl,
    };
  }
}
