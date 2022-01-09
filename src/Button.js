import React, { useState, forwardRef, useImperativeHandle } from "react";

//in this component we will create a custom ref provider which will used to call the alterToggle function via parent component
const Button = forwardRef((props, ref) => {
  const [toggle, setToggle] = useState(true);
  useImperativeHandle(ref, () => ({
    alterToggle() {
      setToggle(!toggle);
    },
  }));
  return (
    <div>
      <button>Button from child</button>
      {toggle ? <div>Toggle</div> : <div></div>}
    </div>
  );
});

export default Button;
