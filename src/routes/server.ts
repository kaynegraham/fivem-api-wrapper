import { Router } from "express";
import { getServerStatus } from "../controllers/serverController";

const router = Router();

router.get("/status", getServerStatus);

export default router;
