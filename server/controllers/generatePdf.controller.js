const puppeteer = require("puppeteer");
const { hostname } = require("../constants/constants");

const generatePdfControler = async (req, res) => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.goto(hostname);

  try {
    const pdfBuffer = await page.pdf({ format: "A4" });
    await browser.close();
    res.setHeader("Content-Type", "application/pdf");
    res.setHeader(
      "Content-Disposition",
      "attachment; filename=market-insights.pdf"
    );

    res.send(pdfBuffer);
  } catch (error) {
    console.error("Error generating PDF:", error);
    res.status(500).send("Error generating PDF");
  }
};

module.exports = generatePdfControler;
