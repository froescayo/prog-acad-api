import { Request } from "express";
import * as Knex from "knex";
import { DBFormularyAnswer } from "../db";
import { NotFoundError } from "../helpers/apiError";
import { FormularyAnswerInput } from "../types";
import { Repository } from "./Repository";

export class FormularyAnswerRepository extends Repository<DBFormularyAnswer> {
  constructor(knex: Knex) {
    super(knex, "formularyAnswers");
  }

  async upsertFormularyAnswers(req: Request, formularyAnswerInput: FormularyAnswerInput) {
    const result = await req.knex.transaction(async trx => {
      const dbFormularyAnswer = formularyAnswerInput.id ? await this.findOneBy({ id: formularyAnswerInput.id }, trx) : undefined;

      const dbActivity = await req.db.ActivityRepository.findOneBy({ id: formularyAnswerInput.activityId, fieldId: formularyAnswerInput.fieldId }, trx);

      if (!dbActivity) {
        throw new NotFoundError("We weren't able to find some field or activity.");
      }

      // if its an update
      if (dbFormularyAnswer) {
        return this.update({
          id: dbFormularyAnswer.id,
          formularyId: formularyAnswerInput.formularyId,
          fieldId: formularyAnswerInput.fieldId,
          activityId: formularyAnswerInput.activityId,
          answer: JSON.stringify(formularyAnswerInput.answers),
        },
        trx,
        );
      }

      // if its not an update then insert
      const insertedFormularyAnswer = await this.insert(
        {
          formularyId: formularyAnswerInput.formularyId,
          fieldId: formularyAnswerInput.fieldId,
          activityId: formularyAnswerInput.activityId,
          answer: JSON.stringify(formularyAnswerInput.answers),
        },
        trx,
      );

      return insertedFormularyAnswer;
    });

    return result;
  }
}
