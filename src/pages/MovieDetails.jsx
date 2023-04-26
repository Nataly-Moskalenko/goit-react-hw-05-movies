import { useState, useEffect } from 'react';
import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import apiService from 'services/apiService';
import css from './MovieDetails.module.css';
import { HiArrowLeft } from 'react-icons/hi';
import image from 'movie-597004_640.jpg';

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
        <span> Go back</span>
      </Link>
      <div className={css.movie}>
        {/* {movie.poster_path && ( */}
        <img
          className={css.movie__img}
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w185/${movie.poster_path}`
              : image
          }
          alt={movie.title}
          width="185"
          height="278"
        />
        {/* )}
        {!movie.poster_path && <img src={image} className={css.movie__img} alt=''/>}         */}
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
        <li className={css.add}>
          <Link to="cast">Cast</Link>
        </li>
        <li className={css.add}>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}
