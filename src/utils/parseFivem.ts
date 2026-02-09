import { ServerInformation, Player } from "../types/fivem";

export function parseFivem(rawDynamic: any, rawPlayers: any) {
  const degraded =
    rawDynamic.status !== "fulfilled" || rawPlayers.status !== "fulfilled";

  if (rawDynamic.status !== "fulfilled" && rawPlayers.status !== "fulfilled") {
    throw new Error("Failed to fetch server information");
  }

  const dynamicData =
    rawDynamic.status === "fulfilled" ? rawDynamic.value.data : null;
  const playerData =
    rawPlayers.status === "fulfilled" ? rawPlayers.value.data : null;

  const serverInfo: ServerInformation = {
    name: dynamicData?.hostname || "Unknown Server Name",
    map: dynamicData?.mapname || "Unknown Map",
    currentPlayers: dynamicData?.clients || 0,
    maxPlayers: dynamicData?.sv_maxclients || 0,
  };

  const playerInfo: Player[] = (playerData ?? []).map((item: any) => {
    return {
      name: item.name ?? "Unknown Player Name",
      id: item.id ?? "Unknown Player ID",
      ping: item.ping ?? 0,
    };
  });

  return { data: { serverInfo, playerInfo }, degraded };
}
