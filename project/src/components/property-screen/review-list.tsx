import { Reviews } from '../../types/types';
import ReviewScreen from './review-screen';

type ReviewListProps = {
  reviews: Reviews;
};

function ReviewListScreen(props: ReviewListProps): JSX.Element {
  const { reviews } = props;

  return (
    <>
      <h2 className="reviews__title">
        Reviews &middot;{' '}
        <span className="reviews__amount">{reviews.length}</span>
      </h2>
      <ul className="reviews__list">
        {reviews.map((review) => (
          <ReviewScreen review={review} key={review.reviewId} />
        ))}
      </ul>
    </>
  );
}

export default ReviewListScreen;
