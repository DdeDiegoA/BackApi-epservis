import jwt from "jsonwebtoken";

/**
 * * It takes a user object and returns a signed JWT token.
 * @param user - {object}
 * @returns A token
 */
export const tokenSign = async (user) => {
    return jwt.sign(
        /* The payload. */
        {
            _id: user.user_id,
            role: user.role,
        },
        /* A secret key that is used to sign the token. */
        process.env.JWT_SECRET,
        {
            expiresIn: "2h",
        }
    );
};

/**
 * It takes a token as an argument, and returns the decoded token if it's valid, or null if it's not.
 * @param token - The token to verify
 * @returns The token is being verified and if it is valid, the token is returned. If it is not valid,
 * null is returned.
 */
export const verifyToken = async (token) => {
    try {
        return jwt.verify(token, process.env.JWT_SECRET);
    } catch (error) {
        return null;
    }
};
