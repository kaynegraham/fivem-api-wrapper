import { getDynamic, getPlayer } from "../adapters/fivemAdapter";
import { config } from "../config/env";

export async function parseFivem() {
  const serverData = await getDynamic(config.FIVEM_BASE_URL, "dynamic.json");
  const playerData = await getPlayer(config.FIVEM_BASE_URL, "players.json");
  return { serverData: serverData, playerData: playerData };
}
