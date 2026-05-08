import puppeteer from "puppeteer";
import fs from "fs";
import path from "path";

const url = process.argv[2] || "http://localhost:3001";
const label = process.argv[3] ? `-${process.argv[3]}` : "";
const outDir = path.join(process.cwd(), "temporary screenshots");

if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

// Auto-increment: find the next unused N
let n = 1;
while (fs.existsSync(path.join(outDir, `screenshot-${n}${label}.png`))) n++;
const outPath = path.join(outDir, `screenshot-${n}${label}.png`);

const browser = await puppeteer.launch({ headless: true, args: ["--no-sandbox"] });
const page = await browser.newPage();
await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 1 });
await page.goto(url, { waitUntil: "networkidle2", timeout: 30000 });

// Scroll through the page to trigger useInView animations, then return to top
await page.evaluate(async () => {
  await new Promise((resolve) => {
    let y = 0;
    const step = 300;
    const delay = 80;
    const timer = setInterval(() => {
      window.scrollBy(0, step);
      y += step;
      if (y >= document.body.scrollHeight) {
        window.scrollTo(0, 0);
        clearInterval(timer);
        resolve();
      }
    }, delay);
  });
});
await new Promise((r) => setTimeout(r, 600));

await page.screenshot({ path: outPath, fullPage: true });
await browser.close();

console.log(`Saved: ${outPath}`);
