import React, { useEffect } from "react";
import propTypes from "prop-types";
export default function Child({ stringOrNumber }) {
  return (
    <div>
      <h1>{stringOrNumber}</h1>
    </div>
  );
}

Child.propTypes = {
  stringOrNumber: propTypes.oneOfType([propTypes.string, propTypes.number])
    .isRequired,
};
