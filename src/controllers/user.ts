import { Request, Response } from "express";
import { hashPassword } from "../helpers/auth";

export async function createUser(req: Request, res: Response) {
  const userInput = req.body;

  // validação

  const dbUser = await req.db.UserRepository.insert({ ...userInput, password: hashPassword(userInput.password) });

  return res.status(200).send({
    id: dbUser.id,
  });
}
