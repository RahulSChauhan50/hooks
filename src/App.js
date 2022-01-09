import logo from "./logo.svg";
import "./App.css";
import Button from "./Button";
import React, {
  useReducer,
  useState,
  useEffect,
  useRef,
  useLayoutEffect,
} from "react";

function App() {
  const ref = useRef(null);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Pedro</h1>
        <button onClick={() => ref.current.alterToggle()}>
          Button from parent
        </button>
        <Button ref={ref} />
      </header>
    </div>
  );
}

export default App;
