import express from 'express';
import { clients } from './mock-data.js';

const app = express();
const port = 3000;
app.use(express.json());

// Ruta para obtener todos los clientes
app.get('/api/clients',(req, res) => {
  try{
    let response = {
      message: "success",
      data: {
        clients: clients,
        count: clients.length
      }
    };
    res.status(200).json(response);
  }catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Error interno del servidor"
    });
  }
})

// Ruta para obtener un cliente por PARAM ID
app.get('/api/clients/:id',(req, res) => {
  try{
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
  }catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Error interno del servidor"
    });
  }
})

// Ruta opara implementar el POST de client
app.post('/api/clients',(req, res) => {
  try{
    const newClient = req.body;
    const client = clients.find(c => c.id == newClient.id);
    let response = {};
    if (client){
      response = {
        message: "cliente ya existe",
      }
      return res.status(409).json(response);
    }

    if (newClient.nombre === undefined || newClient.nombre === "") {
      response = {
        message: "Se requiere el nombre del cliente",
      }
      return res.status(400).json(response);
    }

    clients.push(newClient);

    response = {
      message: "success",
      data: {
        clientId: newClient.id,
      }
    }
    return res.status(201).json(response);
  }catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Error interno del servidor"
    });
  }
})

// Ruta opara actualizar un cliente
app.put('/api/clients',(req, res) => {
  try{
    throw new Error("Error de prueba");
  }catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Error interno del servidor"
    });
  }
})
app.listen(port, () => console.log('Servidor iniciado'));


//https://localhost/api/clients?id=1,name=Eduardo
