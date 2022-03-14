import { ChangeEvent } from 'react';

type StarProps = {
  value: string;
  title: string;
  handler: (evt: ChangeEvent<HTMLInputElement>) => void;
};

function Star(props: StarProps): JSX.Element {
  const {value, title, handler} = props;

  return (
    <>
      <input
        onChange={handler}
        className="form__rating-input visually-hidden"
        name="rating"
        value={value[0]}
        id={value}
        type="radio"
      />
      <label
        htmlFor={value}
        className="reviews__rating-label form__rating-label"
        title={title}
      >
        <svg className="form__star-image" width="37" height="33">
          <use xlinkHref="#icon-star"></use>
        </svg>
      </label>
    </>
  );
}

export default Star;
