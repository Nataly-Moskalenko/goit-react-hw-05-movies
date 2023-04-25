import { useState, useEffect } from 'react';
import { useParams, Link, Outlet } from 'react-router-dom';
import apiService from 'services/apiService';
import css from './MovieDetails.module.css';

export default function MovieDetails() {
  const [movie, setMovie] = useState({});
  // const [poster, setPoster] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    async function fetchMovie() {
      try {
        const data = await apiService(`/movie/${movieId}`);
        setMovie(data);
        // console.log(data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchMovie();
  }, [movieId]);

  // useEffect(() => {
  //   setPoster(`https://image.tmdb.org/t/p/w185/${movie.poster_path}`);
  // }, [movie]);

  return (
    <div>
      <p>Go back</p>
      <div className={css.movie}>
        <img
          src={`https://image.tmdb.org/t/p/w185/${movie.poster_path}`}
          alt={movie.title}
        />
        {/* <img src={poster} alt={movie.title} /> */}
        <div>
          <h1>{movie.title}</h1>
          <p>Release date: {movie.release_date}</p>
          <p>User average: {movie.vote_average}</p>
          <h2>Overview</h2>
          <p>{movie.overview}</p>
          <h2>Genres</h2>
          {/* <p>
            {movie.genres.map(genre => (
              <p>{genre.name}</p>
            ))}
          </p> */}
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
