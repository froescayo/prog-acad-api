import { Router } from "express";
import {
  authRoutes,
  academicDegreeRoutes,
  careerRoutes,
  levelRoutes,
  roleRoutes,
  userRoutes,
  fieldRoutes,
} from "./routes";

// routes

const routes = Router();

routes.use(academicDegreeRoutes);
routes.use(authRoutes);
routes.use(careerRoutes);
routes.use(fieldRoutes);
routes.use(levelRoutes);
routes.use(roleRoutes);
routes.use(userRoutes);

export default routes;
