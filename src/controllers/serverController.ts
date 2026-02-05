import { Request, Response } from "express";
import "dotenv/config";

export async function getServerStatus(_req: Request, res: Response) {
  try {
    const response = await fetch(`${process.env.FIVEM_BASE_URL}/info.json`);
    const data = await response.json();
    res.json({ ok: true, server: data });
  } catch (error) {
    console.error("Error fetching server status:", error);
    res.status(500).json({ ok: false, error: "Failed to fetch server status" });
  }
}
