import { Offer } from '../../types/types';
import { Link/*, Navigate*/ } from 'react-router-dom';
import { AppRoute, /*AuthorizationStatus,*/ MAX_STAR_VALUE } from '../../const';
import { useState } from 'react';
import { store } from '../../store';
import { changeFavoriteStatus } from '../../store/api-actions';
//import { useAppSelector } from '../../hooks';

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
  //const userState = useAppSelector((state)=>state.USER);

  const rating = (
    Math.round(((offer.rating * 100) / MAX_STAR_VALUE) * 100) / 100
  ).toString();

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
                  favoriteStatus: favoriteStatus ? 0 : 1,
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
