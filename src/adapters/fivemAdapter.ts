import { config } from "../config/env";
import { safeFetchJson } from "../utils/safeFetch";
let endpointURL: URL;

export const getDynamic = async (baseURL: string, endPoint: string) => {
  endpointURL = new URL(endPoint, baseURL);
  return safeFetchJson(endpointURL, config.FIVEM_TIMEOUT);
};

export const getPlayer = async (baseURL: string, endPoint: string) => {
  endpointURL = new URL(endPoint, baseURL);
  return safeFetchJson(endpointURL, config.FIVEM_TIMEOUT);
};
