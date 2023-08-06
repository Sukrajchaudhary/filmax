import MovieList from "../components/MovieList";
import { useGetMoviesQuery } from "../services/TMDB";
// import { useSelector } from "react-redux";
// import { selectGenreOrCategory } from "../features/currentGenreOrCategory";
import { useState } from "react";

function Home() {
  const [page, setPage] = useState(1);
  // const { genreIdOrCategoryName } = useSelector(
  //   (state) => state.currentGenreOrCategory
  // );
  const { data, isLoading, isFetching, error } = useGetMoviesQuery({
    genreIdOrCategoryName: "popular",
    page: page,
  });
  console.log(data);
  return (
    <div>
      {error && <h2>Can't get data.Something went wront</h2>}
      {isFetching || isLoading ? (
        <div className="text-center">
          <span className="loading loading-spinner w-24 text-primary"></span>
        </div>
      ) : (
        <div>
          <div>
            <MovieList movies={data} />
          </div>

          <div className="text-center space-x-6 mt-6 mr-4">
            {page > 1 && (
              <button
                className="bg-red-500 p-4 rounded-2xl text-white"
                onClick={() => setPage(page - 1)}
              >
                Prev
              </button>
            )}
            <span className=" text-xl">{page}</span>
            <button
              className="bg-red-500 p-4 rounded-2xl text-white"
              onClick={() => setPage(page + 1)}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
