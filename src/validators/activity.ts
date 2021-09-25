import Joi from "joi";

export const activityValidator = Joi.object({
  text: Joi.string().required(),
  fieldId: Joi.string().required(),
});
