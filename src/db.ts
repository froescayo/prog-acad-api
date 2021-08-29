import { CivilStatus, UserDocumentType } from "./types/enums";

export interface Base {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;
}

export interface DBUser extends Base {
  academicDegreeId: string;
  birthdate: Date;
  careerId: string;
  civilStatus: CivilStatus;
  email: string;
  firstName: string;
  lastName: string;
  levelId: string;
  nationalityId: string;
  naturalidade: string | null;
  password: string;
  roleId: string;
  siape: string;
  workload: number;
}

export interface DBCareer extends Base {
  name: string;
}
export interface DBRole extends Base {
  name: string;
}
export interface DBLevel extends Base {
  name: string;
}
export interface DBAcademicDegree extends Base {
  name: string;
}

export interface DBUserDocument extends Base {
  type: UserDocumentType;
  issuer: string;
  value: string;
  userId: string;
}
