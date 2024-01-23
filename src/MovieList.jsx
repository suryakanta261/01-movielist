// MovieList.js
import React from 'react';
import Movie from './Movie';
import './MovieList.css'; // Import the MovieList.css file

const MovieList = ({ movies }) => {
  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <Movie key={movie.id} title={movie.title} posterPath={movie.poster_path} />
      ))}
    </div>
  );
};

export default MovieList;
