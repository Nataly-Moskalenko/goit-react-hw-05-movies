import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import apiService from 'services/apiService';
import css from './Cast.module.css';
import { FaUserAlt } from 'react-icons/fa';

export default function Cast() {
  const [actors, setActors] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    async function fetchCast() {
      try {
        const data = await apiService(`/movie/${movieId}/credits`);
        setActors(data.cast);
        // console.log(data.cast);
      } catch (error) {
        console.log(error);
      }
    }

    fetchCast();
  }, [movieId]);

  return (
    <div>
      {actors.length > 0 && (
        <ul className={css.cast}>
          {actors.map(actor => (
            <li key={actor.id} className={css.cast__item}>
              {actor.profile_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/w92/${actor.profile_path}`}
                  alt={actor.name}
                  width="92"
                  height="138"
                  className={css.cast__img}
                />
              ) : (
                <FaUserAlt className={css.cast__img} />
              )}
              {/* {!actor.profile_path && <FaUserAlt className={css.cast__img} />} */}
              <p>{actor.name}</p>
              <p>Character: {actor.character}</p>
            </li>
          ))}
        </ul>
      )}
      {actors.length === 0 && (
        <p>We have no information about the actors of this movie.</p>
      )}
    </div>
  );
}
