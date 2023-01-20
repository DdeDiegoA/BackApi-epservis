import { Company } from "../models/company.model.js";

/**
 * It's a function that returns a promise that resolves to an array of companies.
 * @param req - The request object.
 * @param res - The response object.
 * @returns An array of companies.
 */
export const getCompanies = async (req, res) => {
    try {
        const companies = await Company.findAll();
        res.json(companies);
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
};

/**
 * It creates a new company in the database.
 * @param req - request
 * @param res - {
 * @returns a promise.
 */
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

/**
 * It takes the id of the company to update, finds the company in the database, updates the company
 * with the new data, and returns the updated company.
 * @param req - the request object
 * @param res - the response object
 * @returns The companyToUpdate object is being returned.
 */
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

/**
 * It deletes a company from the database.
 * @param req - request
 * @param res - the response object
 * @returns The company is being deleted from the database.
 */
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

/**
 * It gets a company by its id.
 * @param req - The request object.
 * @param res - The response object.
 * @returns The company object.
 */
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
