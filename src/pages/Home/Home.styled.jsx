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
  width: 350px;
  margin-top: 10px;
  background-color: #a8daf7;
  border-bottom-left-radius: 10px;
`;

export const Image = styled.img`
  width: 350px;
`;

export const FilmsName = styled.h2`
  padding-bottom: 5px;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  letter-spacing: 0.03em;
  padding-left: 15px;
  color: #382aff;
`;
