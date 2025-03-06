import { Router } from "express";
import logincontroller from "../../controllers/login/login.controller.js";

const loginRouter = Router();

// * POST /login/
loginRouter.post("/", logincontroller.loginUser);

export default loginRouter;
