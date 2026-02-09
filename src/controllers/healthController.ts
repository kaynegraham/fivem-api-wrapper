import { Request, Response } from "express";
import { getStartDate, getUptime } from "../services/healthService";

export function healthRoot(_req: Request, res: Response) {
  res.status(200).json({
    ok: true,
    message: "API running",
  });
}

export function testError(_req: Request, _res: Response) {
  throw new Error("Test error");
}

export function showStatus(_req: Request, res: Response) {
  const startDate = getStartDate();
  let uptime = getUptime();

  res.status(200).json({
    ok: true,
    message: `API is working correctly`,
    timestamp: new Date().toISOString(),
    uptime: uptime,
    lastRestart: startDate,
  });
}
