import { MailtrapClient } from "mailtrap";
import { PatientDTO } from "../domain/patient-dto";
import { PatientNotifierInterface } from "../domain/patient-notifier";

const TOKEN = process.env.EMAIL_TOKEN;
const SENDER_EMAIL = process.env.EMAIL_ACCOUNT;

export class PatientMailNotification implements PatientNotifierInterface {
  public async execute(patient: PatientDTO): Promise<void> {
    
    /*@todo fix this
    const client = new MailtrapClient({ token: TOKEN! });
    const sender = { name: "Mailtrap Test", email: SENDER_EMAIL! };
    //@Technical debt implement retries
    client
      .send({
        from: sender,
        to: [{ email: patient.email }],
        subject: "Curita- Registration Completed!",
        text: "Welcome to Curita, your registration was processed successfully.",
      })
      .catch(console.error);*/
  }
}
