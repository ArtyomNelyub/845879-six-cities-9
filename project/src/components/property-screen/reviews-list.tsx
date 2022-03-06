import Review from './review';
import { Reviews } from '../../types/offers-type';

type ReviewListType = {
  reviews: Reviews;
};

function ReviewsList(props: ReviewListType): JSX.Element {
  const { reviews } = props;

  return (
    <>
      <h2 className="reviews__title">
        Reviews &middot;{' '}
        <span className="reviews__amount">{reviews.length}</span>
      </h2>
      <ul className="reviews__list">
        {reviews.map((review) => (
          <Review review={review} key={review.reviewId} />
        ))}
      </ul>
    </>
  );
}

export default ReviewsList;
