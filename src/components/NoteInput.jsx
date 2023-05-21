import React from "react";
import ColorButton from "./ColorButton";
import { useDispatch, useSelector } from "react-redux";
import { addNote } from "../redux/notes/notesSlice";
import { nanoid } from "nanoid";

const NoteInput = () => {
  const [text, setText] = React.useState("");
  const [bgColor, setBgColor] = React.useState("red");
  const [duplicateNote, setDuplicateNote] = React.useState(false);

  const dispatch = useDispatch();
  const items = useSelector((state) => state.items);

  const addNewNote = () => {
    if (text.trim() === "") {
      alert("Please fill in the relevant fields!");
      return;
    }
    const note = items.find((item) => item.note === text.trim());
    if (note) {
      setDuplicateNote(true);
      return;
    }
    dispatch(addNote({ id: nanoid(5), note: text.trim(), bgColor }));
    setText("");
    setDuplicateNote(false);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      addNewNote();
    }
  };

  return (
    <div className="textarea-box">
      <textarea
        className="textarea-input"
        placeholder="Enter your note here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyPress={handleKeyPress}
      />
      {duplicateNote && (
        <p className="duplicate-note-message">
          This note already exists. Please enter a different note.
        </p>
      )}
      <div className="textarea-inner-container">
        <ColorButton bgColor={bgColor} setBgColor={setBgColor} />
        <button className="btn-add" onClick={addNewNote}>
          ADD
        </button>
      </div>
    </div>
  );
};

export default NoteInput;
