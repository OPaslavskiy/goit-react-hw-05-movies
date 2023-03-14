import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  background-color: #a8daf7;
  color: #fff;
  border-radius: 8px;
`;

export const NavigationList = styled.ul`
  display: flex;
  padding: 25px;
  margin-left: 30px;
`;

export const Links = styled(NavLink)`
  color: #ffaebb;
  padding: 15px;
  font-style: normal;
  font-weight: 700;
  font-size: 26px;
  text-align: center;
  letter-spacing: 0.03em;

  &.active {
    color: #382aff;
    background-color: #ffaebb;
    border-radius: 8px;
  }
`;

export const Lebel = styled.a`
  font-size: 15px;
  font-weight: 500;
  color: #7fc9f3;
`;
