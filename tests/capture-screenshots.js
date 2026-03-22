const http = require("node:http");
const { spawn } = require("node:child_process");
const path = require("node:path");

const { chromium } = require("playwright");

const BASE_URL = "http://127.0.0.1:8000/index.html";
const OUTPUT_DIR = path.resolve("reference/preview");
const DEFAULT_TASK_ID = "manual";
const PNG_PIXEL = Buffer.from(
  "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAusB9sotk98AAAAASUVORK5CYII=",
  "base64",
);

let serverProcess = null;
let startedLocalServer = false;

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function timestamp() {
  const now = new Date();
  const pad = (value) => String(value).padStart(2, "0");
  return [
    now.getFullYear(),
    pad(now.getMonth() + 1),
    pad(now.getDate()),
  ].join("") + "-" + [pad(now.getHours()), pad(now.getMinutes()), pad(now.getSeconds())].join("");
}

function canReachPage() {
  return new Promise((resolve) => {
    const req = http.get(BASE_URL, (res) => {
      res.resume();
      resolve(res.statusCode === 200);
    });

    req.setTimeout(1000, () => {
      req.destroy();
      resolve(false);
    });

    req.on("error", () => resolve(false));
  });
}

async function waitForPageReady(timeoutMs = 10000) {
  const startedAt = Date.now();
  while (Date.now() - startedAt < timeoutMs) {
    if (await canReachPage()) {
      return;
    }
    await sleep(250);
  }
  throw new Error(`${BASE_URL} に接続できませんでした。`);
}

async function ensureServerReady() {
  if (await canReachPage()) {
    return;
  }

  startedLocalServer = true;
  serverProcess = spawn("python3", ["-m", "http.server", "8000", "--bind", "127.0.0.1"], {
    cwd: process.cwd(),
    stdio: "ignore",
  });

  await waitForPageReady();
}

async function stopServerIfNeeded() {
  if (!startedLocalServer || !serverProcess || serverProcess.killed) {
    return;
  }

  serverProcess.kill("SIGTERM");
  await sleep(300);

  if (!serverProcess.killed) {
    serverProcess.kill("SIGKILL");
  }
}

async function captureScreenshots(taskId) {
  const stamp = timestamp();
  const browser = await chromium.launch();
  const page = await browser.newPage({
    viewport: { width: 390, height: 844 },
    deviceScaleFactor: 2,
  });

  const files = {
    a: path.join(OUTPUT_DIR, `preview-${taskId}-screen-a-${stamp}.png`),
    b: path.join(OUTPUT_DIR, `preview-${taskId}-screen-b-${stamp}.png`),
    c: path.join(OUTPUT_DIR, `preview-${taskId}-screen-c-${stamp}.png`),
    d: path.join(OUTPUT_DIR, `preview-${taskId}-screen-d-${stamp}.png`),
  };

  await page.goto(BASE_URL, { waitUntil: "networkidle" });
  await page.screenshot({ path: files.a, fullPage: false });

  await page.locator("#fileInput").setInputFiles([
    { name: "sample-a.png", mimeType: "image/png", buffer: PNG_PIXEL },
    { name: "sample-b.png", mimeType: "image/png", buffer: PNG_PIXEL },
    { name: "sample-c.png", mimeType: "image/png", buffer: PNG_PIXEL },
  ]);
  await page.locator('#sc-a.on [data-go="sc-b"]').click();
  await page.waitForTimeout(300);
  await page.screenshot({ path: files.b, fullPage: false });

  await page.locator('#sc-b.on [data-layout="2"]').click();
  await page.locator('#sc-b.on [data-fit="cover"]').click();
  await page.locator('#sc-b.on [data-go="sc-c"]').click();
  await page.waitForTimeout(300);
  await page.screenshot({ path: files.c, fullPage: false });

  await page.locator("#generateButton").click();
  await page.locator("#sc-d.on").waitFor({ state: "visible" });
  await page.waitForTimeout(500);
  await page.screenshot({ path: files.d, fullPage: false });

  await browser.close();
  return files;
}

async function main() {
  const taskId = process.argv[2] || DEFAULT_TASK_ID;
  try {
    await ensureServerReady();
    const files = await captureScreenshots(taskId);
    console.log(JSON.stringify(files, null, 2));
  } finally {
    await stopServerIfNeeded();
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
