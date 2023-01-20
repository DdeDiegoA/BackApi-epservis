import { DataTypes } from "sequelize";
import sequelize from "../database/database.js";

/* Creating a table in the database. */
export const User = sequelize.define("user", {
    user_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    fullName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    role: {
        type: DataTypes.STRING,
        allowNull: false,
        default: "user",
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});
