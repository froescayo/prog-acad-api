import { Router } from "express";
import { authRoutes, academicDegreeRoutes, careerRoutes, levelRoutes, roleRoutes, userRoutes } from "./routes";

// routes

const routes = Router();

routes.use(authRoutes);
routes.use(academicDegreeRoutes);
routes.use(careerRoutes);
routes.use(levelRoutes);
routes.use(roleRoutes);
routes.use(userRoutes);

export default routes;
