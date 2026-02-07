export async function safeFetchJson(url: URL, timeoutMs: number) {
  let res;

  // timeout
  const controller = new AbortController();
  const timeout = setTimeout(() => {
    controller.abort(`Couldn't fetch data from API in time.`);
  }, timeoutMs);

  try {
    res = await fetch(url, { signal: controller.signal });
    const data = await res.json();

    if (res.status !== 200) {
      clearTimeout(timeout);
      throw new Error(
        `Issue with fetching FiveM Data, Error Code: ${res.status}`,
      );
    }

    return { status: res.status, data };
  } catch (e) {
    clearTimeout(timeout);
    res;
    throw e;
  } finally {
    res;
    clearTimeout(timeout);
  }
}
