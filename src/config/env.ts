export const config = {
  port: Number(process.env.PORT) ?? 3000,
  fivemBaseUrl: process.env.FIVEM_BASE_URL ?? "http://localhost:30120",
  fivemTimeout: Number(process.env.FIVEM_TIMEOUT) ?? 5000,
};
