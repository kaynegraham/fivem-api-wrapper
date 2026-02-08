import { ServerInformation, Player } from "../types/fivem";

export function parseFivem(rawDynamic: any, rawPlayers: any) {
  let degraded = false;
  if (rawDynamic.status !== "fulfilled" || rawPlayers.status !== "fulfilled") {
    degraded = true;
  }

  if (rawDynamic.status !== "fulfilled" && rawPlayers.status !== "fulfilled") {
    throw new Error("Failed to fetch dynamic server information");
  }
  const serverInfo: ServerInformation = {
    name: rawDynamic.value.data?.hostname || "Unknown Server Name",
    map: rawDynamic.value.data?.mapname || "Unknown Map",
    currentPlayers: rawDynamic.value.data?.clients || 0,
    maxPlayers: rawDynamic.value.data?.sv_maxclients || 0,
  };

  const playerInfo: Player[] = Object(rawPlayers.value.data).map(
    (item: any) => {
      return {
        name: item.name || "Unknown Player Name",
        id: item.id || "Unknown Player ID",
        ping: item.ping || 0,
      };
    },
  );

  return { data: { serverInfo, playerInfo }, degraded };
}
