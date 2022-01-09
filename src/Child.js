import React, { useEffect } from "react";
import propTypes from "prop-types";
export default function Child({ renderable }) {
  return (
    <div>
      <h1>{renderable}</h1>
    </div>
  );
}

Child.propTypes = {
  renderable: propTypes.node.isRequired,
};
