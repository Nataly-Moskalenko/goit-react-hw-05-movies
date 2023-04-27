import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import apiService from 'services/apiService';

export default function Reviews() {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    async function fetchReviews() {
      try {
        const data = await apiService(`/movie/${movieId}/reviews`);
        setReviews(data.results);        
      } catch (error) {
        console.log(error);
      }
    }

    fetchReviews();
  }, [movieId]);

  return (
    <div>
      {reviews.length > 0 && (
        <ul>
          {reviews.map(review => (
            <li key={review.id}>
              <h4>Author: {review.author}</h4>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      )}
      {reviews.length === 0 && <p>We don`t have any reviews for this movie.</p>}
    </div>
  );
}
