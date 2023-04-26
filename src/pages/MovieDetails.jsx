import { useState, useEffect } from 'react';
import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import apiService from 'services/apiService';
import css from './MovieDetails.module.css';
import { HiArrowLeft } from 'react-icons/hi';

export default function MovieDetails() {
  const [movie, setMovie] = useState({});
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/'; 

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
    <div>
      <Link to={backLinkHref}>
        <HiArrowLeft size="12" />
        Go back
      </Link>
      <div className={css.movie}>
        <img
          className={css.movie__img}
          src={`https://image.tmdb.org/t/p/w185/${movie.poster_path}`}
          alt={movie.title}
          width="185"
          height="278"
        />       
        <div className={css.movie__description}>
          <h1 className={css.movie__title}>{movie.title}</h1>
          <p>Release date: {movie.release_date}</p>
          <p>User average: {movie.vote_average}</p>
          <h2>Overview</h2>
          <p>{movie.overview}</p>
          <h2>Genres</h2>
          <p>           
            {movie.genres?.map(genre => (
              <span key={genre.id}>{genre.name} </span>
            ))}
          </p>          
        </div>
      </div>
      <h3>Additional information</h3>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}
