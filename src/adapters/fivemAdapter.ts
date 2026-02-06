import { config } from "../config/env";
import { safeFetchJson } from "../utils/safeFetch";
const endPoints = ["dynamic.json", "players.json"];

export async function fetchFiveMData() {
  const baseURL = new URL(config.FIVEM_BASE_URL);
  let endpointURL;

  if (!baseURL) {
    throw new Error(
      `FiveM_Base_URL error: Ensure your .env document matches the format of the example provided in the root folder.`,
    );
  }

  try {
    const tryPromise = endPoints.map((endpoint) => {
      endpointURL = `${baseURL}${endpoint}`;
      safeFetchJson(endpointURL, config.FIVEM_TIMEOUT).then((response) => {
        if (!response) {
          throw new Error(`Issue with fetching FiveM Data`);
        }
        return response;
      });
    });

    const [dynamic, players] = await Promise.allSettled(tryPromise);
    return { dynamic, players };
  } catch (e) {
    console.error(e);
    throw e;
  }
}
