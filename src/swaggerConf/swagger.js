import swaggerUi from "swagger-ui-express";
import { swaggerJson } from "./swagger.json.js";

/*
 * This function is used to serve the swagger documentation for the API
 * @param app - The express app
 * @param port - The port number that the server is running on.
 */

export const swaggerDocs = (app, port) => {
    app.use("/api/routes/docs", swaggerUi.serve, swaggerUi.setup(swaggerJson));

    console.log(
        `Version 1 Docs are aviable at: http://localhost:${port}/api/routes/docs`
    );
};
