import { NextFunction, Request, Response } from "express";
import Knex from "knex";
import {
  AcademicDegreeRepository,
  ActivityRepository,
  CareerRepository,
  CountryRepository,
  FieldRepository,
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
      ActivityRepository: new ActivityRepository(knex),
      CareerRepository: new CareerRepository(knex),
      CountryRepository: new CountryRepository(knex),
      FieldRepository: new FieldRepository(knex),
      LevelRepository: new LevelRepository(knex),
      RoleRepository: new RoleRepository(knex),
      UserDocumentRepository: new UserDocumentRepository(knex),
      UserRepository: new UserRepository(knex),
    };
    next();
  };
}
