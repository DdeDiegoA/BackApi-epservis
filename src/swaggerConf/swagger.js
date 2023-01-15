import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import { swaggerJson } from "./swagger.json.js";
// import swaggerJson from "./swagger.json";

//* Metadataswagger

//* Funcion to setup our docs
export const swaggerDocs = (app, port) => {
    app.use("/api/routes/docs", swaggerUi.serve, swaggerUi.setup(swaggerJson));

    console.log(
        `Version 1 Docs are aviable at: http://localhost:${port}/api/routes/docs`
    );
};
