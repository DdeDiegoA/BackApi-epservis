import jwt from "jsonwebtoken";

export const tokenSign = async (user) => {
    return jwt.sign(
        {
            _id: user.user_id,
            role: user.role,
        },
        process.env.JWT_SECRET,
        {
            expiresIn: "2h",
        }
    );
};
export const verifyToken = async (token) => {
    try {
        return jwt.verify(token, process.env.JWT_SECRET);
    } catch (error) {
        return null;
    }
};

export const decodeSign = (token) => {};
