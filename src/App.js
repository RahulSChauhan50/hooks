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
        <Child arrNumber={[1, 2, 3, 4]} arrString={["1", "2"]} />
      </header>
    </div>
  );
}

export default App;
