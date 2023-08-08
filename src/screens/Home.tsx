import MovieList from "../components/MovieList";
import { useGetMoviesQuery } from "../services/TMDB";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Pagination from "../components/Pagination";

function Home() {
  const { genreIdOrCategoryName, searchQuery, page } = useSelector(
    (state: any) => state.currentGenreOrCategory
  );
  const [currentPage, setCurrentPage] = useState(page);

  useEffect(() => {
    setCurrentPage(page);
  }, [page]);

  // console.log(page, genreIdOrCategoryName, searchQuery);
  const { data, isLoading, isFetching, error } = useGetMoviesQuery({
    genreIdOrCategoryName,
    page: currentPage,
    searchQuery,
  });

  const totalpages = data?.total_pages || 0;

  if (isFetching || isLoading) {
    return (
      <div className="text-center">
        <span className="loading loading-spinner w-24 text-red-500"></span>
      </div>
    );
  }

  if (error) {
    return <h2>Can't get data.Something went wrong</h2>;
  }

  if (!data?.results.length) {
    return (
      <div>
        <h1>Movies not found by that name</h1>
      </div>
    );
  }

  return (
    <div>
      <div>
        <MovieList movies={data} numofmovies={18} />
      </div>

      <Pagination
        currentPage={currentPage}
        setPage={setCurrentPage}
        totalPages={totalpages}
      />
    </div>
  );
}

export default Home;
