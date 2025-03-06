import { createUserFunction } from "../../services/user/createUser.js";

const createUserController = {
  // Create a new user
  createUser: async (req, res) => {
    try {
      const { username, email, password, role } = req.body;

      // Utilisation de await pour bien récupérer l'erreur
      await createUserFunction({ username, email, password, role });

      return res.status(201).json({ message: "Utilisateur créé avec succès" });
    } catch (error) {
      console.error("Erreur capturée dans le contrôleur :", error.message);

      // Assurer une réponse HTTP valide même en cas d'erreur
      return res.status(400).json({
        message: "Erreur lors de la création de l'utilisateur",
        error: error.message,
      });
    }
  },
};

export default createUserController;
