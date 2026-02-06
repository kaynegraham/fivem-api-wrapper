import { Request, Response } from "express";
import { fetchServerInfo } from "../services/serverService";

export async function getServerInfo(_req: Request, res: Response) {
  try {
    const serverInfo = await fetchServerInfo();
    res.json(serverInfo);
  } catch (e) {
    res.status(502).json({
      description: `API couldn't fetch the data in time.`,
      error: e,
    });
    console.error(e);
    throw e;
  }
}
