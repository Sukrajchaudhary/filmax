import { createSlice } from "@reduxjs/toolkit";

interface initialTypes {
  genreIdOrCategoryName: "popular" | "top_rated" | "upcoming" | number;
  page: number;
  searchQuery: string;
}

const initialState: initialTypes = {
  genreIdOrCategoryName: "popular",
  page: 1,
  searchQuery: "",
};

const genreOrCategory = createSlice({
  name: "genreOrCategory",
  initialState,
  reducers: {
    selectGenreOrCategory: (state, action) => {
      state.genreIdOrCategoryName = action.payload;
    },
    searchMovie: (state, action) => {
      state.searchQuery = action.payload;
    },
    resetPaging: (state, action) => {
      state.page = action.payload;
    },
  },
});

export const { selectGenreOrCategory, searchMovie, resetPaging } =
  genreOrCategory.actions;

export default genreOrCategory.reducer;
