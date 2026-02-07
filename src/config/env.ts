export const config = {
  API_PORT: Number(process.env.PORT) || 3000,
  FIVEM_PORT: Number(process.env.FIVEM_PORT) || 30120,
  FIVEM_BASE_URL: process.env.FIVEM_BASE_URL ?? "http://127.0.0.1:30120",
  FIVEM_TIMEOUT: Number(process.env.FIVEM_TIMEOUT) || 5000,
};
