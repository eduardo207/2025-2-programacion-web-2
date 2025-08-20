import { Router } from 'express';
import clientsRoute from './clientes.route.js';

const router = Router();

router.use("/clientes", clientsRoute);

export default router;
