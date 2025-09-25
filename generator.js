import { chromium } from 'playwright';
import fs from 'node:fs';
import path from 'node:path';

export async function generateScoreScreenshots(baseUrl = 'http://localhost:5173', outDir = './screenshots') {
  // Requires chromium import already present below in file
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1200, height: 630 } });

  await fs.promises.mkdir(outDir, { recursive: true });


  for (let score = 0; score <= 100; score++) {
    const url = `${baseUrl}?score=${score}`;
    await page.goto(url, { waitUntil: 'networkidle' });

    const fileName = `bitekarma-og-score-${score}.png`;
    const filePath = path.join(outDir, fileName);

    await page.screenshot({ path: filePath, type: 'png' });
  }

  await browser.close();
}

generateScoreScreenshots().catch((error) => {
  console.error('Error generating screenshots:', error);
  process.exit(1);
});
