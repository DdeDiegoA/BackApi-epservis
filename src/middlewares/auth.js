import { verifyToken } from "../helpers/handleToken.js";

/**
 * * It checks if the user has a token, if not, it returns an error
 * @param req - the request object
 * @param res - the response object
 * @param next - This is a function that you call when you want to pass control to the next middleware
 * * function next() to continue
 */
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
