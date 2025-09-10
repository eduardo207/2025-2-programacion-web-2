import { responseSuccess, responseError } from '../helpers/response.helper.js';
import { getDb } from '../configs/mongodb.config.js';
import joi from 'joi';

const schemaCliente = joi.object({
  primerNombre: joi.string().min(5).max(50).required(),
  segundoNombre: joi.string().optional(),
  primerApellido: joi.string().min(5).max(50).required(),
  segundoApellido: joi.string().optional(),
  nit: joi.string().required(),
  email: joi.string().email().required(),
  direcciones: joi.array().required(),
  telefonos: joi.array().required()
});

//Handler para el metodo get de todos los clientes
const getClientesHandler = async (req, res) => {
  try{
    const db = getDb();
    const clientes = await db.collection('clientes').find().toArray();
    
    if (!clientes)
      return res.status(404).json(responseError("No se encontraron clientes"));

    res.status(200).json(responseSuccess("Clientes obtenidos exitosamente",clientes));
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Error interno del servidor"
    });
  }
}

const postClienteHandler = async (req, res) => {
  try{
    const db = getDb();
    const data = req.body;

    const { error, valueData } = schemaCliente.validate(data, { abortEarly: false });

    if(error){
      return res.status(400).json(responseError(error.details.map(e => e.message)));
    }

    const cliente = await db.collection('clientes').findOne({nit: data.nit});

    if (cliente){
      return res.status(409).json(responseError('El cliente ya existe'));
    }
    
    const nuevoCliente = await db.collection('clientes').insertOne(data);
    
    res.status(201).json(responseSuccess("cliente guardado", nuevoCliente.insertedId));

  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Error interno del servidor"
    });
  }
}

export { 
  getClientesHandler,
  postClienteHandler
};
