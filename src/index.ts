import "dotenv/config";
import { app } from "./app.ts";
const port = Number(process.env.PORT) || 3000;

// Used in npm run dev & run api scripts
app.listen(port, () => {
  console.log(`API is running on port ${port}`);
});
