import React, { Component } from 'react';
import CalculatorControl from "../../components/CalculatorControl/CalculatorControl";
import CalculatorNumbers from "../../components/CalculatorNumbers/CalculatorNumbers";
import "./Calculator.css";

import { connect } from "react-redux";


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
  document.addEventListener("click", this.props.onDisableHandler);
  this.props.onDisableHandler();

    console.log(this.props.curInp, "componentDidMount");
    
  }



  componentWillUnmount() {
    document.removeEventListener("click",
    this.props.onDisableHandler);
    }

/*
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
*/

/*
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
    this.setState({
      //set currentInput to equal so user can use any operator on the stored result
      currentInput: equal,
      result: equal,
      equalPressed: true
    });

  }

/*
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
*/

    render () {

        console.log(this.props.curInp, "currentInput RENDER")
        console.log(this.props.state, "state RENDER")

        let inputResult;

        if(this.props.eqPres) {
          inputResult = this.props.rst;
          console.log(inputResult, "first IF");
        } else {
          inputResult = this.props.curInp;
          console.log(inputResult, "second IF");
        }
        //For some reason, the FCC test just will NOT let me assign the id=display
        //to my own component so, I guess I'll have to live with this.
        return (
            <div className="Calculator">
              <div>
                <p className="appAuthor">
                  A React Calculator App by
                  <a href="https://github.com/DiegoGorgazzi"> me</a>
                </p>
              </div>
              <div id="display">
              {inputResult}
              </div>


              <CalculatorControl
                opID="clear"
                operator="CLEAR"
                clicked={this.props.onClearHandler} />

              <CalculatorControl
                opID="add"
                operator="+"
                clicked={this.props.onNumberClick}
                isDisabled={this.props.operDis}/>

              <CalculatorControl
                opID="subtract"
                operator="-"
                clicked={this.props.onNumberClick}
                isDisabled={this.props.operDis}/>

              <CalculatorControl
                opID="multiply"
                operator="*"
                clicked={this.props.onNumberClick}
                isDisabled={this.props.operDis}/>

              <CalculatorControl
                opID="divide"
                myValue="/"
                operator="/"
                clicked={this.props.onNumberClick}
                isDisabled={this.props.operDis}/>
              <br />

              <CalculatorNumbers
                numClick={this.props.onNumberClick}
                isDisabled={this.props.numDis ?
                  "numbers" : this.props.zerDis ?
                  "zero" : this.props.decDis ?
                  "decimal" : null} />
              <br />

              <CalculatorControl
                opID="equals"
                operator="="
                clicked={this.props.onEqualHandler}
                isDisabled={this.props.eqDis}/>
              <br />

            </div>
        );
    }
}

const mapStateToProps = state => {
  return {
    rst: state.result,
    curInp: state.currentInput,
    operDis: state.operatorDisabled,
    zerDis: state.zeroDisabled,
    decDis: state.decimalDisabled,
    numDis: state.numbersDisabled,
    eqPres: state.equalPressed,
    eqDis: state.equalDisabled
  }
}

const mapDispatchToProps = dispatch => {
  return {
    //if you assign this property to anything, it will execute the function
    onClearHandler: () => dispatch({type: "CLEAR_HANDLER"}),
    onNumberClick: (event) => dispatch({type:"NUMBER_CLICK", e:event}),
    onEqualHandler: () => dispatch({type: "EQUAL_HANDLER"}),
    onDisableHandler: () => dispatch({type: "DISABLE_HANDLER"})
  };
};





export default connect(mapStateToProps, mapDispatchToProps)(Calculator);
