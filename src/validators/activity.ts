import Joi from "joi";
import { stringRequiredValidator } from ".";

export const activityValidator = Joi.object({
  text: stringRequiredValidator,
  fieldId: stringRequiredValidator,
});
