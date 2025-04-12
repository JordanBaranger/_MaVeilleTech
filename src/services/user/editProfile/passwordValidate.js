import argon2 from "argon2";
import passwordSchema from "../../config/passwordSchema.js";

export const passwordValidation = async ({
  password,
  confirmPassword,
  selectedUser,
}) => {
  if (password !== confirmPassword) {
    throw new Error("Les mots de passe doivent être identiques");
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

  let hashedPassword = selectedUser.password;
  if (password) {
    hashedPassword = await argon2.hash(password);
  }

  return hashedPassword;
};
