import Joi from "joi";
import { integerRequiredValidator, stringRequiredValidator } from ".";

export const activityValidator = Joi.object({
  text: stringRequiredValidator,
  fieldId: stringRequiredValidator,
  points: integerRequiredValidator,
});
