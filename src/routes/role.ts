import { Router } from "express";
import { getRoles } from "../controllers";
import { auth } from "../middlewares/auth";

const routes = Router();

routes.get("/roles", auth, getRoles);

export default routes;
