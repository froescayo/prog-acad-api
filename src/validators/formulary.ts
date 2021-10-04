import Joi from "joi";
import { FormularyType } from "../types";

export const formularyValidator = Joi.object({
  type: Joi.string().valid(...Object.values(FormularyType)),
  period: Joi.object({
    from: Joi.date().required(),
    to: Joi.date().required(),
  }),
  comission: Joi.array().items({
    professorName: Joi.string().required(),
    department: Joi.string().allow(null),
    institute: Joi.string().allow(null),
  }),
  answers: Joi.array().items({
    fieldId: Joi.string().required(),
    activityId: Joi.string().required(),
    answer: Joi.array().items({
      semester: Joi.string().required(),
      points: Joi.number().required(),
    }),
  }),
});
