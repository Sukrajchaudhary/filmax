import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { MoviesProps, genreProps } from "../types/moviesapitypes";

const tmdbApiKey = import.meta.env.VITE_TMDB_API_KEY;
const page = 1;
const BASE_URL = "https://api.themoviedb.org/3";

export const tmdbApi = createApi({
  reducerPath: "tmdbApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    //Get genres
    getgenres: builder.query<genreProps, void>({
      query: () => `genre/movie/list?api_key=${tmdbApiKey}`,
    }),
    // Get Movies by [Type]
    getMovies: builder.query<MoviesProps, void>({
      query: () => `movie/popular?page=${page}&api_key=${tmdbApiKey}`,
    }),
  }),
});

export const { useGetMoviesQuery, useGetgenresQuery } = tmdbApi;
