import { Request, Response } from "express";
import {
  fetchServerInfo,
  fetchPlayers,
  addPlayer,
  removePlayer,
  fetchUptime,
} from "../services/serverService";
import { playerSchema } from "../mocks/playerSchema";

export function getServerInfo(_req: Request, res: Response) {
  res.json(fetchServerInfo());
}

export function getServerPlayers(_req: Request, res: Response) {
  res.json(fetchPlayers());
}
export function getServerUptime(_req: Request, res: Response) {
  fetchUptime();
}

export function createPlayer(req: Request, res: Response) {
  const result = playerSchema.safeParse(req.body);
  if (!result.success) {
    return res.status(400).json({
      ok: false,
      error: "Invalid player data",
      details: result.error,
    });
  }

  addPlayer(result.data);

  res.status(201).json({ ok: true });
}

export function deletePlayer(req: Request, res: Response) {
  const id = Number(req.params.id);

  if (isNaN(id)) {
    return res.status(400).json({
      ok: false,
      error: "Invalid player data",
    });
  }

  removePlayer(id);

  res.json({ ok: true });
}
