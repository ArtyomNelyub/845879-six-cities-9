import FormPropertyScreen from './form-property-screen';
import SVGContainer from '../svg-container/svg-container';
import Header from '../header/header';
import ReviewListScreen from './review-list';
import Map from '../map/map';
import OfferCardList from '../offer-card/offer-card-list';
import { useAppSelector } from '../../hooks/';
import PreviewImages from './preview-images';
import LoadingScreen from '../loading-screen/loading-screen';
import { store } from '../../store';
import {
  fetchLoadComments,
  fetchSelectedOfferAction,
  fetchLoadNearbyOffers
} from '../../store/api-actions';
import { loadNearbyOffers, loadSelectedOffer } from '../../store/action';
import NotFound from '../not-found/not-found';
import { MAX_STAR_VALUE, AuthorizationStatus } from '../../const';
import { useParams } from 'react-router-dom';
import { Offer } from '../../types/types';
import { useEffect } from 'react';

store.dispatch(loadNearbyOffers([]));
store.dispatch(loadSelectedOffer(null));

function PropertyScreen(): JSX.Element {
  const {
    currentCity,
    offers,
    isDataLoaded,
    selectedOffer,
    authorizationStatus,
    offerComments,
    nearbyOffers,
  } = useAppSelector((state) => state);

  const { id } = useParams();
  const stringId = id as string;

  useEffect(() => {
    if (!isDataLoaded) {
      store.dispatch(fetchSelectedOfferAction(stringId));
    }
    store.dispatch(fetchLoadComments(stringId));
    store.dispatch(fetchLoadNearbyOffers(stringId));
  }, [stringId]);

  if (isDataLoaded) {
    const checkCurrentOffer: Offer | undefined = offers.find(
      (offer) => offer.id.toString() === stringId,
    );
    if (checkCurrentOffer !== undefined) {
      store.dispatch(loadSelectedOffer(checkCurrentOffer));
    }
  }

  if (!offers.map((offer) => offer.id.toString()).includes(stringId)) {
    return <NotFound />;
  }

  if (selectedOffer === null) {
    return <LoadingScreen />;
  }

  const rating = (
    Math.round(((selectedOffer.rating * 100) / MAX_STAR_VALUE) * 100) / 100
  ).toString();

  return (
    <>
      <SVGContainer />
      <div className="page">
        <Header />
        <main className="page__main page__main--property">
          <section className="property">
            <div className="property__gallery-container container">
              <PreviewImages offer={selectedOffer} />
            </div>
            <div className="property__container container">
              <div className="property__wrapper">
                {selectedOffer.isPremium ? (
                  <div className="property__mark">
                    <span>Premium</span>
                  </div>
                ) : null}

                <div className="property__name-wrapper">
                  <h1 className="property__name">{selectedOffer.title}</h1>
                  <button
                    className="property__bookmark-button button"
                    type="button"
                  >
                    <svg
                      className="property__bookmark-icon"
                      width="31"
                      height="33"
                    >
                      <use xlinkHref="#icon-bookmark"></use>
                    </svg>
                    <span className="visually-hidden">To bookmarks</span>
                  </button>
                </div>
                <div className="property__rating rating">
                  <div className="property__stars rating__stars">
                    <span style={{ width: `${rating}%` }}></span>
                    <span className="visually-hidden">Rating</span>
                  </div>
                  <span className="property__rating-value rating__value">
                    {selectedOffer.rating}
                  </span>
                </div>
                <ul className="property__features">
                  <li className="property__feature property__feature--entire">
                    {selectedOffer.type}
                  </li>
                  <li className="property__feature property__feature--bedrooms">
                    {selectedOffer.bedrooms} Bedrooms
                  </li>
                  <li className="property__feature property__feature--adults">
                    Max {selectedOffer.maxAdults} adults
                  </li>
                </ul>
                <div className="property__price">
                  <b className="property__price-value">
                    &euro;{selectedOffer.price}
                  </b>
                  <span className="property__price-text">&nbsp;night</span>
                </div>
                <div className="property__inside">
                  <h2 className="property__inside-title">What&apos;s inside</h2>
                  <ul className="property__inside-list">
                    {selectedOffer.goods.map((item) => (
                      <li className="property__inside-item" key={item}>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="property__host">
                  <h2 className="property__host-title">Meet the host</h2>
                  <div className="property__host-user user">
                    <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                      <img
                        className="property__avatar user__avatar"
                        src={selectedOffer.host.avatarUrl}
                        width="74"
                        height="74"
                        alt="Host avatar"
                      />
                    </div>
                    <span className="property__user-name">
                      {selectedOffer.host.name}
                    </span>
                    {selectedOffer.host.isPro ? (
                      <span className="property__user-status">Pro</span>
                    ) : null}
                  </div>
                  <div className="property__description">
                    <p className="property__text">
                      {selectedOffer.description}
                    </p>
                  </div>
                </div>
                <section className="property__reviews reviews">
                  <ReviewListScreen reviews={offerComments} />
                  {authorizationStatus === AuthorizationStatus.Auth ? (
                    <FormPropertyScreen />
                  ) : null}
                </section>
              </div>
            </div>
            <Map
              currentCity={currentCity}
              activeCard={selectedOffer.id}
              offers={[...nearbyOffers, selectedOffer]}
            />
          </section>
          <div className="container">
            <section className="near-places places">
              <h2 className="near-places__title">
                Other places in the neighbourhood
              </h2>
              <div className="near-places__list places__list">
                <OfferCardList offers={nearbyOffers} />
              </div>
            </section>
          </div>
        </main>
      </div>
    </>
  );
}

export default PropertyScreen;
