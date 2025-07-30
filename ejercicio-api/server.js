import express from 'express';
import { clients } from './mock-data.js';

const app = express();
const port = 3000;
app.use(express.json());

// Ruta para obtener todos los clientes
app.get('/api/clients',(req, res) => {
  let response = {
    message: "success",
    data: {
      clients: clients,
      count: clients.length
    }
  };
  res.status(200).json(response);
})

// Ruta para obtener un cliente por PARAM ID
app.get('/api/clients/:id',(req, res) => {
  // obtención por param id
  const id = req.params.id;
  // obtención por query id
  // const id = req.query.id;
  const client = clients.find(c => c.id == id);
  let response = {};
  if (!client){
    response = {
      message: "cliente no encontrado"
    }
    return res.status(404).json(response);
  }

  response = {
    message: "success",
    data: client
  };

  return res.status(200).json(response);
})

// Ruta opara implementar el POST de client
app.post('/api/clients',(req, res) => {
  const newClient = req.body;
  
  newClient.id = Number(`${Date.now()}`);
  clients.push(newClient);

  let response = {
    message: "success",
    data: {
      clientId: newClient.id,
    }
  }
  return res.status(201).json(response);
})

app.listen(port, () => console.log('Servidor iniciado'));


//https://localhost/api/clients?id=1,name=Eduardo
