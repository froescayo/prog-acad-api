import { Router } from "express";
import academicDegreeRoutes from "./routes/academicDegree";
import authRoutes from "./routes/auth";
import careerRoutes from "./routes/career";
import levelRoutes from "./routes/level";
import roleRoutes from "./routes/role";
import userRoutes from "./routes/user";

const routes = Router();

routes.use(authRoutes);
routes.use(academicDegreeRoutes);
routes.use(careerRoutes);
routes.use(levelRoutes);
routes.use(roleRoutes);
routes.use(userRoutes);

export default routes;
