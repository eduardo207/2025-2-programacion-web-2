import { responseSuccess, responseError } from "../helpers/responses.helper.js";
import { getDb } from "../configs/mongodb.config.js";
import Joi from "joi";
import { MongoTransactionError } from "mongodb";


const motocicletaSchema=Joi.object({
  motor: Joi.number().min(25).max(100).required(),
  marca: Joi.string().required()
})
const postMotocicletasHandler = async(req,res) =>{
  try{
    const db = getDb();
    const data = req.body;
    const {error, values} = motocicletaSchema.validate(data);
    if (error){
      return res.status(400).json(responseError("Error de datos "));
    }
    const motocicleta = await db.collection('motocicletas').insetOne(values);

    return res.status(201).json(responseSuccess("Datos insertados",motocicleta.insertedId));

  }catch(error){
    console.error(error);
    return res.status(500).json(responseError("Error de Servidor"));
  }
};

const getMotocicletasHandler = async(req,res) =>{
  try{
    const db = getDb();
    const motocicletas = await db.collection('motocicletas').find().toArray();
    
    if(!motocicletas){
      return res.status(404).json(responseError("Datos no encontrados"));
    }

    return res.status(200).json(responseSuccess("Datos obtenidos",motocicletas));

  }catch(error){
    console.error(error);
    return res.status(500).json(responseError("Error de Servidor"));
  }
};

export {
  getMotocicletasHandler,
  postMotocicletasHandler
};