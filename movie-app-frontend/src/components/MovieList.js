import React from 'react';

function MovieList({ movies, onMovieClick }) {
  return (
    <div className="movie-list">
      {movies.map((movie, index) => (
        <div key={index} className="movie-item" onClick={() => onMovieClick(movie.Title)}>
          {movie.Poster && movie.Poster !== 'N/A' && <img src={movie.Poster} alt={movie.Title} />}
          <div>{movie.Title}</div>
        </div>
      ))}
    </div>
  );
}

export default MovieList;
