import {
  AcademicDegreeRepository,
  ActivityRepository,
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
  ActivityRepository: ActivityRepository;
  CareerRepository: CareerRepository;
  CountryRepository: CountryRepository;
  FieldRepository: FieldRepository;
  LevelRepository: LevelRepository;
  RoleRepository: RoleRepository;
  UserDocumentRepository: UserDocumentRepository;
  UserRepository: UserRepository;
}
