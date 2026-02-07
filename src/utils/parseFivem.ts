import { ServerInformation, Player } from "../types/fivem";

export function parseFivem(rawDynamic: any, rawPlayers: any) {
  const serverInfo: ServerInformation = {
    name: rawDynamic.data.server || "Unknown Server Name",
    map: rawDynamic.data.map || "Unknown Map",
    currentPlayers: rawDynamic.data.clients || 0,
    maxPlayers: rawDynamic.data.sv_maxclients || 0,
  };

  const playerInfo: Player[] = Object.values(rawPlayers).map((item: any) => {
    return {
      name: item.name || "Unknown Player Name",
      id: item.id || "Unknown Player ID",
      ping: item.ping || 0,
    };
  });

  return { serverInfo, playerInfo };
}
