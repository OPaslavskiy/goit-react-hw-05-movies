import { Routes, Route } from 'react-router-dom';
import Home from 'pages/Home';
import SiteBar from './SiteBar';
import Movie from '../pages/Movie';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SiteBar />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<div>MOVIES</div>} />
          <Route path="/movies/:id" element={<Movie />} />
        </Route>
      </Routes>
    </>
  );
};
