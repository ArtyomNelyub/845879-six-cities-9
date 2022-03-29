import { ChangeEvent } from 'react';
import { useAppSelector } from '../../hooks';

type StarProps = {
  title: string;
  index: string;
  handler: (evt: ChangeEvent<HTMLInputElement>) => void;
};

function Star(props: StarProps): JSX.Element {
  const isFormSend = useAppSelector((state)=>state.isFormSend);
  const {title, index, handler} = props;
  const value: string=(5 - Number(index)).toString();
  return (
    <>
      <input
        onChange={handler}
        className="form__rating-input visually-hidden"
        name="rating"
        value={value}
        id={`${value}-star`}
        type="radio"
        disabled = {isFormSend}
      />
      <label
        htmlFor={`${value}-star`}
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
