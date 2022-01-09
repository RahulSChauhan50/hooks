import logo from "./logo.svg";
import "./App.css";
import React, { useReducer, useState, useEffect } from "react";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, []); //if bracket is not provided then useEffect will be called on every state Changes
  return (
    <div className="App">
      <header className="App-header">
        {data.map((val, ind) => (
          <div>{val.body}</div>
        ))}
      </header>
    </div>
  );
}

export default App;
