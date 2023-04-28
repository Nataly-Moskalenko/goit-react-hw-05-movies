import { useState, useEffect, useRef, Suspense } from 'react';
import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import apiService from 'services/apiService';
import css from './MovieDetails.module.css';
import { HiArrowLeft } from 'react-icons/hi';

export default function MovieDetails() {
  const [movie, setMovie] = useState({}); 
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/');

  useEffect(() => {
    async function fetchMovie() {
      try {
        const data = await apiService(`/movie/${movieId}`);
        setMovie(data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchMovie();
  }, [movieId]); 

  return (
    <div className={css.movieDetails}>
      <button type="button" className={css.buttonBack}>
        <Link to={backLinkLocationRef.current} className={css.back}>
          <HiArrowLeft size="12" />
          <span> Go back</span>
        </Link>
      </button>

      <div className={css.movie}>        
        {movie.poster_path && <img
          className={css.movie__img}
          src={`https://image.tmdb.org/t/p/w185/${movie.poster_path}`}          
          alt={movie.title}
          width="185"
          height="278"
        />}        
        <div className={css.movie__description}>
          <h1 className={css.movie__title}>{movie.title}</h1>
          <p>Release date: {movie.release_date}</p>
          <p>User average: {movie.vote_average}</p>
          <h2 className={css.movie__title}>Overview</h2>
          <p>{movie.overview}</p>
          <h2 className={css.movie__title}>Genres</h2>
          <p>
            {movie.genres?.map(genre => (
              <span key={genre.id}>{genre.name} </span>
            ))}
          </p>
        </div>
      </div>
      <div className={css.add}>
        <h3 className={css.movie__title}>Additional information</h3>
        <ul>
          <li className={css.add__item}>
            <Link to="cast">Cast</Link>
          </li>
          <li className={css.add__item}>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
}
