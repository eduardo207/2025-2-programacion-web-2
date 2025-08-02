import { Router } from 'express';
import clientsRoute from './clients.route.js';
import vehiclesRoute from './vehicles.route.js';

const router = Router();

router.use("/clients", clientsRoute);
router.use("/vehicles", vehiclesRoute);

export default router;
