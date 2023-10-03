const puppeteer = require("puppeteer");
const { hostname } = require("../constants/constants");

const generatePdfControler = (_, res) => {
  (async () => {
    let browser;
    try {
      browser = await puppeteer.launch({ headless: true });
      const page = await browser.newPage();
      await page.goto(hostname);
      await page.waitForSelector("img");
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
