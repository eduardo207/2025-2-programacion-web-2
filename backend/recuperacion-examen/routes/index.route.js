import { Router } from "express";
import motocilcletasRoute from './motocicletas.route.js';

const router = Router();
router.use('/',motocilcletasRoute);

export default router;