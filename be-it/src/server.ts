import "dotenv/config";
import express from 'express';
import patientRoute from "./patient/infrastructure/patient-route";
import { connectDb } from "./shared/infrastructure/db-connection";

const cors = require('cors');
const app = express();
const port = process.env.PORT || 3001;
app.use(express.json())
app.use(cors())
app.use("/patient",patientRoute)

app.listen(port, async () => {
await connectDb()
console.log(`Listo por el puerto ${port}`)
});