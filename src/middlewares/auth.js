import { verifyToken } from "../helpers/handleToken.js";

export const checkAuth = async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ").pop();
        const tokenData = await verifyToken(token);
        if (!tokenData._id)
            return res.status(409).json({ Error: "you need a token" });
        next();
    } catch (error) {
        return res.status(409).json({ Error: "you need a token" });
    }
};
