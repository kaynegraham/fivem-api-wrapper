import { Request, Response } from "express";
import {
  getStartDate,
  getUpstreamHealth,
  getUptime,
} from "../services/healthService";

export async function showStatus(_req: Request, res: Response) {
  const lastRestart = getStartDate();
  const upStream = await getUpstreamHealth();
  let uptime = getUptime();

  res.status(200).json({
    ok: true,
    data: {
      upStream,
      uptime,
      lastRestart,
    },
    timestamp: new Date().toISOString(),
  });
}
