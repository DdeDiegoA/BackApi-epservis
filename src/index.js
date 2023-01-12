import app from "./app.js";
import sequelize from "./database/database.js";
import "./models/client.model.js";
import "./models/plan.model.js";
import "./models/company.model.js";
import "./models/level.model.js";

async function main() {
    try {
        await sequelize.sync({ force: true });
        app.listen(4000);
        console.log("server is listening on port", 4000);
    } catch (error) {
        console.log("Unable to connect to the database", error);
    }
}
main();
