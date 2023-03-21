import axios from 'axios';

export const getMoviesByQuery = async SearchQuery => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/search/movie`,
    {
      method: 'get',
      params: {
        api_key: '63b14a4f04fca1cccc4d7c2b70917b7d',
        language: 'en-US',
        query: SearchQuery,
        page: 1,
      },
    }
  );
  return response;
};
