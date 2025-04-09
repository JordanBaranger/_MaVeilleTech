import express from "express";
import "dotenv/config";
import cors from "cors";

// * Importing mainRouter

import mainRouter from "./src/routes/mainRouter.js";

// * Importing middlewares

import errorHandler from "./src/middlewares/errorHandler/errorHandler.js";

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

// * CORS config

const allowedOrigins = [
  "http://localhost:3000",
  "http://localhost:5173",
  "https://korben.info",
];

const corsOptions = {
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};

app.use(cors(corsOptions));

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
