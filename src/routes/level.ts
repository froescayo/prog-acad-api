import { Router } from "express";
import { getLevels } from "../controllers";
import { auth } from "../middlewares/auth";

const levelRoutes = Router();

levelRoutes.get("/level", auth, getLevels);

export default levelRoutes;
