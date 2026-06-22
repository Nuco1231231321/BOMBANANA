const HOST = "bombanana.online";
const INDEXNOW_KEY = "3f261388-f1a5-4360-b495-83ba7af97832";
const KEY_LOCATION = `https://${HOST}/${INDEXNOW_KEY}.txt`;
const SITEMAP_URL = `https://${HOST}/sitemap.xml`;
const ENDPOINT = "https://api.indexnow.org/indexnow";

function normalizeUrl(input) {
  const url = new URL(input, `https://${HOST}`);
  if (url.hostname !== HOST) {
    throw new Error(`Refusing to submit URL outside ${HOST}: ${url.href}`);
  }
  url.hash = "";
  return url.href;
}

async function getUrlsFromSitemap() {
  const response = await fetch(SITEMAP_URL, {
    headers: { "user-agent": "bombanana-indexnow/1.0" },
  });

  if (!response.ok) {
    throw new Error(`Could not fetch sitemap: ${response.status} ${response.statusText}`);
  }

  const xml = await response.text();
  return [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => normalizeUrl(match[1]));
}

async function submit(urls) {
  const uniqueUrls = [...new Set(urls.map(normalizeUrl))];
  if (uniqueUrls.length === 0) {
    throw new Error("No URLs to submit.");
  }

  const response = await fetch(ENDPOINT, {
    method: "POST",
    headers: { "content-type": "application/json; charset=utf-8" },
    body: JSON.stringify({
      host: HOST,
      key: INDEXNOW_KEY,
      keyLocation: KEY_LOCATION,
      urlList: uniqueUrls,
    }),
  });

  const body = await response.text();
  if (!response.ok) {
    throw new Error(`IndexNow submit failed: ${response.status} ${response.statusText}\n${body}`);
  }

  console.log(`Submitted ${uniqueUrls.length} URL(s) to IndexNow.`);
}

const cliUrls = process.argv.slice(2);
const urls = cliUrls.length > 0 ? cliUrls : await getUrlsFromSitemap();
await submit(urls);
