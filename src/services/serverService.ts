import { fetchFiveMData } from "../adapters/fivemAdapter";
import {
  getMockPlayers,
  getMockInformation,
  mockPlayerJoin,
  mockPlayerLeave,
} from "../mocks/fivem";
import { PlayerInput } from "../mocks/playerSchema";

export async function fetchServerInfo() {
  const data = await fetchFiveMData();
  return data;
}
export async function fetchMockData() {
  return getMockInformation();
}

export function fetchPlayers() {
  return getMockPlayers();
}

export function addPlayer(player: PlayerInput) {
  mockPlayerJoin(player);
}

export function removePlayer(id: number) {
  mockPlayerLeave(id);
}
