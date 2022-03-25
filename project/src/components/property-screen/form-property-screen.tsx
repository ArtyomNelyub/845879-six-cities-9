import { useState, FormEvent, ChangeEvent } from 'react';
import Star from './star';
import { CommentData } from '../../types/types';
import { useParams } from 'react-router-dom';
import { store } from '../../store';
import { sendComment } from '../../store/api-actions';

const STAR_TITLES: string[] = [
  'perfect',
  'good',
  'not bad',
  'badly',
  'terribly',
];

function FormPropertyScreen(): JSX.Element {
  const [formData, setFormData] = useState<CommentData>({
    review: '',
    rating: '',
  });

  const {id} = useParams();
  const stringId = id as string;


  function FormData(evt: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = evt.target;
    setFormData({ ...formData, [name]: value });
  }

  return (
    <form
      className="reviews__form form"
      action="#"
      method="post"
      onSubmit={(evt: FormEvent<HTMLFormElement>) => {
        evt.preventDefault();
        store.dispatch(sendComment({id: stringId , ...formData}));
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
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default FormPropertyScreen;
