import { Request, Response } from "express";
import { NotFoundError, ServerError, ValidationError } from "../helpers/apiError";
import { FormularyInput, KnexError } from "../types";
import { formularyValidator } from "../validators";

export async function createFormulary(req: Request, res: Response) {
  const formularyInput: FormularyInput = req.body;

  const { error } = formularyValidator.validate(formularyInput);

  if (error) {
    throw new ValidationError(error.message);
  }

  try {
    const result = req.knex.transaction(async trx => {
      const answers = [];

      const dbFormulary = await req.db.FormularyRepository.insert(
        {
          type: formularyInput.type,
          from: formularyInput.period.from,
          to: formularyInput.period.to,
          userId: req.decodedJTW.id,
          comission: formularyInput.comission,
        },
        trx,
      );

      for (const item of formularyInput.answers) {
        const dbField = await req.db.FieldRepository.findOneBy({ id: item.fieldId }, trx);
        const dbActivity = await req.db.ActivityRepository.findOneBy({ id: item.activityId }, trx);

        if (!dbField || !dbActivity) {
          throw new NotFoundError("We weren't able to find some field or activity.");
        }

        const dbFormularyAnswer = await req.db.FormularyAnswerRepository.insert(
          {
            formularyId: dbFormulary.id,
            fieldId: item.fieldId,
            activityId: item.activityId,
            answer: item.answer,
          },
          trx,
        );

        answers.push(dbFormularyAnswer);
      }

      return { formulary: dbFormulary, answers };
    });

    return res.status(200).send(result);
  } catch (error) {
    console.log("Error on Creating Formulary: ", error);
    throw new ServerError((error as KnexError).detail);
  }
}
