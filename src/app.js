import express from "express";
import levelsRoutes from "./routes/levels.routes.js";
import companyRoutes from "./routes/company.routes.js";
import planRoutes from "./routes/plan.routes.js";
import clientRoutes from "./routes/client.routes.js";

const app = express();

//* middlewares
app.use(express.json());

//* routes
app.use(levelsRoutes);
app.use(companyRoutes);
app.use(planRoutes);
app.use(clientRoutes);

export default app;
