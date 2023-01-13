import { Router } from "express";
import {
    createCompany,
    deleteCompany,
    getCompanies,
    getCompanyById,
    updateCompany,
} from "../controllers/company.controller.js";
const router = Router();

router.get("/company", getCompanies);
router.post("/company", createCompany);
router.put("/company/:id", updateCompany);
router.delete("/company/:id", deleteCompany);
router.get("/company/:id", getCompanyById);

export default router;
