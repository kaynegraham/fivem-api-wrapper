import express from "express";
import cors from "cors";
import healthRoutes from "./routes/health";
import serverRoute from "./routes/server";
export const app = express();
app.use(cors());
app.use(express.json());

app.use("/", healthRoutes);
app.use("/health", healthRoutes);
app.use("/server", serverRoute);
app.use((_req, res) => res.status(404).json({ error: "Not Found" }));
