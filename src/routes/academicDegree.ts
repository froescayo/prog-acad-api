import { Router } from "express";
import { getAcademicDegree } from "../controllers";
import { auth } from "../middlewares/auth";

const academicDegreeRoutes = Router();

academicDegreeRoutes.get("/academicDegree", auth, getAcademicDegree);

export default academicDegreeRoutes;
