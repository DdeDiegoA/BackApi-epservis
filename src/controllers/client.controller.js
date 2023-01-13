import { Client } from "../models/client.model.js";

//* controllers

export const getClients = async (req, res) => {
    try {
        const clients = await Client.findAll();
        res.json(clients);
    } catch (error) {
        return res.status(error.status).json({ message: error.message });
    }
};

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
