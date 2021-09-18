import {
  AcademicDegreeRepository,
  ActivityRepository,
  CareerRepository,
  CountryRepository,
  FieldRepository,
  FormularyAnswerRepository,
  FormularyRepository,
  LevelRepository,
  RoleRepository,
  UserDocumentRepository,
  UserRepository,
} from "../../repositories";

export interface Repositories {
  AcademicDegreeRepository: AcademicDegreeRepository;
  ActivityRepository: ActivityRepository;
  CareerRepository: CareerRepository;
  CountryRepository: CountryRepository;
  FieldRepository: FieldRepository;
  FormularyAnswerRepository: FormularyAnswerRepository;
  FormularyRepository: FormularyRepository;
  LevelRepository: LevelRepository;
  RoleRepository: RoleRepository;
  UserDocumentRepository: UserDocumentRepository;
  UserRepository: UserRepository;
}
