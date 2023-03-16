import { useState, useEffect } from 'react';
import { useSearchParams, Link, useLocation } from 'react-router-dom';
import { getMovies } from '../../services/getFetch';
import {
  SearchFilmsList,
  SearchFilmsItem,
  FormButton,
  Form,
  FormInput,
} from './Movies.styled';

import Notiflix from 'notiflix';
Notiflix.Notify.init({
  width: '550px',
  position: 'center-top',
  distance: '100px',
  timeout: 2000,
  fontSize: '20px',
});

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [listOfFilms, setListOfFilms] = useState([]);
  const [flag, setFlag] = useState(false);
  const query = searchParams.get('query');
  const location = useLocation();

  const formSubmit = e => {
    e.preventDefault();
    setSearchParams({ query: e.target.query.value });
    e.target.reset();
  };

  useEffect(() => {
    function getListOfMovies() {
      getMovies(query)
        .then(data => {
          setListOfFilms(data.results);
          setFlag(true);
          if (data.results.length > 0) {
            Notiflix.Notify.success(
              `We have found the movies most relevant to your request`
            );
          } else {
            Notiflix.Notify.failure(
              'Sorry, but nothing was found for your query'
            );
          }
        })
        .catch(err => {
          Notiflix.Notify.failure(err);
        });
    }
    if (query) {
      getListOfMovies();
    }
  }, [query]);

  return (
    <div>
      <Form onSubmit={formSubmit}>
        <FormInput autoComplete="off" name="query" type="text" autoFocus />
        <FormButton type="submit">Search</FormButton>
      </Form>

      <div>
        {(flag && listOfFilms.length) > 0 ? (
          <SearchFilmsList>
            {listOfFilms.map(film => {
              return (
                <SearchFilmsItem>
                  <Link to={`${film.id}`} state={{ from: location }}>
                    {film.title} ({film.release_date.slice(0, 4)})
                  </Link>
                </SearchFilmsItem>
              );
            })}
          </SearchFilmsList>
        ) : null}
      </div>
    </div>
  );
};

export default Movies;
