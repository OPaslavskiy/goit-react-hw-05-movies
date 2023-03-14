import axios from 'axios';
const KEY_API = 'db72402e2e89e57b99e88c265b440972';
const BASE_URL = 'https://api.themoviedb.org/3/';

export async function getReviews(id) {
  const response =
    await axios.get(`${BASE_URL}/movie/${id}/reviews?api_key=${KEY_API}
`);
  return response.data;
}