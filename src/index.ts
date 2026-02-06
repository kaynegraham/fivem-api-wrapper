import "dotenv/config";
import { app } from "./app.ts";
import { config } from "./config/env";
const port = Number(config.API_PORT) || 3000;

// Used in npm run dev & run api scripts
app.listen(port, () => {
  console.log(`API is running on port ${port}`);
});
