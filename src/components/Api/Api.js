import axios from 'axios';

export const fetchGalleryimages = async () => {
  const response = await axios.get(
    'https://api.themoviedb.org/3/movie/popular?&language=en-US&page=1',
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

//// 63b14a4f04fca1cccc4d7c2b70917b7d
// https://api.themoviedb.org/3/movie/550?api_key=63b14a4f04fca1cccc4d7c2b70917b7d

// popular https://api.themoviedb.org/3/movie/popular?api_key=63b14a4f04fca1cccc4d7c2b70917b7d&language=en-US&page=1
