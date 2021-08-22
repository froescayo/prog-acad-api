import Knex from "knex";
import { DBLevel } from "../db";
import { Repository } from "./repository";

export class LevelRepository extends Repository<DBLevel> {
  constructor(knex: Knex) {
    super(knex, "levels");
  }
}
