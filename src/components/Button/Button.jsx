import React, { useState } from "react";
import "./button.css";

function Button({ props }) {
  let [color, setColor] = useState("black");

  function handleClick() {
    props.onClick();
    setColor(color);
  }

  return (
    <button
      style={{ backgroundColor: color }}
      onClick={handleClick}
      className="btn"
    >
      {props.children}
    </button>
  );
}

export default Button;