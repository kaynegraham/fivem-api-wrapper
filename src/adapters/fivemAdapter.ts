import { config } from "../config/env";
const endPoints = [
  `${config.FIVEM_BASE_URL}/info.json`,
  `${config.FIVEM_BASE_URL}/players.json`,
];

export async function fetchFiveMData() {
  const baseURL = config.FIVEM_BASE_URL;

  if (!baseURL) {
    throw new Error(
      `No FiveM Base URL configured in .env file, please re-configure and try-again.`,
    );
  }

  try {
    const apiPromise = endPoints.map((endpoint) =>
      fetch(endpoint).then((response) => {
        if (response.status !== 200) {
          throw new Error(
            `Issue with fetching FiveM Data, Error: ${response.status}`,
          );
        }
        return response.json();
      }),
    );

    const [information, players] = await Promise.all(apiPromise);
    return { information, players };
  } catch (e) {
    console.error(e);
    throw e;
  }
}
