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

//* only for routes of type "GET" for te all data will use the cacheInit
router.get(
    "/client", //? path
    checkAuth, //? middleware for checking if the user is login
    checkRoleAuth(["admin"]), //? middleware to check if the user fulfills the role
    cacheInit, //? middleware for manage the cache
    getClients //? the method for the control of the route
);
router.get(
    "/client-data", //? path
    checkAuth, //? middleware for checking if the user is login
    checkRoleAuth(["admin"]), //? middleware to check if the user fulfills the role
    cacheInit, //? middleware for manage the cache
    getClientsAllData //? the method for the control of the route
);
router.get(
    "/client-data/:id", //? path
    checkAuth, //? middleware for checking if the user is login
    checkRoleAuth(["admin"]), //? middleware to check if the user fulfills the role
    getClntAllById //? the method for the control of the route
);
router.post(
    "/client", //? path
    checkAuth, //? middleware for checking if the user is login
    checkRoleAuth(["admin"]), //? middleware to check if the user fulfills the role
    createClient //? the method for the control of the route
);
router.put(
    "/client/:id", //? path
    checkAuth, //? middleware for checking if the user is login
    checkRoleAuth(["admin"]), //? middleware to check if the user fulfills the role
    updateClient //? the method for the control of the route
);
router.delete(
    "/client/:id", //? path
    checkAuth, //? middleware for checking if the user is login
    checkRoleAuth(["admin"]), //? middleware to check if the user fulfills the role
    deleteClient //? the method for the control of the route
);
router.get(
    "/client/:id", //? path
    checkAuth, //? middleware for checking if the user is login
    checkRoleAuth(["admin"]), //? middleware to check if the user fulfills the role
    getClientById //? the method for the control of the route
);

export default router;
