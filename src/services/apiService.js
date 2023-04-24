import axios from 'axios';

const KEY_API = 'e1e6b0abeb0232c01b22621de6af9734';
const BASE_URL = 'https://api.themoviedb.org/3';

export default async function apiService(query) {
  const response = await axios.get(`${BASE_URL}${query}?api_key=${KEY_API}`);
  return response.data;
}
