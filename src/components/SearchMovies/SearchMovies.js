import { useState, useEffect } from 'react';
import { getMoviesByQuery } from 'components/Api/getMoviesByQuery';
import { Link } from 'react-router-dom';

export const SearchMovies = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [query, setQuery] = useState([]);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;

    setQuery(form.elements.searchQuery.value);
    form.reset();
  };

  useEffect(() => {
    setIsLoading(true);
    setData([]);
    const getMoviesByQuery2 = async searchQuery => {
      try {
        const movies = await getMoviesByQuery(searchQuery);
        if (movies.data.results.length !== 0) setData(movies.data.results);
      } catch (error) {
      } finally {
        setIsLoading(false);
      }
    };
    getMoviesByQuery2(query);
  }, [query]);

  useEffect(() => {
    setData([]);
  }, []);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          <input name="searchQuery" type="text" />
          <button>Search</button>
        </label>

        <div>
          {!isLoading && data.length !== 0 ? (
            data.map(elem => (
              <li key={elem.id}>
                <Link to={`${elem.id}`}>{elem.title}</Link>
              </li>
            ))
          ) : (
            <p>Sorry, check search query</p>
          )}
        </div>
      </form>
    </div>
  );
};
