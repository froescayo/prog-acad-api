import { Router } from "express";
import { getAcademicDegrees } from "../controllers";
import { auth } from "../middlewares/auth";

const routes = Router();

routes.get("/academicDegree", auth, getAcademicDegrees);

export default routes;
