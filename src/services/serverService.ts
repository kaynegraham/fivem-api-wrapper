import { getDynamic, getPlayers } from "../adapters/fivemAdapter";
import { parseFivem } from "../utils/parseFivem";
import { config } from "../config/env";

export async function fetchServerInfo() {
  const dynamic = await getDynamic(config.FIVEM_BASE_URL);
  const players = await getPlayers(config.FIVEM_BASE_URL);
  const parsed = parseFivem(dynamic, players);
  return parsed;
}
