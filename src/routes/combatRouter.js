import { Router } from "express";
import {
    store
} from '../controllers/combatController.js';

const router = Router();

router.post('/', store);
export default router;