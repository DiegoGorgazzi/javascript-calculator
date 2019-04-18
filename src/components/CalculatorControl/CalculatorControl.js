import React from 'react';
import "./CalculatorControl.css";

const calculatorControl = (props) => (
    <button id={props.myID} value={props.myValue} className="CalculatorControl" onClick={props.clicked}>
        {props.label}
    </button>
);

export default calculatorControl;
