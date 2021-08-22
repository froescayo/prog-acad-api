import { Request, Response } from "express";

export async function getRoles(req: Request, res: Response) {
  const dbRoles = await req.db.RoleRepository.findAll();

  return res.status(200).send(dbRoles);
}
