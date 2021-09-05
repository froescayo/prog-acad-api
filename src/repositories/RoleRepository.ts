import Knex from "knex";
import { DBRole } from "../db";
import { Repository } from "./repository";

export class RoleRepository extends Repository<DBRole> {
  constructor(knex: Knex) {
    super(knex, "roles");
  }
}
