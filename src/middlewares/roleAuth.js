import { verifyToken } from "../helpers/handleToken.js";
import { User } from "../models/user.model.js";

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
