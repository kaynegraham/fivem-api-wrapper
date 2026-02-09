import { Router } from "express";
import { showStatus } from "../controllers/healthController";
const router = Router();

router.get("/", showStatus);
router.get("/status", showStatus);

export default router;
