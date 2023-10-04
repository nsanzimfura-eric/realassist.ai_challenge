import React, { useState } from "react";
import "./home.css";
import Graphs from "../../components/graphs/graphs";
import "./download.css";
import { useGetDataPdf } from "../../hooks/useGetData";

export default function HomePage() {
  const [showSelectKeys, setShowSelectKeys] = useState(false);
  const [hidePrintBtn, setHidePrintBtn] = useState(false);
  const { handleDownload, loading, error } = useGetDataPdf();

  const handleGetBack = () => {
    setShowSelectKeys(!showSelectKeys);
    setHidePrintBtn(false);
  };

  const handlePrintPage = () => {
    setHidePrintBtn(true);
    handleDownload();
  };
  if (loading || error)
    return alert(loading ? "Loading Pdf file..." : `Error: ${error.message}`);

  return (
    <div className="home">
      {!showSelectKeys && (
        <div className="actions">
          {!hidePrintBtn && (
            <img
              src="./images/back.png"
              className="back"
              alt="Back"
              onClick={handleGetBack}
            />
          )}
          {!hidePrintBtn && (
            <img
              src="./images/print.png"
              className="print"
              alt="Print"
              onClick={handlePrintPage}
            />
          )}
        </div>
      )}
      <Graphs showSelectKeys={showSelectKeys} handleGetBack={handleGetBack} />
    </div>
  );
}
