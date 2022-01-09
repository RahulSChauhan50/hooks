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
} from "react";

function App() {
  const [data, setData] = useState(null);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  const findLongestName = (comments) => {
    //this function return the value of longest name and is called in render method
    // hence everytime the state changes this is called which is inefficient
    //to avoid this we use useMemo
    if (!comments) return null;
    let longestName = "";
    for (let i = 0; i < comments.length; i++) {
      let currentName = comments[i].name;
      if (currentName.length > longestName.length) {
        longestName = currentName;
      }
    }
    console.log("This was computed");
    return longestName;
  };
  const getLongestName = useMemo(() => findLongestName(data), [data]); //accepts a function and a state on which
  //change it recomputes the function

  return (
    <div className="App">
      <header className="App-header">
        {/* <h1>{findLongestName(data)}</h1> */}
        <h1>{getLongestName}</h1>
        <button onClick={() => setToggle(!toggle)}>Toggle</button>
        <h1>{toggle ? "Toggle" : ""}</h1>
      </header>
    </div>
  );
}

export default App;
