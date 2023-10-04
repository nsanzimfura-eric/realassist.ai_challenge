import React, { useEffect, useState } from "react";
import "./graphs.css";
import { Line } from "@ant-design/plots";
import useFetchAPI from "../../hooks/useFetch";
import { baseAPI_route } from "../../constants/constant";

export default function Graphs() {
  const { loading, data: apiData, error } = useFetchAPI(baseAPI_route);

  const [allData, setAllData] = useState();
  const [lineData, setLineData] = useState([]);

  useEffect(() => {
    if (!loading && !error) {
      setAllData(apiData?.data);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading, error]);

  console.log(loading, error, apiData, "test");
  if (loading) return <div className="loading_api">Loading API ...</div>;
  if (error) return <div className="error">Error Fetching API</div>;

  const handleChoiceChange = (event) => {
    const { value } = event.target;
    let dataSelected = [];
    allData.data.forEach((data) => {
      Object.keys(data).filter((dataKey) =>
        dataKey === value
          ? dataSelected.push({ year: data.data_key, value: data[dataKey] })
          : false
      );
    });
    setLineData(dataSelected);
  };

  // configs
  const config = {
    data: lineData,
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
  console.log(lineData, "line data");
  return (
    allData && (
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
          <h1 className="h1">{allData.title}</h1>{" "}
          <img src="./images/upBlue.png" alt="upBlue" className="upBlue" />
        </div>
        <select className="choices" onChange={handleChoiceChange}>
          {allData?.keys?.map((choice, index) => {
            return (
              <option key={index} value={choice}>
                {choice}
              </option>
            );
          })}
        </select>
        <div className="graphLines">
          <Line {...config} />
        </div>
        <div className="footer">
          <span className="src">Source(s):FBI</span>
        </div>
      </div>
    )
  );
}
