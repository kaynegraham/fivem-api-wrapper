export type Player = {
  id: number;
  name: string;
  steamName: string;
  ping: number;
};

export type ServerInformation = {
  name: string;
  map: string;
  maxPlayers: number;
};

export type ServerPlayers = {
  players: Player[];
  playerCount: number;
};

export type ServerUpTime = {
  upTimeSeconds: number;
};
