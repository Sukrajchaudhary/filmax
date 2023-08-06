export interface MoviesProps {
  page?: number;
  results: Results[];
  total_pages?: number;
  total_results?: number;
}

export interface Results {
  id: number;
  poster_path: string;
  title: string;
  vote_average: number;
  [key: string]: any;
}

export interface genreProps {
  genres: Genres[];
}

export interface Genres {
  id: number;
  name: string;
}

export interface getMoviesQueryTypes {
  genreIdOrCategoryName: number | "popular" | "top_rated" | "upcoming";

  page: number;
}
