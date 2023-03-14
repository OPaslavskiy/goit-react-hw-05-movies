import { Routes, Route, NavLink } from 'react-router-dom';
import Home from 'pages/Home';

export const App = () => {
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

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<div>MOVIES</div>} />
      </Routes>
    </>
  );
};
