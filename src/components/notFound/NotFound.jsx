import image from '../../images/movie-597004_640.jpg';
import css from './NotFound.module.css';

export default function NotFound() {
  return (
    <div className={css.notFound}>
      <img src={image} alt="Movie poster" width="320" />
      <p>Oops, something went wrong. Please try again.</p>
    </div>
  );
}
