import { Player } from "../types/fivem";
const startTime = Date.now();

let players: Player[] = [
  { id: 1, name: "Kayne", steamName: "devkayne" },
  { id: 2, name: "Hire Me", steamName: "itcompany" },
];

export function getMockInformation() {
  return {
    name: "Test API",
    map: "Test MAP Name",
    maxPlayers: 64,
  };
}

export function getMockPlayers() {
  return {
    players,
    playerCount: players.length,
  };
}

export function getMockUptime() {
  return {
    uptimeSeconds: Math.floor((Date.now() - startTime) / 1000),
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
