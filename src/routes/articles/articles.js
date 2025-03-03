import { Router } from "express";
import tokenVerified from "../../middlewares/JWT/verify.js";

const articlesRouter = Router();

// * GET /articles/
articlesRouter.get("/articles");
articlesRouter.get("/articles/:id");

// * POST /articles/
articlesRouter.post("/articles", tokenVerified);

// * PUT /articles/
articlesRouter.put("/articles/:id", tokenVerified);

// * DELETE /articles/
articlesRouter.delete("/articles/:id", tokenVerified);

export default articlesRouter;
