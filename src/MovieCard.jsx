import React from 'react';
import { Link } from 'react-router-dom';
import './MovieCard.css';

const MovieCard = ({ movie }) => {
  return (
    <div className="movie">
    <Link to={`/movie/${movie.imdbID}`} >
      <img src={movie.Poster} alt={movie.Title} />
      <div className="movie-info">
        <h3>{movie.Title}</h3>
      </div>
    </Link>
    </div>
  );
};

export default MovieCard;
