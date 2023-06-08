import { NavLink } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import './App.module.css';
import './styles.css';

export const App = () => {
  const PopularMovies = lazy(() =>
    import('./PopularMovies/PopularMovies').then(module => ({
      ...module,
      default: module.PopularMovies,
    }))
  );
  const MovieDetails = lazy(() =>
    import('./MovieDetails/MovieDetails').then(module => ({
      ...module,
      default: module.MovieDetails,
    }))
  );
  const Cast = lazy(() =>
    import('./Cast/Cast').then(module => ({
      ...module,
      default: module.Cast,
    }))
  );
  const Reviews = lazy(() =>
    import('./Reviews/Reviews').then(module => ({
      ...module,
      default: module.Reviews,
    }))
  );
  const SearchMovies = lazy(() =>
    import('./SearchMovies/SearchMovies').then(module => ({
      ...module,
      default: module.SearchMovies,
    }))
  );

  return (
    <div>
      <nav>
        <NavLink className={'NavLink'} to="/">
          Home
        </NavLink>
        <NavLink className={'NavLink'} to="/movies">
          Movies
        </NavLink>
      </nav>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<PopularMovies />} />
          <Route path="/movies/:id" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="/movies" element={<SearchMovies />} />
          <Route path="*" element={<PopularMovies />} />
        </Routes>
      </Suspense>
    </div>
  );
};
