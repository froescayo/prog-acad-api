import { Request, Response } from "express";

export async function getLevels(req: Request, res: Response) {
  const dbLevels = await req.db.LevelRepository.findAll();

  return res.status(200).send(dbLevels);
}
