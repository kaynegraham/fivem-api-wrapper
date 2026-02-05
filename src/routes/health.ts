import { Router } from "express";
const router = Router();

router.get("/", (_req, res) => {
  res.json({ message: "all goods" });
});

export default router;
