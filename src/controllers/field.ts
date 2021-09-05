import { Request, Response } from "express";
import { ValidationError } from "../helpers/apiError";
import { FieldInput } from "../types";
import { fieldValidator } from "../validators";

export async function createField(req: Request, res: Response) {
  const fieldInput: FieldInput = req.body;

  const { error } = fieldValidator.validate(fieldInput);

  if (error) {
    throw new ValidationError(error.message);
  }

  const dbField = await req.db.FieldRepository.insert(fieldInput);

  return res.status(200).send(dbField);
}
