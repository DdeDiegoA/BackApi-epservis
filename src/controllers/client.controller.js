import { Sequelize } from "sequelize";
import { Client } from "../models/client.model.js";
import { Plan } from "../models/plan.model.js";
import { Company } from "../models/company.model.js";
//* controllers

/**
 * It's a function that returns a promise that resolves to an array of objects.
 * @param req - The request object.
 * @param res - The response object.
 * @returns An array of objects.
 */
export const getClients = async (req, res) => {
    try {
        const clients = await Client.findAll();
        res.json(clients);
    } catch (error) {
        return res.status(404).json({ message: error.message });
    }
};

/**
 * It creates a new client in the database.
 * @param req - the request object in the body
 * @param res - the response for user
 * @returns The new client created succesfully
 */
export const createClient = async (req, res) => {
    try {
        const { fullName, email, phone, planPlanId, companyCompanyId } =
            req.body;
        const newClient = await Client.create({
            fullName,
            email,
            phone,
            planPlanId,
            companyCompanyId,
        });
        res.json({
            message: "new client created succesfully",
            body: newClient,
        });
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
};

/**
 * It takes the clientId from the request params, finds the client in the database, updates the client
 * with the data from the request body, and then returns the updated client.
 * @param req - The request object.
 * @param res - the response object
 * @returns The updated client object.
 */
export const updateClient = async (req, res) => {
    try {
        const clientId = req.params.id;
        const clientToUpdate = await Client.findByPk(clientId);

        clientToUpdate.set(req.body);
        await clientToUpdate.save();

        return res.json(clientToUpdate);
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
};

/**
 * It deletes a client from the database.
 * @param req - The request object.
 * @param res - the response object
 * @returns The response is a 204 status code.
 */
export const deleteClient = async (req, res) => {
    try {
        const clientId = req.params.id;
        const deletedClient = await Client.destroy({
            where: {
                client_id: clientId,
            },
        });
        return res.sendStatus(204);
    } catch (error) {
        return res.status(401).json({ message: error.message });
    }
};

/**
 * It's a function that gets a client by id from the database and returns it in the response.
 * @param req - The request object.
 * @param res - The response object.
 * @returns The client with the id that was passed in the request.
 */
export const getClientById = async (req, res) => {
    try {
        const clientId = req.params.id;
        const client = await Client.findByPk(clientId);
        if (!client)
            return res.status(404).json({
                message: `el cliente con el id ${clientId} no existe`,
            });
        res.json(client);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

/**
 * I'm trying to get all the clients data, including the plan and company data, but if the client
 * doesn't have a company, I want to return "sin empresa" instead of null.
 * </code>
 * @param req - request
 * @param res - {
 * @returns {
 *     "body": {
 *         "id": 1,
 *         "fullName": "Juan Perez",
 *         "email": "juan@gmail.com",
 *         "phone": "123456789",
 *         "plan": {
 *             "description": "Plan 1",
 *             "cost": "100"
 *         },
 */
export const getClientsAllData = async (req, res) => {
    try {
        const clients = await Client.findAll({
            include: [
                {
                    model: Plan,
                    as: "plan",
                    attributes: ["description", "cost"],
                    required: true,
                },
                {
                    model: Company,
                    as: "company",
                    attributes: ["business_name", "nit"],
                    required: false,
                    where: Sequelize.literal(
                        `"company"."company_id" = "client"."companyCompanyId"`
                    ),
                },
            ],
        });
        const clientArray = clients.map((client) => {
            return {
                id: client.dataValues.client_id,
                fullName: client.dataValues.fullName,
                email: client.dataValues.email,
                phone: client.dataValues.phone,
                plan: client.dataValues.plan,
                company: client.dataValues.company
                    ? client.dataValues.company
                    : "sin empresa",
            };
        });
        res.json({
            body: clientArray,
        });
    } catch (error) {
        return res.status(404).json({ message: error.message });
    }
};

/**
 * It gets a client by id, and returns the client's plan and company.
 * @param req - request params
 * @param res - {
 * @returns {
 *     "body": {
 *         "id": 1,
 *         "fullName": "Juan Perez",
 *         "email": "juan@gmail.com",
 *         "phone": "123456789",
 *         "plan": {
 *             "description": "Plan 1",
 *             "cost": "100"
 *         },
 *         "
 */
export const getClntAllById = async (req, res) => {
    try {
        const clientId = req.params.id;
        const client = await Client.findByPk(clientId, {
            include: [
                {
                    model: Plan,
                    as: "plan",
                    attributes: ["description", "cost"],
                    required: true,
                },
                {
                    model: Company,
                    as: "company",
                    attributes: ["business_name", "nit"],
                    required: false,
                    where: Sequelize.literal(
                        `"company"."company_id" = "client"."companyCompanyId"`
                    ),
                },
            ],
        });

        res.json({
            body: {
                id: client.dataValues.client_id,
                fullName: client.dataValues.fullName,
                email: client.dataValues.email,
                phone: client.dataValues.phone,
                plan: client.dataValues.plan,
                company: client.dataValues.company
                    ? client.dataValues.company
                    : "sin empresa",
            },
        });
    } catch (error) {
        return res.status(404).json({ message: error.message });
    }
};
