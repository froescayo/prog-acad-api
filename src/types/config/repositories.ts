import {
  AcademicDegreeRepository,
  CareerRepository,
  LevelRepository,
  RoleRepository,
  UserRepository,
} from "../../repositories";

export interface Repositories {
  AcademicDegreeRepository: AcademicDegreeRepository;
  CareerRepository: CareerRepository;
  LevelRepository: LevelRepository;
  RoleRepository: RoleRepository;
  UserRepository: UserRepository;
}
