import { Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from 'pages/Home';
import Movies from 'pages/Movies';
import MovieDetails from 'pages/MovieDetails';
import Cast from './Cast';
import Reviews from './Reviews';
import NotFound from './NotFound';
import css from './App.module.css';

export const App = () => {
  return (
    <div className={css.app}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
};
