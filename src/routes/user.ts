import { Router } from "express";
import { createUser } from "../controllers";
import { auth } from "../middlewares/auth";

const routes = Router();

routes.post("/users", auth, createUser);

export default routes;
