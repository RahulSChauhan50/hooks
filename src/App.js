import logo from "./logo.svg";
import "./App.css";
import React, {
  useReducer,
  useState,
  useEffect,
  useRef,
  useLayoutEffect,
} from "react";

function App() {
  useLayoutEffect(() => {
    console.log("layouteffetc"); //called before the dom complete the Painting other than that same as useffect
  }, []);

  useEffect(() => {
    console.log("useeffect"); //called after the DOM is done painting
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <h1>Pedro</h1>
      </header>
    </div>
  );
}

export default App;
