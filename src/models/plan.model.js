import { DataTypes } from "sequelize";
import sequelize from "../database/database.js";
import { Client } from "./client.model.js";

export const Plan = sequelize.define(
    "plan",
    {
        plan_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        cost: {
            type: DataTypes.DECIMAL,
            allowNull: false,
        },
    },
    {
        timestamps: false,
    }
);

Plan.hasMany(Client, {
    foreingKey: "planId_FK",
    sourceKey: "plan_id",
});

Client.belongsTo(Plan, {
    foreingKey: "planId_FK",
    targetId: "plan_id",
});
