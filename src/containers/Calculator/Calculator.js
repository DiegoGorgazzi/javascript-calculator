import React, { Component } from 'react';
import CalculatorControl from "../../components/CalculatorControl/CalculatorControl";
import CalculatorOutput from "../../components/CalculatorOutput/CalculatorOutput";
import CalculatorNumbers from "../../components/CalculatorNumbers/CalculatorNumbers";

class Calculator extends Component {
    state = {
        result: 0,
        currentInput: 0,
        zeroDisabled: true,
        decimalDisabled: false,
        operatorDisabled: true
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

    //PREVENTING DUPLICATE ZEROS
    //if this.state.currentInput === 0, disable /*-+0
    //if length>1,
      //If, index(length) === 0 AND index(length-1)===(/*-+),
            //then disable zero.

    //I ALSO NEED TO PREVENT ++++, ----, ///, ***, ETC, ETC.
      //if, index(length) === (/*-+.), then disable (/*-+.) AND disable (=)
      //if length === 1 AND index(length) === 0,
          //disable (/*-+.)

      //Taking care of Double periods
          //if "[anyNumber]." then disable "." UNTIL you have (/*-+) again
          //123.40.0
            //Between (/*-+) and (/*-+), there should be only ONE ".",
                //so if there's a ".", disable it until (/*-+=)
            //from beginning to (/*-+) there should be only ONE "."
                //so if there's a ".", disable it until (/*-+=)
            //from (/*-+) to END there should be only ONE "."
              //so if there's a ".", disable it until (/*-+=)

/*
  componentDidMount = () => {
    console.log(this.state.currentInput.length, "lengthy")
    if(this.state.currentInput == 0 && this.state.currentInput.length === undefined ){
      this.setState({
        zeroDisabled: true,
        decimalDisabled: false,
        operatorDisabled: false
      });
    } else {
    this.setState( ( prevState ) => {
      return {
        zeroDisabled: false,
        decimalDisabled: false,
        operatorDisabled: false
      }
    });
    }
  }
*/

  numberClick = (event) => {
    let userInput = event.target.value;
    /*this.setState( ( prevState ) => {
      return {
        currentInput: prevState.currentInput + userInput,
        zeroDisabled: false,
        decimalDisabled: false,
        operatorDisabled: false
      }
    });
*/

    if(this.state.currentInput === 0 ){
      this.setState({
        currentInput: userInput,
        zeroDisabled: false,
        decimalDisabled: false,
        operatorDisabled: false
      });
    } else {
    this.setState( ( prevState ) => {
      return {
        currentInput: prevState.currentInput + userInput,
        zeroDisabled: false,
        decimalDisabled: false,
        operatorDisabled: false
      }
    });

  }

    console.log(userInput, "userInput numberClick");
    console.log(this.state.zeroDisabled, "zeroDisabled numberClick");
    console.log(this.state.currentInput, "currentInput numberClick");
    console.log(this.state.currentInput.length, "length")
    console.log(this.state)


  }

  clearHandler = () => {
    this.setState({
      result: 0,
      currentInput: 0,
      zeroDisabled: true,
      decimalDisabled: false,
      operatorDisabled: true
    });
  }

  equalHandler = () => {
    console.log(this.state.currentInput, "currentInput equalHandler");
    let numberfy = this.state.currentInput;
    //I may have to change this using mathjs library math.eval instead
    let equal = eval(numberfy);
    console.log(equal, "equal");

  }


    render () {
      //console.log(this.state.currentInput, "currentInput Outside");
      //console.log(this.state.zeroDisabled, "zeroDisabled Outside");
      console.log(this.state)
        return (
            <div>
              <div id="display">
                  {this.state.currentInput}
              </div>

              <CalculatorOutput value={this.state.result} />


              <CalculatorControl opID="add" operator="+" clicked={this.numberClick} isDisabled={this.state.operatorDisabled}/>
              <CalculatorControl opID="subtract" operator="-" clicked={this.numberClick}  isDisabled={this.state.operatorDisabled}/>
              <CalculatorControl opID="multiply" operator="*" clicked={this.numberClick} isDisabled={this.state.operatorDisabled}/>
              <CalculatorControl opID="divide" myValue="/" operator="/" clicked={this.numberClick} isDisabled={this.state.operatorDisabled}/>
              <br />
              <CalculatorControl opID="equals" operator="=" clicked={this.equalHandler}  />
              <br />
              <CalculatorControl opID="clear" operator="CLEAR" clicked={this.clearHandler} />
              <br />

              <CalculatorNumbers numClick={this.numberClick} isDisabled={this.state.zeroDisabled ? "zero" : this.state.decimalDisabled ? "decimal" : null} />
              <br />


            </div>
        );
    }
}

export default Calculator;
