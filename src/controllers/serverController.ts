import { Request, Response } from "express";
import { fetchServerInfo } from "../services/serverService";

export async function getServerInfo(_req: Request, res: Response) {
  const serverInfo = await fetchServerInfo();
  res.json(serverInfo);
}
