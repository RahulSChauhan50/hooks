import React, { useEffect } from "react";
import propTypes from "prop-types";
export default function Child({ person }) {
  return (
    <div>
      <h1>{person.name + person.age}</h1>
    </div>
  );
}

Child.propTypes = {
  person: propTypes.shape({
    name: propTypes.string,
    age: propTypes.number,
  }),
};
