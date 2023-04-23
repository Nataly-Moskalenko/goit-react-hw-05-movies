import axios from 'axios';

// const KEY_API = 'e1e6b0abeb0232c01b22621de6af9734';
// const BASE_URL = 'https://api.themoviedb.org/3/movie/550';

export default async function apiService() {
  const response = await axios.get(
    'https://api.themoviedb.org/3/trending/movie/day?api_key=e1e6b0abeb0232c01b22621de6af9734'
    // `${BASE_URL}?api_key=${KEY_API}/trending/movie/day`
  );
  // console.log(response);
  return response.data;
}

// https://api.themoviedb.org/3/movie/550?api_key=e1e6b0abeb0232c01b22621de6af9734
// e1e6b0abeb0232c01b22621de6af9734
