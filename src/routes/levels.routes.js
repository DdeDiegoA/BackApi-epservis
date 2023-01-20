import { Router } from "express";
import {
    getLevels,
    createLevel,
    deleteLevel,
    getLevelById,
    updateLevel,
} from "../controllers/levels.controller.js";
import { checkAuth } from "../middlewares/auth.js";
import { checkRoleAuth } from "../middlewares/roleAuth.js";
import { cacheInit } from "../middlewares/cache.js";

const router = Router();
router.get("/level", checkAuth, checkRoleAuth(["admin"]), cacheInit, getLevels);
router.post("/level", checkAuth, checkRoleAuth(["admin"]), createLevel);
router.put("/level/:id", checkAuth, checkRoleAuth(["admin"]), updateLevel);
router.delete("/level/:id", checkAuth, checkRoleAuth(["admin"]), deleteLevel);
router.get("/level/:id", checkAuth, checkRoleAuth(["admin"]), getLevelById);

export default router;
