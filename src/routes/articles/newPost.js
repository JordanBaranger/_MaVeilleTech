import { Router } from "express";
import tokenVerified from "../../middlewares/JWT/verify.js";

const newPostRouter = Router();

// * POST /newPost/
newPostRouter.post("/newPost", tokenVerified);

export default newPostRouter;
