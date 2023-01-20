import { User } from "../models/user.model.js";
import { encrypt, compare } from "../helpers/handleBcrypt.js";
import { tokenSign } from "../helpers/handleToken.js";

/**
 * It's a function that returns a promise that resolves to an array of objects.
 * @param req - The request object.
 * @param res - The response object.
 * @returns An array of objects.
 */
export const getUsers = async (req, res) => {
    try {
        const users = await User.findAll();
        res.json(users);
    } catch (error) {
        return res.status(404).json({ message: error.message });
    }
};

/**
 * It creates a new user in the database.
 * @param req - the request object in the body
 * @param res - the response for user
 * @returns The new user created succesfully
 */
export const registerUser = async (req, res) => {
    try {
        const { fullName, email, role, password } = req.body;
        const passwordHash = await encrypt(password);
        const newUser = await User.create({
            fullName,
            email,
            role,
            password: passwordHash,
        });
        res.json({
            message: "new user created succesfully",
            body: newUser,
        });
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
};

/**
 * It takes the email and password from the request body, finds the user in the database, compares the
 * password, and returns the user and a token if the password is correct
 * @param req - The request object.
 * @param res - The response object.
 * @returns The user object and the tokenSession.
 */
export const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({
            where: {
                email,
            },
        });
        if (!user) return res.status(404).json({ error: "User not Found" });

        const checkPasswrd = await compare(password, user.password);
        const tokenSession = await tokenSign(user);
        if (!checkPasswrd)
            return res.status(409).json({ message: "Invalid password" });
        res.json({
            body: user,
            tokenSession,
        });
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
};

/**
 * It takes the userId from the request params, finds the user in the database, updates the user
 * with the data from the request body, and then returns the updated user.
 * @param req - The request object.
 * @param res - the response object
 * @returns The updated user object.
 */
export const updateUser = async (req, res) => {
    try {
        const userId = req.params.id;
        const userToUpdate = await User.findByPk(userId);

        userToUpdate.set(req.body);
        await userToUpdate.save();

        return res.json(userToUpdate);
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
};

/**
 * It deletes a user from the database.
 * @param req - The request object.
 * @param res - the response object
 * @returns The response is a 204 status code.
 */
export const deleteUser = async (req, res) => {
    try {
        const userId = req.params.id;
        const deletedUser = await User.destroy({
            where: {
                user_id: userId,
            },
        });
        return res.sendStatus(204);
    } catch (error) {
        return res.status(401).json({ message: error.message });
    }
};

/**
 * It's a function that gets a user by id from the database and returns it in the response.
 * @param req - The request object.
 * @param res - The response object.
 * @returns The user with the id that was passed in the request.
 */
export const getUserById = async (req, res) => {
    try {
        const userId = req.params.id;
        const user = await User.findByPk(userId);
        if (!user)
            return res.status(404).json({
                message: `el usuario con el id ${userId} no existe`,
            });
        res.json(user);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};
