import React, { useEffect } from "react";
import propTypes from "prop-types";
export default function Child({ element }) {
  return (
    <div>
      <h1>{element}</h1>
    </div>
  );
}

Child.propTypes = {
  element: propTypes.element.isRequired,
};
