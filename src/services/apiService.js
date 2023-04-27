import axios from 'axios';

const KEY_API = 'e1e6b0abeb0232c01b22621de6af9734';
const BASE_URL = 'https://api.themoviedb.org/3';

export default async function apiService(pathname, search) {
  const response = await axios.get(
    `${BASE_URL}${pathname}?api_key=${KEY_API}&${search}`
  );
  return response.data;
}
