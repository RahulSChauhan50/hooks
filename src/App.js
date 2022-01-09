import logo from "./logo.svg";
import "./App.css";
import React, { useReducer, useState, useEffect, useRef } from "react";

function App() {
  const [data, setData] = useState([]);

  const inputRef = useRef(null);

  const oncl = () => {
    console.log(inputRef.current.value); //gives current value of the component
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1>Pedro</h1>
        <input type="text" placeholder="Ex..." ref={inputRef} />
        <button onClick={oncl}>Change Name</button>
      </header>
    </div>
  );
}

export default App;
