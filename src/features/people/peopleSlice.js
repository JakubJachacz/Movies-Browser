import { createSlice } from "@reduxjs/toolkit";

const peopleSlice = createSlice({
  name: "people",
  initialState: {},
  reducers: {},
});

export const {} = peopleSlice.actions;

export const selectPeopleState = (state) => state.people;

export default peopleSlice.reducer;
