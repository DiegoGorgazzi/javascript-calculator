import React from 'react';
import "./CalculatorControl.css";

const calculatorControl = (props) => (
    <button id={props.opID} value={props.operator} className="CalculatorControl" onClick={props.clicked} disabled={props.isDisabled}>
        {props.operator}
    </button>
);

export default calculatorControl;
