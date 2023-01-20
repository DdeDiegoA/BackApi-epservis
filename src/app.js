import express from "express";
import levelsRoutes from "./routes/levels.routes.js";
import companyRoutes from "./routes/company.routes.js";
import planRoutes from "./routes/plan.routes.js";
import clientRoutes from "./routes/client.routes.js";
import userRoute from "./routes/user.routes.js";

//* settings
const app = express();

//* A middleware that allows us to parse the body of the request. */
app.use(express.json());

//* Importing the routes from the routes folder. */
app.use(levelsRoutes);
app.use(companyRoutes);
app.use(planRoutes);
app.use(clientRoutes);
app.use(userRoute);

export default app;
