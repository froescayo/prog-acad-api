import {
  AcademicDegreeRepository,
  CareerRepository,
  CountryRepository,
  LevelRepository,
  RoleRepository,
  UserDocumentRepository,
  UserRepository,
} from "../../repositories";

export interface Repositories {
  AcademicDegreeRepository: AcademicDegreeRepository;
  CareerRepository: CareerRepository;
  CountryRepository: CountryRepository;
  LevelRepository: LevelRepository;
  RoleRepository: RoleRepository;
  UserRepository: UserRepository;
  UserDocumentRepository: UserDocumentRepository;
}
