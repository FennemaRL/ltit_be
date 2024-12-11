import { Router } from "express";
import { PatientRegistration } from "../aplication/patient-registration";
import { PatientRepository } from "./patient-repository-msql";
import { PatientMailNotification } from "./patient-notification-mail";

const patientRoute = Router()

patientRoute.post(`/register`, async (req, res) => {
    const { patient } = req.body
    const patientRepository = new PatientRepository();
    const patientNotifier = new PatientMailNotification();
    const patientRegistration = new PatientRegistration(patientNotifier, patientRepository);
    const result = await patientRegistration.execute(patient);
    res.send(result);
})

export default patientRoute