//* Models
import { Level } from "../models/level.model.js";

//* controllers
/**
 * It gets all the levels from the database and returns them as a JSON object.
 * @param req - The request object.
 * @param res - the response object
 * @returns An array of objects.
 */
export const getLevels = async (req, res) => {
    try {
        const levels = await Level.findAll();
        res.json(levels);
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
};

/**
 * It creates a new level in the database.
 * @param req - request
 * @param res - {
 * @returns The response is a JSON object with the message and the body.
 */
export const createLevel = async (req, res) => {
    try {
        const { level_type } = req.body;

        const newLevel = await Level.create({
            level_type,
        });
        res.json({
            message: "level created succesfully",
            body: {
                id: newLevel.dataValues.level_id,
                tipoNivel: newLevel.dataValues.level_type,
            },
        });
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
};

/**
 * It takes the id of the level to update, and the new level_type, and updates the level_type of the
 * level with the given id.
 * @param req - the request object
 * @param res - the response object
 */
export const updateLevel = async (req, res) => {
    try {
        const idLevel = req.params.id;
        const { level_type } = req.body;

        const levelToUpdate = await Level.findByPk(idLevel);
        levelToUpdate.level_type = level_type;
        await levelToUpdate.save();

        res.json(levelToUpdate);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

/**
 * It deletes a level from the database.
 * @param req - request
 * @param res - the response object
 * @returns The deletedLevel is being returned.
 */
export const deleteLevel = async (req, res) => {
    try {
        const idLevel = req.params.id;
        const deletedLevel = await Level.destroy({
            where: {
                level_id: idLevel,
            },
        });
        res.sendStatus(204);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

/**
 * It gets a level by its id.
 * @param req - The request object.
 * @param res - the response object
 * @returns The level object.
 */
export const getLevelById = async (req, res) => {
    try {
        const idLevel = req.params.id;
        const level = await Level.findOne({
            where: {
                level_id: idLevel,
            },
        });

        if (!level)
            return res.status(404).json({ message: "el nivel no existe" });
        res.json(level);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};
