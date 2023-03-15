import styled from 'styled-components';

export const MoviesList = styled.ul`
  display: flex;
  justify-content: center;
  padding: 25px;
  margin-left: 15px;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 65px;
`;

export const MoviesItem = styled.li`
  width: 400px;
  margin-top: 10px;
  background-color: #a8daf7;
  border-bottom-left-radius: 15px;

  &:hover,
  &:focus {
    transition: all 0.2s ease-out;
    box-shadow: 0px 4px 8px rgba(38, 38, 38, 0.2);
    top: -4px;
    background-color: #ffaebb;
  }

  &:before {
    content: '';
    position: absolute;
    z-index: -1;
    top: -16px;
    right: -16px;
    background: #00838d;
    height: 32px;
    width: 32px;
    border-radius: 32px;
    transform: scale(2);
    transform-origin: 50% 50%;
    transition: transform 0.15s ease-out;
  }

  &:hover:before {
    transform: scale(2.15);
  }
`;

export const Image = styled.img`
  width: 400px;
`;

export const FilmsName = styled.h2`
  padding-bottom: 5px;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  letter-spacing: 0.03em;
  padding-left: 15px;
  color: #382aff;
  margin-top: -5px;
`;
