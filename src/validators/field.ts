import Joi from "joi";
import { stringRequiredValidator } from ".";

export const fieldValidator = Joi.object({
  text: stringRequiredValidator,
});
