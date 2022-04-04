import { Review } from '../../types/types';
import { ratingHandle } from '../../services/rating-handle';

type ReviewCardProps = {
  review: Review;
};

function ReviewScreen(props: ReviewCardProps): JSX.Element {
  const { review } = props;

  const rating = ratingHandle(review.rating);

  const dateFormatterDateTimeAttribute = new Intl.DateTimeFormat('en-Us', {
    year: 'numeric',
    month: 'long',
  });

  const dateFormatterReview = new Intl.DateTimeFormat('fr-CA', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  });

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
        <time
          className="reviews__time"
          dateTime={dateFormatterDateTimeAttribute.format(
            Date.parse(review.date),
          )}
        >
          {dateFormatterReview.format(Date.parse(review.date))}
        </time>
      </div>
    </li>
  );
}

export default ReviewScreen;
