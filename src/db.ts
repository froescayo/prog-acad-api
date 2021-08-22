import { CivilStatus, UserDocumentType } from "./types/enums";

export interface Base {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;
}

export interface DBUser extends Base {
  birthdate: Date;
  careerId: string;
  civilStatus: CivilStatus;
  email: string;
  firstName: string;
  lastName: string;
  nationalityId: string;
  naturalidade: string | null;
  password: string;
  siape: string;
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
