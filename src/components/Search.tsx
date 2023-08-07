import { useState } from "react";
import { useDispatch } from "react-redux";
import { resetPaging, searchMovie } from "../features/currentGenreOrCategory";
import { RxCross1 } from "react-icons/rx";

function Search() {
  const [searchTextQuery, setSearchTextQuery] = useState("");
  const [showMsg, setShowMsg] = useState(false);
  const dispatch = useDispatch();
  const handlePress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && searchTextQuery.length > 2) {
      dispatch(resetPaging(1));
      dispatch(searchMovie(searchTextQuery));
    }
    if (e.key === "Enter" && searchTextQuery.length <= 2) {
      setShowMsg(true);
      setTimeout(() => {
        setShowMsg(false);
      }, 2000);
    }
  };
  return (
    <div className="flex">
      <input
        type="text"
        placeholder="Search"
        className="input input-bordered w-48 md:w-auto focus:outline-none focus:border-red-500"
        onChange={(e) => setSearchTextQuery(e.target.value)}
        onKeyDown={handlePress}
      />
      {showMsg && (
        <div
          className="toast z-20 hover:cursor-pointer"
          onClick={() => setShowMsg(false)}
        >
          <div className="alert alert-error">
            <span className="text-lg">Character should be more than 2</span>
            <RxCross1 />
          </div>
        </div>
      )}
    </div>
  );
}

export default Search;
