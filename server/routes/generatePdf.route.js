import express from "express";
import generatePdfControler from "../controllers/generatePdf.controller";

const router = express.Router();

router.get("/generate-pdf", generatePdfControler);

module.exports = router;
