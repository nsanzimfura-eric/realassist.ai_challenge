import React, { useState } from "react";
import "./home.css";
import Graphs from "../../components/graphs/graphs";
import { useGetDataPdf } from "../../hooks/useGetData";

export default function HomePage() {
  const [showSelectKeys, setShowSelectKeys] = useState(false);
  const [hidePrintBtn, setHidePrintBtn] = useState(false);
  const [renderPrintWhenApiMounts, setRenderPrintWhenApiMounts] =
    useState(true);

  const { handleDownload, error } = useGetDataPdf();

  const handleGetBack = () => {
    setShowSelectKeys(!showSelectKeys);
    setHidePrintBtn(false);
    setRenderPrintWhenApiMounts(false);
  };

  const handlePrintPage = () => {
    setHidePrintBtn(true);
    handleDownload();
  };

  if (error) alert(`Error: ${error.message}`);

  return (
    <div className="home">
      {!showSelectKeys && !renderPrintWhenApiMounts && (
        <div className="actions" id="homePage">
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
      <Graphs
        setRenderPrintWhenApiMounts={setRenderPrintWhenApiMounts}
        showSelectKeys={showSelectKeys}
        handleGetBack={handleGetBack}
      />
    </div>
  );
}
