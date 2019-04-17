import React, { Component } from 'react';
import CalculatorControl from "../../components/CalculatorControl/CalculatorControl";

class Calculator extends Component {

  clickHandler = (event) => {
      console.log("yay clicked")
    }

    render () {
        return (
            <div>
              <CalculatorControl id="add" label="+" clicked={this.clickHandler} />

            </div>
        );
    }
}

export default Calculator;
