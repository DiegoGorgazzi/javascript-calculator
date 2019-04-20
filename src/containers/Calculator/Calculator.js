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
    console.log(userInput, "NUMBER");
    if(this.state.currentInput === 0){
      this.setState({
        currentInput: userInput
      });
    } else {
    this.setState( ( prevState ) => {
      return { currentInput: prevState.currentInput + userInput }
    });
    }
    console.log(this.state.currentInput, "current");
  }

  clearHandler = () => {
    this.setState({
      currentInput: 0
    });
  }

  equalHandler = () => {
    console.log(this.state.currentInput);
    let numberfy = this.state.currentInput;
    let equal = eval(numberfy);
    console.log(equal, "equal");

  }


    render () {
      console.log(this.state.currentInput, "current Outside");
        return (
            <div>
              <div id="display">
                  {this.state.currentInput}
              </div>

              <CalculatorOutput value={this.state.result} />

              <CalculatorControl opID="add" operator="+" clicked={this.numberClick} />
              <CalculatorControl opID="subtract" operator="-" clicked={this.numberClick}  />
              <CalculatorControl opID="multiply" operator="*" clicked={this.numberClick} />
              <CalculatorControl opID="divide" myValue="/" operator="/" clicked={this.numberClick} />
              <br />
              <CalculatorControl opID="equals" operator="=" clicked={this.equalHandler}  />
              <br />
              <CalculatorControl opID="clear" operator="CLEAR" clicked={this.clearHandler} />
              <br />
              <CalculatorNumbers numClick={this.numberClick} />
              <br />


            </div>
        );
    }
}

export default Calculator;
