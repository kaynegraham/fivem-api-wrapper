import { fetchFiveMData } from "../adapters/fivemAdapter";
import { parseFivem } from "../utils/parseFivem";

export async function fetchServerInfo() {
  const data = await parseFivem();
  return data;
}
