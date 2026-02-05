import {
  getMockPlayers,
  getMockInformation,
  getMockUptime,
} from "../mocks/fivem";

export function fetchServerInfo() {
  return getMockInformation();
}

export function fetchPlayers() {
  return getMockPlayers();
}

export function fetchUptime() {
  return getMockUptime();
}
