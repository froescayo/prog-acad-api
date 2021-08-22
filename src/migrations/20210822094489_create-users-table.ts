import * as Knex from "knex";
import { createTable, dropTable } from "../helpers/knex";

export async function up(knex: Knex) {
  await createTable(knex, "users", table => {
    table.date("birthdate").notNullable();
    table.text("careerId").notNullable();
    table.text("civilStatus").notNullable().defaultTo("Single");
    table.text("cpf").notNullable();
    table.text("email").unique().notNullable();
    table.text("firstName").notNullable();
    table.text("lastName").notNullable();
    table.text("nationalityId").notNullable().defaultTo("BRA");
    table.text("naturalidade").nullable();
    table.text("password").notNullable();
    table.text("rg").notNullable();
    table.text("roleId").notNullable();
    table.text("siape").unique().notNullable();
  });
}

export async function down(knex: Knex) {
  await dropTable(knex, "users");
}
