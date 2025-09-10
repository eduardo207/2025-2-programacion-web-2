import { Router } from "express";
import { getMotocicletasHandler, postMotocicletasHandler } from '../controllers/motocicletas.controller.js';


const router = Router();
router.get('/',getMotocicletasHandler);
router.post('/',postMotocicletasHandler);

export default router;