import { Router } from 'express';
import { 
  getClientsHandler, 
  getClientHandlerByParam, 
  postClientHandler, 
  putClientHandler
} from '../controllers/clients.controller.js';

const router = Router();

router.get('/', getClientsHandler);
router.get('/:id', getClientHandlerByParam);
router.post('/', postClientHandler);
router.put('/', putClientHandler);

export default router;
