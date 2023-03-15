import axios from 'axios';
import { KEY_API, BASE_URL } from './baseURL';

// *************GET POPULAR MOVIES****************
export async function getPopularFilms() {
  const response =
    await axios.get(`${BASE_URL}trending/movie/day?api_key=${KEY_API}
`);
  return response.data;
}

// *************GET BY USER PARAMS****************
export async function getMovies(searchParams) {
  const response =
    await axios.get(`${BASE_URL}/search/movie?api_key=${KEY_API}&page=1&query=${searchParams}
`);
  return response.data;
}

// *************GET BY ID****************
export async function getMovieById(id) {
  const response = await axios.get(`${BASE_URL}/movie/${id}?api_key=${KEY_API}
`);
  return response.data;
}

// *************GET CAST****************
export async function getCast(id) {
  const response =
    await axios.get(`${BASE_URL}/movie/${id}/credits?api_key=${KEY_API}
`);
  return response.data;
}

// *************GET REVIEWS ****************
export async function getReviews(id) {
  const response =
    await axios.get(`${BASE_URL}/movie/${id}/reviews?api_key=${KEY_API}
`);
  return response.data;
}
