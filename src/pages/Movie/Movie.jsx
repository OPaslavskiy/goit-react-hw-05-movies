import { useEffect, useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { getMovieById } from '../../services/getMovieByID';
import {
  GeneralBox,
  FilmsName,
  TitelBox,
  Year,
  FilmBox,
  InformBox,
  Span,
  P,
} from './Movie.styled';

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
      <GeneralBox>
        <FilmBox>
          <img src={IMG_URL} alt={original_title} />
          <InformBox>
            <TitelBox>
              <FilmsName>{original_title}</FilmsName>
              <Year>({release_date.slice(0, 4)})</Year>
            </TitelBox>
            <P>
              <Span>Rating:</Span>
              {vote_average.toFixed(1)}
            </P>
            <P>
              <Span>Overview:</Span>
              {overview}
            </P>
            <P>
              <Span>Genres:</Span>
              {Object.values(genres.map(genre => genre.name)).join(', ')}
            </P>
          </InformBox>
        </FilmBox>

        <NavLink to="cast">Cast</NavLink>
        <NavLink to="reviews">Reviews</NavLink>
        <Outlet />
      </GeneralBox>
    );
  }
};

export default Movie;
