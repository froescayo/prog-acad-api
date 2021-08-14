import * as Knex from "knex";
import { createTable, dropTable } from "../helpers/knex";

export async function up(knex: Knex) {
  await createTable(knex, "users", table => {
    table.text("firstName").notNullable();
    table.text("lastName").notNullable();
    table.text("email").unique().notNullable();
    table.text("siape").unique().notNullable();
    table.text("password").notNullable();
  });
}

export async function down(knex: Knex) {
  await dropTable(knex, "users");
}
