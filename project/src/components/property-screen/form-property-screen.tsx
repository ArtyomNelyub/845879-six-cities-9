import { useState, FormEvent, ChangeEvent, useEffect, useCallback } from 'react';
import Star from './star';
import { CommentData } from '../../types/types';
import { useParams } from 'react-router-dom';
import { store } from '../../store';
import { sendComment } from '../../store/api-actions';
import { useAppSelector } from '../../hooks';
import { clearForm } from '../../store/data-process/data-process';

const STAR_TITLES: string[] = [
  'perfect',
  'good',
  'not bad',
  'badly',
  'terribly',
];
const MIN_REVIEW_LENGTH = 50;
const MAX_REVIEW_LENGTH = 300;

function FormPropertyScreen(): JSX.Element {
  const isFormCleared = useAppSelector((state) => state.DATA.isFormCleared);
  useEffect(() => {
    if (!isFormCleared) {
      store.dispatch(clearForm(true));
    }
  });
  const isFormSend = useAppSelector((state) => state.DATA.isFormSend);
  const [formData, setFormData] = useState<CommentData>({
    review: '',
    rating: '',
  });

  const { id } = useParams();
  const isReviewLengthCorrect =
    formData.review.length >= MIN_REVIEW_LENGTH &&
    formData.review.length <= MAX_REVIEW_LENGTH;
  const isRatingChecked = formData.rating !== '';

  const FormData = useCallback((evt: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = evt.target;
    setFormData({ ...formData, [name]: value });
  },[formData]);

  return (
    <form
      className="reviews__form form"
      action="#"
      method="post"
      onSubmit={(evt: FormEvent<HTMLFormElement>) => {
        evt.preventDefault();
        if (id) {
          store.dispatch(sendComment({ id: id, ...formData }));
        }
      }}
    >
      <label className="reviews__label form__label" htmlFor="review">
        Your review
      </label>
      <div className="reviews__rating-form form__rating">
        {STAR_TITLES.map((title, index) => (
          <Star
            key={title}
            index={index.toString()}
            title={title}
            handler={FormData}
          />
        ))}
      </div>
      <textarea
        onChange={FormData}
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        disabled={isFormSend}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set{' '}
          <span className="reviews__star">rating</span> and describe your stay
          with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={!(isReviewLengthCorrect && isRatingChecked)}
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default FormPropertyScreen;
