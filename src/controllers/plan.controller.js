import { Client } from "../models/client.model.js";
import { Plan } from "../models/plan.model.js";

export const getPlans = async (req, res) => {
    try {
        const plans = await Plan.findAll();
        res.json(plans);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const createPlan = async (req, res) => {
    try {
        const { description, cost, levelLevelId } = req.body;
        const newPlan = await Plan.create({
            description,
            cost,
            levelLevelId,
        });
        res.json({
            message: "new plan created succesfully",
            body: newPlan,
        });
    } catch (error) {
        return res.status(401).json({ message: error.message });
    }
};

export const updatePlan = async (req, res) => {
    try {
        const planId = req.params.id;
        const planToUpdate = await Plan.findByPk(planId);

        planToUpdate.set(req.body);
        await planToUpdate.save();

        return res.json(planToUpdate);
    } catch (error) {
        return res.status(401).json({ message: error.message });
    }
};

export const deletePlan = async (req, res) => {
    try {
        const planId = req.params.id;
        const deletedPlan = Plan.destroy({
            where: {
                plan_id: planId,
            },
        });
        return res.sendStatus(204);
    } catch (error) {
        return res.status(401).json({ message: error.message });
    }
};

export const getPlanById = async (req, res) => {
    try {
        const planId = req.params.id;
        const plan = await Plan.findByPk(planId);
        if (!plan)
            return res
                .status(404)
                .json({ message: `el plan con el id ${planId} no existe` });
        res.json(plan);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};
export const getClientPlan = async (req, res) => {
    try {
        const planId = req.params.id;
        const planClient = await Client.findAll({
            where: {
                planPlanId: planId,
            },
        });
        res.json(planClient);
    } catch (error) {
        return res.status(404).json({ message: error.message });
    }
};
