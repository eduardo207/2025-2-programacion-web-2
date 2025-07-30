import express from 'express';
import { clients } from './mock-data.js';

const app = express();
const port = 3000;
app.use(express.json());

/*
app.get('/api/clients',(req, res) => {
  
  const name = req.query.name;
  let welcomeMessage = 'Bienvenido usuario: ' + name;
  console.log(welcomeMessage);

  let response = {
    message: "success",
    data: {
      clients: clients,
      count: clients.length
    }
  };
  res.status(200).json(response);
})*/

app.get('/api/clients',(req, res) => {
  
  const id = req.query.id;
  const client = clients.find(c => c.id == id);

  let response = {
    message: "success",
    data: client
  };
  res.status(200).json(response);
})


app.listen(port, () => console.log('Servidor iniciado'));


//https://localhost/api/clients?id=1,name=Eduardo
