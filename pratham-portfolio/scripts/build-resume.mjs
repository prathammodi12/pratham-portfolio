// Prints resume/resume.html to public/Pratham_Modi_Resume.pdf with headless Chrome or Edge.
// Usage: npm run resume   (set CHROME_PATH to use a specific browser binary)
import { execFileSync } from "node:child_process";
import { existsSync } from "node:fs";
import { resolve } from "node:path";
import { pathToFileURL } from "node:url";

const candidates = [
  process.env.CHROME_PATH,
  "C:/Program Files/Google/Chrome/Application/chrome.exe",
  "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe",
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  "/usr/bin/google-chrome",
  "/usr/bin/chromium",
].filter(Boolean);

const browser = candidates.find((p) => existsSync(p));
if (!browser) {
  console.error("No Chrome/Edge found. Set CHROME_PATH to a Chromium-based browser.");
  process.exit(1);
}

const input = pathToFileURL(resolve("resume/resume.html")).href;
const output = resolve("public/Pratham_Modi_Resume.pdf");

execFileSync(
  browser,
  [
    "--headless=new",
    "--disable-gpu",
    "--no-pdf-header-footer",
    `--print-to-pdf=${output}`,
    input,
  ],
  { stdio: "inherit" },
);
console.log(`Resume written to ${output}`);
