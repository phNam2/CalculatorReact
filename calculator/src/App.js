import './App.css';
import DigitButton from './DigitButton';
import OperationButton from './OperationButton';
import {useReducer} from "react"

export const ACTIONS = {
  ADD_DIGIT: 'add_digit',
  CLEAR: 'clear',
  CHOOSE_OPERATION: 'choose_operation',
  DELETE_DIGIT: 'delete_digit',
  EVALUATE: 'evaluate'
}

function reducer( state, {type, payload} ){
  switch(type) {
    case ACTIONS.ADD_DIGIT:
      return {
        ...state,
        currentOperand: `${state.currentOperand || ""}${payload.digit}`,
      }
  }
}

function App() {
  const [{previousOperand, currentOperand, operation}, dispatch] = useReducer(reducer, {})
  
  return (
    <div className="calculator-grid">
      <div className="result">
        <div className="previous_operand">
          {previousOperand} {operation}
        </div>
        <div className="current_operand">
          {currentOperand}
        </div>
      </div>
      <button className="span2">AC</button>
      <button>DEL</button>

      <OperationButton operation=":" dispatch={dispatch} />
      <DigitButton digit="1" dispatch={dispatch} />
      <DigitButton digit="2" dispatch={dispatch} />
      <DigitButton digit="3" dispatch={dispatch} />

      <OperationButton operation="*" dispatch={dispatch} />
      <DigitButton digit="4" dispatch={dispatch} />
      <DigitButton digit="5" dispatch={dispatch} />
      <DigitButton digit="6" dispatch={dispatch} />

      <OperationButton operation="+" dispatch={dispatch} />
      <DigitButton digit="7" dispatch={dispatch} />
      <DigitButton digit="8" dispatch={dispatch} />
      <DigitButton digit="9" dispatch={dispatch} />

      <OperationButton operation="-" dispatch={dispatch} />
      <DigitButton digit="." dispatch={dispatch} />
      <DigitButton digit="0" dispatch={dispatch} />

      <button className="span2">=</button>
    </div>
  );
}

export default App;
