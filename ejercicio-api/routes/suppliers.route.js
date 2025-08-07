import { Router } from 'express';
import { 
  getSuppliersHandler, 
  getSupplierHandlerByParam, 
  postSupplierHandler,
} from '../controllers/suppliers.controller.js';

const router = Router();

router.get('/', getSuppliersHandler);
router.get('/:id', getSupplierHandlerByParam);
router.post('/', postSupplierHandler);

export default router;
