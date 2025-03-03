import { Router } from "express";
import tokenVerified from "../../middlewares/JWT/verify.js";

const readItLaterRouter = Router();

// * GET /read-it-later
readItLaterRouter.get("/read-it-later");

// * POST /read-it-later
readItLaterRouter.post("/read-it-later", tokenVerified);

// * PUT /read-it-later
readItLaterRouter.put("/read-it-later/:id", tokenVerified);

// * DELETE /read-it-later
readItLaterRouter.delete("/read-it-later/:id", tokenVerified);

export default readItLaterRouter;
