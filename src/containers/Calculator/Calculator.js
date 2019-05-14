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

  }

  componentWillUnmount() {
    document.removeEventListener("click",
    this.props.onDisableHandler);
    }

  componentDidUpdate = () => {
    this.props.onDoubleOperators();
  };


    render () {

        let inputResult;

        if(this.props.eqPres) {
          inputResult = this.props.rst;
        } else {
          inputResult = this.props.curInp;
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
    onDisableHandler: () => dispatch({type: "DISABLE_HANDLER"}),
    onDoubleOperators: () => dispatch({type: "DOUBLE_OPERATORS"})
  };
};





export default connect(mapStateToProps, mapDispatchToProps)(Calculator);
