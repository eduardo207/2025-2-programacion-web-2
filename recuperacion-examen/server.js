import express from 'express';
import dotenv from 'dotenv';
import { connectToMongo } from './configs/mongodb.config.js'; 
import router from './routes/index.route.js';

dotenv.config();
const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use("/api",router);


const iniciarServidor = async () => {
  try { 
    await connectToMongo();
    app.listen(port, () => console.log('servidor iniciado'));
  } catch(error){
    console.error(error);
  }
}
iniciarServidor();



