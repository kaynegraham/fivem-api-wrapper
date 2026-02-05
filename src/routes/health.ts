import { Router } from "express";
import {
  healthRoot,
  showStatus,
  testError,
} from "../controllers/healthController";
const router = Router();

router.get("/", healthRoot);
router.get("/error", testError);
router.get("/status", showStatus);

export default router;
