const express = require("express");
const router = require("./routes/generatePdf.route");

const app = express();
app.use("/actions", router);

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
