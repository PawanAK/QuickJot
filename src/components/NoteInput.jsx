import { useDispatch, useSelector } from "react-redux";

import addNote from "../redux/notes/notesSlice";
import { nanoid } from "nanoid";
import { useState } from "react";
import ColorBtn from "./ColorBtn";

const NoteInput = () => {
  const [text, setText] = useState("");
  const [bgColor, setBgColor] = useState("red");

  const dispatch = useDispatch();
  const items = useSelector((state) => state.items);

  const addNewNote = () => {
    if (text === "") {
      alert("Enter Something");
      return;
    }
    const note = items.filter((item) => item.note === text);

    if (note.length > 0) {
      alert("This node Exists in the store");
      return;
    }
    dispatch(addNote({ id: nanoid(5), note: text, bgColor }));
  };

  return (
    <div className="textarea-boxx">
      <textarea
        className="textarea-input"
        placeholder="Enter Your Note here"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <ColorBtn setBgColor={setBgColor} bgColor={bgColor} />
      <button className="btn-add" onClick={addNewNote}></button>
    </div>
  );
};

export default NoteInput;
