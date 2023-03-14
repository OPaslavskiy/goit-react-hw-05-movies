import { Outlet } from 'react-router-dom';
import { Header, NavigationList, Links, Lebel } from './SiteBar.styled';

const SiteBar = () => {
  return (
    <>
      <Lebel href="https://github.com/OPaslavskiy">by OPaslavskyi</Lebel>

      <Header>
        <nav>
          <NavigationList>
            <li>
              <Links to="/">Номе</Links>
            </li>
            <li>
              <Links to="movies">Movies</Links>
            </li>
          </NavigationList>
        </nav>
      </Header>
      <Outlet />
    </>
  );
};

export default SiteBar;
