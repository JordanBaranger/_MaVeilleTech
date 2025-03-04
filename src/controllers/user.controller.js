import { createUser } from "../services/user/validateUser";

const userController = {
  // Create a new user
  createUser: async (req, res) => {
    try {
      const { pseudo, email, password, role } = req.body;

      try {
        createUser({ pseudo, email, password, role });
        return res
          .status(201)
          .json({ message: "Utilisateur créé avec succès" });
      } catch (error) {
        return res.status(400).json({
          message: "Erreur lors de la création de l'utilisateur",
          error: error.message,
        });
      }
    } catch (error) {
      return res
        .status(500)
        .json({ message: "Erreur serveur", error: error.message });
    }
  },
};

export default userController;
