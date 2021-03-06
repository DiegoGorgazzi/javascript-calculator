import React from "react";
import "./CalculatorNumbers.css";

let numbers = [
  {amount: 0, name: "zero"},
  {amount: ".", name: "decimal"},
  {amount: 1, name: "one"},
  {amount: 2, name: "two"},
  {amount: 3, name: "three"},
  {amount: 4, name: "four"},
  {amount: 5, name: "five"},
  {amount: 6, name: "six"},
  {amount: 7, name: "seven"},
  {amount: 8, name: "eight"},
  {amount: 9, name: "nine"},
];

const calculatorNumbers = (props) => numbers.map((number, index) =>
    {return (
          <button
            id= {number.name}
            key= {index}
            value={number.amount}
            type="button"
            onClick={props.numClick}
            className="CalculatorNumbers"
            disabled={props.isDisabled === "zero" && number.amount === 0 ? true : props.isDisabled === "numbers" && number.amount !=="." ? true : props.isDisabled === "decimal" && number.amount ==="." ? true: false}
          >
            {number.amount}

          </button>
        )
      });

export default calculatorNumbers;
