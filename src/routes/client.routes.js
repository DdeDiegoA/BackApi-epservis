import { Router } from "express";
import {
    createClient,
    deleteClient,
    getClientById,
    getClients,
    updateClient,
} from "../controllers/client.controller.js";
const router = Router();

router.get("/client", getClients);
router.post("/client", createClient);
router.put("/client/:id", updateClient);
router.delete("/client/:id", deleteClient);
router.get("/client/:id", getClientById);

export default router;
