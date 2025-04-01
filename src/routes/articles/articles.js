import { Router } from "express";
import tokenVerified from "../../middlewares/JWT/verify.js";
import korben from "../../controllers/fetching/korbenRss.js";

const articlesRouter = Router();

// * GET /articles/korben
articlesRouter.get("/korben", korben);
articlesRouter.get("/korben/:id", korben);

// * POST /articles/
articlesRouter.post("/", tokenVerified);

// * PUT /articles/
articlesRouter.put("/:id", tokenVerified);

// * DELETE /articles/
articlesRouter.delete("/:id", tokenVerified);

export default articlesRouter;
