import { Router } from "express";
import tokenVerified from "../../middlewares/JWT/verify.js";

const readItLaterRouter = Router();

// * GET /read-it-later
readItLaterRouter.get("/");

// * POST /read-it-later
readItLaterRouter.post("/", tokenVerified);

// * PUT /read-it-later
readItLaterRouter.put("/:id", tokenVerified);

// * DELETE /read-it-later
readItLaterRouter.delete("/:id", tokenVerified);

export default readItLaterRouter;
