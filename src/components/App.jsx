import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import { GlobalStyle } from '../GlobalStyle';
import { Layout } from 'Layout';

// import Home from 'pages/Home/Home';
// import SiteBar from './SiteBar/SiteBar';
// import Movie from '../pages/Movie/Movie';
// import Casts from './Casts/Casts';
// import Reviews from './Reviews/Reviews';
// import Movies from 'pages/Movies/Movies';
// import NotFound from 'pages/NotFound/NotFound';

const Home = lazy(() => import('pages/Home/Home'));
const SiteBar = lazy(() => import('./SiteBar/SiteBar'));
const Movie = lazy(() => import('../pages/Movie/Movie'));
const Movies = lazy(() => import('../pages/Movies/Movies'));
const Casts = lazy(() => import('./Casts/Casts.jsx'));
const Reviews = lazy(() => import('./Reviews/Reviews'));
const NotFound = lazy(() => import('pages/NotFound/NotFound'));

export const App = () => {
  return (
    <Layout>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<SiteBar />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:id" element={<Movie />}>
            <Route path="cast" element={<Casts />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
};
