import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getCast } from '../../services/getFetch';
import noCastPhoto from '../../images/noCastPhoto.png';
import { CastsList, CastsItem, Span, Paragraph, Image } from './Casts.styled';

import Notiflix from 'notiflix';
Notiflix.Notify.init({
  width: '420px',
  position: 'center-top',
  distance: '100px',
  timeout: 2000,
  fontSize: '20px',
});

const Casts = () => {
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
        Notiflix.Notify.failure(err);
      }
    }
    getCasts();
  }, [id]);
  const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w200/';

  if (flag) {
    return (
      <CastsList>
        {casts.cast.map(cast => (
          <CastsItem key={cast.name}>
            <Image
              src={
                cast.profile_path
                  ? IMAGE_BASE_URL + cast.profile_path
                  : noCastPhoto
              }
              alt={cast.name}
            />
            <Span>Аctor's name:</Span>
            <Paragraph>{cast.name}</Paragraph>
            <Span>Сharacter:</Span>
            <Paragraph>{cast.character}</Paragraph>
          </CastsItem>
        ))}
      </CastsList>
    );
  }
};

export default Casts;
