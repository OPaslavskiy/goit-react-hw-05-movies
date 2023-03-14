import { Routes, Route } from 'react-router-dom';
import { GlobalStyle } from '../GlobalStyle';
import { Layout } from 'Layout';
import Home from 'pages/Home/Home';
import SiteBar from './SiteBar/SiteBar';
import Movie from '../pages/Movie/Movie';
import Casts from './Cast';
import Reviews from './Reviews';

export const App = () => {
  return (
    <Layout>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<SiteBar />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<div>MOVIES</div>} />
          <Route path="/movies/:id" element={<Movie />}>
            <Route path="cast" element={<Casts />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </Layout>
  );
};
