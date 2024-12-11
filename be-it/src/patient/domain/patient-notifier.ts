import { PatientDTO } from "./patient-dto";


export interface PatientNotifierInterface {
  execute(patient: PatientDTO): Promise<void>
}
