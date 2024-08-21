import React, { useContext } from "react";
import { NoteContext } from "../context/NoteContext";

function Color({ color }) {
  const { selectedNote } = useContext(NoteContext);
  const changeColor = () => {
    console.log(selectedNote);
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
