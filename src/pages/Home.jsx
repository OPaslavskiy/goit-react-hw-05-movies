import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { getPopularFilms } from 'services/getPopularFilms';

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
  const [error, setError] = useState('');
  const [status, setStatus] = useState('stoped');

  useEffect(() => {
    console.log(`useEffect`);

    function getFilms() {
      if (status === 'stoped') {
        getPopularFilms()
          .then(data => {
            setFilms(prevState => [...prevState, ...data.results]);
            setStatus('resolved');
            // setShowBtn(page < Math.ceil(data.totalHits / 12));
            // setFlag(false);

            Notiflix.Notify.success(
              `We have prepared for you the 20 best movies for today`
            );
          })
          .catch(error => {
            setError(error);
            setStatus('rejected');
          });
      }
    }
    getFilms();
  }, []);

  return (
    <ul>
      <NavLink>
        {films.map(film => {
          const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500/';
          const IMG_URL = `${IMAGE_BASE_URL}${film.backdrop_path}`;
          return (
            <li key={film.id}>
              <h2>{film.original_title}</h2>
              <img src={IMG_URL} alt={film.original_title} />
            </li>
          );
        })}
      </NavLink>
    </ul>
  );
};

export default Home;
