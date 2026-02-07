import { config } from "../config/env";
import { safeFetchJson } from "../utils/safeFetch";
const endPoints = ["dynamic.json", "players.json"];

export async function fetchFiveMData() {
  let baseURL: URL;

  try {
    baseURL = new URL(config.FIVEM_BASE_URL);
  } catch {
    throw new Error(
      `FiveM_Base_URL error: Ensure your .env document matches the format of the example provided in the root folder.`,
    );
  }

  try {
    const tryPromise = endPoints.map((endpoint) => {
      const endpointURL = new URL(endpoint, baseURL).toString();
      return safeFetchJson(endpointURL, config.FIVEM_TIMEOUT).then(
        (response) => {
          if (response.status !== 200) {
            throw new Error(
              `Issue with fetching FiveM Data, Error Code: ${response.status}`,
            );
          }
          return response;
        },
      );
    });
    // Wait for results
    const results = await Promise.allSettled(tryPromise);
    return results;
  } catch (e) {
    console.error(e);
    throw e;
  }
}
