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

router.get(
    "/user",
    checkAuth,
    checkRoleAuth(["user", "admin"]),
    cacheInit,
    getUsers
);
router.post("/register", registerUser);
router.post("/login", loginUser);
router.put("/user/:id", checkAuth, checkRoleAuth(["admin"]), updateUser);
router.delete("/user/:id", checkAuth, checkRoleAuth(["admin"]), deleteUser);
router.get("/user/:id", checkAuth, checkRoleAuth(["admin"]), getUserById);

export default router;
