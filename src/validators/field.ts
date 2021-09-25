import Joi from "joi";

export const fieldValidator = Joi.object({
  text: Joi.string().required(),
});
