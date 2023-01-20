import { Router } from "express";
import {
    createPlan,
    deletePlan,
    getClientPlan,
    getPlanById,
    getPlans,
    updatePlan,
} from "../controllers/plan.controller.js";
import { checkAuth } from "../middlewares/auth.js";
import { checkRoleAuth } from "../middlewares/roleAuth.js";
import { cacheInit } from "../middlewares/cache.js";

const router = Router();

router.get("/plan", checkAuth, checkRoleAuth(["admin"]), cacheInit, getPlans);
router.post("/plan", checkAuth, checkRoleAuth(["admin"]), createPlan);
router.put("/plan/:id", checkAuth, checkRoleAuth(["admin"]), updatePlan);
router.delete("/plan/:id", checkAuth, checkRoleAuth(["admin"]), deletePlan);
router.get("/plan/:id", checkAuth, checkRoleAuth(["admin"]), getPlanById);
router.get(
    "/plan/:id/client",
    checkAuth,
    checkRoleAuth(["admin"]),
    getClientPlan
);

export default router;
