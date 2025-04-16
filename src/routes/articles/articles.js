import { Router } from "express";
import tokenVerified from "../../middlewares/JWT/verify.js";
import rssController from "../../controllers/fetching/fetchRssController.js";

const articlesRouter = Router();

// * GET /articles/korben
articlesRouter.get("/korben", rssController.korbenRss);
articlesRouter.get("/korben/:id", rssController.korbenRss);

// * GET /articles/developpez
articlesRouter.get("/developpez", rssController.developpezRss);
articlesRouter.get("/developpez/:id", rssController.developpezRss);

// * GET /articles/les-joies-du-code
articlesRouter.get("/les-joies-du-code", rssController.lesJoiesDuCodeRss);
articlesRouter.get("/les-joies-du-code/:id", rssController.lesJoiesDuCodeRss);

// * GET /articles/frandroid
articlesRouter.get("/frandroid", rssController.frandroidRss);
articlesRouter.get("/frandroid/:id", rssController.frandroidRss);

// * GET /articles/zataz
articlesRouter.get("/zataz", rssController.zatazRss);
articlesRouter.get("/zataz/:id", rssController.zatazRss);

// * GET /articles/next-ink
articlesRouter.get("/next-ink", rssController.nextinpactRss);
articlesRouter.get("/next-ink/:id", rssController.nextinpactRss);

// * POST /articles/
articlesRouter.post("/", tokenVerified);

// * PUT /articles/
articlesRouter.put("/:id", tokenVerified);

// * DELETE /articles/
articlesRouter.delete("/:id", tokenVerified);

export default articlesRouter;
