import { CivilStatus } from "./types/enums/profile";

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
  cpf: string;
  email: string;
  firstName: string;
  lastName: string;
  nationalityId: string;
  naturalidade: string | null;
  password: string;
  rg: string;
  siape: string;
}

export interface DBCareer extends Base {
  name: string;
}
export interface DBRole extends Base {
  name: string;
}
