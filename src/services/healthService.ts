// Uptime & Date functions
export function getUptime() {
  let uptime;
  let uptimeSec = Number(process.uptime().toFixed(2));
  let uptimeMin = Math.floor(uptimeSec / 60);

  if (uptimeMin < 1) {
    uptime = `${uptimeSec} seconds`;
  } else if (uptimeMin == 1) {
    uptime = `${uptimeMin} minute`;
  } else {
    uptime = `${uptimeMin} minutes`;
  }

  return uptime;
}

export function getStartDate() {
  return new Date(Date.now()).toISOString();
}

// Upstream functions
