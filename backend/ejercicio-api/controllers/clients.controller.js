import { clients } from '../mock-data/clients.data.js';

//Handler para el metodo get de todos los clientes
const getClientsHandler = async (req, res) => {
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
}

const getClientHandlerByParam = async (req, res) => {
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
}

const postClientHandler = async (req, res) => {
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
}

const putClientHandler = async (req, res) => {
  try{
    throw new Error("Error de prueba");
  }catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Error interno del servidor"
    });
  }
}

export { 
  getClientsHandler,
  getClientHandlerByParam,
  postClientHandler,
  putClientHandler
};
