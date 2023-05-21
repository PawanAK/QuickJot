import React from "react";
import { useDispatch, useSelector } from "react-redux";
import setSearchText from "../redux/notes/notesSlice";

const ColorButton = ({ bgColor, setBgColor }) => {
  const colors = ["red", "blue", "green", "purple", "black"];

  const handleClick = (e) => {
    setBgColor(e.target.value);
  };

  return (
    <div>
      {colors.map((color, idx) => (
        <button
          key={idx}
          onClick={handleClick}
          value={color}
          className={`btn btn-${color} ${
            color === bgColor ? "btn-active" : "null"
          } `}
        />
      ))}
    </div>
  );
};
export default ColorButton;
