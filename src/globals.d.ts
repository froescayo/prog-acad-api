declare namespace Express {
  interface Request {
    knex: import("knex");
    db: import("./types/repositories").Repositories;
    decodedJTW: import("./types/jwt").DecodedJWT;
  }
}
