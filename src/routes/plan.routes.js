import { Router } from "express";
import {
    createPlan,
    deletePlan,
    getClientPlan,
    getPlanById,
    getPlans,
    updatePlan,
} from "../controllers/plan.controller.js";
import { checkAuth } from "../middlewares/auth.js";
import { checkRoleAuth } from "../middlewares/roleAuth.js";
import { cacheInit } from "../middlewares/cache.js";

const router = Router();

/* A route for the method GET, the path is /plan, the middleware checkAuth is for check if the user is
login, the middleware checkRoleAuth is for check if the user fulfills the role, the middleware
cacheInit is for manage the cache and the method getPlans is for the control of the route. */

router.get(
    "/plan", //? path
    checkAuth, //? middleware to check if the user is login
    checkRoleAuth(["admin"]), //? middleware to check if the user fulfills the role
    cacheInit, //? middleware for manage the cache
    getPlans //? the method for the control of the route
);

/* A route for the method POST, the path is /plan, the middleware checkAuth is for check if the user is
login, the middleware checkRoleAuth is for check if the user fulfills the role and the method
createPlan is for the control of the route. */
router.post(
    "/plan", //? path
    checkAuth, //? middleware to check if the user is login
    checkRoleAuth(["admin"]), //? middleware to check if the user fulfills the role
    createPlan //? the method for the control of the route
);

/* This is a route for the method PUT, the path is /plan/:id, the middleware checkAuth is for check if
the user is login, the middleware checkRoleAuth is for check if the user fulfills the role and the method
updatePlan is for the control of the route. */
router.put(
    "/plan/:id", //? path
    checkAuth, //? middleware to check if the user is login
    checkRoleAuth(["admin"]), //? middleware to check if the user fulfills the role
    updatePlan //? the method for the control of the route
);

/* This is a route for the method DELETE, the path is /plan/:id, the middleware checkAuth is for check
if the user is login, the middleware checkRoleAuth is for check if the user fulfills the role and
the method deletePlan is for the control of the route. */
router.delete(
    "/plan/:id", //? path
    checkAuth, //? middleware to check if the user is login
    checkRoleAuth(["admin"]), //? middleware to check if the user fulfills the role
    deletePlan //? the method for the control of the route
);

/* This is a route for the method GET, the path is /plan/:id, the middleware checkAuth is for check if
the user is login, the middleware checkRoleAuth is for check if the user fulfills the role and the
method getPlanById is for the control of the route. */
router.get(
    "/plan/:id", //? path
    checkAuth, //? middleware to check if the user is login
    checkRoleAuth(["admin"]), //? middleware to check if the user fulfills the role
    getPlanById //? the method for the control of the route
);

/* This is a route for the method GET, the path is /plan/:id/client, the middleware checkAuth is for
check if the user is login, the middleware checkRoleAuth is for check if the user fulfills the role
and the method getClientPlan is for the control of the route. */
router.get(
    "/plan/:id/client", //? path
    checkAuth, //? middleware to check if the user is login
    checkRoleAuth(["admin"]), //? middleware to check if the user fulfills the role
    getClientPlan //? the method for the control of the route
);

export default router;
