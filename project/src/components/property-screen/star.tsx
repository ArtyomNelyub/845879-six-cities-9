import { ChangeEvent } from 'react';

type PropsType = {
  value: string;
  title: string;
  cb: (evt: ChangeEvent<HTMLInputElement>) => void;
};

function Star(props: PropsType): JSX.Element {
  return (
    <>
      <input
        onChange={props.cb}
        className="form__rating-input visually-hidden"
        name="rating"
        value={props.value[0]}
        id={props.value}
        type="radio"
      />
      <label
        htmlFor={props.value}
        className="reviews__rating-label form__rating-label"
        title={props.title}
      >
        <svg className="form__star-image" width="37" height="33">
          <use xlinkHref="#icon-star"></use>
        </svg>
      </label>
    </>
  );
}

export default Star;
