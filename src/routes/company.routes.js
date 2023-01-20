import { Router } from "express";
import {
    createCompany,
    deleteCompany,
    getCompanies,
    getCompanyById,
    updateCompany,
} from "../controllers/company.controller.js";
import { checkAuth } from "../middlewares/auth.js";
import { checkRoleAuth } from "../middlewares/roleAuth.js";
import { cacheInit } from "../middlewares/cache.js";

const router = Router();

router.get(
    "/company", //? path
    checkAuth, //? middleware to check if the user is login
    checkRoleAuth(["admin"]), //? middleware to check if the user fulfills the role
    cacheInit, //? middleware for manage the cache
    getCompanies //? the method for the control of the route
);
router.post(
    "/company", //? path
    checkAuth, //? middleware to check if the user is login
    checkRoleAuth(["admin"]), //? middleware to check if the user fulfills the role
    createCompany //? the method for the control of the route
);
router.put(
    "/company/:id", //? path
    checkAuth, //? middleware to check if the user is login
    checkRoleAuth(["admin"]), //? middleware to check if the user fulfills the role
    updateCompany //? the method for the control of the route
);
router.delete(
    "/company/:id", //? path
    checkAuth, //? middleware to check if the user is login
    checkRoleAuth(["admin"]), //? middleware to check if the user fulfills the role
    deleteCompany //? the method for the control of the route
);
router.get(
    "/company/:id", //? path
    checkAuth, //? middleware to check if the user is login
    checkRoleAuth(["admin"]), //? middleware to check if the user fulfills the role
    getCompanyById //? the method for the control of the route
);

export default router;
