import React, { useEffect } from "react";
import propTypes from "prop-types";
export default function Child({ name, age }) {
  return (
    <div>
      <h1>{"in 5 years " + name + " will be " + age + 5}</h1>
    </div>
  );
}

Child.propTypes = {
  name: propTypes.string, //throws error when datatype of prop changes
  age: propTypes.number.isRequired, //check for missing prop
};
