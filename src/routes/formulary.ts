import { Router } from "express";
import { createFormulary } from "../controllers";
import { auth } from "../middlewares/auth";

const routes = Router();

routes.post("/formulary", auth, createFormulary);

export default routes;
