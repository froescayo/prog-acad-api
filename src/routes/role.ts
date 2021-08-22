import { Router } from "express";
import { getRoles } from "../controllers";
import { auth } from "../middlewares/auth";

const roleRoutes = Router();

roleRoutes.get("/roles", auth, getRoles);

export default roleRoutes;
