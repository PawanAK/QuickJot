import React, { useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearchText } from "../redux/notes/notesSlice";

const Search = () => {
  const dispatch = useDispatch();
  const searchValue = useSelector((state) => state.searchText);
  const searchInputRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.shiftKey && e.key === "F") {
        e.preventDefault();
        searchInputRef.current.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleChange = (e) => {
    const text = e.target.value;
    dispatch(setSearchText(text));
  };

  return (
    <div>
      <input
        ref={searchInputRef}
        type="text"
        className="search-box"
        value={searchValue}
        placeholder="Search..."
        onChange={handleChange}
      />
    </div>
  );
};

export default Search;
