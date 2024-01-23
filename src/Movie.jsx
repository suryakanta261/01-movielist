
import React from 'react';

const Movie = ({ title, posterPath }) => {
  const imageUrl = `https://image.tmdb.org/t/p/w200${posterPath}`;

  return (
    <div className="movie">
      <img src={imageUrl} alt={title} />
      <h3>{title}</h3>
    </div>
  );
};

export default Movie; 
