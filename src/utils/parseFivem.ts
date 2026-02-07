import { ServerInformation, Player } from "../types/fivem";

export function parseFivem(rawDynamic: any, rawPlayers: any) {
  const serverInfo: ServerInformation = {
    name: rawDynamic.data?.hostname || "Unknown Server Name",
    map: rawDynamic.data?.mapname || "Unknown Map",
    currentPlayers: rawDynamic.data?.clients || 0,
    maxPlayers: rawDynamic.data?.sv_maxclients || 0,
  };

  const playerInfo: Player[] = rawPlayers.data?.map((item: any) => {
    return {
      name: item.name || "Unknown Player Name",
      id: item.id || "Unknown Player ID",
      ping: item.ping || 0,
    };
  });

  return { serverInfo, playerInfo };
}
