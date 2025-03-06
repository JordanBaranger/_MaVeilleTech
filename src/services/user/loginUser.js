import User from "../../models/user.js";
import generateToken from "../../JWT/generate.js";
import argon2 from "argon2";

export const loginUserFunction = async ({ username, password, req, res }) => {
  try {
    const user = await User.findOne({ where: { username } });
    if (!user) {
      throw new Error("Utilisateur non trouvé");
    }

    const validPassword = await argon2.verify(user.password, password);
    if (!validPassword) {
      throw new Error("Mot de passe incorrect");
    }

    const token = generateToken(user);

    return { token, user };
  } catch (error) {
    throw new Error(error.message);
  }
};
