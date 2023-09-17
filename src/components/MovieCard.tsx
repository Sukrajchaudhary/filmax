import { Results } from "../types/moviesapitypes";
import ReactStars from "react-rating-star-with-type";

interface MovieProps {
  movie: Results;
  i: number;
}

export default function MovieCard({ movie, i }: MovieProps) {
  const rating_score: number = parseFloat((movie.vote_average / 2).toFixed(2));
  return (
    <div
      className="card w-64 bg-base-300 shadow-3xl hover:cursor-pointer hover:transition hover:duration-300 hover:scale-105"
      key={i}
    >
      <figure>
        <img
          src={`${
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
              : `/dummy_image.webp`
          }`}
          className="h-full w-full"
          alt={movie.title}
        />
      </figure>
      <div className="card-body w-11/12">
        <h2 className=" card-title ">
          <span className="truncate">{movie.title}</span>
        </h2>

        {/* Rating */}
        <div className="flex gap-3">
          <span>{rating_score}</span>
          <ReactStars value={rating_score} activeColor="red" count={5} />
        </div>
      </div>
    </div>
  );
}
