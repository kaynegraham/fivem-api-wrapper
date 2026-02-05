import { Router } from "express";
import {
  getServerInfo,
  getServerPlayers,
  getServerUptime,
} from "../controllers/serverController";

const router = Router();

router.get("/info", getServerInfo);
router.get("/players", getServerPlayers);
router.get("/uptime", getServerUptime);

export default router;
