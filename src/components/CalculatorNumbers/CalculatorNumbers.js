import React from "react";

let numbers = [
  {amount: 0, name: "zero"},
  {amount: 1, name: "one"},
  {amount: 2, name: "two"},
  {amount: 3, name: "three"},
  {amount: 4, name: "four"},
  {amount: 5, name: "five"},
  {amount: 6, name: "six"},
  {amount: 7, name: "seven"},
  {amount: 8, name: "eight"},
  {amount: 9, name: "nine"},
  {amount: ".", name: "decimal"},
  {amount: "-/+", name: "negative/positive"}
];

const calculatorNumbers = (props) => numbers.map((number, index) =>
    {return (
          <button
            id= {number.name}
            key= {index}
            value={number.amount}
            type="button"
            onClick={props.numClick}

          >
            {number.amount}

          </button>
        )
      });

export default calculatorNumbers;
