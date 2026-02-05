export type Player = {
  id: number;
  name: string;
  steamName: string;
};

export type ServerStatistics = {
  ok: boolean;
  server: {
    name: string;
    map: string;
    upTime: number;
    players: Player[];
    playerCount: number;
    maxPlayers: number;
  };
};

const startTime = Date.now();

export function getMockData(): ServerStatistics {
  return {
    ok: true,
    server: {
      name: "Test API Data",
      map: "AOP: Los Santos",
      upTime: Math.floor((Date.now() - startTime) / 1000),
      players: [
        { id: 1, name: "Kayne", steamName: "devkayne" },
        { id: 2, name: "Hire Me", steamName: "itcompany" },
      ],
      playerCount: 2,
      maxPlayers: 64,
    },
  };
}
