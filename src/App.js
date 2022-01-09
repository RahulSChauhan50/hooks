import logo from "./logo.svg";
import "./App.css";
import React, { useReducer, useState, useEffect } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        count: state.count + 1,
      };
    case "TOGGLE":
      return {
        ...state,
        showText: !state.showText,
      };
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, { count: 0, showText: true });

  const changeState = (event) => {
    dispatch({ type: "INCREMENT" });
    dispatch({ type: "TOGGLE" });
  };
  return (
    <div className="App">
      <header className="App-header">
        <div>{state.count}</div>
        <button onClick={(event) => changeState(event)}>Click</button>
        {state.showText ? <div>this is a text</div> : <div></div>}
      </header>
    </div>
  );
}

export default App;
