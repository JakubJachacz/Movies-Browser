import { createSlice } from "@reduxjs/toolkit";

const searchModuleSlice = createSlice({
  name: "searchModule",

  initialState: {
    query: "",
    engaged: false,
  },

  reducers: {
    setSearchTypeMovie: (state) => ({
      ...state,
      searchType: "movies",
    }),
    setSearchTypeProfile: (state) => ({
      ...state,
      searchType: "people",
    }),
    setQuery: (state, { payload: userQuery }) => ({
      ...state,
      query: userQuery,
      resultsPage: 1,
    }),
    engage: (state) => ({
      ...state,
      engaged: true,
    }),
    disengage: (state) => ({
      ...state,
      engaged: false,
    }),
    setPage: (state, { payload: page }) => ({
      ...state,
      resultsPage: page,
    }),
  },
});

export const {
  setSearchTypeMovie,
  setSearchTypeProfile,
  setQuery,
  engage,
  disengage,
  setPage,
} = searchModuleSlice.actions;

export const selectSearchModuleSlice = (state) => state.searchModule;
export const selectSearchType = (state) => selectSearchModuleSlice(state).searchType;
export const selectQuery = (state) => selectSearchModuleSlice(state).query;
export const selectEngaged = (state) => selectSearchModuleSlice(state).engaged;
export const selectResultsPage = (state) => selectSearchModuleSlice(state).resultsPage;

export default searchModuleSlice.reducer;
