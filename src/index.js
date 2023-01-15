import { swaggerDocs as V1SwaggerDocs } from "./swaggerConf/swagger.js";
import app from "./app.js";
import sequelize from "./database/database.js";
import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT || 4000;

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
