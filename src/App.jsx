
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MovieList from './MovieList';

const App = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const apiKey = 'b8726da2081b357327e7d2932cf2695b';
        const response = await axios.get(
          `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&primary_release_date.gte=2023-12-01&primary_release_date.lte=2023-12-31`
        );

        setMovies(response.data.results);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div className="App">
      <h1>Movies Released in December 2023</h1>
      <MovieList movies={movies} />
    </div>
  );
};

export default App;