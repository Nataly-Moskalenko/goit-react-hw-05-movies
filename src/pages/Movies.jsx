import { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import apiService from 'services/apiService';

export default function Movies() {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    if (query === '') {
      return;
    }
    async function fetchMovies() {
      try {
        const data = await apiService('/search/movie', `&query=${query}`);
        setMovies(data.results);
        // console.log(data.results[1]);
      } catch (error) {
        console.log(error);
      }
    }

    fetchMovies();
  }, [query]);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    setSearchParams({ query: form.elements.query.value });
    // form.reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="query" />
        <button type="submit">Search</button>
      </form>
      {/* <input
        type="text"
        value={query}
        onChange={e => setSearchParams({ query: e.target.value })}
      /> */}
      {query !== '' && (
        <ul>
          {movies.map(movie => (
            <li key={movie.id}>
              <Link to={`${movie.id}`}>{movie.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
