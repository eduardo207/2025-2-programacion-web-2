import { Router } from 'express';
import { 
  getClientesHandler
} from '../controllers/clientes.controller.js';

const router = Router();
router.get('/', getClientesHandler);

export default router;
