import { loginUserFunction } from "../../services/user/loginUser.js";

const loginController = {
  loginUser: async (req, res) => {
    try {
      const { username, password } = req.body;
      try {
        const { token, user } = await loginUserFunction({ username, password }); // TODO: INFOS TOKEN ET USER A SUPPRIMER!!
        return res
          .status(200)
          .json({ message: "Connexion réussie", token, user }); // TODO: INFOS TOKEN ET USER A SUPPRIMER!!
      } catch (error) {
        console.error("Erreur capturée dans le contrôleur :", error.message);

        return res.status(400).json({
          message: "Erreur lors de la connexion de l'utilisateur",
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

export default loginController;
