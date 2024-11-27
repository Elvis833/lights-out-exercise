import React from "react";
import './Cell.css';

const Cell = ({ cellIndex, isOn, toggleLight }) => {
  return (
    <button className={`cell ${isOn ? 'on' : 'off'}`}
      onClick={() => toggleLight (cellIndex)}>
      {/* {isOn ? 'On' : 'Off' } */}
    </button>
  );
};

export default Cell;