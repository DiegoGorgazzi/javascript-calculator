import React from 'react';

import './CalculatorOutput.css';

const calculatorOutput = (props) => (
    <div className="CalculatorOutput">
        Result: {props.value}
    </div>
);

export default calculatorOutput;
