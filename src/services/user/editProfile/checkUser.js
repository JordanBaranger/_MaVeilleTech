import jwt from "jsonwebtoken";
import User from "../../../models/user.js";

export const checkUserFunction = async (req, { username, email }) => {
  // Récupérer le token de l'utilisateur
  const authHeader = req.headers.authorization;
  const token = authHeader?.startsWith("Bearer ")
    ? authHeader.split(" ")[1]
    : null;

  if (!token) {
    throw new Error("Vous devez être connecté pour effectuer cette action");
  }

  let decoded;
  try {
    decoded = jwt.verify(token, process.env.JWT_SECRET);
  } catch (error) {
    throw new Error(
      "Session expirée ou token invalide. Veuillez vous reconnecter"
    );
  }

  // Vérifier si l'utilisateur existe
  const user = await User.findOne({ $or: [{ username }, { email }] });

  if (!user) {
    throw new Error("Utilisateur introuvable");
  }

  // Vérifier que l'ID du token correspond bien à l'utilisateur trouvé
  if (decoded.id !== user.id.toString()) {
    throw new Error("Vous n'avez pas les droits pour effectuer cette action");
  }

  // Vérifier le rôle après avoir récupéré l'utilisateur
  if (user.role !== "user") {
    throw new Error("Vous n'avez pas les droits pour effectuer cette action");
  }

  return user;
};
