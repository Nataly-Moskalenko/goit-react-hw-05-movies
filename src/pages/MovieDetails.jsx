import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import apiService from 'services/apiService';

export default function MovieDetails() {
  const [movie, setMovie] = useState({});
  const { movieId } = useParams();

  useEffect(() => {
    async function fetchMovie() {
      try {
        const data = await apiService(`/movie/${movieId}`);
        setMovie(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchMovie();
  }, [movieId]);

  return (
    <div>
      <p>Go back</p>
      <div>
        <img
          src={`https://image.tmdb.org/t/p/w185/${movie.poster_path}`}
          alt={movie.title}
        />
        {/* <img src={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`} alt={movie.title} /> */}
        <div>
          <h1>
            {movie.title} ({movie.release_date})
          </h1>
          <p>User score : {movie.vote_average}</p>
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
        <li>Cast</li>
        <li>Reviews</li>
      </ul>
    </div>
  );
}
