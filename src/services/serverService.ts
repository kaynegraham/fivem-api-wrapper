import { getDynamic, getPlayers } from "../adapters/fivemAdapter";
import { parseFivem, parsePlayers, parseServerInfo } from "../utils/parseFivem";
import { config } from "../config/env";

export async function fetchServerInfo() {
  const baseURl = config.FIVEM_BASE_URL;
  const [dynamic] = await Promise.allSettled([getDynamic(baseURl)]);
  const parsed = parseServerInfo(dynamic);
  return parsed;
}

export async function fetchServerPlayers() {
  const baseURL = config.FIVEM_BASE_URL;
  const [players] = await Promise.allSettled([getPlayers(baseURL)]);
  const parsed = parsePlayers(players);
  return parsed;
}

export async function fetchServerStatus() {
  const baseURl = config.FIVEM_BASE_URL;
  const [dynamic, players] = await Promise.allSettled([
    getDynamic(baseURl),
    getPlayers(baseURl),
  ]);
  const parsed = parseFivem(dynamic, players);
  return parsed;
}
