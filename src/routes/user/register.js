import { Router } from "express";
import userController from "../../controllers/user.controller.js";

const registerRouter = Router();

// * POST /register
registerRouter.post("/", userController.createUser);

export default registerRouter;
