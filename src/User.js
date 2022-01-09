import React, { useContext } from "react";
import { AppContext } from "./App";
export default function User() {
  const { username, setUsername } = useContext(AppContext); //used to access parent props passed through context
  return (
    <div>
      <h1>User:{username}</h1>
    </div>
  );
}
