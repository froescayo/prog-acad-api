import Knex from "knex";
import { DBUserDocument } from "../db";
import { Repository } from "./repository";

export class UserDocumentRepository extends Repository<DBUserDocument> {
  constructor(knex: Knex) {
    super(knex, "userDocuments");
  }
}
