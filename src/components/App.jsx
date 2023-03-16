import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { GlobalStyle } from '../GlobalStyle';
import { Layout } from 'Layout';

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
      <Suspense fallback={<div>Loading subpage...</div>}>
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
      </Suspense>
    </Layout>
  );
};
