import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieReviews } from 'components/Api/getMovieReviews';

export const Reviews = () => {
  const { id } = useParams();
  const movieId = Number(id);
  const [reviews, setReviews] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const getMovieReviewsById = async movieId => {
      try {
        const movieReviews = await getMovieReviews(movieId);
        setReviews(movieReviews);
      } catch (error) {
      } finally {
        setIsLoading(false);
      }
    };
    getMovieReviewsById(movieId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <div>
      {!isLoading && (
        <ul>
          {reviews.data.results.length !== 0 ? (
            reviews.data.results.map(({ author, content, id }) => {
              return (
                <li key={id}>
                  <h3>Athor: {author}</h3>
                  <p>{content}</p>
                </li>
              );
            })
          ) : (
            <p>We do not have any reviews for this movie.</p>
          )}
        </ul>
      )}
    </div>
  );
};
