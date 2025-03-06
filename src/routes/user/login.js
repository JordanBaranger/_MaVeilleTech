import { Router } from "express";
import usercontroller from "../../controllers/user.controller.js";

const loginRouter = Router();

// * POST /login/
loginRouter.post("/", usercontroller.loginUser);

export default loginRouter;
