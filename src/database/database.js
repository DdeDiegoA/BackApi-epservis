import Sequelize from "sequelize";
import dotenv from "dotenv";
dotenv.config();

/* Creating a new instance of Sequelize and exporting it. */
const sequelize = new Sequelize(
    process.env.DB,
    process.env.USER,
    process.env.PASSWORD,
    {
        host: process.env.HOST,
        dialect: process.env.DIALECT,
    }
);
export default sequelize;
