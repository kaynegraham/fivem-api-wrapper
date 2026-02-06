import { Router } from "express";
import { getServerInfo } from "../controllers/serverController";

const router = Router();

router.get("/info", getServerInfo);

export default router;
