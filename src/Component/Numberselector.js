import React from "react";
import "./Gamepage.css";
import { useState } from "react";

const Numberselector = (props) => {

  const array = [1, 2, 3, 4, 5, 6];
  const {selectedNumber, setSelectedNumber, error, setError} = props

    const handleNumberSelection = (value) => {
        setSelectedNumber(value);
        setError("")
    }

  return (
      <div className="numberSelector">
        <p className="errorMsg">{error}</p>
        <div className="flex">
          {array.map((value, i) => (
            <div onClick={() => handleNumberSelection(value)} className={`box ${selectedNumber === value ? 'select' : ''}`}>{value}</div>
          ))}
        </div>
        <p>Select Number</p>
      </div>
  );
};

export default Numberselector;
