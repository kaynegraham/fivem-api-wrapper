import { getDynamic, getPlayers } from "../adapters/fivemAdapter";
import { parseFivem } from "../utils/parseFivem";
import { config } from "../config/env";

export async function fetchServerInfo() {
  const baseURl = config.FIVEM_BASE_URL;
  const [dynamic, players] = await Promise.allSettled([
    getDynamic(baseURl),
    getPlayers(baseURl),
  ]);
  const parsed = parseFivem(dynamic, players);
  return parsed;
}
