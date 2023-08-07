import { SetStateAction, useEffect } from "react";
import { useDispatch } from "react-redux";
import { resetPaging } from "../features/currentGenreOrCategory";

interface PaginationProps {
  currentPage: number;
  setPage: React.Dispatch<SetStateAction<number>>;
  totalPages: number;
}

function Pagination({ currentPage, setPage, totalPages }: PaginationProps) {
  const dispatch = useDispatch();

  const nextPage = () => {
    setPage(currentPage + 1);
  };
  const prevPage = () => {
    setPage(currentPage - 1);
  };

  useEffect(() => {
    dispatch(resetPaging(currentPage));
  });

  if (totalPages === 0) return null;
  return (
    <div className="mt-6 text-center">
      <div className="join inline-block ">
        {currentPage > 1 && (
          <button
            className="join-item btn btn-outline w-20 font-black hover:bg-red-500 hover:text-white"
            onClick={prevPage}
          >
            Prev
          </button>
        )}
        <button className="join-item btn btn-outline w-20 hover:bg-red-500 hover:text-white ">
          {currentPage}
        </button>

        {currentPage < totalPages && (
          <button
            className="join-item btn btn-outline w-20 hover:bg-red-500 hover:text-white "
            onClick={nextPage}
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
}

export default Pagination;
