import { Router } from "express";
import tagsRouter from "./tags/tagsRouter.js";
import readItLaterRouter from "./articles/readItLater.js";
import globalPagesRouter from "./globals/globalPages.js";
import newPostRouter from "./articles/newPost.js";
import articlesRouter from "./articles/articles.js";
import registerRouter from "./user/register.js";
import loginRouter from "./user/login.js";
import profilesRouter from "./user/profiles.js";

const router = Router();

router.use("/tags", tagsRouter);
router.use("/read-it-later", readItLaterRouter);
router.use("/global-pages", globalPagesRouter);
router.use("/new-post", newPostRouter);
router.use("/articles", articlesRouter);
router.use("/register", registerRouter);
router.use("/login", loginRouter);
router.use("/profiles", profilesRouter);

export default router;
