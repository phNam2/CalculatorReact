import './App.css';
import useReducer from "react"

const ACTIONS = {
  ADD_DIGIT: 'add_digit',
  CLEAR: 'clear',
  CHOOSE_OPEARION: 'choose_operation',
  DELETE_DIGIT: 'delete_digit',
  EVALUATE: 'evaluate',
}

function reducer(state, {type, payload}){
  switch(type) {
    case ACTIONS.ADD_DIGIT:
      return {
        ...state,
        currentOperand: `${currentOperand || ""}${payload.digit}`
      }
  }
}

function App() {
  const [{previousOperand, currentOperand, operation}, dispatch] = useReducer(reducer, {})
  dispatch({type: ACTIONS.ADD_DIGIT, payload: {digit: 1}})
  
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
      <button>:</button>
      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button>*</button>
      <button>4</button>
      <button>5</button>
      <button>6</button>
      <button>+</button>
      <button>7</button>
      <button>8</button>
      <button>9</button>
      <button>-</button>
      <button>.</button>
      <button>0</button>
      <button className="span2">=</button>
    </div>
  );
}

export default App;
