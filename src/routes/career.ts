import { Router } from "express";
import { getCareers } from "../controllers";
import { auth } from "../middlewares/auth";

const careerRoutes = Router();

careerRoutes.get("/career", auth, getCareers);

export default careerRoutes;
