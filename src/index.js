import { swaggerDocs as V1SwaggerDocs } from "./swaggerConf/swagger.js";
import app from "./app.js";
import sequelize from "./database/database.js";
import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT || 4000;

/**
 * * The main function is an async function that will try to sync the database, and if it succeeds, it
 * * will start the server and listen on the port specified in the PORT variable.
 */
async function main() {
    try {
        await sequelize.sync({ force: false });
        V1SwaggerDocs(app, PORT);
        app.listen(PORT);
        console.log("server is listening on port", PORT);
    } catch (error) {
        console.log("Unable to connect to the database", error);
    }
}
main();
