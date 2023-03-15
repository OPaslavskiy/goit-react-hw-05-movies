import axios from 'axios';
const KEY_API = 'db72402e2e89e57b99e88c265b440972';
const BASE_URL = 'https://api.themoviedb.org/3/';
async function getMovies(searchParams) {
  const response =
    await axios.get(`${BASE_URL}/search/movie?api_key=${KEY_API}&page=1&query=${searchParams}
`);
  return response.data;
}

export default getMovies;
