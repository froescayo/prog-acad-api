import Knex from "knex";
import { DBCareer } from "../db";
import { Repository } from "./repository";
export class CareerRepository extends Repository<DBCareer> {
  constructor(knex: Knex) {
    super(knex, "careers");
  }
}
