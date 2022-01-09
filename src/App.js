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

  return (
    <div className="App">
      <header className="App-header">
        <Child stringOrNumber={"someString"} />
      </header>
    </div>
  );
}

export default App;
