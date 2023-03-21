import { useState, useEffect } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import { getMovieDeatilsbyId } from 'components/Api/getMovieDetailsbyID';
import { GoBackLink } from 'components/GoBackLink/GoBackLink';

export const MovieDetails = (elemID, elemTitle) => {
  const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState(null);
  const { id } = useParams();
  const movieId = Number(id);

  const backLink = '/movies';

  useEffect(() => {
    setIsLoading(true);
    const getMovieDetails = async movieId => {
      try {
        const movieDetails = await getMovieDeatilsbyId(movieId);
        setMovie(movieDetails);
      } catch (error) {
      } finally {
        setIsLoading(false);
      }
    };
    getMovieDetails(movieId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getGenresList = genres => {
    return genres.map(genre => genre.name).join(', ');
  };
  return (
    <div>
      {!isLoading && (
        <div>
          <GoBackLink to={backLink}>
            <button> Go Back </button>
          </GoBackLink>
          <div>
            <img
              src={`https://image.tmdb.org/t/p/w200${movie.data.poster_path}`}
              alt=""
            />
          </div>
          <div>
            <h1>{movie.data.title}</h1>
            <p>User Score: {movie.data.vote_average}</p>
            <h3>Overview</h3>
            <p>{movie.data.overview}</p>
            <h3>Genres</h3>
            <p>{getGenresList(movie.data.genres)}</p>
          </div>
          {console.log(movieId)}
          <Link to="cast">
            <button>Cast</button>
          </Link>
          <Link to="reviews">
            <button>Reviews</button>
          </Link>
          <Outlet />
        </div>
      )}
    </div>
  );
};
