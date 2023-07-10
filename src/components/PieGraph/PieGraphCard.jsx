import React from "react";
import "./PieGraphCard.css";
import PieGraph from "./PieGraph";
const PieGraphCard = () => {
  return (
    <div className="pie-chart1">
      <h4>Chapter Wise Status</h4>
      <PieGraph />
    </div>
  );
};

export default PieGraphCard;
