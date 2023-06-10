import { useEffect, useState } from 'react';
import { useLocation, NavLink } from 'react-router-dom';
import apiService from 'services/apiService';
import css from './Home.module.css';

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
    <div className={css.home}>
      <h1 className={css.home__title}>Today trends</h1>
      <ul className={css.home__list}>
        {movies.map(movie => (
          <li key={movie.id} className={css.home__item}>
            <div className={css.home__itemWrapper}>
              <NavLink
                to={`movies/${movie.id}`}
                state={{ from: location }}
                className={css.link}
              >
                {movie.poster_path && (
                  <img
                    className={css.home__img}
                    src={`https://image.tmdb.org/t/p/w185/${movie.poster_path}`}
                    alt={movie.title}
                    width="220"
                    // height="308"
                  />
                )}                
              </NavLink>              
            </div>
            <p>{movie.title}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
