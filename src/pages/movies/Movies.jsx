import { useEffect, useState, useRef } from 'react';
import { Link, useSearchParams, useLocation } from 'react-router-dom';
import apiService from 'services/apiService';
import css from './Movies.module.css';
import image from '../../images/movie-597004_640.jpg';

export default function Movies() {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';
  const location = useLocation();
  const inputValue = useRef(query);
  const [input, setInput] = useState(inputValue.current ?? '');

  useEffect(() => {
    if (query === '') {
      return;
    }
    async function fetchMovies() {
      try {
        const data = await apiService('/search/movie', `&query=${query}`);
        setMovies(data.results);
      } catch (error) {
        console.log(error);
      }
    }

    fetchMovies();
  }, [query]);

  const handleChange = e => {
    setInput(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    if (form.elements.query.value === '') {
      return setSearchParams({});
    }
    setSearchParams({ query: form.elements.query.value });
  };

  return (
    <div className={css.movies}>
      <form onSubmit={handleSubmit} className={css.form}>
        <input
          type="text"
          name="query"
          className={css.input}
          value={input}
          onChange={handleChange}
        />
        <button type="submit" className={css.searchButton}>
          Search
        </button>
      </form>
      {query !== '' && movies.length > 0 && (
        <ul>
          {movies.map(movie => (
            <li key={movie.id}>
              <Link to={`${movie.id}`} state={{ from: location }}>
                {movie.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
      {query !== '' && movies.length === 0 && (
        <div>
          <img src={image} alt="Movie poster" width="320" />
          <p>Oops, there are no movies with "{query}".</p>
          <p>Please enter new search query.</p>
        </div>
      )}
      {query === '' && (
        <div>
          <img src={image} alt="Movie poster" width="320" />
          <p>What movies will we search?</p>
          <p>Please enter your search query.</p>
        </div>
      )}
    </div>
  );
}
