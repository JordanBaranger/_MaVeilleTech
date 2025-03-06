import User from "../../models/user.js";
import { passwordSchema } from "../../config/passwordSchema.js";

export const validateInputs = async ({ username, email, password, role }) => {
  if (!username || !email || !password || !role) {
    throw new Error("Veuillez remplir tous les champs");
  }

  const existingUser = await User.findOne({ where: { username } });
  if (existingUser) {
    throw new Error("le nom d'utilisateur est déjà utilisé");
  }

  const failingRules = passwordSchema.validate(password, { list: true });
  if (failingRules.length > 0) {
    let errorMessage = "Le mot de passe ne respecte pas les exigences : ";
    if (failingRules.includes("min")) errorMessage += "au moins 6 caractères, ";
    if (failingRules.includes("max")) errorMessage += "maximum 64 caractères, ";
    if (failingRules.includes("uppercase"))
      errorMessage += "au moins une majuscule, ";
    if (failingRules.includes("lowercase"))
      errorMessage += "au moins une minuscule, ";
    if (failingRules.includes("digits"))
      errorMessage += "au moins un chiffre, ";
    if (failingRules.includes("spaces")) errorMessage += "pas d'espaces, ";
    throw new Error(errorMessage.slice(0, -2));
  }

  if (role !== "user") {
    throw new Error('Le rôle doit être "user"');
  }
};
