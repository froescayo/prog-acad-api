import Knex from "knex";
import { DBAcademicDegree } from "../db";
import { Repository } from "./repository";

export class AcademicDegreeRepository extends Repository<DBAcademicDegree> {
  constructor(knex: Knex) {
    super(knex, "academicDegrees");
  }
}
