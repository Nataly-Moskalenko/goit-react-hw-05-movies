import { useEffect, useState, useRef } from 'react';
import { NavLink, useSearchParams, useLocation } from 'react-router-dom';
import apiService from 'services/apiService';
import css from './Movies.module.css';
import image from '../../images/movie-597004_640.jpg';
import { toast } from 'react-toastify';

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
      toast.info('Please enter your search query.');      
      return setSearchParams({});
    }
    if (form.elements.query.value === query) {
      toast.info(`We already found movies with "${query}"`);     
      return;
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
        <ul className={css.movies__list}>
          {movies.map(movie => (
            <li key={movie.id} className={css.movies__item}>
              <div className={css.movies__itemWrapper}>
                <NavLink
                  to={`${movie.id}`}
                  state={{ from: location }}
                  className={css.link}
                >
                  {movie.poster_path ? (
                    <img
                      className={css.movies__img}
                      src={`https://image.tmdb.org/t/p/w185/${movie.poster_path}`}
                      alt={movie.title}
                      width="220"
                    />
                  ) : (
                    <p className={css.movies__descr}>
                      Sorry, there is no poster for this movie{' '}
                      <b>{movie.title}</b>.
                    </p>
                  )}
                </NavLink>
              </div>
            </li>
          ))}
        </ul>
      )}
      {query !== '' && movies.length === 0 && (
        <div>
          <img
            src={image}
            alt="Movie poster"
            width="480"
            className={css.defaultImage}
          />
          <p className={css.movies__text}>
            Oops, there are no movies with "{query}".
          </p>
          <p className={css.movies__text}>Please enter new search query.</p>
        </div>
      )}
      {query === '' && (
        <div>
          <img
            src={image}
            alt="Movie poster"
            width="480"
            className={css.defaultImage}
          />
          <p className={css.movies__text}>What movies will we search?</p>
          <p className={css.movies__text}>Please enter your search query.</p>
        </div>
      )}
    </div>
  );
}
