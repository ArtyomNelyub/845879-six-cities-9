import { OffersType } from '../../types/offers-type';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';


type PropsOfferCard = {
  offer: OffersType;
  handleCardHover: (id: number | undefined) => void;
};

function MainScreenOfferCard(Props: PropsOfferCard): JSX.Element {
  const { offer, handleCardHover } = Props;

  return (
    <article
      className="cities__place-card place-card"
      onMouseOver={() => {
        handleCardHover(offer.id);
      }}
      onMouseOut={() => {
        handleCardHover(undefined);
      }}
    >
      <div className="place-card__mark">
        <span>Premium</span>
      </div>
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={AppRoute.Room}>
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
            <b className="place-card__price-value">
              &euro;{offer.price}
            </b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: '80%' }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={AppRoute.Room}>{offer.description}</Link>
        </h2>
        <p className="place-card__type">{offer.type}</p>
      </div>
    </article>
  );
}

export default MainScreenOfferCard;