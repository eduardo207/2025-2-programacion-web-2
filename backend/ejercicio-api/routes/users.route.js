//import express from 'express';
import { Router } from 'express';
import { 
  getUsersHandler, 
  getUserHandlerByParam, 
  postUserHandler, 
  putUserHandler
} from '../controllers/users.controller.js';

const router = Router();
//const router = express.Router();

router.get('/', getUsersHandler);
router.get('/:id', getUserHandlerByParam);
router.post('/', postUserHandler);
router.put('/', putUserHandler);

export default router;
