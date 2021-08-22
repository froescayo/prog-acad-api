import { Router } from "express";
import { getAcademicDegrees } from "../controllers";
import { auth } from "../middlewares/auth";

const academicDegreeRoutes = Router();

academicDegreeRoutes.get("/academicDegree", auth, getAcademicDegrees);

export default academicDegreeRoutes;
