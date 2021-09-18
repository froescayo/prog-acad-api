import { Request, Response } from "express";
import { FormularyInput } from "../types";

export async function createFormulary(req: Request, res: Response) {
  const formularyInput: FormularyInput = req.body;
}
