import React from "react";
import "./DonutCard.css";
import Donut from "./Donut";
const DonutCard = () => {
  return (
    <div className="donut-chart-container">
      <h3>Quiz Passing</h3>
      <div
        style={{
          display: "flex",
          alignItems: "center"
        }}
      >
        <Donut className="donut-chart" />
        <div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "10px"
            }}
          >
            <div className="green-legend"></div>
            <div>
              <h4>passed</h4>
              <p>1423 Workers</p>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center"
            }}
          >
            <div className="red-legend"></div>
            <div>
              <h4>failed</h4>
              <p>134 Workers</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonutCard;
