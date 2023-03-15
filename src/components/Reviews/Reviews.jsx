import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getReviews } from 'services/getReviews';
import { ReviewsList, Author, Response, ReviewsItem } from './Reviews.styled';

import Notiflix from 'notiflix';
Notiflix.Notify.init({
  width: '420px',
  position: 'center-top',
  distance: '100px',
  timeout: 2000,
  fontSize: '20px',
});

const Reviews = () => {
  const { id } = useParams();
  const [reviews, setReviews] = useState({});
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    async function getCasts() {
      try {
        getReviews(id).then(data => {
          setReviews(data.results);
          setFlag(true);
          console.log(data);
        });
      } catch (err) {
        Notiflix.Notify.failure(err);
      }
    }
    getCasts();
  }, [id]);

  if (flag) {
    return (
      <ReviewsList>
        {reviews.map(review => (
          <ReviewsItem key={review.author}>
            <Author>{review.author}</Author>

            <Response>{review.content}</Response>
          </ReviewsItem>
        ))}
      </ReviewsList>
    );
  }
};

export default Reviews;
