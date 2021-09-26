import { Comission, FormularyAnswer, FormularyType } from "..";

export interface FormularyInput {
  type: FormularyType;
  period: {
    from: Date;
    to: Date;
  };
  comission: Comission[];
  answers: Array<{
    fieldId: string;
    activityId: string;
    answer: FormularyAnswer[];
  }>;
}
