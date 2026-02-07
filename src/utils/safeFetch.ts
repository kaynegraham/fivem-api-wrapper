export async function safeFetchJson(url: string, timeoutMs: number) {
  let res;
  // timeout
  const controller = new AbortController();
  const timeout = setTimeout(() => {
    controller.abort(`Couldn't fetch data from API in time.`);
  }, timeoutMs);

  try {
    // attempt to fetch data from url
    res = await fetch(url, { signal: controller.signal });
    // turn to json and return
    const data = await res.json(); // data.status doesnt exist on these responses
    return { status: res.status, data };
  } catch (e) {
    clearTimeout(timeout);
    throw e;
  } finally {
    clearTimeout(timeout);
  }
}
