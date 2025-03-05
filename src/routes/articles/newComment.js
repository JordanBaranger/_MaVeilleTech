import { Router } from "express";
import tokenVerified from "../../middlewares/JWT/verify.js";

const newCommentRouter = Router();

// * POST /newPost/
newCommentRouter.post("/", tokenVerified);

export default newCommentRouter;
