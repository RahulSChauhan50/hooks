import React, { useEffect } from "react";
import propTypes from "prop-types";
export default function Child({ arrNumber, arrString }) {
  return (
    <div>
      <h1>{arrString + arrNumber}</h1>
    </div>
  );
}

Child.propTypes = {
  arrNumber: propTypes.array.isRequired,
  arrString: propTypes.arrayOf(propTypes.string).isRequired,
};
