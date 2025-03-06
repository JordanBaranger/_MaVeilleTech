import Passwordvalidator from "password-validator";

export const passwordSchema = new Passwordvalidator();

// Contraintes du mot de passe
passwordSchema
  .is()
  .min(6) // minimum 6 caractères
  .is()
  .max(64) // maximum 64 caractères
  .has()
  .uppercase() // Au moins une majuscule
  .has()
  .lowercase() // Au moins une minuscule
  .has()
  .digits(1) // Au moins un chiffre/nombre
  .has()
  .not()
  .spaces(); // Pas d'espaces
