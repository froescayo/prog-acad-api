import { Request, Response } from "express";
import { ServerError } from "../helpers/apiError";
import { KnexError } from "../types";

export async function getRoles(req: Request, res: Response) {
  try {
    const dbRoles = await req.db.RoleRepository.findAll();

    return res.status(200).send(dbRoles);
  } catch (error) {
    throw new ServerError((error as KnexError).detail);
  }
}
