import { ok } from "node:assert";
import { config } from "../config/env";
import { safeFetchJson } from "../utils/safeFetch";

// Uptime & Date functions
export function getUptime() {
  let uptime;
  let uptimeSec = Number(process.uptime().toFixed(2));
  let uptimeMin = Math.floor(uptimeSec / 60);

  if (uptimeMin < 1) {
    uptime = `${uptimeSec} seconds`;
  } else if (uptimeMin == 1) {
    uptime = `${uptimeMin} minute`;
  } else {
    uptime = `${uptimeMin} minutes`;
  }

  return uptime;
}

export function getStartDate() {
  return new Date(Date.now()).toISOString();
}

// Upstream functions
async function ping(url: URL) {
  const start = Date.now();
  const result = await safeFetchJson(url, config.FIVEM_TIMEOUT);
  const latencyMs = Date.now() - start;

  return {
    ok: result.status === 200,
    status: result.status,
    latency: latencyMs,
  };
}

export async function getUpstreamHealth() {
  const base = new URL(config.FIVEM_BASE_URL);
  const dynamicURL = new URL("dynamic.json", base);
  const playersURL = new URL("players.json", base);

  const [dynamic, players] = await Promise.allSettled([
    ping(dynamicURL),
    ping(playersURL),
  ]);

  return {
    dynamic: dynamic.status === "fulfilled" ? dynamic.value : { ok: false },
    players: dynamic.status === "fulfilled" ? dynamic.value : { ok: false },
    degraded: dynamic.status !== "fulfilled" || players.status !== "fulfilled",
  };
}
