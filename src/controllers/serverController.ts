import { Request, Response } from "express";
import { mockData } from "../mocks/fivem";
import "dotenv/config";

export async function getServerStatus(_req: Request, res: Response) {
  try {
    res.json(mockData);
  } catch (error) {
    console.error("Error fetching server status:", error);
    res.status(500).json({ ok: false, error: "Failed to fetch server status" });
  }
}
