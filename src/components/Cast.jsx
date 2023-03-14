import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getCast } from '../services/getCast';
import noCastPhoto from '../images/noCastPhoto.png';

import Notiflix from 'notiflix';
Notiflix.Notify.init({
  width: '420px',
  position: 'center-top',
  distance: '100px',
  timeout: 2000,
  fontSize: '20px',
});

const Cast = () => {
  const { id } = useParams();
  const [casts, setCasts] = useState({});
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    async function getCasts() {
      try {
        getCast(id).then(data => {
          setCasts(data);
          setFlag(true);
        });
      } catch (err) {
        Notiflix.Notify.success(err);
      }
    }
    getCasts();
  }, [id]);
  const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w200/';

  if (flag) {
    return (
      <ul>
        {casts.cast.map(cast => (
          <li key={cast.name}>
            <img
              src={
                cast.profile_path
                  ? IMAGE_BASE_URL + cast.profile_path
                  : noCastPhoto
              }
              alt={cast.name}
            />
            <span>Аctor's name</span>
            <p>{cast.name}</p>
            <span>Сharacter</span>
            <p>{cast.character}</p>
          </li>
        ))}
      </ul>
    );
  }
};

export default Cast;
