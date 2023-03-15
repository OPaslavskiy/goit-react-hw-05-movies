import styled from 'styled-components';

export const SearchFilmsList = styled.ul`
  padding: 15px;
  margin-left: 45px;
  gap: 10px;
  margin-bottom: 65px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
`;

export const SearchFilmsItem = styled.li`
  width: 30%;
  background-image: linear-gradient(to right, #54b3d6, #54b3d6 50%, #000 50%);
  background-size: 200% 100%;
  background-position: -100%;
  display: inline-block;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  padding: 5px 0;
  position: relative;
  transition: all 0.3s ease-in-out;

  &:hover,
  &:focus {
    background-position: 0;
  }

  &:before {
    content: '';
    background: #54b3d6;
    display: block;
    position: absolute;
    bottom: -3px;
    left: 0;
    width: 0;
    height: 3px;
    transition: all 0.3s ease-in-out;
  }

  &:hover::before {
    width: 100%;
  }
`;

export const FormButton = styled.button`
  padding: 15px;
  font-size: 16px;
  color: #382aff;
  border: 0px;
  background-color: #ffaebb;
  border-radius: 8px;
  margin-left: 15px;
  font-weight: 800;
`;

export const Form = styled.form`
  margin-left: 55px;
  margin-top: 25px;
  display: flex;
  align-items: stretch;
`;

export const FormInput = styled.input`
  width: 30%;
  position: relative;
  font-size: 1.5em;
  background: linear-gradient(101deg, #fff, #a8daf7);
  padding: 5px;
  display: inline-block;
  border-color: #a8daf7;
  border-radius: 8px;
  *:not(span) {
    position: relative;
    display: inherit;
    border-radius: inherit;
    margin: 0;
    border: none;
    outline: none;
    padding: 0 0.325em;
    z-index: 1;
    &:focus + span {
      opacity: 1;
      transform: scale(1);
    }
  }
`;
