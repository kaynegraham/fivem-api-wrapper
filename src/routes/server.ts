import { Router } from "express";
import {
  createPlayer,
  deletePlayer,
  getServerInfo,
  getServerPlayers,
  getServerUptime,
} from "../controllers/serverController";

const router = Router();

router.get("/info", getServerInfo);
router.get("/players", getServerPlayers);
router.get("/uptime", getServerUptime);

router.post("/players", createPlayer);
router.delete("/players/:id", deletePlayer);

export default router;
