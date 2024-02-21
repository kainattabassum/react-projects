import React from "react";

function Button({ className, style, handleClick, text }) {
  return (
    <button className={className} style={style} onClick={handleClick}>
      {text}
    </button>
  );
}

export default Button;
