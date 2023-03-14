import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getReviews } from 'services/getReviews';

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
        Notiflix.Notify.success(err);
      }
    }
    getCasts();
  }, [id]);

  if (flag) {
    return (
      <ul>
        {reviews.map(review => (
          <li key={review.author}>
            <b>
              <p>{review.author}</p>
            </b>

            <p>{review.content}</p>
          </li>
        ))}
      </ul>
    );
  }
};

export default Reviews;
