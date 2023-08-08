import { useGetgenresQuery } from "../services/TMDB";
import { Genres } from "../types/moviesapitypes";
import genreIcons from "../assets/genres";
import { useDispatch } from "react-redux";
import { selectGenreOrCategory } from "../features/currentGenreOrCategory";

// import { useEffect, useState } from "react";

interface categoriesProps {
  label: string;
  value: string;
}

const categories = [
  { label: "Popular", value: "popular" },
  { label: "Top Rated", value: "top_rated" },
  { label: "Upcoming", value: "upcoming" },
];

function Sidebar() {
  // const localTheme = localStorage.getItem("theme");
  // const [theme, setTheme] = useState(localTheme ? localTheme : "light");
  // useEffect(() => {
  //   // setTheme(localTheme);
  //   console.log(localTheme);
  // }, [localTheme]);

  const { data, isFetching, error } = useGetgenresQuery();
  const dispatch = useDispatch();
  return (
    <div className="h-full z-50">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content ">
        {/* Page content here */}
        <button className="">
          <label htmlFor="my-drawer" className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-5 h-5 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </label>
        </button>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer" className="drawer-overlay"></label>
        <ul className="menu p-4 w-60 md:w-80 bg-base-200 h-fit text-base-content">
          {/* Sidebar content here */}
          <li>
            <a
              href="/"
              className="btn btn-ghost normal-case text-3xl p-3 text-red-500"
            >
              Filmaxy
            </a>
          </li>
          <div className="divider" />

          <div>
            <p className="text-lg">Categories</p>
            <li className="mt-3">
              {categories.map(({ label, value }: categoriesProps) => (
                <a
                  className="p-4 gap-6"
                  key={value}
                  onClick={() => dispatch(selectGenreOrCategory(value))}
                >
                  <img
                    src={genreIcons[label.toLowerCase()]}
                    // className={`h-10 ${storedData === "dark" ? "invert" : ""}`}
                    className="h-10"
                  />
                  <span className="text-lg">{label}</span>
                </a>
              ))}
            </li>
          </div>

          <div className="divider" />

          <div>
            <p className="text-lg">Genres</p>
            {error && (
              <div className="h-full">
                <h1>Can't get data</h1>
              </div>
            )}
            <li className="mt-3">
              {isFetching ? (
                <div className="text-center">
                  <span className="loading loading-spinner text-red-800 text-9xl"></span>
                </div>
              ) : (
                data?.genres.map(({ name, id }: Genres) => (
                  <a
                    className="p-4 gap-6"
                    key={id}
                    onClick={() => dispatch(selectGenreOrCategory(id))}
                  >
                    <img
                      src={genreIcons[name.toLowerCase()]}
                      className="h-10"
                      // className={`h-10 ${theme === "dark" ? "invert" : ""}`}
                    />
                    <span className="text-lg">{name}</span>
                  </a>
                ))
              )}
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
