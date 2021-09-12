import Joi from "joi";
import { CivilStatus } from "../types/enums";

export const stringValidator = Joi.string();
export const stringRequiredValidator = stringValidator.required();
export const uuidValidator = stringRequiredValidator.guid({ version: ["uuidv4"] });
export const numberValidator = Joi.number();
export const civilStatusValidator = stringRequiredValidator.valid(...Object.values(CivilStatus));
export const dateValidator = Joi.date();
export const emailRequiredValidator = Joi.string().email().required();
