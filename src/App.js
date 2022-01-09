import logo from "./logo.svg";
import "./App.css";
import React, {
  useReducer,
  useState,
  useEffect,
  useRef,
  useLayoutEffect,
  createContext,
} from "react";
import User from "./User";
import Login from "./Login";

export const AppContext = createContext(null); //used to pass props to every child in it

function App() {
  const [username, setUsername] = useState("");
  return (
    <div className="App">
      <header className="App-header">
        <AppContext.Provider value={{username, setUsername}}>
          <Login />
          <User />
        </AppContext.Provider>
      </header>
    </div>
  );
}

export default App;
