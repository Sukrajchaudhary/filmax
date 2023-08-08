import { MoviesProps } from "../types/moviesapitypes";
import MovieCard from "./MovieCard";

interface MovieListProps {
  movies?: MoviesProps;
  numofmovies: number;
}

export default function MovieList({ movies, numofmovies }: MovieListProps) {
  return (
    <div className="grid xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 gap-y-10 mx-10">
      {movies?.results.slice(0, numofmovies).map((movie, i) => {
        return <MovieCard key={i} movie={movie} i={i} />;
      })}
    </div>
  );
}
