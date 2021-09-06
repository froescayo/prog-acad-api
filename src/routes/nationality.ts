import { Router } from "express";
import { getNationality } from "../controllers";

const routes = Router();

routes.get("/nationality", getNationality);

export default routes;
