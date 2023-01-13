import { Router } from "express";
const router = Router();
import {
    getLevels,
    createLevel,
    deleteLevel,
    getLevelById,
    updateLevel,
} from "../controllers/levels.controller.js";

router.get("/levels", getLevels);
router.post("/levels", createLevel);
router.put("/levels/:id", updateLevel);
router.delete("/levels/:id", deleteLevel);
router.get("/levels/:id", getLevelById);

export default router;
