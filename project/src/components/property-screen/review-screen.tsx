import { Review } from '../../types/types';
import {MAX_STAR_VALUE} from '../../const';

type ReviewCardProps = {
  review: Review;
};

function ReviewScreen(props: ReviewCardProps): JSX.Element {
  const { review } = props;
  const rating = (Math.round(review.rating*100/MAX_STAR_VALUE*100)/100).toString();

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img
            className="reviews__avatar user__avatar"
            src={review.user.avatarUrl}
            width="54"
            height="54"
            alt="Reviews avatar"
          />
        </div>
        <span className="reviews__user-name">{review.user.name}</span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{ width: `${rating}%` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">{review.comment}</p>
        <time className="reviews__time" dateTime="2019-04-24">
          {review.date.slice(0, 10)}
        </time>
      </div>
    </li>
  );
}

export default ReviewScreen;
