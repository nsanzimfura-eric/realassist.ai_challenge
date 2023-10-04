import React from "react";
import "./graphs.css";
import { Line } from "@ant-design/plots";

export default function Graphs(props) {
  const { title, data, choice } = props;

  const config = {
    data,
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
    <div className="graphs">
      <h1 className="h1">{title}</h1>
      <div className="choice">
        <span className="choice">{choice}</span>
        <img src="./images/down.png" alt="gray btn" />
      </div>
      <Line {...config} />
      <div className="footer">
        <span className="src">Source(s):FBI</span>
      </div>
    </div>
  );
}
