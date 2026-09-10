import { chromium } from '@playwright/test';
import { mkdirSync } from 'fs';

const baseUrl = 'http://localhost:3000';
const outDir = './screenshots';
mkdirSync(outDir, { recursive: true });

const routes = [
  { path: '/', name: 'home' },
  { path: '/experiences', name: 'experiences' },
  { path: '/experiences/real-sociedad', name: 'club-real-sociedad' },
  { path: '/clubs', name: 'clubs' },
  { path: '/families', name: 'families' },
  { path: '/teams', name: 'teams' },
  { path: '/about', name: 'about' },
  { path: '/faq', name: 'faq' },
  { path: '/apply', name: 'apply' },
];

const viewports = [
  { width: 1440, height: 900, suffix: 'desktop' },
  { width: 390, height: 844, suffix: 'mobile' },
];

async function run() {
  const browser = await chromium.launch();

  // Only screenshot routes that exist (won't 404)
  const page = await browser.newPage();

  for (const route of routes) {
    for (const vp of viewports) {
      await page.setViewportSize({ width: vp.width, height: vp.height });
      const url = `${baseUrl}${route.path}`;
      try {
        const resp = await page.goto(url, { waitUntil: 'networkidle', timeout: 10000 });
        if (resp && resp.status() < 400) {
          const filename = `${outDir}/${route.name}-${vp.suffix}.png`;
          await page.screenshot({ path: filename, fullPage: true });
          console.log(`✓ ${filename}`);
        } else {
          console.log(`✗ ${url} → ${resp?.status()}`);
        }
      } catch (e) {
        console.log(`✗ ${url} → ${e.message?.slice(0, 80)}`);
      }
    }
  }

  await browser.close();
}

run();
