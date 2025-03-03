import { Router } from "express";

const globalPagesRouter = Router();

// * GET /home
globalPagesRouter.get("/home");

// * GET /about
globalPagesRouter.get("/about");

// * GET /general-terms-of-use
globalPagesRouter.get("/general-terms-of-use");

// * GET /privacy-policy
globalPagesRouter.get("/privacy-policy");

export default globalPagesRouter;
