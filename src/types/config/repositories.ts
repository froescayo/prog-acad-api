import {
  AcademicDegreeRepository,
  CareerRepository,
  LevelRepository,
  RoleRepository,
  UserDocumentRepository,
  UserRepository,
} from "../../repositories";

export interface Repositories {
  AcademicDegreeRepository: AcademicDegreeRepository;
  CareerRepository: CareerRepository;
  LevelRepository: LevelRepository;
  RoleRepository: RoleRepository;
  UserRepository: UserRepository;
  UserDocumentRepository: UserDocumentRepository;
}
