import { Results } from "../types/moviesapitypes";
import ReactStars from "react-rating-star-with-type";

interface MovieProps {
  movie: Results;
  i: number;
}

export default function MovieCard({ movie, i }: MovieProps) {
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
              : `/public/dummy_image.webp`
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
          <span>{movie.vote_average / 2}</span>
          <ReactStars value={movie.vote_average / 2} activeColor="red" />
        </div>
        {/* <div className="card-actions justify-center">
            <button className="btn btn-primary">Buy Now</button>
          </div> */}
      </div>
    </div>
  );
}
