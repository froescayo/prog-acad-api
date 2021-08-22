import { Router } from "express";
import { createUser } from "../controllers";
import { auth } from "../middlewares/auth";

const userRoutes = Router();

userRoutes.post("/users", auth, createUser);

export default userRoutes;
