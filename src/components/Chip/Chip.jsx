import React from "react";
import "./Chip.css";
import chipIcon from "../../assets/images/chipIcon.svg";
const Chip = ({ number }) => {
  return (
    <div className="chip-container">
      <img src={chipIcon} />
      <p>20%</p>
    </div>
  );
};

export default Chip;
