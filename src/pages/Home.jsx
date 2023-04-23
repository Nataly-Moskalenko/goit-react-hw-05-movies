import { useEffect, useState } from 'react';
import apiService from 'services/apiService';

export default function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      try {
        const data = await apiService();
        setMovies(data.results);
        console.log(data.results[1]);
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
          <li key="{movie.id}">{movie.title}</li>
        ))}
      </ul>
    </div>
  );
}
