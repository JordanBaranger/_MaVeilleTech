import { Router } from "express";
import tokenVerified from "../../middlewares/JWT/verify.js";

const tagsRouter = Router();

// * GET /tags
tagsRouter.get("/");

// ADMIN ONLY
// * POST /tags
tagsRouter.post("/", tokenVerified);

// ADMIN ONLY
// * PUT /tags
tagsRouter.put("/:id", tokenVerified);

// ADMIN ONLY
// * DELETE /tags
tagsRouter.delete("/:id", tokenVerified);

export default tagsRouter;
