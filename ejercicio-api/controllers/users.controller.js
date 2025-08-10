import { users } from '../mock-data/users.data.js';
import { z } from 'zod';

export const userSchema = z.object({
  primerNombre: z
    .string({
      required_error: "primerNombre es obligatorio",
      invalid_type_error: "primerNombre debe ser un string",
    })
    .min(1, { message: "primerNombre es obligatorio" }),
  segundoNombre: z.string().optional(),
  primerApellido: z
    .string({
      required_error: "primerApellido es obligatorio",
      invalid_type_error: "primerApellido debe ser un string",
    })
    .min(1, { message: "primerApellido es obligatorio" }),
  segundoApellido: z.string().optional(),
  username: z
    .string()
    .min(5, { message: "username debe tener al menos 5 caracteres" })
    .max(20, { message: "username debe tener máximo 20 caracteres" })
    .regex(/^[A-Za-z_]+$/, { message: "username solo puede contener letras o guiones bajos" }),

  password: z
    .string()
    .min(8, { message: "password debe tener al menos 8 caracteres" })
    .max(25, { message: "password debe tener máximo 25 caracteres" })
    .regex(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[\W_]).{8,25}$/, { message: "password debe tener al menos una mayúscula, una minúscula, un dígito y un símbolo" }),
});

const formatZodErrors = (zodError) =>
  zodError.issues.map((i) => {
    console.log('debug para verificar los mensajes de error ->',i)
    if (i.code === 'invalid_type' && i.message.includes('undefined')) {
      const field = i.path.join('.') || 'root';
      return `${field}: ${field} es obligatorio`;
    }
    return `${i.path.join('.') || 'root'}: ${i.message}`;
  });

//Handler para el metodo get de todos los users
const getUsersHandler = async (req, res) => {
  try{
    let response = {
      message: "success",
      data: {
        users: users,
        count: users.length
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

const getUserHandlerByParam = async (req, res) => {
  try{
    // obtención por param id
    const id = req.params.id;
    // obtención por query id
    // const id = req.query.id;
    const user = users.find(c => c.id == id);
    let response = {};
    if (!user){
      response = {
        message: "user no encontrado"
      }
      return res.status(404).json(response);
    }

    response = {
      message: "success",
      data: user
    };

    return res.status(200).json(response);
  }catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Error interno del servidor"
    });
  }
}

const postUserHandler = async (req, res) => {
  try{
    let newUser = req.body;

    const parsed = userSchema.safeParse(newUser);
    if (!parsed.success) {
      return res.status(400).json({ message: formatZodErrors(parsed.error) });
    }

    newUser = parsed.data;

    const user = users.find(c => c.id == newUser.id);
    let response = {};
    if (user){
      response = {
        message: "user ya existe",
      }
      return res.status(409).json(response);
    }

    users.push(newUser);

    response = {
      message: "success",
      data: {
        userId: newUser.id,
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

const putUserHandler = async (req, res) => {
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
  getUsersHandler,
  getUserHandlerByParam,
  postUserHandler,
  putUserHandler
};
