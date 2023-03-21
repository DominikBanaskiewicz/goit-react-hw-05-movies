import axios from 'axios';

export const getMovieDeatilsbyId = async movieID => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieID}`,
    {
      method: 'get',
      params: {
        api_key: '63b14a4f04fca1cccc4d7c2b70917b7d',
        language: 'en-US',
      },
    }
  );

  return response;
};

// https://api.themoviedb.org/3/movie/{movie_id}?api_key=63b14a4f04fca1cccc4d7c2b70917b7d&language=en-US
