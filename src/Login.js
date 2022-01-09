import React,{useContext} from "react";
import {AppContext} from './App';

export default function Login() {
    const {setUsername,username} =useContext(AppContext); //used to access parent props passed through context
  return (
    <div>
      <input onChange={(event) => setUsername(event.target.value)} />
    </div>
  );
}
