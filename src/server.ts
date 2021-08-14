import app from "./app";
import knex from "./knex";
import { Server } from "http";

const PORT = process.env.PORT ?? 9999;

let server: Server;

async function startServer() {
  await knex.migrate.latest();

  server = app.listen(PORT, () => console.log(`Running on http://localhost:${PORT}`));

  return server;
}

startServer().finally();
