import { vehicles } from '../mock-data/vehicles.data.js';

//Handler para el metodo get de todos los vehiclees
const getVehiclesHandler = async (req, res) => {
  try{
    let response = {
      message: "success",
      data: {
        vehicles: vehicles,
        count: vehicles.length
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

const getVehicleHandlerByParam = async (req, res) => {
  try{
    // obtención por param id
    const id = req.params.id;
    // obtención por query id
    // const id = req.query.id;
    const vehicle = vehicles.find(c => c.id == id);
    let response = {};
    if (!vehicle){
      response = {
        message: "vehiclee no encontrado"
      }
      return res.status(404).json(response);
    }

    response = {
      message: "success",
      data: vehicle
    };

    return res.status(200).json(response);
  }catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Error interno del servidor"
    });
  }
}

const postVehicleHandler = async (req, res) => {
  try{
    const newVehicle = req.body;
    const vehicle = vehicles.find(c => c.id == newVehicle.id);
    let response = {};
    if (vehicle){
      response = {
        message: "vehiclee ya existe",
      }
      return res.status(409).json(response);
    }

    if (newVehicle.nombre === undefined || newVehicle.nombre === "") {
      response = {
        message: "Se requiere el nombre del vehiclee",
      }
      return res.status(400).json(response);
    }

    vehicles.push(newVehicle);

    response = {
      message: "success",
      data: {
        vehicleId: newVehicle.id,
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

const putVehicleHandler = async (req, res) => {
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
  getVehiclesHandler,
  getVehicleHandlerByParam,
  postVehicleHandler,
  putVehicleHandler
};
