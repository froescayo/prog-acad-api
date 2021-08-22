import { Request, Response } from "express";

export async function getAcademicDegrees(req: Request, res: Response) {
  const dbAcademicDegree = await req.db.AcademicDegreeRepository.findAll();

  return res.status(200).send(dbAcademicDegree);
}
