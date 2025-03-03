import { Router } from "express";
import tokenVerified from "../../middlewares/JWT/verify.js";

const profilesRouter = Router();

// * GET /profile/
profilesRouter.get("/profile/:id");

// * POST /profile/
profilesRouter.post("/profile", tokenVerified);

// * PUT /profile/
profilesRouter.put("/profile/:id", tokenVerified);

// * DELETE /profile/
profilesRouter.delete("/profile/:id", tokenVerified);

export default profilesRouter;
