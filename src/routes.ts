import { Router } from "express";
import academicDegreeRoutes from "./routes/academicDegree";
import careerRoutes from "./routes/career";
import levelRoutes from "./routes/level";
import roleRoutes from "./routes/role";

const routes = Router();

routes.use(academicDegreeRoutes);
routes.use(careerRoutes);
routes.use(levelRoutes);
routes.use(roleRoutes);

export default routes;
