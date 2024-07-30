import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar';
import MovieList from './components/MovieList';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);
  const [recommendations, setRecommendations] = useState([]);
  const [error, setError] = useState('');
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const fetchMovies = async (query) => {
    try {
      const response = await axios.get(`https://www.omdbapi.com/?s=${query}&apikey=${process.env.REACT_APP_OMDB_API_KEY}`);
      console.log('OMDb API Response:', response.data);
      const movies = response.data.Search || [];
      setMovies(movies);

      if (movies.length > 0) {
        // Fetch recommendations for the first movie result
        fetchRecommendations(movies[0].Title);
      }
      setError('');
    } catch (error) {
      console.error("Error fetching movies:", error);
      setError('Error fetching movies. Please try again.');
    }
  };

  const fetchMovieDetails = async (title) => {
    try {
      const response = await axios.get(`https://www.omdbapi.com/?t=${title}&apikey=${process.env.REACT_APP_OMDB_API_KEY}`);
      console.log(`OMDb Details for ${title}:`, response.data);
      return response.data;
    } catch (error) {
      console.error(`Error fetching details for movie: ${title}`, error);
      return null;
    }
  };

  const fetchRecommendations = async (movieTitle) => {
    try {
      const response = await axios.post('http://localhost:5000/recommend', { movie_name: movieTitle });
      console.log('Recommendations API Response:', response.data);
      const recommendedTitles = response.data.recommendations || [];

      const recommendedMovies = await Promise.all(
        recommendedTitles.map(title => fetchMovieDetails(title))
      );

      console.log('Recommended Movies Details:', recommendedMovies);
      setRecommendations(recommendedMovies.filter(movie => movie));
      setError('');
    } catch (error) {
      console.error("Error fetching recommendations:", error);
      setError('Error fetching recommendations. Please try again.');
    }
  };

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className="App">
      <h1>Movie Recommendation System</h1>
      <button 
        className={`theme-toggle-button ${theme}`} 
        onClick={toggleTheme}
      >
        Toggle {theme === 'light' ? 'Dark' : 'Light'} Theme
      </button>
      <SearchBar onSearch={fetchMovies} />
      {error && <div className="error">{error}</div>}
      <div className="movie-section">
        <h2>Search Results</h2>
        <MovieList movies={movies} onMovieClick={fetchRecommendations} />
      </div>
      <div className="recommendation-section">
        <h2>Recommendations</h2>
        <MovieList movies={recommendations} onMovieClick={() => {}} />
      </div>
    </div>
  );
}

export default App;
