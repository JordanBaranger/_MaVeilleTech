import User from "../../models/user.js";
import argon2 from "argon2";
import { validateInputs } from "./inputsValidator.js";

export const createUserFunction = async ({
  username,
  email,
  password,
  role,
}) => {
  try {
    console.log("Début de la création de l'utilisateur...");

    // Capture explicitement les erreurs de validation
    try {
      await validateInputs({ username, email, password, role });
    } catch (error) {
      console.error("Validation échouée :", error.message);
      // On rejette une erreur explicite pour qu'Express puisse la traiter
      throw new Error(`Validation échouée : ${error.message}`);
    }

    const hashedPassword = await argon2.hash(password);
    const user = await User.create({
      username,
      email,
      password: hashedPassword,
      role,
    });

    console.log("Utilisateur créé :", user.toJSON ? user.toJSON() : user);
    return {
      user: {
        id: user.id,
        username: user.username,
        email: user.email,
        role: user.role,
      },
    };
  } catch (error) {
    console.error("Erreur dans createUserFunction :", error);
    throw error; // Propagation correcte de l'erreur vers le contrôleur
  }
};
