import { Request, Response } from "express";
import { LoginError, ServerError } from "../helpers/apiError";
import jwt from "jsonwebtoken";
import { env } from "../helpers/env";
import { StatusCodes } from "../helpers/statusCode";
import { comparePassword } from "../helpers/auth";

export async function login(req: Request, res: Response) {
  const { email, password }: { email: string; password: string } = req.body;

  //validar input
  try {
    const dbUser = await req.db.UserRepository.findOneBy({ email });

    if (!dbUser) {
      throw new LoginError("User or password does not exist.");
    }

    if (comparePassword(password, dbUser.password)) {
      const token = jwt.sign({ id: dbUser.id }, env.JWT_SECRET, { expiresIn: "1hr" });

      return res.status(StatusCodes.OKAY).send({ token: token });
    }

    throw new LoginError("User or password does not exist.");
  } catch (error) {
    throw new ServerError((error as LoginError).message);
  }
}
