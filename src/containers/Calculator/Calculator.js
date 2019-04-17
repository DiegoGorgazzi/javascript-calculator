import React, { Component } from 'react';
import CalculatorControl from "../../components/CalculatorControl/CalculatorControl";
import CalculatorOutput from "../../components/CalculatorOutput/CalculatorOutput";

class Calculator extends Component {
    state = {
        result: 0
    }


  resultClickHandler = (action, value) => {
      switch (action) {
        case "plus":
            this.setState( ( prevState ) => { return { result: prevState.result + 1 } } )
            break;
        case "minus":
            this.setState( ( prevState ) => { return { result: prevState.result - 1 } } )
            break;

      }

    }

    render () {
        return (
            <div>
              <CalculatorOutput value={this.state.result} />

              <CalculatorControl id="add" label="+" clicked={() => this.resultClickHandler( 'plus' )} />
              <CalculatorControl id="subtract" label="-" clicked={() => this.resultClickHandler( 'minus' )} />

            </div>
        );
    }
}

export default Calculator;
