import { responseSuccess, responseError } from '../helpers/response.helper.js';
import joi from 'joi';
import { login } from '../services/auth.service.js'

const schemaAuth = joi.object({
  email: joi.string().email().required(),
  password: joi.string().min(1).max(100)
});

const loginHandler = async (req, res) => {
  try{
    const data = req.body;
    
    const { error, values } = schemaAuth.validate(data, { abortEarly: false });

    if(error){
      return res.status(400).json("Credenciales incorrectas.");
    }

    const token = await login(data);
    console.log('token',token)
    
    res.status(200).json(responseSuccess("success", token));
  } catch (error) {
    let errorCode = 500;
    let errorMessage = 'INTERNAL_SERVER_ERROR';
    switch(error.code){
      case 'DATA_NOT_FOUND':
        errorCode = 404;
        errorMessage = error.code;
        break;
    }

    return res.status(errorCode).json({
      message: errorMessage
    });
  }
}

export { 
  loginHandler
};
