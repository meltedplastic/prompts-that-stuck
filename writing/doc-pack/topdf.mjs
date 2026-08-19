import { chromium } from 'playwright';
const docs = ['index','01-design-mandate','02-prd-functional-spec','03-architecture-spec','04-support-doc'];
const base = '/Users/samportillo/AMPD/Arrow/_docs/cps-doc-pack/html';
const out = '/Users/samportillo/AMPD/Arrow/_docs/cps-doc-pack/pdf';
const browser = await chromium.launch();
const page = await browser.newPage();
for (const d of docs) {
  await page.goto(`file://${base}/${d}.html`, { waitUntil: 'networkidle' });
  await page.addStyleTag({ content: `
    @media print {
      .toc, nav.toc, aside, .sidebar, .toc-sidebar { display: none !important; }
      body, .layout, main, .content { display: block !important; max-width: 100% !important; margin: 0 !important; }
      main, .doc, .content { width: auto !important; }
      pre { white-space: pre-wrap; }
      pre:has(> code) { white-space: pre; overflow: visible; font-size: 9px; }
      figure img { max-width: 100% !important; }
      table { font-size: 10px; }
      h2, h3 { break-after: avoid; }
      tr, figure { break-inside: avoid; }
    }`});
  await page.pdf({ path: `${out}/${d}.pdf`, format: 'A4', margin: { top: '18mm', bottom: '18mm', left: '16mm', right: '16mm' }, printBackground: true });
  console.log('pdf:', d);
}
await browser.close();
