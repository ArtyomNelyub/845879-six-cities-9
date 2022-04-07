import { Offer } from '../../types/types';
import { Link } from 'react-router-dom';
import {
  AppRoute,
  FAVORITE_STATUS_ADDED,
  FAVORITE_STATUS_NOT_ADDED
} from '../../const';
import { useState } from 'react';
import { changeFavoriteStatus } from '../../store/api-actions';
import { ratingHandle } from '../../services/rating-handle';
import { apartmentTypeHandle } from '../../services/apartment-type-handle';
import { useAppDispatch } from '../../hooks';

type CardProps = {
  offer: Offer;
  handleIsCardRemoved: (isRemoved: boolean) => void;
};
function Card(props: CardProps): JSX.Element {
  const { offer, handleIsCardRemoved } = props;
  const [favoriteStatus, setFavoriteStatus] = useState<boolean>(
    offer.isFavorite,
  );
  const rating = ratingHandle(offer.rating);
  const dispatch = useAppDispatch();
  return (
    <article className="favorites__card place-card">
      {offer.isPremium ? (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      ) : null}
      <div className="favorites__image-wrapper place-card__image-wrapper">
        <Link to={`${AppRoute.Room}/${offer.id}`}>
          <img
            className="place-card__image"
            src={offer.previewImage}
            width="150"
            height="110"
            alt="Place image"
          />
        </Link>
      </div>
      <div className="favorites__card-info place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button
            className="place-card__bookmark-button place-card__bookmark-button--active button"
            type="button"
            onClick={() => {
              setFavoriteStatus(!favoriteStatus);
              dispatch(
                changeFavoriteStatus({
                  id: offer.id.toString(),
                  favoriteStatus: favoriteStatus
                    ? FAVORITE_STATUS_NOT_ADDED
                    : FAVORITE_STATUS_ADDED,
                }),
              );
              handleIsCardRemoved(true);
            }}
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">In bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${rating}%` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`${AppRoute.Room}/${offer.id}`}>{offer.title}</Link>
        </h2>
        <p className="place-card__type">{apartmentTypeHandle(offer.type)}</p>
      </div>
    </article>
  );
}

export default Card;
