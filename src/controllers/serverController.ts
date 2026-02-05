import { Request, Response } from "express";
import { getMockData } from "../mocks/fivem";

export async function getServerStatus(_req: Request, res: Response) {
  res.json(getMockData());
}
