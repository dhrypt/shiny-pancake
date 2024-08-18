import React from "react";

function Color({ color }) {
  const changeColor = () => {
    console.log(color);
  };
  return (
    <div
      className="color"
      onClick={changeColor}
      style={{ backgroundColor: color.colorHeader }}
    ></div>
  );
}

export default Color;
