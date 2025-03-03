import express from "express";
import "dotenv/config";

// * Importing mainRouter

import mainRouter from "./src/routes/mainRouter.js";

// * Importing middlewares

import errorHandler from "./src/middlewares/errorHandler/errorHandler.js";

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

// * Routes

app.use(mainRouter);
app.use(errorHandler);

// * Server

const PORT = process.env.PORT || 5000;
const PG_URL = process.env.PG_URL;
app.listen(PORT, () => {
  console.info(`Server is running on port ${PORT}`);
  console.info(`Database is running on ${PG_URL}`);
});
