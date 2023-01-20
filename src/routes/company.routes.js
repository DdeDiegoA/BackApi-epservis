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
    "/company",
    checkAuth,
    checkRoleAuth(["admin"]),
    cacheInit,
    getCompanies
);
router.post("/company", checkAuth, checkRoleAuth(["admin"]), createCompany);
router.put("/company/:id", checkAuth, checkRoleAuth(["admin"]), updateCompany);
router.delete(
    "/company/:id",
    checkAuth,
    checkRoleAuth(["admin"]),
    deleteCompany
);
router.get("/company/:id", checkAuth, checkRoleAuth(["admin"]), getCompanyById);

export default router;
