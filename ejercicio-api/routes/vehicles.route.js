import { Router } from 'express';
import { 
  getVehiclesHandler, 
  getVehicleHandlerByParam, 
  postVehicleHandler, 
  putVehicleHandler
} from '../controllers/vehicles.controller.js';

const router = Router();

router.get('/', getVehiclesHandler);
router.get('/:id', getVehicleHandlerByParam);
router.post('/', postVehicleHandler);
router.put('/', putVehicleHandler);

export default router;
