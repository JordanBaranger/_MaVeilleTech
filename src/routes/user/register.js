import { Router } from "express";
import createUserController from "../../controllers/register/createUser.controller.js";

const registerRouter = Router();

// * POST /register
registerRouter.post("/", createUserController.createUser);

export default registerRouter;
