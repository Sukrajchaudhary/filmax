import MovieList from "../components/MovieList";
import { useGetMoviesQuery } from "../services/TMDB";
// import MovieList from "../components/MovieList";

function Home() {
  const { data, isLoading, isSuccess, error } = useGetMoviesQuery();
  return (
    <div>
      {isLoading && (
        <div className="text-center">
          <span className="loading loading-spinner text-red-800 text-9xl"></span>
        </div>
      )}
      {error && <h2>Can't get data.Something went wront</h2>}

      {isSuccess && (
        // <h1>Success</h1>
        //  <MovieList movies={data} />
        <div>
          <MovieList movies={data} />
        </div>
      )}
    </div>
  );
}

export default Home;
