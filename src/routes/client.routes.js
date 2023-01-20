import { Router } from "express";
import {
    createClient,
    deleteClient,
    getClientById,
    getClients,
    getClientsAllData,
    getClntAllById,
    updateClient,
} from "../controllers/client.controller.js";
import { checkAuth } from "../middlewares/auth.js";
import { checkRoleAuth } from "../middlewares/roleAuth.js";
import { cacheInit } from "../middlewares/cache.js";

const router = Router();

router.get(
    "/client",
    checkAuth,
    checkRoleAuth(["admin"]),
    cacheInit,
    getClients
);
router.post("/client", checkAuth, checkRoleAuth(["admin"]), createClient);
router.put("/client/:id", checkAuth, checkRoleAuth(["admin"]), updateClient);
router.delete("/client/:id", checkAuth, checkRoleAuth(["admin"]), deleteClient);
router.get("/client/:id", checkAuth, checkRoleAuth(["admin"]), getClientById);
router.get(
    "/client-data",
    checkAuth,
    checkRoleAuth(["admin"]),
    getClientsAllData
);
router.get(
    "/client-data/:id",
    checkAuth,
    checkRoleAuth(["admin"]),
    getClntAllById
);
export default router;
