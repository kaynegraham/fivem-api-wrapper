import { Request, Response } from "express";
import {
  fetchServerInfo,
  fetchServerPlayers,
  fetchServerStatus,
} from "../services/serverService";

export async function getServerStatus(_req: Request, res: Response) {
  try {
    const serverStatus = await fetchServerStatus();
    res.json({
      ok: true,
      data: serverStatus.data,
      degraded: serverStatus.degraded,
    });
  } catch (e) {
    res.status(502).json({
      ok: false,
      description: `Upstream error`,
      error: e,
    });
    console.error(e);
  }
}

export async function getServerInfo(_req: Request, res: Response) {
  try {
    const serverInfo = await fetchServerInfo();
    res.json({
      ok: true,
      serverName: serverInfo.name,
      serverMapName: serverInfo.map,
      serverCurPlayers: serverInfo.currentPlayers,
      serverMaxPlayers: serverInfo.maxPlayers,
    });
  } catch (e) {
    res.status(502).json({
      ok: false,
      description: `Upstream error`,
      error: e,
    });
    console.error(e);
  }
}

export async function getServerPlayers(_req: Request, res: Response) {
  try {
    const serverPlayers = await fetchServerPlayers();
    res.json({
      ok: true,
      data: serverPlayers,
    });
  } catch (e) {
    res.status(502).json({
      ok: false,
      description: `Upstream error`,
      error: e,
    });
    console.error(e);
  }
}
