import {
  AcademicDegreeRepository,
  CareerRepository,
  CountryRepository,
  LevelRepository,
  RoleRepository,
  UserDocumentRepository,
  UserRepository,
} from "../../repositories";
import { FieldRepository } from "../../repositories/FieldRepository";

export interface Repositories {
  AcademicDegreeRepository: AcademicDegreeRepository;
  CareerRepository: CareerRepository;
  CountryRepository: CountryRepository;
  FieldRepository: FieldRepository;
  LevelRepository: LevelRepository;
  RoleRepository: RoleRepository;
  UserDocumentRepository: UserDocumentRepository;
  UserRepository: UserRepository;
}
