import MovieList from "../components/MovieList";
import { useGetMoviesQuery } from "../services/TMDB";
// import MovieList from "../components/MovieList";

function Home() {
  const { data, isLoading, isSuccess, error } = useGetMoviesQuery();
  console.log(data);
  return (
    <div>
      {isLoading && <h2>.....Loading</h2>}
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
