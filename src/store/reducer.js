const initialState = {
      result: "0",
      currentInput: "0",
      operatorDisabled: false,
      zeroDisabled: false ,
      decimalDisabled: false,
      numbersDisabled: false,
      equalPressed: false,
      equalDisabled: false
}

const reducer = (state = initialState, action) => {
  if(action.type === "CLEAR_HANDLER") {
    return {
      ...state,
        result: "0",
        currentInput: "0",
        zeroDisabled: false,
        decimalDisabled: false,
        operatorDisabled: false,
        numbersDisabled: false,
        equalPressed: false
    }
  }

  if(action.type === "NUMBER_CLICK") {
      let userInput = action.e.target.value;
      if(state.currentInput === "0"){
        if(userInput === ".") {
            return {
              ...state,
              currentInput: state.currentInput + userInput,
            }
        }
        else {
          return {
            ...state,
          currentInput: userInput
          }
        }
      } else {
        return {
          ...state,
          currentInput: state.currentInput + userInput,
        }
    };
  }

    if(action.type === "EQUAL_HANDLER") {
        let numberfy = state.currentInput;
        let equal = eval(numberfy);
        return {
          //set currentInput to equal so user can use any operator on the stored result
          ...state,
          currentInput: equal,
          result: equal,
          equalPressed: true
        }

      };

      if(action.type === "DISABLE_HANDLER") {
        let inputLength = state.currentInput.length;
        console.log(state.currentInput, "disable handler");
        let userInput = state.currentInput;
        let operators = ["+", "-", "*", "/"];

        //Prevent operators to be entered when App loads
        if(state.currentInput === "0" ){
          return {
            ...state,
            operatorDisabled: true ,
            zeroDisabled: false ,
            decimalDisabled: false,
            numbersDisabled: false
          }
        }
        //Prevent more than one zero after operator has been clicked and prevent
        //any numbers to be enabled (i.e. if a zero is present after an operator,
        //the only thing a user should do is put a decimal or another operator)
        else if(inputLength > 1
          && userInput[inputLength-1]=== "0"
              && operators.includes(userInput[inputLength-2])){
          return {
            ...state,
            operatorDisabled: false ,
            zeroDisabled: true ,
            decimalDisabled: false,
            numbersDisabled: true
          }
        }
        //Disable multiple decimal periods within same number
        else if(inputLength > 1
          && userInput[inputLength-1]=== "."
              ){
          return {
            ...state,
            operatorDisabled: false ,
            zeroDisabled: false ,
            decimalDisabled: true,
            numbersDisabled: false
          }
        }
        //Disable Equal button if last value in string is an operator
        else if(inputLength > 1
          && operators.includes(userInput[inputLength-1])
              ){
          return {
            ...state,
            operatorDisabled: false ,
            zeroDisabled: false ,
            decimalDisabled: false,
            numbersDisabled: false,
            equalDisabled: true
          }
        }
        else {
          return {
            ...state,
            operatorDisabled: false ,
            zeroDisabled: false ,
            numbersDisabled: false,
            equalPressed: false,
            equalDisabled: false
          }
        }


    };

    if(action.type === "DOUBLE_OPERATORS") {
      //Handle double operator inputs
      let inputLength = state.currentInput.length;
      let userInput = state.currentInput;
      let operators = ["+", "-", "*", "/"];

      if (operators.includes(userInput[inputLength-1])
             && operators.includes(userInput[inputLength-2]) ) {
        return {
          ...state,
          currentInput: userInput.slice(0, (inputLength-2)) + userInput.slice(inputLength-1)
        }
      }

      if (userInput[inputLength-1] === "."
             && operators.includes(userInput[inputLength-2]) ) {
        return {
          ...state,
          currentInput: userInput.slice(0, (inputLength-1)) + "0."
        }
      }
    };

    return state;
};

export default reducer;
