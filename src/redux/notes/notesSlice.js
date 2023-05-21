import { createSlice } from "@reduxjs/toolkit";

export const noteSlice = createSlice({
  name: "notes",
  initialState: {
    items: [],
    searchText: "",
  },
  reducers: {
    addNote: (state, action) => {
      state.items.push(action.payload);
    },
    setSearchText: (state, action) => {
      state.searchText = action.payload;
    },
  },
});

export const { addNote, searchText } = noteSlice.actions;
export default noteSlice.reducer;
