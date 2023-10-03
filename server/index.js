const express = require("express");
const router = require("./routes/generatePdf.route");

const app = express();
app.get("/", (req, res) =>
  res.send(
    "Welcome to RealAssist.ai, head to /actions/generate-pdf to get your pdf"
  )
);
app.use("/actions", router);

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
