import React, { Component } from 'react';
import CalculatorControl from "../../components/CalculatorControl/CalculatorControl";
import CalculatorOutput from "../../components/CalculatorOutput/CalculatorOutput";
import CalculatorNumbers from "../../components/CalculatorNumbers/CalculatorNumbers";

class Calculator extends Component {
    state = {
        result: "0",
        currentInput: "0",
        operatorDisabled: false,
        zeroDisabled: false ,
        decimalDisabled: false,
        numbersDisabled: false,
        equalPressed: false,
        equalDisabled: false
    }

  componentDidMount() {
    document.addEventListener("click", this.disableHandler);
    this.disableHandler();
  }

  componentWillUnmount() {
    document.removeEventListener("click", this.disableHandler);
    }

  componentDidUpdate = () => {
    //Handle double operator inputs
    let inputLength = this.state.currentInput.length;
    let userInput = this.state.currentInput;
    let operators = ["+", "-", "*", "/"];

    if (operators.includes(userInput[inputLength-1])
           && operators.includes(userInput[inputLength-2]) ) {
      this.setState({
        currentInput: userInput.slice(0, (inputLength-2)) + userInput.slice(inputLength-1)
      });
    }

    if (userInput[inputLength-1] === "."
           && operators.includes(userInput[inputLength-2]) ) {
      this.setState({
        currentInput: userInput.slice(0, (inputLength-1)) + "0."
      });
    }
  }

  numberClick = (event) => {
    let userInput = event.target.value;
    if(this.state.currentInput === "0"){
      if(userInput === ".") {
        this.setState( ( prevState ) => {
          return {
            currentInput: prevState.currentInput + userInput,
          }
        });
      }
      else {
      this.setState({
        currentInput: userInput
      });
      }
    } else {
    this.setState( ( prevState ) => {
      return {
        currentInput: prevState.currentInput + userInput,
      }
    });
  };

  }

  clearHandler = () => {
    this.setState({
      result: "0",
      currentInput: "0",
      zeroDisabled: false,
      decimalDisabled: false,
      operatorDisabled: false,
      numbersDisabled: false,
      equalPressed: false
    });
  }

  equalHandler = () => {
    let numberfy = this.state.currentInput;
    let equal = eval(numberfy);
    console.log(equal, "equal");
    this.setState({
      //set currentInput to equal so user can use any operator on the stored result
      currentInput: equal,
      result: equal,
      equalPressed: true
    });

  }

  disableHandler = () => {
    let inputLength = this.state.currentInput.length;
    let userInput = this.state.currentInput;
    let operators = ["+", "-", "*", "/"];

    //Prevent operators to be entered when App loads
    if(this.state.currentInput === "0" ){
      this.setState({
        operatorDisabled: true ,
        zeroDisabled: false ,
        decimalDisabled: false,
        numbersDisabled: false
      });
    }
    //Prevent more than one zero after operator has been clicked and prevent
    //any numbers to be enabled (i.e. if a zero is present after an operator,
    //the only thing a user should to is put a decimal or another operator)
    else if(inputLength > 1
      && userInput[inputLength-1]=== "0"
          && operators.includes(userInput[inputLength-2])){
      console.log("else if");
      this.setState({
        operatorDisabled: false ,
        zeroDisabled: true ,
        decimalDisabled: false,
        numbersDisabled: true
      });
    }
    //Disable multiple decimal periods within same number
    else if(inputLength > 1
      && userInput[inputLength-1]=== "."
          ){
      this.setState({
        operatorDisabled: false ,
        zeroDisabled: false ,
        decimalDisabled: true,
        numbersDisabled: false
      });
    }
    //Disable Equal button if last value in string is an operator
    else if(inputLength > 1
      && operators.includes(userInput[inputLength-1])
          ){
      this.setState({
        operatorDisabled: false ,
        zeroDisabled: false ,
        decimalDisabled: false,
        numbersDisabled: false,
        equalDisabled: true
      });
    }
    else {
      this.setState({
        operatorDisabled: false ,
        zeroDisabled: false ,
        numbersDisabled: false,
        equalPressed: false,
        equalDisabled: false
      });
    }

  }


    render () {

        let inputResult;

        if(this.state.equalPressed) {
          inputResult = this.state.result;
        } else {
          inputResult = this.state.currentInput;
        }

        return (
            <div>
              <div id="display">
              {inputResult}

              </div>
              <div> currentInput: {this.state.currentInput}</div>
<CalculatorOutput value={this.state.result} />



              <CalculatorControl opID="add" operator="+" clicked={this.numberClick} isDisabled={this.state.operatorDisabled}/>
              <CalculatorControl opID="subtract" operator="-" clicked={this.numberClick}  isDisabled={this.state.operatorDisabled}/>
              <CalculatorControl opID="multiply" operator="*" clicked={this.numberClick} isDisabled={this.state.operatorDisabled}/>
              <CalculatorControl opID="divide" myValue="/" operator="/" clicked={this.numberClick} isDisabled={this.state.operatorDisabled}/>
              <br />
              <CalculatorControl opID="equals" operator="=" clicked={this.equalHandler}  isDisabled={this.state.equalDisabled}/>
              <br />
              <CalculatorControl opID="clear" operator="CLEAR" clicked={this.clearHandler} />
              <br />

              <CalculatorNumbers numClick={this.numberClick} isDisabled={this.state.numbersDisabled ? "numbers" : this.state.zeroDisabled ? "zero" : this.state.decimalDisabled ? "decimal" : null} />
              <br />


            </div>
        );
    }
}

export default Calculator;
