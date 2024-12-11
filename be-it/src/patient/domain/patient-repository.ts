import { PatientDTO } from "./patient-dto";


export interface PatientRepositoryInterface {
  create(patient: PatientDTO): Promise<PatientDTO>
}
