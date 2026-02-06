import { Request, Response } from "express";
import { config } from "../config/env";

export async function fetchFiveMData() {
  const baseURL = config.FIVEM_BASE_URL;

  if (!baseURL) {
    throw new Error(
      `No FiveM Base URL configured in .env file, please re-configure and try-again.`,
    );
  }

  try {
    const response = await fetch(`${config.FIVEM_BASE_URL}/info.json`);
    console.log(response.status);

    if (response.status !== 200) {
      throw new Error(
        `Issue with fetching FiveM Data, Error: ${response.status}`,
      );
    }

    const data = await response.json();
    console.log(data);
  } catch (e) {
    console.error(e);
  }
}
