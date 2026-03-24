const http = require("node:http");
const { spawn } = require("node:child_process");

const { test, expect } = require("@playwright/test");

const BASE_URL = "http://127.0.0.1:8000/index.html";
const PNG_PIXEL = Buffer.from(
  "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAusB9sotk98AAAAASUVORK5CYII=",
  "base64",
);

let serverProcess = null;
let startedLocalServer = false;

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
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
  throw new Error("http://127.0.0.1:8000/index.html に接続できませんでした。");
}

test.beforeAll(async () => {
  if (await canReachPage()) {
    return;
  }

  startedLocalServer = true;
  serverProcess = spawn("python3", ["-m", "http.server", "8000", "--bind", "127.0.0.1"], {
    cwd: process.cwd(),
    stdio: "ignore",
  });

  await waitForPageReady();
});

test.afterAll(async () => {
  if (!startedLocalServer || !serverProcess || serverProcess.killed) {
    return;
  }

  serverProcess.kill("SIGTERM");
  await sleep(300);

  if (!serverProcess.killed) {
    serverProcess.kill("SIGKILL");
  }
});

test("3画像を2分割coverでPDF生成できる", async ({ page }) => {
  await page.goto(BASE_URL);

  await expect(page).toHaveTitle("A4 Print Layout Beta");
  await expect(page.locator("#appVersionText")).toHaveText("v1.1.0-beta.1");
  await expect(page.locator("#appReleaseBadge")).toHaveCount(0);

  const titleBox = await page.locator(".app-title").boundingBox();
  const versionBox = await page.locator("#appVersionText").boundingBox();
  if (!titleBox || !versionBox) {
    throw new Error("ヘッダー要素の位置を取得できませんでした。");
  }
  expect(versionBox.x).toBeGreaterThan(titleBox.x + titleBox.width - 1);
  expect(Math.abs(versionBox.y - titleBox.y)).toBeLessThan(18);

  await page.locator("#fileInput").setInputFiles([
    { name: "sample-a.png", mimeType: "image/png", buffer: PNG_PIXEL },
    { name: "sample-b.png", mimeType: "image/png", buffer: PNG_PIXEL },
    { name: "sample-c.png", mimeType: "image/png", buffer: PNG_PIXEL },
  ]);

  await expect(page.locator("#selectedCountBadge")).toHaveText("3枚");
  await expect(page.locator("#thumbGrid .thumb")).toHaveCount(3);

  await page.locator('#sc-a.on [data-go="sc-b"]').click();
  await page.locator('#sc-b.on [data-layout="2"]').click();
  await page.locator('#sc-b.on [data-go="sc-c"]').click();

  await expect(page.locator("#previewLayoutLabel")).toContainText("2分割");
  await page.locator('#sc-c.on [data-fit="cover"]').click();
  await page.locator("#generateButton").click();

  await expect(page.locator("#sc-d.on")).toBeVisible();
  await expect(page.locator("#donePageCount")).toHaveText("2 ページ");
  await expect(page.locator("#saveLink")).toBeVisible();
  await expect(page.locator("#openPreviewLink")).toBeVisible();
  await expect(page.locator("#shareButton")).toBeEnabled();
});
