import { useState, useEffect } from 'react';
import { useSearchParams, NavLink } from 'react-router-dom';
import getMovies from '../../services/getMovies';
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
          Notiflix.Notify.success(
            `We found 20 of the most suitable movie optionsy`
          );
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
        <FormButton type="button">Search</FormButton>
      </Form>

      <div>
        {(flag && listOfFilms.length) > 0 ? (
          <SearchFilmsList>
            {listOfFilms.map(film => {
              return (
                <SearchFilmsItem>
                  <NavLink to={`${film.id}`}>
                    {film.title} ({film.release_date.slice(0, 4)})
                  </NavLink>
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
