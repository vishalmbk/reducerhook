import React, { useState, useReducer } from 'react';
import './App.css';
import ToDos from './ToDos';


const ACTIONS = {
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT'
}

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.INCREMENT:

      return { count: state.count + 1 }
    case ACTIONS.DECREMENT:
      return { count: state.count - 1 }


    default:
      return state;

  }
}
function App() {
  const [count, setCount] = useState(0);

  const [state, dispatch] = useReducer(reducer, { count: 0 })


  const increment = () => {
    setCount(crr => crr + 1)
    dispatch({ type: ACTIONS.INCREMENT })
  }

  const decrement = () => {
    setCount(crr => crr - 1)
    dispatch({ type: ACTIONS.DECREMENT })
  }
  return (
    <div className="App">
      <h1>useReducer Hook</h1>
      <button onClick={decrement}> - </button>
      <h3>{state.count}</h3>
      <button onClick={increment}> + </button>
      <ToDos />
    </div>
  );
}

export default App;
