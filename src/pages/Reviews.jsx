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
        console.log(data.results);
      } catch (error) {
        console.log(error);
      }
    }

    fetchReviews();
  }, [movieId]);

  return (
    <ul>
      {reviews.map(review => (
        <li key={review.id}>
          <p>Author: {review.author}</p>
          <p>{review.content}</p>
        </li>
      ))}
    </ul>
  );
}
