import { NextFunction, Request, Response } from "express";
import Knex from "knex";
import {
  AcademicDegreeRepository,
  CareerRepository,
  CountryRepository,
  LevelRepository,
  RoleRepository,
  UserDocumentRepository,
  UserRepository,
} from "../repositories";

export function config(knex: Knex) {
  return function configMiddleware(req: Request, _res: Response, next: NextFunction) {
    req.knex = knex;
    req.db = {
      AcademicDegreeRepository: new AcademicDegreeRepository(knex),
      CareerRepository: new CareerRepository(knex),
      CountryRepository: new CountryRepository(knex),
      LevelRepository: new LevelRepository(knex),
      RoleRepository: new RoleRepository(knex),
      UserRepository: new UserRepository(knex),
      UserDocumentRepository: new UserDocumentRepository(knex),
    };
    next();
  };
}
