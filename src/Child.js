import React, { useEffect } from "react";

export default function Child({ returnComment }) {
  useEffect(() => {
    console.log("function is called");
  }, [returnComment]); //here function is passed as prop changes and the useEffect will only be
  // called when the return value will change
  return (
    <div>
      <h1>{returnComment("grey")}</h1>
    </div>
  );
}
