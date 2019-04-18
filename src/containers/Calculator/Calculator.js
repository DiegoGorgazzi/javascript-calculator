import React, { Component } from 'react';
import CalculatorControl from "../../components/CalculatorControl/CalculatorControl";
import CalculatorOutput from "../../components/CalculatorOutput/CalculatorOutput";
import CalculatorNumbers from "../../components/CalculatorNumbers/CalculatorNumbers";

class Calculator extends Component {
    state = {
        result: 0,
        currentInput: 0
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

  numberClick = (event) => {
    let userInput = event.target.value;
    this.setState( ( prevState ) => {
      return { currentInput: prevState.currentInput + userInput }
    });
    console.log(this.state.currentInput, "current");
  }

  clearHandler = () => {
    this.setState({
      currentInput: 0
    });
  }

    render () {
      console.log(this.state.currentInput, "current Outside");
        return (
            <div>
              <div id="display">
                  {this.state.currentInput}
              </div>

              <CalculatorOutput value={this.state.result} />

              <CalculatorControl myID="add" label="+" clicked={() => this.resultClickHandler( 'plus' )} />
              <CalculatorControl myID="subtract" label="-" clicked={() => this.resultClickHandler( 'minus' )} />
              <CalculatorControl myID="multiply" label="x" clicked={this.numberClick} />
              <CalculatorControl myID="divide" label="/" clicked={this.numberClick} />
              <CalculatorControl myID="equals" label="=" clicked={() => this.resultClickHandler( 'minus' )} />
              <CalculatorControl myID="clear" label="CLEAR" clicked={this.clearHandler} />
              <br />
              <CalculatorNumbers numClick={this.numberClick} />
              <br />


            </div>
        );
    }
}

export default Calculator;
