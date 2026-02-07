import { config } from "../config/env";
import { safeFetchJson } from "../utils/safeFetch";

export const getDynamic = async (baseURL: string) => {
  const endpointURL = new URL("dynamic.json", baseURL);
  return safeFetchJson(endpointURL, config.FIVEM_TIMEOUT);
};

export const getPlayers = async (baseURL: string) => {
  const endpointURL = new URL("players.json", baseURL);
  return safeFetchJson(endpointURL, config.FIVEM_TIMEOUT);
};
