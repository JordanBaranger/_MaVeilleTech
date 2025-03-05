import { Router } from "express";
import tokenVerified from "../../middlewares/JWT/verify.js";

const articlesRouter = Router();

// * GET /articles/
articlesRouter.get("/");
articlesRouter.get("/:id");

// * POST /articles/
articlesRouter.post("/", tokenVerified);

// * PUT /articles/
articlesRouter.put("/:id", tokenVerified);

// * DELETE /articles/
articlesRouter.delete("/:id", tokenVerified);

export default articlesRouter;
