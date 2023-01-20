import { Client } from "../models/client.model.js";
import { Plan } from "../models/plan.model.js";

/**
 * It's a function that returns a promise that resolves to an array of objects.
 * @param req - The request object.
 * @param res - The response object.
 * @returns An array of objects.
 */
export const getPlans = async (req, res) => {
    try {
        const plans = await Plan.findAll();
        res.json(plans);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

/**
 * It creates a new plan
 * @param req - {
 * @param res - response
 * @returns The new plan created succesfully
 */
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

/**
 * It takes the id of the plan to update, finds the plan in the database, updates the plan with the new
 * data, and then returns the updated plan.
 * @param req - request
 * @param res - response
 * @returns The updated plan.
 */
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

/**
 * It deletes a plan from the database based on the plan_id.
 * @param req - request
 * @param res - the response object
 * @returns The response is a 204 status code.
 */
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

/**
 * It gets a plan by its id.
 * @param req - The request object.
 * @param res - The response object.
 * @returns The plan with the id that was passed in the request.
 */
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

/**
 * It gets the planId from the request params, then it finds all the clients that have the planPlanId
 * equal to the planId
 * @param req - the request object
 * @param res - the response object
 * @returns An array of objects.
 */
export const getClientPlan = async (req, res) => {
    try {
        const planId = req.params.id;
        const planClient = await Client.findAll({
            where: {
                planPlanId: planId,
            },
        });
        // Todo: validate is empty
        // if (planClient= is)
        //     return res.status(401).json({
        //         message: `el plan con id ${planId} no existe`,
        //     });
        res.json(planClient);
    } catch (error) {
        return res.status(404).json({ message: error.message });
    }
};
