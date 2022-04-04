import { Offer } from '../../types/types';
import { Link } from 'react-router-dom';
import {
  AppRoute,
  FAVORITE_STATUS_ADDED,
  FAVORITE_STATUS_NOT_ADDED
} from '../../const';
import { useState } from 'react';
import { store } from '../../store';
import { changeFavoriteStatus } from '../../store/api-actions';
import { ratingHandle } from '../../services/rating-handle';

type OfferCardProps = {
  offer: Offer;
  handleCardHover?: (id: number | undefined) => void;
  isMainScreen?: boolean;
};

function OfferCard(props: OfferCardProps): JSX.Element {
  const { offer, handleCardHover, isMainScreen = false } = props;
  const [favoriteStatus, setFavoriteStatus] = useState<boolean>(
    offer.isFavorite,
  );

  const rating = ratingHandle(offer.rating);

  return (
    <article
      className={
        isMainScreen
          ? 'cities__place-card place-card'
          : 'near-places__card place-card'
      }
      onMouseOver={() => {
        if (handleCardHover) {
          handleCardHover(offer.id);
        }
      }}
      onMouseOut={() => {
        if (handleCardHover) {
          handleCardHover(undefined);
        }
      }}
    >
      {offer.isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}

      <div
        className={
          isMainScreen
            ? 'cities__image-wrapper place-card__image-wrapper'
            : 'near-places__image-wrapper place-card__image-wrapper'
        }
      >
        <Link to={`${AppRoute.Room}/${offer.id}`}>
          <img
            className="place-card__image"
            src={offer.previewImage}
            width="260"
            height="200"
            alt="Place image"
          />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button
            onClick={() => {
              store.dispatch(
                changeFavoriteStatus({
                  id: offer.id.toString(),
                  favoriteStatus: favoriteStatus
                    ? FAVORITE_STATUS_NOT_ADDED
                    : FAVORITE_STATUS_ADDED,
                }),
              );
              setFavoriteStatus(!favoriteStatus);
            }}
            className={
              favoriteStatus
                ? 'place-card__bookmark-button place-card__bookmark-button--active button'
                : 'place-card__bookmark-button button'
            }
            type="button"
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
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
        <p className="place-card__type">{offer.type}</p>
      </div>
    </article>
  );
}

export default OfferCard;
