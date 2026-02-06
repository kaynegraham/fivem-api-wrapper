// Required dependencies
import express from "express";
import cors from "cors";
import healthRoutes from "./routes/health";
import serverRoutes from "./routes/server";
export const app = express();
app.use(cors());
app.use(express.json());

// Log every request for api usage
app.use((req, res, next) => {
  let timestamp = new Date().toISOString();
  console.log(`${timestamp} ${req.method} ${req.url}`);
  next();
});

// Routes for health & server controllers
app.use("/", healthRoutes);
app.use("/health", healthRoutes);
app.use("/server", serverRoutes);

// Error Handler, describes error with it
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
      error: "Error:",
      details: err,
    });
  },
);
