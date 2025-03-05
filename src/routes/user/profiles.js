import { Router } from "express";
import tokenVerified from "../../middlewares/JWT/verify.js";

const profilesRouter = Router();

// * GET /profile/
profilesRouter.get("/:id");

// * POST /profile/
profilesRouter.post("/", tokenVerified);

// * PUT /profile/
profilesRouter.put("/:id", tokenVerified);

// * DELETE /profile/
profilesRouter.delete("/:id", tokenVerified);

export default profilesRouter;
