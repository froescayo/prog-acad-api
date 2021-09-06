import { Router } from "express";
import { createField } from "../controllers";
import { auth } from "../middlewares/auth";

const routes = Router();

routes.post("/field", auth, createField);

export default routes;
