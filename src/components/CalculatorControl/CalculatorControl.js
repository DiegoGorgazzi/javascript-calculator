import React from 'react';
import "./CalculatorControl.css";

const calculatorControl = (props) => (
    <div className="CalculatorControl" onClick={props.clicked}>
        {props.label}
    </div>
);

export default calculatorControl;
