import axios from 'axios';
const KEY_API = 'db72402e2e89e57b99e88c265b440972';
const BASE_URL = 'https://api.themoviedb.org/3/';

export async function getPopularFilms() {
  const response =
    await axios.get(`${BASE_URL}trending/movie/day?api_key=${KEY_API}
`);
  return response.data;
}
