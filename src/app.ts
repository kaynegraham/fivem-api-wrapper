import express from "express";
import cors from "cors";
import healthRoutes from "./routes/health";
import serverRoute from "./routes/server";
export const app = express();
app.use(cors());
app.use(express.json());

// Log every request
app.use((req, _res, next) => {
  let timestamp: string = new Date().toISOString();
  console.log(`${timestamp} ${req.method} ${req.url}`);
  next();
});

app.use("/", healthRoutes);
app.use("/health", healthRoutes);
app.use("/server", serverRoute);

// Error Handler
app.use(
  (
    err: unknown,
    _req: express.Request,
    res: express.Response,
    _next: express.NextFunction,
  ) => {
    console.error("Unhandled error:", err);
    res.status(500).json({
      ok: false,
      error: "Internal Service Error",
      details: err,
    });
  },
);
