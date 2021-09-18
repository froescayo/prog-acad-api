import Knex from "knex";
import { DBFormularyAnswer } from "../db";
import { Repository } from "./Repository";

export class FormularyAnswerRepository extends Repository<DBFormularyAnswer> {
  constructor(knex: Knex) {
    super(knex, "formularyAnswers");
  }
}
