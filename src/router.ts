import { Router } from "express";

import {
  authRoutes,
  academicDegreeRoutes,
  careerRoutes,
  levelRoutes,
  roleRoutes,
  userRoutes,
  fieldRoutes,
  nationalityRoutes,
  activityRoutes,
} from "./routes";

// routes

const routes = Router();

routes.use(academicDegreeRoutes);
routes.use(activityRoutes);
routes.use(authRoutes);
routes.use(careerRoutes);
routes.use(fieldRoutes);
routes.use(levelRoutes);
routes.use(roleRoutes);
routes.use(userRoutes);
routes.use(nationalityRoutes);

export default routes;
