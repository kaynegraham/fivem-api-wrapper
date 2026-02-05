import { Request, Response } from "express";
import {
  fetchServerInfo,
  fetchPlayers,
  fetchUptime,
} from "../services/serverService";

export function getServerInfo(_req: Request, res: Response) {
  res.json(fetchServerInfo());
}

export function getServerPlayers(_req: Request, res: Response) {
  res.json(fetchPlayers());
}

export function getServerUptime(_req: Request, res: Response) {
  res.json(fetchUptime());
}
