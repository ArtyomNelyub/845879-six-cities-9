import { memo } from 'react';
import { Reviews } from '../../types/types';
import ReviewScreen from './review-screen';

type ReviewListProps = {
  reviews: Reviews;
};

function ReviewListScreen(props: ReviewListProps): JSX.Element {
  const { reviews } = props;
  const MAX_COMMENTS_NUMB = 10;

  const sortedReviews =
    reviews.length > MAX_COMMENTS_NUMB
      ? [...reviews].reverse().slice(0, MAX_COMMENTS_NUMB)
      : [...reviews].reverse();

  return (
    <>
      <h2 className="reviews__title">
        Reviews &middot;{' '}
        <span className="reviews__amount">{reviews.length}</span>
      </h2>
      <ul className="reviews__list">
        {sortedReviews.map((review) => (
          <ReviewScreen review={review} key={review.id} />
        ))}
      </ul>
    </>
  );
}

export default memo(ReviewListScreen);
