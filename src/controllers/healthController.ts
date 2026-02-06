import { Response } from "express";
import { fetchUptime } from "../services/serverService";

export function healthRoot(res: Response) {
  res.status(200).json({
    ok: true,
    message: "API running",
  });
}

export function testError() {
  throw new Error("Test error");
}

export function showStatus(res: Response) {
  const uptime = fetchUptime();
  const uptimeMin: number = Math.floor(uptime.uptimeSeconds / 60);
  res.status(200).json({
    ok: true,
    message: `API is working correctly`,
    uptimeMinutes: uptimeMin,
    timestamp: new Date().toISOString(),
  });
}
