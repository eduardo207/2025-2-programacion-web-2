import { Router } from 'express';
import clientsRoute from './clients.route.js';
import vehiclesRoute from './vehicles.route.js';
import suppliersRoute from './suppliers.route.js';

const router = Router();

router.use("/clients", clientsRoute);
router.use("/vehicles", vehiclesRoute);
router.use("/suppliers", suppliersRoute);

export default router;
