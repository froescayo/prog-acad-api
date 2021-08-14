export interface Base {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;
}

export interface DBUser extends Base {
  email: string;
  siape: string;
  password: string;
  firstName: string;
  lastName: string;
}
