import * as actionTypes from "./actionTypes";

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
  switch (action.type) {
    case actionTypes.CLEAR_HANDLER:
        return {
          ...state,
            result: "0",
            currentInput: "0",
            zeroDisabled: false,
            decimalDisabled: false,
            operatorDisabled: false,
            numbersDisabled: false,
            equalPressed: false
        };

    case actionTypes.NUMBER_CLICK:
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

      case actionTypes.EQUAL_HANDLER:
          let numberfy = state.currentInput;
          let equal = eval(numberfy);
          return {
            //set currentInput to equal so user can use any operator on the stored result
            ...state,
            currentInput: equal,
            result: equal,
            equalPressed: true
          };

      case actionTypes.DISABLE_HANDLER:
          let inputLength = state.currentInput.length;
          let userInputs = state.currentInput;
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
            && userInputs[inputLength-1]=== "0"
                && operators.includes(userInputs[inputLength-2])){
            return {
              ...state,
              operatorDisabled: false ,
              zeroDisabled: true ,
              decimalDisabled: false,
              numbersDisabled: true,
              equalDisabled: false
            }
          }
          //Disable multiple decimal periods within same number
          else if(inputLength > 1
            && userInputs[inputLength-1]=== "."
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
            && operators.includes(userInputs[inputLength-1])
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
          };

      case actionTypes.DOUBLE_OPERATORS:
          //Handle double operator inputs
          let inputLengths = state.currentInput.length;
          let userInput2 = state.currentInput;
          let operators2 = ["+", "-", "*", "/"];

          if (operators2.includes(userInput2[inputLengths-1])
                 && operators2.includes(userInput2[inputLengths-2]) ) {
            return {
              ...state,
              currentInput: userInput2.slice(0, (inputLengths-2)) + userInput2.slice(inputLengths-1)
            }
          }

          if (userInput2[inputLengths-1] === "."
                 && operators2.includes(userInput2[inputLengths-2]) ) {
            return {
              ...state,
              currentInput: userInput2.slice(0, (inputLengths-1)) + "0."
            }
          };


    }

    return state;
};

export default reducer;
