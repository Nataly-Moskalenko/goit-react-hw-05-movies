import { Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from 'pages/Home';
import Movies from 'pages/Movies';
import MovieDetails from 'pages/MovieDetails';
import Cast from 'pages/Cast';
import Reviews from 'pages/Reviews';
// import apiService from 'services/apiService';

export const App = () => {
  return (
    <div
    // style={{
    //   height: '100vh',
    //   display: 'flex',
    //   justifyContent: 'center',
    //   alignItems: 'center',
    //   fontSize: 40,
    //   color: '#010101',
    // }}
    >
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />}/>
            <Route path="reviews" element={<Reviews />}/>
          </Route>
        </Route>
      </Routes>
    </div>
  );
};
