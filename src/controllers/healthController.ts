import { Request, Response } from "express";

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
  res.status(200).json({
    ok: true,
    message: `API is working correctly`,
    timestamp: new Date().toISOString(),
  });
}
