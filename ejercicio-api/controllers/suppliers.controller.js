import { suppliers } from '../mock-data/suppliers.data.js';
import Joi from 'joi';

// Definición del esquema de validación para un proveedor
const supplierSchema = Joi.object({
  id: Joi.number().integer().min(1).required(),
  nombreComercial: Joi.string().min(5).max(50).required().messages({
    'string.base': 'El nombre comercial debe ser una cadena de texto',
    'string.empty': 'El nombre comercial no puede estar vacío',
    'string.min': 'El nombre comercial debe tener al menos 5 carácter',
    'string.max': 'El nombre comercial no puede exceder los 50 caracteres',
    'any.required': 'El nombre comercial es obligatorio',
  }),
  telefono: Joi.string().min(8).max(8).required(),
  email: Joi.string().email().required()
})


//Handler para el metodo get de todos los suppliers
const getSuppliersHandler = async (req, res) => {
  try{
    let response = {
      message: "success",
      data: {
        suppliers: suppliers,
        count: suppliers.length
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

const getSupplierHandlerByParam = async (req, res) => {
  try{
    // obtención por param id
    const id = req.params.id;
    // obtención por query id
    // const id = req.query.id;
    const supplier = suppliers.find(c => c.id == id);
    let response = {};
    if (!supplier){
      response = {
        message: "suppliere no encontrado"
      }
      return res.status(404).json(response);
    }

    response = {
      message: "success",
      data: supplier
    };

    return res.status(200).json(response);
  }catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Error interno del servidor"
    });
  }
}

const postSupplierHandler = async (req, res) => {
  try{
    const newSupplier = req.body;

    const {error, value} = supplierSchema.validate(newSupplier, { abortEarly: false });
    let response = {};
    if (error) {
      response = {
        message: error.details.map(e => e.message),
      }
      return res.status(400).json(response);
    }

    const supplier = suppliers.find(c => c.id == newSupplier.id);
    
    if (supplier){
      response = {
        message: "suppliere ya existe",
      }
      return res.status(409).json(response);
    }

    suppliers.push(newSupplier);

    response = {
      message: "success",
      data: {
        supplierId: newSupplier.id,
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

export { 
  getSuppliersHandler,
  getSupplierHandlerByParam,
  postSupplierHandler
};
