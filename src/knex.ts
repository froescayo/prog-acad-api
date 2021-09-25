import { randomBytes } from "crypto";
import Knex from "knex";
import { env } from "./helpers/env";

// databaseName definition
export const databaseName =
  process.env.NODE_ENV && process.env.NODE_ENV === "test" ? `test_${randomBytes(8).toString("hex")}` : env.DB_DATABASE;

const connection =
  process.env.NODE_ENV !== "production"
    ? {
        database: databaseName,
        host: env.DB_HOST,
        user: env.DB_USERNAME,
        password: env.DB_PASSWORD,
        port: parseInt(env.DB_PORT || "5432", 10),
        ssl: true,
      }
    : process.env.DATABASE_URL;

// knex options const
const options: Knex.Config = {
  client: "pg",
  connection,
  migrations: {
    directory: "src/migrations",
    extension: "ts",
  },
};
const knex: Knex = Knex(options);

export default knex;
