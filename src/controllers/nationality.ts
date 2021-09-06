import { Request, Response } from "express";

export async function getNationality(req: Request, res: Response) {

    const nationalities = await req.db.CountryRepository.findAll()

    return res.status(200).send(nationalities);
}