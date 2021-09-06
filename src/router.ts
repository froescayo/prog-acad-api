import { Router } from "express";
import { authRoutes, academicDegreeRoutes, careerRoutes, levelRoutes, roleRoutes, userRoutes, nationalityRoutes } from "./routes";

// routes

const routes = Router();

routes.use(authRoutes);
routes.use(academicDegreeRoutes);
routes.use(careerRoutes);
routes.use(levelRoutes);
routes.use(roleRoutes);
routes.use(userRoutes);
routes.use(nationalityRoutes);

export default routes;
