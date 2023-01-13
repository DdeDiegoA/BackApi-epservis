//* Models
import { Level } from "../models/level.model.js";

//* controllers
export const getLevels = async (req, res) => {
    try {
        const levels = await Level.findAll();
        res.json(levels);
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
};

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
