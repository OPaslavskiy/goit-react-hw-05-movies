import { useState, useEffect } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { getPopularFilms } from 'services/getPopularMovies';
import { MoviesList, MoviesItem, Image, FilmsName } from './Home.styled';

import Notiflix from 'notiflix';
Notiflix.Notify.init({
  width: '420px',
  position: 'center-top',
  distance: '100px',
  timeout: 1500,
  fontSize: '20px',
});

const Home = () => {
  const [films, setFilms] = useState([]);
  const location = useLocation();
  //   const [status, setStatus] = useState('stoped');

  useEffect(() => {
    function getFilms() {
      getPopularFilms()
        .then(data => {
          setFilms(data.results);
          Notiflix.Notify.success(
            `We have prepared for you the 20 best movies for today`
          );
        })
        .catch(err => {
          Notiflix.Notify.failure(err);
        });
    }

    getFilms();
  }, []);

  return (
    <MoviesList>
      {films.map(film => {
        const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500/';
        const IMG_URL = `${IMAGE_BASE_URL}${film.backdrop_path}`;

        return (
          <NavLink to={`movies/${film.id}`} state={{ from: location }}>
            <MoviesItem key={film.id}>
              <Image src={IMG_URL} alt={film.original_title} />
              <FilmsName>{film.original_title}</FilmsName>
            </MoviesItem>
          </NavLink>
        );
      })}

      <Outlet />
    </MoviesList>
  );
};

export default Home;
