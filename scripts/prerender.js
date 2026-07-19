// Runs after `vite build`. Launches the built site, captures the fully-rendered HTML,
// and writes it back to dist/index.html so crawlers see real content without needing JS.
import { chromium } from 'playwright';
import { spawn } from 'child_process';
import { writeFileSync } from 'fs';
import { setTimeout as sleep } from 'timers/promises';

const server = spawn(
  'npx', ['vite', 'preview', '--port', '4174', '--host'],
  { stdio: 'pipe' }
);

await sleep(2500); // wait for preview server

const browser = await chromium.launch();
const page = await browser.newPage();
await page.goto('http://localhost:4174/');
await page.waitForLoadState('networkidle');

const html = await page.content();
writeFileSync('dist/index.html', html);
console.log('✓ Pre-render complete — dist/index.html updated');

await browser.close();
server.kill();
