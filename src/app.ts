import cors from "cors";
import express from "express";
import helmet from "helmet";
import knex from "./knex";
import { globalErrorHandler, urlNotFoundHandler } from "./middlewares/error";
import { config } from "./middlewares/knex";
import routes from "./routes";

const app = express();

app.get("/", (_, res) => {
  res.status(200).json({ version: 1 }).end();
});

app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(config(knex));
app.use(routes);
app.use(urlNotFoundHandler);
app.use(globalErrorHandler);

export default app;
