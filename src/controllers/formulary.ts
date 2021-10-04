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
    const result = await req.knex.transaction(async trx => {
      const respostas = [];

      const dbFormulary = await req.db.FormularyRepository.insert(
        {
          type: formularyInput.type,
          from: formularyInput.period.from,
          to: formularyInput.period.to,
          userId: req.decodedJTW.id,
          comission: JSON.stringify(formularyInput.comission),
        },
        trx,
      );

      for (const item of formularyInput.answers) {
        const dbField = await req.db.FieldRepository.findOneBy({ id: item.fieldId }, trx);
        const dbActivity = await req.db.ActivityRepository.findOneBy({ id: item.activityId, fieldId: item.fieldId }, trx);

        if (!dbField || !dbActivity) {
          throw new NotFoundError("We weren't able to find some field or activity.");
        }

        const dbFormularyAnswer = await req.db.FormularyAnswerRepository.insert(
          {
            formularyId: dbFormulary.id,
            fieldId: item.fieldId,
            activityId: item.activityId,
            answer: JSON.stringify(item.answer),
          },
          trx,
        );

        respostas.push(dbFormularyAnswer);
      }

      return { formulary: dbFormulary, respostas };
    });

    return res.status(200).send(result);
  } catch (error) {
    console.log("Error on Creating Formulary: ", error);
    throw new ServerError((error as KnexError).detail);
  }
}
