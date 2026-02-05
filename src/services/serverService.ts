import {
  getMockPlayers,
  getMockInformation,
  getMockUptime,
  mockPlayerJoin,
  mockPlayerLeave,
} from "../mocks/fivem";
import { PlayerInput } from "../mocks/playerSchema";

export function fetchServerInfo() {
  return getMockInformation();
}

export function fetchPlayers() {
  return getMockPlayers();
}

export function fetchUptime() {
  return getMockUptime();
}

export function addPlayer(player: PlayerInput) {
  mockPlayerJoin(player);
}

export function removePlayer(id: number) {
  mockPlayerLeave(id);
}
