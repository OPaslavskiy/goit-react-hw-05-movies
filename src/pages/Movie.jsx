import { useEffect, useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { getMovieById } from '../services/getMovieByID';

import Notiflix from 'notiflix';
Notiflix.Notify.init({
  width: '420px',
  position: 'center-top',
  distance: '100px',
  timeout: 2000,
  fontSize: '20px',
});

const Movie = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    async function getMovie() {
      try {
        getMovieById(id).then(data => {
          setMovie(data);
          setFlag(true);
        });
      } catch (err) {
        Notiflix.Notify.success(err);
      }
    }
    getMovie();
  }, [id]);

  const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500/';
  const IMG_URL = `${IMAGE_BASE_URL}${movie.backdrop_path}`;

  if (flag) {
    const { original_title, release_date, vote_average, overview, genres } =
      movie;
    return (
      <>
        <img src={IMG_URL} alt={original_title} />
        <h1>{original_title}</h1>
        <p>({release_date.slice(0, 4)})</p>
        <p>
          <span>Rating</span>
          {vote_average.toFixed(1)}
        </p>
        <p>
          <span>Overview</span>
          {overview}
        </p>
        <p>
          <span>Genres</span>
          {Object.values(genres.map(genre => genre.name)).join(', ')}
        </p>
        <NavLink to="cast">Cast</NavLink>
        <NavLink to="reviews">Reviews</NavLink>
        <Outlet />
      </>
    );
  }
};

export default Movie;
