import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import apiService from 'services/apiService';

export default function Cast() {
  const [actors, setActors] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    async function fetchCast() {
      try {
        const data = await apiService(`/movie/${movieId}/credits`);
        setActors(data.cast);
        console.log(data.cast);
      } catch (error) {
        console.log(error);
      }
    }

    fetchCast();
  }, [movieId]);

  return (
    <ul>
      {actors.map(actor => (
        <li key={actor.id}>
          <img
            src={`https://image.tmdb.org/t/p/w92/${actor.profile_path}`}
            alt={actor.name}
          />
          <p>{actor.name}</p>
          <p>Character: {actor.character}</p>
        </li>
      ))}
    </ul>
  );
}
