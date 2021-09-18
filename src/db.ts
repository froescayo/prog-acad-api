import { Comission, FormularyAnswer } from "./types";
import { CivilStatus, FormularyType, UserDocumentType } from "./types/enums";

// database interface models
export interface Base {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;
}

export interface DBCountry extends Base {
  name: string;
  nationality: string;
}

export interface DBUser extends Base {
  academicDegreeId: string;
  birthdate: Date | null;
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
  workload: number | null;
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

export interface DBField extends Base {
  text: string;
}
export interface DBActivity extends Base {
  text: string;
  fieldId: string;
  points: number;
}

export interface DBFormulary extends Base {
  userId: string;
  type: FormularyType;
  comission: Comission[];
}

export interface DBFormularyAnswer extends Base {
  formularyId: string;
  fieldId: string;
  activityId: string;
  answer: FormularyAnswer[];
}
