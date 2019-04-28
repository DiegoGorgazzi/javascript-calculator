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


    //50 ==> I should be able to put as many ZEROS as I want
    //500 ==> same as above
    //2.[anyNumber] ==> same as above
    //3 ==> same as above

    // [nothing] ==> only one zero
    // (/*-+) ==> only one ZERO

    // [anyNumber>0] ==> as many zeros
    // [anyNumber][.] ==> as many zeros
    // (/*-+)[anyNumber>0] ==> as many zeros
    // (/*-+)[anyNumber][.] ==> as many zeros

    //PREVENTING DUPLICATE ZEROS ---DONE---
    //if this.state.currentInput === 0, disable /*-+0
    //if length>1,
      //If, index(length) === 0 AND index(length-1)===(/*-+),
            //then disable zero.

    //I ALSO NEED TO PREVENT ++++, ----, ///, ***, ETC, ETC. ----DONE---
      //if, index(length) === (/*-+.), then disable (/*-+.) AND disable (=)
      //if length === 1 AND index(length) === 0,
          //disable (/*-+.)

      //Taking care of Double periods
          //if "[anyNumber]." then disable "." UNTIL you have (/*-+) again
                //i.e. if, index(length-1) === ".", disable "."
                //     if, index(length-1) === "operator", enable "." and disable "="
          //123.40.0
            //Between (/*-+) and (/*-+), there should be only ONE ".",
                //so if there's a ".", disable it until (/*-+=)
            //from beginning to (/*-+) there should be only ONE "."
                //so if there's a ".", disable it until (/*-+=)
            //from (/*-+) to END there should be only ONE "."
              //so if there's a ".", disable it until (/*-+=)

      //I NEED TO DISABLE "=" if there's an operator as the last index... see taking care of double periods.

  componentDidMount() {
    document.addEventListener("click", this.disableHandler);
    this.disableHandler();
  }

  componentWillUnmount() {
    document.removeEventListener("click", this.disableHandler);
    }

  componentDidUpdate = () => {
    //Handle double operator inputs
    console.log(this.state.currentInput, "componentDidUpdate");
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
    console.log(this.state.currentInput, "inside");
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
    console.log(userInput, "handleChange");
    console.log(inputLength, "length");
    console.log(userInput[inputLength-1], "index-1");
    console.log(userInput[inputLength-2], "index -2");
    console.log(this.state.numbersDisabled, "numbersDisabled");

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
    //NOT TRIGGERING ??
    else if(inputLength > 1
      && userInput[inputLength-1]=== "."
          ){
      console.log("else if Decimal");
      this.setState({
        operatorDisabled: false ,
        zeroDisabled: false ,
        decimalDisabled: true,
        numbersDisabled: false
      });
    }
    else if(inputLength > 1
      && operators.includes(userInput[inputLength-1])
          ){
      console.log("else if Decimal ++");
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
        //decimalDisabled: true,
        numbersDisabled: false,
        equalPressed: false,
        equalDisabled: false
      });
    }

  }



    render () {

        console.log(this.state.decimalDisabled, "decimal in render");
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
