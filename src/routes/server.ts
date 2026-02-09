import { Router } from "express";
import {
  getServerInfo,
  getServerPlayers,
  getServerStatus,
} from "../controllers/serverController";

const router = Router();

router.get("/", getServerStatus);
router.get("/info", getServerInfo);
router.get("/players", getServerPlayers);
router.get("/status", getServerStatus);

export default router;
