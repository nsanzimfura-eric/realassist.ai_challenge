import React, { useState } from "react";
import "./home.css";
import Graphs from "../../components/graphs/graphs";

export default function HomePage() {
  const [showSelectKeys, setShowSelectKeys] = useState(false);
  const [hidePrintBtn, setHidePrintBtn] = useState(false);

  const handleGetBack = () => {
    setShowSelectKeys(!showSelectKeys);
    setHidePrintBtn(false);
  };

  const handlePrintPage = () => {
    setHidePrintBtn(true);
  };

  console.log(showSelectKeys, "avshdgha");
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
