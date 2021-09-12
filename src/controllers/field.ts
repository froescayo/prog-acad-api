import { Request, Response } from "express";
import { DuplicatedEntityError, ServerError, ValidationError } from "../helpers/apiError";
import { FieldInput, KnexError } from "../types";
import { fieldValidator } from "../validators";

export async function createField(req: Request, res: Response) {
  const fieldInput: FieldInput = req.body;

  const { error } = fieldValidator.validate(fieldInput);

  if (error) {
    throw new ValidationError(error.message);
  }

  try {
    const dbField = await req.db.FieldRepository.findOneBy({ text: fieldInput.text });

    if (dbField) {
      throw new DuplicatedEntityError("There is already a field with this text");
    }

    const newField = await req.db.FieldRepository.insert(fieldInput);

    return res.status(200).send(newField);
  } catch (error) {
    throw new ServerError((error as KnexError).detail);
  }
}
