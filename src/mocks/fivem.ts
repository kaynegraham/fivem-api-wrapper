import { Player } from "../types/fivem";

let players: Player[] = [
  { id: 1, name: "Kayne", steamName: "devkayne", ping: 0 },
  { id: 2, name: "Hire Me", steamName: "itcompany", ping: 50 },
];

export function getMockInformation() {
  return {
    name: "Test API", // return unknown if not found by real api data
    map: "Test MAP Name", // return map not found if not found by real data
    maxPlayers: 64, // return null if not found by real data
  };
}

export function getMockPlayers() {
  return {
    players, // return dynamic.clients, format each player through the player type
    playerCount: players.length, // use dynamic.clients if multiple fivem (tests required) use similar/same endpoints
  };
}

export function mockPlayerJoin(player: Player) {
  const exists = players.some((p) => p.id === player.id);
  if (!exists) {
    players.push(player);
  }
}

export function mockPlayerLeave(id: number) {
  players = players.filter((p) => p.id !== id);
}

//
