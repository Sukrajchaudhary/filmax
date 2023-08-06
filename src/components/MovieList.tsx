import { MoviesProps } from "../types/moviesapitypes";
import MovieCard from "./MovieCard";

interface MovieListProps {
  movies: MoviesProps;
}

export default function MovieList({ movies }: MovieListProps) {
  return (
    <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-y-10 mx-10">
      {movies.results.map((movie, i) => {
        return <MovieCard key={i} movie={movie} i={i} />;
      })}
    </div>
  );
}
