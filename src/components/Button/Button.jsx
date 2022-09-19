import React, { useState } from "react";
import "./button.css";

function Button({ children }) {
  let [color, setColor] = useState("black");

  function handleClick() {
    setColor("turquoise");
  }

  return (
    <button
      style={{ backgroundColor: color }}
      onClick={handleClick}
      className="btn"
    >
      {children}
    </button>
  );
}

export default Button;