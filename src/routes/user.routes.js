import { Router } from "express";
import {
    registerUser,
    deleteUser,
    getUserById,
    getUsers,
    updateUser,
    loginUser,
} from "../controllers/user.controller.js";
import { checkAuth } from "../middlewares/auth.js";
import { checkRoleAuth } from "../middlewares/roleAuth.js";
import { cacheInit } from "../middlewares/cache.js";

const router = Router();

/* This is a route for the method GET, the path is /user, the middleware checkAuth is for check if the
user is login, the middleware checkRoleAuth is for check if the user fulfills the role, the
middleware cacheInit is for manage the cache and the method getUsers is for the control of the
route. */
router.get(
    "/user", //? path
    checkAuth, //? middleware to check if the user is login
    checkRoleAuth(["user", "admin"]), //? middleware to check if the user fulfills the role
    cacheInit, //? middleware for manage the cache
    getUsers //? the method for the control of the route
);

/* This is a route for the method POST, the path is /register, the method registerUser is for the
control of the route. */
router.post(
    "/register", //? path
    registerUser //? the method for the control of the route
);

/* This is a route for the method POST, the path is /login, the method loginUser is for the control of
the route. */
router.post(
    "/login", //? path
    loginUser //? the method for the control of the route
);

/* This is a route for the method PUT, the path is /user/:id, the middleware checkAuth is for check if
the
user is login, the middleware checkRoleAuth is for check if the user fulfills the role, the
method updateUser is for the control of the route. */
router.put(
    "/user/:id", //? path
    checkAuth, //? middleware to check if the user is login
    checkRoleAuth(["admin"]), //? middleware to check if the user fulfills the role
    updateUser //? the method for the control of the route
);

/* This is a route for the method DELETE, the path is /user/:id, the middleware checkAuth is for check
if the user is login, the middleware checkRoleAuth is for check if the user fulfills the role, the
method deleteUser is for the control of the route. */
router.delete(
    "/user/:id", //? path
    checkAuth, //? middleware to check if the user is login
    checkRoleAuth(["admin"]), //? middleware to check if the user fulfills the role
    deleteUser //? the method for the control of the route
);

/* This is a route for the method GET, the path is /user/:id, the middleware checkAuth is for check if
the user is login, the middleware checkRoleAuth is for check if the user fulfills the role, the
method getUserById is for the control of the route. */
router.get(
    "/user/:id", //? path
    checkAuth, //? middleware to check if the user is login
    checkRoleAuth(["admin"]), //? middleware to check if the user fulfills the role
    getUserById //? the method for the control of the route
);

export default router;
