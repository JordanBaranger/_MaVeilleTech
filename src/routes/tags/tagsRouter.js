import { Router } from "express";
import tokenVerified from "../../middlewares/JWT/verify.js";

const tagsRouter = Router();

// * GET /tags
tagsRouter.get("/tags");

// ADMIN ONLY
// * POST /tags
tagsRouter.post("/tags", tokenVerified);

// ADMIN ONLY
// * PUT /tags
tagsRouter.put("/tags/:id", tokenVerified);

// ADMIN ONLY
// * DELETE /tags
tagsRouter.delete("/tags/:id", tokenVerified);

export default tagsRouter;
