import { Review } from '../../types/types';

type ReviewCardProps = {
  review: Review;
};

function ReviewScreen(props: ReviewCardProps): JSX.Element {
  const { review } = props;

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img
            className="reviews__avatar user__avatar"
            src={review.urlAuthorAvatar}
            width="54"
            height="54"
            alt="Reviews avatar"
          />
        </div>
        <span className="reviews__user-name">{review.authorName}</span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{ width: review.authorRating }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">{review.reviewText}</p>
        <time className="reviews__time" dateTime="2019-04-24">
          {review.reviewData}
        </time>
      </div>
    </li>
  );
}

export default ReviewScreen;
