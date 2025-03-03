import jwt from "jsonwebtoken";

export default function tokenVerified(req, res, next) {
  const token = req.headers.authorization?.split(" ")[1]; // Récupère le token en enlevant "Bearer"

  if (!token) {
    return res
      .status(401)
      .json({ message: "Access denied. No token provided." });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // Ajoute l'utilisateur décodé à la requête
    next(); // Passe à la suite
  } catch (error) {
    return res.status(401).json({ message: "Invalid or expired token." });
  }
}
