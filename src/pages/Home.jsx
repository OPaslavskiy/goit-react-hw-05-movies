import { useState, useEffect } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { getPopularFilms } from 'services/getPopularMovies';

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
          Notiflix.Notify.success(err);
        });
    }

    getFilms();
  }, []);

  return (
    <ul>
      {films.map(film => {
        const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500/';
        const IMG_URL = `${IMAGE_BASE_URL}${film.backdrop_path}`;

        return (
          <NavLink to={`movies/${film.id}`}>
            <li key={film.id}>
              <h2>{film.original_title}</h2>
              <img src={IMG_URL} alt={film.original_title} />
            </li>
          </NavLink>
        );
      })}

      <Outlet />
    </ul>
  );
};

export default Home;
