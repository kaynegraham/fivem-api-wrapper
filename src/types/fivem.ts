export type Player = {
  name: string;
  id: string;
  ping: number;
};

export type ServerInformation = {
  name: string;
  map: string;
  maxPlayers: number;
};

export type ServerPlayers = {
  onlinePlayers: number;
  players: Player[];
};

export type ServerStatus = {
  online: boolean;
  degraded: boolean;
};
