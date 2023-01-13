import { Router } from "express";
import {
    createPlan,
    deletePlan,
    getClientPlan,
    getPlanById,
    getPlans,
    updatePlan,
} from "../controllers/plan.controller.js";
const router = Router();

router.get("/plan", getPlans);
router.post("/plan", createPlan);
router.put("/plan/:id", updatePlan);
router.delete("/plan/:id", deletePlan);
router.get("/plan/:id", getPlanById);
router.get("/plan/:id/client", getClientPlan);

export default router;
