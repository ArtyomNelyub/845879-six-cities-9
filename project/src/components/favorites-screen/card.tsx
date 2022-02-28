import { OffersType } from '../../types/offers-type';
import {Link} from 'react-router-dom';
import { AppRoute } from '../../const';

type ItemProps = {
  card : OffersType;
}
function Card(propsItem : ItemProps): JSX.Element {
  const {card} = propsItem;
  return (
    <article className="favorites__card place-card">
      <div className="favorites__image-wrapper place-card__image-wrapper">
        <Link to={AppRoute.Room}>
          <img
            className="place-card__image"
            src="img/room-small.jpg"
            width="150"
            height="110"
            alt="Place image"
          />
        </Link>
      </div>
      <div className="favorites__card-info place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{card.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button
            className="place-card__bookmark-button place-card__bookmark-button--active button"
            type="button"
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">In bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: '80%' }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={AppRoute.Room}>{card.description}</Link>
        </h2>
        <p className="place-card__type">{card.type}</p>
      </div>
    </article>
  );
}

export default Card;
