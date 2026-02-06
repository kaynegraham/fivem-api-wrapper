import { Router } from "express";
import {
  createPlayer,
  deletePlayer,
  getServerInfo,
  getServerPlayers,
} from "../controllers/serverController";

const router = Router();

router.get("/info", getServerInfo);
router.get("/players", getServerPlayers);

router.post("/players", createPlayer);
router.delete("/players/:id", deletePlayer);

export default router;
