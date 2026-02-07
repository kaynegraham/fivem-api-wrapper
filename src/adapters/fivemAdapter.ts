import { config } from "../config/env";
import { safeFetchJson } from "../utils/safeFetch";

export async function fetchFiveMData(baseURL: URL) {
  try {
    baseURL = new URL(config.FIVEM_BASE_URL);
  } catch {
    throw new Error(
      `FiveM_Base_URL error: Ensure your .env document matches the format of the example provided in the root folder.`,
    );
  }

  const dynamicURL = new URL("/dynamic.json", baseURL);
  const playersURL = new URL("/players.json", baseURL);

  const getDynamic = async (dynamicURL: URL) =>
    safeFetchJson(dynamicURL, config.FIVEM_TIMEOUT);

  const getPlayers = async (playersURL: URL) =>
    safeFetchJson(playersURL, config.FIVEM_TIMEOUT);

  return { dynamic: getDynamic(dynamicURL), players: getPlayers(playersURL) };
}
