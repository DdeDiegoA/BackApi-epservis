import { Router } from "express";
import {
    getLevels,
    createLevel,
    deleteLevel,
    getLevelById,
    updateLevel,
} from "../controllers/levels.controller.js";
import { checkAuth } from "../middlewares/auth.js";
import { checkRoleAuth } from "../middlewares/roleAuth.js";
import { cacheInit } from "../middlewares/cache.js";

const router = Router();

/* A route that is going to be used to get all the levels of the database. */
router.get(
    "/level", //? path
    checkAuth, //? middleware to check if the user is login
    checkRoleAuth(["admin"]), //? middleware to check if the user fulfills the role
    cacheInit, //? middleware for manage the cache
    getLevels //? the method for the control of the route
);

/* Creating a route for the post method, and it is going to be used to create a level. */
router.post(
    "/level", //? the method to the control of the route
    checkAuth, //? the method for the control of the route
    checkRoleAuth(["admin"]), //? the method for the control of the route
    createLevel //? the method for the control of the route
);
/* A route that is going to be used to update a level of the database. */
router.put(
    "/level/:id", //? the method to the control of the route
    checkAuth, //? the method for the control of the route
    checkRoleAuth(["admin"]), //? the method for the control of the route
    updateLevel //? the method for the control of the route
);
/* A route that is going to be used to delete a level of the database. */
router.delete(
    "/level/:id", //? the method to the control of the route
    checkAuth, //? the method for the control of the route
    checkRoleAuth(["admin"]), //? the method for the control of the route
    deleteLevel //? the method for the control of the route
);
/* A route that is going to be used to get a level of the database. */
router.get(
    "/level/:id", //? the method to the control of the route
    checkAuth, //? the method for the control of the route
    checkRoleAuth(["admin"]), //? the method for the control of the route
    getLevelById //? the method for the control of the route
);

export default router;
