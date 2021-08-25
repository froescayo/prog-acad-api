import { Router } from "express";
import { getCareers } from "../controllers";
import { auth } from "../middlewares/auth";

const routes = Router();

routes.get("/career", auth, getCareers);

export default routes;
