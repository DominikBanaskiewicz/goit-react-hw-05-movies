import { fetchGalleryimages } from 'components/Api/Api';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export const PopularMovies = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getVideos = async () => {
      try {
        setIsLoading(true);
        const movies = await fetchGalleryimages();
        if (movies.data.results.length !== 0) setData(movies.data.results);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    getVideos();
  }, []);

  return (
    <div>
      <ul>
        {!isLoading &&
          data.map(elem => (
            <li key={elem.id}>
              <Link to={`/movies/${elem.id}`}>{elem.title}</Link>
            </li>
          ))}
      </ul>
    </div>
  );
};
