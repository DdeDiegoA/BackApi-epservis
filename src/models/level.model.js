import { DataTypes } from "sequelize";
import sequelize from "../database/database.js";
import { Plan } from "./plan.model.js";

export const Level = sequelize.define(
    "level",
    {
        level_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        level_type: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        timestamps: false,
    }
);

Level.hasMany(Plan, {
    foreingKey: "levelId_FK",
    sourceKey: "level_id",
});

Plan.belongsTo(Level, {
    foreingKey: "levelId_FK",
    targetId: "level_id",
});
