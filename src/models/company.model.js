import { DataTypes } from "sequelize";
import sequelize from "../database/database.js";
import { Client } from "./client.model.js";

/* Creating a table in the database. */
export const Company = sequelize.define(
    "company",
    {
        company_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        business_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        nit: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        timestamps: false,
    }
);

/* Creating a relationship between the two tables. */
Company.hasMany(Client, {
    foreingKey: "companyId_FK",
    sourceKey: "company_id",
});

Client.belongsTo(Company, {
    foreingKey: {
        allowNull: true,
        name: "companyId_FK",
    },
    targetId: "company_id",
});
