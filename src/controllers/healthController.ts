import { Request, Response } from "express";
import { fetchUptime } from "../services/serverService";

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
  const uptime = fetchUptime();
  const uptimeMin: number = Math.floor(uptime.uptimeSeconds / 60);
  res.status(200).json({
    ok: true,
    message: `API is working correctly`,
    uptimeMinutes: uptimeMin,
    timestamp: new Date().toISOString(),
  });
}
