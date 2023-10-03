const { hostname } = require("../constants/constants");
const { executablePath } = require("puppeteer");

const puppeteer = require("puppeteer-extra");
const hidden = require("puppeteer-extra-plugin-stealth");

const generatePdfControler = (_, res) => {
  (async () => {
    let browser;
    try {
      puppeteer.use(hidden());
      browser = await puppeteer.launch({
        args: ["--no-sandbox"],
        headless: false,
        ignoreHTTPSErrors: true,
        executablePath: executablePath(),
      });

      const page = await browser.newPage();
      await page.goto(hostname, { waitUntil: "networkidle0" });
      await page.setViewport({
        width: 1920,
        height: 1080,
        deviceScaleFactor: 1,
      });
      await page.waitForSelector("img");
      await page.waitForTimeout(3000);

      const pdfBuffer = await page.pdf({ format: "A4" });
      res.setHeader("Content-Type", "application/pdf");
      res.setHeader(
        "Content-Disposition",
        "attachment; filename=market-insights.pdf"
      );
      res.send(pdfBuffer);
    } catch (error) {
      console.error("Error generating PDF:", error);
      res.status(500).send("Error generating PDF");
    } finally {
      if (browser) {
        await browser.close();
      }
    }
  })();
};

module.exports = generatePdfControler;
