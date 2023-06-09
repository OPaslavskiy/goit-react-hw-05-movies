import styled from 'styled-components';
import { NavLink, Link } from 'react-router-dom';

export const GeneralBox = styled.ul`
  padding: 15px;
  gap: 10px;
  margin-bottom: 65px;
  width: 100%;
`;

export const FilmsName = styled.h1`
  padding-bottom: 5px;
  font-style: normal;
  font-weight: 600;
  font-size: 25px;
  letter-spacing: 0.03em;
  color: #382aff;
`;

export const Year = styled.p`
  padding-bottom: 5px;
  font-style: normal;
  font-weight: 600;
  font-size: 25px;
  letter-spacing: 0.03em;
  padding-left: 10px;
  color: #382aff;
`;

export const TitelBox = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

export const FilmBox = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 25px;
  margin-top: 15px;
  width: 100%;
`;

export const InformBox = styled.div`
  margin-left: 20px;
  margin-right: 20px;
  width: 50%;
`;

export const Span = styled.span`
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  text-align: center;
  letter-spacing: 0.03em;
  margin-right: 5px;
`;

export const Paragraph = styled.p`
  margin-bottom: 10px;
`;

export const ListAbout = styled.ul`
  margin-top: 15px;
  margin-bottom: 15px;
  display: flex;
  gap: 5px;
`;

export const Links = styled(NavLink)`
  color: #ffaebb;
  padding: 5px;
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  text-align: center;
  letter-spacing: 0.03em;

  &.active {
    color: #382aff;
    background-color: #ffaebb;
    border-radius: 8px;
  }
`;

export const BackButton = styled(Link)`
  padding: 10px;
  font-size: 12px;
  color: #382aff;
  border: 0px;
  background-color: #ffaebb;
  border-radius: 8px;
  margin-left: 25px;
  font-weight: 400;
`;

export const Image = styled.img`
  width: 500px;
  height: auto;
`;
