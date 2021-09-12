import { Router } from "express";
import { createActivity } from "../controllers";

import { auth } from "../middlewares/auth";

const routes = Router();

routes.post("/activity", auth, createActivity);

export default routes;
