import { Request, Response } from "express";

export async function getCareers(req: Request, res: Response) {
  const dbCareer = await req.db.CareerRepository.findAll();

  return res.status(200).send(dbCareer);
}
