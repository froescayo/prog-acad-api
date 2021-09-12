import Joi from "joi";
import {
  civilStatusValidator,
  dateValidator,
  emailRequiredValidator,
  numberValidator,
  stringRequiredValidator,
  stringValidator,
  uuidValidator,
} from ".";

export const userValidator = Joi.object({
  academicDegreeId: uuidValidator,
  birthdate: dateValidator,
  careerId: uuidValidator,
  civilStatus: civilStatusValidator,
  email: emailRequiredValidator,
  firstName: stringRequiredValidator,
  lastName: stringRequiredValidator,
  levelId: uuidValidator,
  nationalityId: stringRequiredValidator,
  naturalidade: stringValidator,
  password: stringRequiredValidator,
  roleId: uuidValidator,
  siape: stringRequiredValidator,
  workload: numberValidator,
});
