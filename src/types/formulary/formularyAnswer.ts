export interface File {
  filename: string;
  content: string;
}

export interface FormularyAnswer {
  semester: string;
  quantity: number;
  file: File | null;
}
