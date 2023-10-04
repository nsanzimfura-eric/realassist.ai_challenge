import React from "react";
import "./home.css";
import Graphs from "../../components/graphs/graphs";

export default function HomePage() {
  const handleGetBack = () => {};

  const handlePrintPage = () => {};

  return (
    <div className="home">
      <div className="actions">
        <img
          src="./images/back.png"
          className="back"
          alt="Back"
          onClick={handleGetBack}
        />
        <img
          src="./images/print.png"
          className="print"
          alt="Print"
          onClick={handlePrintPage}
        />
      </div>
      <Graphs />
    </div>
  );
}
