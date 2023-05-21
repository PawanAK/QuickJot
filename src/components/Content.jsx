import React from "react";
import NoteItem from "./NoteItem";
import { useSelector } from "react-redux";

const Content = () => {
  let items = useSelector((state) => state.items);
  let filteredNotes = items;
  const searchText = useSelector((state) => state.searchText);

  if (searchText && searchText !== "") {
    filteredNotes = filteredNotes.filter((note) =>
      note.note.toLowercase().includes.searchText.toLowercase()
    );
  } else {
    filteredNotes = items;
  }

  return (
    <div>
      <NoteItem items={filteredNotes} focus={items.lenght > 0} />
    </div>
  );
};

export default Content;
