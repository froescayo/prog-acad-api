import { NextFunction, Request, Response } from "express";
import Knex from "knex";

export function config(knex: Knex) {
  return function configMiddleware(req: Request, _res: Response, next: NextFunction) {
    req.knex = knex;
    req.db = {};
    next();
  };
}
