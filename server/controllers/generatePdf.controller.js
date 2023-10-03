const puppeteer = require("puppeteer");
const { hostname } = require("../constants/constants");

const generatePdfControler = (_, res) => {
  (async () => {
    const browser = await puppeteer.launch({
      args: [
        "--disable-setuid-sandbox",
        "--no-sandbox",
        "--single-process",
        "--no-zygote",
      ],
      headless: "new",
      executablePath:
        process.env.NODE_ENV === "production"
          ? process.env.PUPPETEER_EXECUTABLE_PATH
          : puppeteer.executablePath(),
    });

    try {
      const page = await browser.newPage();
      await page.goto(hostname);
      await page.setViewport({ width: 1920, height: 1080 });
      await page.waitForSelector("img");

      await page.goto(hostname);

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
