import React from "react";
import MovieCard from "./MovieCard";
import "../index.css";

const MovieList = ({ title, movies }) => {
  return (
    <div className="px-6 ">
      <h1 className="text-2xl py-4 text-white">{title}</h1>
      <div
        className="flex overflow-x-scroll custom-scrollbar"
        style={{ whiteSpace: "nowrap" }}
      >
        {movies?.map((movie) => (
          <MovieCard key={movie.id} posterPath={movie.poster_path} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
