import { useContext } from "react";

import css from './MoviesList.module.css'

import MovieCard from "../MovieCard/MovieCard";

import { MoviesContext } from "../MoviesProvider/MoviesProvider";

const MoviesList = () => {
  const { movies } = useContext(MoviesContext);
  return (
    <div className={css['container']}>
      {movies.map((movie) => (
        <MovieCard key={movie.name} {...movie} />
      ))}
    </div>
  );
};

export default MoviesList;
