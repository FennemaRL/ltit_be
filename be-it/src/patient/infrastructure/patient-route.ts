import { Router } from "express";
import { PatientRegistration } from "../aplication/patient-registration";
import { PatientRepository } from "./patient-repository-msql";
import { PatientMailNotification } from "./patient-notification-mail";

const patientRoute = Router()

patientRoute.post(`/register`, async (req, res, next) => {
    const { patient } = req.body
    const patientRepository = new PatientRepository();
    const patientNotifier = new PatientMailNotification();
    const patientRegistration = new PatientRegistration(patientNotifier, patientRepository);
    try {
        const result = await patientRegistration.execute(patient);
        res.send(result);
    } catch (e) {
        next(e)
    }
})
patientRoute.get('/', async (req, res) => { 
    const patientRepository = new PatientRepository();
    const listOfPatients = await patientRepository.findAll();
    res.json(listOfPatients);
})
export default patientRoute