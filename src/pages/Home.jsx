import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import apiService from 'services/apiService';

export default function Home() {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    async function fetchMovies() {
      try {
        const data = await apiService('/trending/movie/day');
        setMovies(data.results);        
      } catch (error) {
        console.log(error);
      }
    }

    fetchMovies();
  }, []);

  return (
    <div>
      <h1>Tranding today</h1>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link to={`movies/${movie.id}`} state={{ from: location }}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
