import React from "react";

function Button({ name, bgColor, color, radius, padding, fontSize, onClick }) {
  return (
    <button
        onClick={onClick}
      style={{
          cursor: "pointer",
          border:'none',
          width:'50%',
          backgroundColor: bgColor,
          color: color,
          borderRadius: radius,
          padding,
          fontSize,
      }}
    >
      {name}
    </button>
  );
}

export default Button;