import React, { useEffect, useState } from "react";
import "../../components/graphs/graphs.css";
import "../home/home.css";
import { Line } from "@ant-design/plots";

export default function Download() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const graphData = JSON.parse(localStorage.getItem("lineData"));
    setData(graphData);
  }, []);

  const config = {
    data: data,
    xField: "year",
    yField: "value",
    label: {},
    point: {
      size: 3,
      shape: "circle",
      style: {
        fill: "transparent",
        stroke: "purple",
        lineWidth: 2,
      },
    },
    line: {
      size: 1,
      style: {
        fill: "#1463FF",
        stroke: "#1463FF",
        lineWidth: 3,
      },
    },
    tooltip: {
      showMarkers: false,
    },
    state: {
      active: {
        style: {
          shadowBlur: 1,
          stroke: "",
          fill: "",
        },
      },
    },
    interactions: [
      {
        type: "marker-active",
      },
    ],
  };

  return (
    <div className="home">
      <div className="graphs">
        <div className="header">
          <div className="crime">
            <img src="./images/logoo.png" alt="Logoo" className="logoo" />
            Crime
          </div>
          <div className="toggleBtn">
            <img src="./images/xx.png" alt="Down Arrow" className="btnDown" />
          </div>
        </div>
        <div className="titleBox">
          <h1 className="h1">All Arrest by Offense</h1>{" "}
          <img src="./images/upBlue.png" alt="upBlue" className="upBlue" />
        </div>
        <div className="graphLines">
          <Line {...config} />
        </div>
        <div className="footer">
          <span className="src">Source(s):FBI</span>
        </div>
      </div>
    </div>
  );
}
