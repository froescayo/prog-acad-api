import { Router } from "express";
import { getLevels } from "../controllers";
import { auth } from "../middlewares/auth";

const routes = Router();

routes.get("/level", auth, getLevels);

export default routes;
