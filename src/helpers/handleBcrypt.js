import bcrypt from "bcryptjs";

/**
 * This function takes a string and returns a hash of that string.
 * @param textPlain - The text you want to encrypt.
 * @returns A Promise
 */
export const encrypt = async (textPlain) => {
    const hash = await bcrypt.hash(textPlain, 12);
    return hash;
};

/**
 * This function takes a plain text password and a hashed password and returns a boolean value
 * indicating whether the plain text password matches the hashed password.
 * @param passwordPlain - The password that the user entered
 * @param hashPassword - The hashed password that was stored in the database.
 * @returns A promise.
 */
export const compare = async (passwordPlain, hashPassword) => {
    return await bcrypt.compare(passwordPlain, hashPassword);
};
