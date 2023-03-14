import { NavLink, Outlet } from 'react-router-dom';
const SiteBar = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Номе</NavLink>
          </li>
          <li>
            <NavLink to="movies">Movies</NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

export default SiteBar;
