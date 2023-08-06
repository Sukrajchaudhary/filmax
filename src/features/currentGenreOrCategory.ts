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
  },
});

export const { selectGenreOrCategory } = genreOrCategory.actions;

export default genreOrCategory.reducer;
