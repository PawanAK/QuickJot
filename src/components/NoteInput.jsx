import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "nanoid";
import { addNote } from "../redux/notes/notesSlice";
import ColorButton from "./ColorButton";

const NoteInput = () => {
  const [text, setText] = useState("");
  const [bgColor, setBgColor] = useState("red");

  const dispatch = useDispatch();
  const items = useSelector((state) => state.items);

  const addNewNote = () => {
    if (text === "") {
      alert("Enter something");
      return;
    }
    const note = items.filter((item) => item.note === text);

    if (note.length > 0) {
      alert("This note already exists in the store");
      return;
    }
    dispatch(addNote({ id: nanoid(5), note: text, bgColor }));
    setText("");
  };

  return (
    <div className="textarea-box">
      <textarea
        className="textarea-input"
        placeholder="Enter your note here"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <div className="textarea-inner-container">
        <ColorButton setBgColor={setBgColor} bgColor={bgColor} />
        <button className="btn-add" onClick={addNewNote}>
          Add
        </button>
      </div>
    </div>
  );
};

export default NoteInput;
