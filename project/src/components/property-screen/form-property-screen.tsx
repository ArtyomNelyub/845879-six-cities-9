import { useState, FormEvent, ChangeEvent } from 'react';
import Star from './star';
import { starValues, starTitles } from '../../const';

type FormData = {
  rating: string;
  review: string;
};

function FormPropertyScreen(): JSX.Element {
  const [formData, setFormData] = useState<FormData>({
    rating: '',
    review: '',
  });

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
      }}
    >
      <label className="reviews__label form__label" htmlFor="review">
        Your review
      </label>
      <div className="reviews__rating-form form__rating">
        {starValues.map((starValue, index) => (
          <Star
            key={starValue}
            value={starValue}
            title={starTitles[index]}
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
          disabled
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default FormPropertyScreen;
