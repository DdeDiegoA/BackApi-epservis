import { verifyToken } from "../helpers/handleToken.js";
import { User } from "../models/user.model.js";

/**
 * It checks if the user has the role to access the route
 * @param roles - The roles that are allowed to access the route.
 * @returns a function that is being called by the route.
 */
export const checkRoleAuth = (roles) => async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ").pop();
        const tokenData = await verifyToken(token);
        const userData = await User.findByPk(tokenData._id);
        if (![].concat(roles).includes(userData.role))
            return res
                .status(401)
                .json({ message: "no tienes permisos para esta consulta" });
        next();
    } catch (error) {
        return res
            .status(409)
            .json({ Error: "no tienes permisos para esta consulta" });
    }
};
