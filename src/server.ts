import app from "./app";
import knex from "./knex";
import { Server } from "http";

let server: Server;

// server initiation

async function startServer() {
  // always run latest migrations
  await knex.migrate.latest();

  server = app.listen(process.env.PORT || 8000);

  return server;
}

startServer().finally();
