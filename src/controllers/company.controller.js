import { Company } from "../models/company.model.js";

export const getCompanies = async (req, res) => {
    try {
        const companies = await Company.findAll();
        res.json(companies);
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
};

export const createCompany = async (req, res) => {
    try {
        const { business_name, nit } = req.body;
        const newCompany = await Company.create({
            business_name,
            nit,
        });
        res.json({
            message: "new company created succesfully",
            body: newCompany,
        });
    } catch (error) {
        return res.status(401).json({ message: error.message });
    }
};

export const updateCompany = async (req, res) => {
    try {
        const idCompany = req.params.id;
        const companyToUpdate = await Company.findByPk(idCompany);

        companyToUpdate.set(req.body);
        await companyToUpdate.save();

        return res.json(companyToUpdate);
    } catch (error) {
        return res.status(401).json({ message: error.message });
    }
};

export const deleteCompany = async (req, res) => {
    try {
        const idCompany = req.params.id;
        const deletedCompany = await Company.destroy({
            where: {
                company_id: idCompany,
            },
        });
        res.sendStatus(204);
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
};

export const getCompanyById = async (req, res) => {
    try {
        const idCompany = req.params.id;
        const company = await Company.findByPk(idCompany);

        if (!company)
            return res.status(404).json({ message: "la empresa no existe" });
        res.json(company);
    } catch (error) {
        return res.status(401).json({ message: error.message });
    }
};
