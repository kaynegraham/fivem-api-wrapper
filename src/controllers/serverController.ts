import { Request, Response } from "express";
import { fetchServerInfo } from "../services/serverService";

export async function getServerInfo(_req: Request, res: Response) {
  try {
    const serverInfo = await fetchServerInfo();
    res.json({ ok: true, data: serverInfo });
  } catch (e) {
    res.status(502).json({
      ok: false,
      description: `Upstream error`,
      error: e,
    });
    console.error(e);
  }
}
