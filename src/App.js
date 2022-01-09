import logo from "./logo.svg";
import "./App.css";
import React, {
  useReducer,
  useState,
  useEffect,
  useRef,
  useLayoutEffect,
  createContext,
  useMemo,
  useCallback,
} from "react";
import Child from "./Child";

function App() {
  const [data, setData] = useState("subscribe");
  const [toggle, setToggle] = useState(false);

  const returnComment = useCallback(
    (name) => {
      //the returnComment function is being re-created on every render which triggers the Child Component useEffect
      //to avoid this we will use useCallback
      return data + name;
    },
    [data]
  );
  return (
    <div className="App">
      <header className="App-header">
        <Child returnComment={returnComment} />
        <button onClick={() => setToggle(!toggle)}>Toggle</button>
        <h1>{toggle ? "Toggle" : ""}</h1>
      </header>
    </div>
  );
}

export default App;
