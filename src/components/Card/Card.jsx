import React from "react";
import Graph from "../Graph/Graph";
import Chip from "../Chip/Chip";

const Card = ({ title, value, number, chipColor }) => {
  return (
    <div
      className="card-container"
      style={{
        width: "19rem",
        padding: "1.25rem",
        backgroundColor: "white",
        borderRadius: "10px"
      }}
    >
      <h4>{title}</h4>
      <div
        className="card-body"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}
      >
        <div className="card-left">
          <h3>{value}</h3>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px"
            }}
          >
            <Chip number={number} />
            <p>{number}</p>
          </div>
        </div>
        <div className="card-graph">
          <Graph chipColor={chipColor} />
        </div>
      </div>
    </div>
  );
};

export default Card;
